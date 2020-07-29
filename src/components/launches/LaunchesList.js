import React from "react";
import { Link } from "react-router-dom";

function printPatch(launch) {
  if(launch.links.patch.small){
  return (
    <img
      className="img-fluid"
      src={launch.links.patch.small}
      alt="N/A"
    />
  )}
  else {
     return (
      <p>No patch available</p>
     );
  }

}

function LaunchesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Patch</th>
          <th>Flight Number</th>
          <th>Launch Date</th>
        </tr>
      </thead>
      <tbody>
        {props.launches.map((launch) => {
          return (
            <tr key={launch.id}>
              <td>
                <Link to={"/launch/" + launch.id}>{launch.name}</Link>
              </td>
              <td>
                { printPatch(launch) }
              </td>
              <td>{launch.flight_number}</td>
              <td>{launch.date_local}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default LaunchesList;
