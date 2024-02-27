export function converTemperature(temperatureInKelvin: number) {
  return (temperatureInKelvin - 273.15).toFixed(0);
}
