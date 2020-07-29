import React, { useState, useEffect } from "react";
import { getLaunches } from "../../api/spaceApi.js";
import LaunchesList from "./LaunchesList";

function LaunchesPage() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getLaunches().then((_launches) => setLaunches(_launches)); 
  },[]);

  return (
    <>
      <h2>Launches</h2>
      <LaunchesList launches={launches} />
    </>
  );
}

export default LaunchesPage;