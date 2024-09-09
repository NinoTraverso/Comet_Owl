import React, { useState, useEffect, useRef } from "react";

const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

interface Table {
  koi_disposition: string; //Confirmed, Candidate, False Positive
  kepid: number; //kepler ID
  kepler_name: string; //kepler name
  ra_str: string; //Right Ascension (deg)
  dec_str: string; //Declination (deg)
  koi_kepmag: number; //Kepler-band (mag)
  koi_period: number; //Orbital period (days)
  koi_duration: number; //transit duration (hours)
  koi_prad: number; // plantary radius (Earth Radii)
  koi_teq: number; //Approximation for the temperature of the planet. The calculation of equilibrium temperature assumes a) thermodynamic equilibrium between the incident stellar flux and the radiated heat from the planet, b) a Bond albedo (the fraction of total power incident upon the planet scattered back into space) of 0.3, c) the planet and star are blackbodies, and d) the heat is evenly distributed between the day and night sides of the planet.
  koi_tce_plnt_num: number; //number of planets
  koi_steff: number; //star temperature (K)
  koi_srad: number; //Star radius (Solar Radii)
}

function GettingExoTables() {
  const [error, setError] = useState<string | null>(null);
  const [allTables, setAllTables] = useState<Table[]>([]);
  const [displayedTables, setDisplayedTables] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchTables = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL, {
          signal: abortControllerRef.current?.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        console.log("API Response:", data);

        // Set all data and calculate total pages
        setAllTables(data || []);
        setTotalPages(Math.ceil((data.length || 0) / 20));
        setDisplayedTables(data.slice(0, 20)); // Display the first 20 entries
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTables();
  }, []);

  useEffect(() => {
    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;
    setDisplayedTables(allTables.slice(startIndex, endIndex));
  }, [page, allTables]);

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-center border-bottom">Exoplanets</h1>

      {isLoading && (
        <div className="loadingHeight text-center d-flex align-items-center justify-content-center">
          <h1>
            Loading<span className="introTextDotOne">.</span>
            <span className="introTextDotTwo">.</span>
            <span className="introTextDotThree">.</span>
          </h1>
        </div>
      )}

      {!isLoading && (
        <div>
          <ul className="mx-5 ">
            {displayedTables.length > 0 ? (
              displayedTables.map((entry) => (
                <li key={entry.kepid} className="border-bottom">
                  <span className="dataName">Status: </span>
                  {entry.koi_disposition}&#59;
                  <span className="dataName">ID: </span>
                  {entry.kepid}&#59;
                  <span className="dataName">Kep Name: </span>
                  {entry.kepler_name}&#59;
                  <span className="dataName">RA: </span>
                  {entry.ra_str}&#59;
                  <span className="dataName">Dec: </span>
                  {entry.dec_str}&#59;
                  <span className="dataName">Magnitude: </span>
                  {entry.koi_kepmag}&#59;
                  <span className="dataName">Orbital Period: </span>
                  {entry.koi_period} <span> (days) </span>&#59;
                  <span className="dataName">Transition duration:</span>
                  {entry.koi_duration} <span> (hours)</span>&#59;
                  <span className="dataName">Planetary Radius: </span>
                  {entry.koi_prad} <span> (Earth Radii) </span>&#59;
                  <span className="dataName"> ~T of Planet: </span>
                  {entry.koi_teq} <span> (K) </span>&#59;
                  <span className="dataName">Planets number: </span>
                  {entry.koi_tce_plnt_num}&#59;
                  <span className="dataName">Star Temperature: </span>
                  {entry.koi_steff} <span> (K) </span>&#59;
                  <span className="dataName">Star Radius: </span>
                  {entry.koi_srad} <span> (Solar Radii) </span>
                </li>
              ))
            ) : (
              <li>No exoplanets found.</li>
            )}
          </ul>

          <div className="pagination-controls text-center">
            <button
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>
              {" "}
              {page}/{totalPages}{" "}
            </span>
            <button
              onClick={() =>
                setPage((prevPage) => Math.min(prevPage + 1, totalPages))
              }
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GettingExoTables;
