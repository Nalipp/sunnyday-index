import { ILocation } from './interfaces';

const locations: ILocation[] = [
  {
    "_id" : "61c9eb2e2fe252edf8d09c84",
    "cityName" : "Cancun",
    "allIcons" : [
      "clear-day",
      "partly-cloudy-day",
      "partly-cloudy-day",
      "rain",
      "rain",
      "rain",
      "rain",
      "rain"
    ],
    "apparentTemperature" : 80,
    "averageMaxTemp" : 86,
    "averageMinTemp" : 74,
    "cloudCover" : 0.31,
    "humidity" : 0.79,
    "icon" : "clear-day",
    "iconPoints" : 3,
    "lat" : 21.170891,
    "lng" : -86.840317,
    "summary" : "Clear",
    "sunlightHours" : 10.91,
    "temperature" : 78.08,
    "windSpeed" : 10.52,
    "flights" : {
      "sfo" : {
        "cost" : "NA",
        "timeString" : "NA",
        "layoverCount" : "NA"
      },
      "SFO" : {
        "cost" : "373.94",
        "timeString" : "5 Hours 10 Minutes",
        "layoverCount" : 1
      }
    },
    "airportCode" : "CUN",
    "country" : "Mexico",
    "population" : 998000
  }
];

export default locations;

