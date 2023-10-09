export enum DeviceSize {
  ExtraPequeno = 'extra pequeño',
  Pequeno = 'pequeño',
  Mediano = 'mediano',
  Grande = 'grande',
  ExtraGrande = 'extra grande',
}

export const getDeviceSize = (height: number): DeviceSize => {
  if (height < 500) {
    return DeviceSize.ExtraPequeno;
  } else if (height >= 500 && height < 650) {
    return DeviceSize.Pequeno;
  } else if (height >= 650 && height < 768) {
    return DeviceSize.Mediano;
  } else if (height >= 768 && height < 900) {
    return DeviceSize.Grande;
  } else {
    return DeviceSize.ExtraGrande;
  }
};
