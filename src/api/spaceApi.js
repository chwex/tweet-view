import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://api.spacexdata.com/v4/";

export function getLaunches() {
  return fetch(baseUrl + "launches")
    .then(handleResponse)
    .catch(handleError);
}

export function getLaunchBySlug(slug) {
  return fetch(baseUrl + "launches/" + slug)
    .then(
      (response) => {
        if (!response.ok) 
          throw new Error("Network response was not ok.");
        return response.json()
      .then(
        (launch) => {
          if (Object.keys(launch).length === 0)
            throw new Error("Launch not found: " + slug);
          return launch;
      })
      .then(
        (launch) => {
          const rocket_id = launch.rocket;
          return fetch(baseUrl + "rockets/" + rocket_id)
        .then((response) => {
          if (!response.ok) 
            throw new Error("Network response was not ok.");
          return response.json()
        .then((rocket) => {
          if (Object.keys(rocket).length === 0)
            throw new Error("Rocket not found: " + rocket_id);
          
          launch["rocket_name"] = rocket.name;

          return launch;
        })
      })
    })
    .catch(handleError);
  })
}

export function getRocketBySlug(slug) {
  return fetch(baseUrl + "rockets/" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((rocket) => {
        if (Object.keys(rocket).length === 0)
          throw new Error("Rocket not found: " + slug);
        return rocket;
      });
    })
    .catch(handleError);
}

export function getRocketByID(id) {
  return fetch(baseUrl + "rockets/" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((rocket) => {
        if (Object.keys(rocket).length === 0)
          throw new Error("Rocket not found: " + id);
        return rocket;
      });
    })
    .catch(handleError);
}
