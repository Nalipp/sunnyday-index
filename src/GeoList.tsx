import Location from './Location';
import locations from './defaultData';

function GeoList() {
  return (
    <div className="GeoList">
      <ul>
        {locations.map((location) => (
          <Location key={location._id} location={location} />
        ))}
      </ul>
    </div>
  );
}

export default GeoList;
