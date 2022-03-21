interface ILocation {
  _id: string;
  cityName: string;
  allIcons: string[];
  apparentTemperature: number;
  averageMaxTemp: number;
  averageMinTemp: number;
  cloudCover: number;
  humidity: number;
  icon: string;
  iconPoints: number;
  lat: number;
  lng: number;
	summary: string,
  sunlightHours: number,
  temperature: number,
  windSpeed: number,
  flights: IFlights,
  airportCode: string,
  country: string,
  population: number
}

interface IFlights {
  [key: string]: {
    cost: string,
    timeString: string,
    layoverCount: string | number,
  }
}

export type {
  ILocation,
}
