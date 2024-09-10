import React, { useState, useEffect } from "react";
import { fetchExoplanetsData } from "../exoplanets";

function Exoplanets() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const loadExoplanetsData = async () => {
      try {
        const fetchedData = await fetchExoplanetsData();
        const uniqueData = Array.from(
          new Map(fetchedData.map((item) => [item.kepid, item])).values()
        );
        setData(uniqueData);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };

    loadExoplanetsData();
  }, []);
  const filteredData = searchId
    ? data.filter(
        (entry) => String(entry.kepid).trim() === String(searchId).trim()
      )
    : data;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="loadingHeight text-center d-flex align-items-center justify-content-center">
        <h2>
          More than 9000+ exoplanet data are being loaded
          <span className="introTextDotOne">.</span>
          <span className="introTextDotTwo">.</span>
          <span className="introTextDotThree">.</span>
        </h2>
      </div>
    );
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
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

      <div className="text-center mb-4 ">
        <input
          type="text"
          placeholder="Kepler ID search"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="idSearchInput mx-2"
        />
        <button
          className="idSsearchButton"
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          Search
        </button>
      </div>

      <ul className="mx-5">
        {currentItems.length > 0 ? (
          currentItems.map((entry) => (
            <li key={entry.kepid} className="border-bottom my-3">
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

      {searchId === "" && (
        <div className="pagination-controls text-center">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="PrevPageButton mx-2"
          >
            Previous
          </button>
          <span className="fs-4 mx-1">
            {" "}
            {currentPage}/{totalPages}{" "}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="NextPageButton mx-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Exoplanets;
