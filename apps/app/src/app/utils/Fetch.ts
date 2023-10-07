export type HttpMethodType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';
export type InterceptRequestType<D> = (headers: Headers, data?: D) => void;
export type InterceptResponseType<T, R extends Object> = (response: T) => R;
export class HttpMethod<T, D extends Object = undefined> {
  private _response: Response;
  private _headers: Headers;

  constructor(
    private _url: string,
    private _methodType: HttpMethodType,
    private _data?: D
  ) {
    this._headers = this.getDefaultHeaders();
  }
  private async sendRequest(): Promise<T> {
    const requestOptions: RequestInit = {
      method: this._methodType,
      headers: this._headers,
    };

    if (this._data) {
      requestOptions.body = JSON.stringify(this._data);
    }

    const response = await fetch(this._url, requestOptions);
    this._response = response;

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('Solicitud incorrecta');
        case 401:
          throw new Error('No autorizado');
        case 403:
          throw new Error('Prohibido');
        case 404:
          throw new Error('No encontrado');
        case 500:
          throw new Error('Error interno del servidor');
        case 502:
          throw new Error('Bad Gateway');
        case 503:
          throw new Error('Servicio no disponible');
        case 504:
          throw new Error('Gateway Timeout');
        default:
          throw new Error(`Request failed with status ${response.status}`);
      }
    }

    return (await this._response.json()) as T;
  }

  async exec(): Promise<T> {
    try {
      const result = await this.sendRequest();

      return result;
    } catch (error) {
      throw error;
    }
  }

  set data(data: D) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
  get headers() {
    return this._headers;
  }

  get methodType() {
    return this._methodType;
  }

  get url() {
    return this._url;
  }

  private getDefaultHeaders(headers: Record<string, string> = {}): Headers {
    const defaultHeaders = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    });

    return defaultHeaders;
  }
}

export class PostMethod<T, D> extends HttpMethod<T, D> {
  constructor(url: string, data: D) {
    super(url, 'POST', data);
  }
}

export class GetMethod<T> extends HttpMethod<T> {
  constructor(url: string) {
    super(url, 'GET');
  }
}

export class DeleteMethod<T> extends HttpMethod<T> {
  constructor(url: string) {
    super(url, 'DELETE');
  }
}
export class PutMethod<T, D> extends HttpMethod<T, D> {
  constructor(url: string, data: D) {
    super(url, 'PUT', data);
  }
}
export class PatchMethod<T, D> extends HttpMethod<T, D> {
  constructor(url: string, data: D) {
    super(url, 'PATCH', data);
  }
}
export class HeadMethod<T> extends HttpMethod<T> {
  constructor(url: string) {
    super(url, 'HEAD');
  }
}
export class OptionsMethod<T> extends HttpMethod<T> {
  constructor(url: string) {
    super(url, 'OPTIONS');
  }
}

export type GetMethodType =
  | typeof GetMethod
  | typeof DeleteMethod
  | typeof OptionsMethod
  | typeof HeadMethod;
export type SetMethodType =
  | typeof PostMethod
  | typeof PutMethod
  | typeof PatchMethod;
export class Fetch {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private generateMethod<T, D extends Object = undefined>(
    url: string,
    type: HttpMethodType,
    headers?: Record<string, string>,
    data?: D
  ) {
    let method: HttpMethod<T, D>;

    const switchGetMethods: Record<string, GetMethodType> = {
      DELETE: DeleteMethod,
      GET: GetMethod,
      HEAD: HeadMethod,
      OPTIONS: OptionsMethod,
    };

    const switchSetMethods: Record<string, SetMethodType> = {
      PATCH: PatchMethod,
      POST: PostMethod,
      PUT: PutMethod,
    };

    switch (type) {
      case 'GET':
      case 'DELETE':
      case 'HEAD':
      case 'OPTIONS':
        method = new switchGetMethods[type]<T>(`${this.baseUrl}${url}`);
        break;
      case 'POST':
      case 'PUT':
      case 'PATCH':
        method = new switchSetMethods[type]<T, D>(
          `${this.baseUrl}${url}`,
          data
        );
        break;
      default:
        throw new Error(
          'El método selecionado no es correcto o no esta en la lista de métodos disponibles {HttpMethodType}'
        );
    }

    if (headers) {
      Object.entries(headers).forEach(([key, value]) => {
        method.headers.set(key, value);
      });
    }

    return method;
  }

  get<T>(url: string, headers?: Record<string, string>): GetMethod<T> {
    return this.generateMethod<T>(url, 'GET', headers);
  }

  post<T, D extends Object = undefined>(
    url: string,
    data: D,
    headers?: Record<string, string>
  ): PostMethod<T, D> {
    return this.generateMethod<T, D>(url, 'POST', headers, data);
  }

  update<T, D extends Object = undefined>(
    url: string,
    data: D,
    headers: Record<string, string> = {}
  ): PutMethod<T, D> {
    return this.generateMethod<T, D>(url, 'PUT', headers, data);
  }

  delete<T>(
    url: string,
    headers: Record<string, string> = {}
  ): DeleteMethod<T> {
    return this.generateMethod<T>(url, 'DELETE', headers);
  }

  patch<T, D extends Object = undefined>(
    url: string,
    data: D,
    headers?: Record<string, string>
  ): PatchMethod<T, D> {
    return this.generateMethod<T, D>(url, 'PATCH', headers, data);
  }

  head<T>(url: string, headers?: Record<string, string>): HeadMethod<T> {
    return this.generateMethod<T>(url, 'HEAD', headers);
  }

  options<T>(url: string, headers?: Record<string, string>): OptionsMethod<T> {
    return this.generateMethod<T>(url, 'OPTIONS', headers);
  }

  static interceptRequest<T, D extends Object = undefined>(
    request: HttpMethod<T, D>,
    interceptor: InterceptRequestType<D>
  ): HttpMethod<T, D> {
    interceptor(request.headers, request.data);
    return request;
  }

  static interceptResponse<
    T,
    R extends Object = undefined,
    D extends Object = undefined
  >(
    request: HttpMethod<T, D>,
    interceptor: InterceptResponseType<T, R>
  ): HttpMethod<R, D> {
    const newRequest = new HttpMethod<R, D>(request.url, request.methodType);

    newRequest.data = request.data;
    newRequest.headers.forEach((value, name) => {
      newRequest.headers.set(name, value);
    });

    newRequest.exec = async (): Promise<R> => {
      const response = await request.exec();
      return interceptor(response);
    };

    return newRequest;
  }
}
