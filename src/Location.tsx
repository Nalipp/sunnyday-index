import { ILocation } from './interfaces';

interface LocationProps {
  location: ILocation
}


function Location({ location }: LocationProps) {
  return (
    <li>
      <p>{location.cityName}</p>
      <p>{location.lng}</p>
    </li>
  );
}

export default Location;
