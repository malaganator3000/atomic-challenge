# AtomicChallenge

Prueba técnica para AtomicLabs

## Entorno

Asegúrate de tener las siguientes herramientas y versiones instaladas para poder ejecutar este proyecto correctamente:

- Java SDK: 17
- Node: 18
- Android SDK
- Yarn Package Manager o NPM

## Instalación

1. Clonar este repositorio.
2. Navegar hasta el directorio del proyecto.
3. Ejecutar el siguiente comando para instalar todas las dependencias:
    ```bash
    yarn install ó npm install
    ```

## Comandos de Ejecución

- **Ejecutar en Android:** 
    ```bash
    npm run android
    ```
  
- **Crear APK en modo Release:** 
    ```bash
    npm run build:android
    ```

  La APK compilada se encontrará en `apps/app/android/app/build/outputs/apk/release`.

- **Ejecutar tests:** 
    ```bash
    npm run test
    ```

## Limitaciones

- No se ha podido probar en dispositivos iOS por falta de hardware/software.

## Creación de Keystore

Para poder compilar la aplicación, es necesario crear un keystore con el nombre `prod.keystore` y ubicarlo en `apps/app/android/app`. También se deben modificar los valores del keystore en `apps/app/android/gradle.properties`.


Hecho con ❤ por Luis Roberto Malaga Matias.