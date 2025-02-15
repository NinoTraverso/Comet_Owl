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
      <div id="exoplanetsPage" className="d-flex flex-row">
        <div id="exoplanetsContent">
          <div id="exoplanetsSection">
            <div
              id="exoplanetsSectionTitle"
              className="d-flex flex-column justify-content-end align-items-center"
            >
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>What are exoplanets?</h1>
              <div className="homeImages align-self-center rounded mx-5">
                <img
                  src="/assets/exoplanets/exoplanets.jpg"
                  alt="Graphic art of Mars by Javier Miranda (Unsplash)"
                  className="rounded"
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <div id="sectionTwoImageContainer"></div>
              <div className="col-10 col-md-6 flex-wrap text-center">
                <h3 className="my-5">
                  Exoplanets are simply planets which orbit a star that is not
                  the Sun. The first confirmed exoplanets were Poltergeist and
                  Phobetor in 1992, orbiting pulsar PSR B1257+12. Since 1992,
                  more than 5000 exoplanets have been discovered, including
                  Earth-Like planets such as Kepler-425b and Kepler-22b.
                </h3>

                <h3 className="my-5">
                  Exoplanets can be subdived into four main categories: Ice
                  Giants &#40;or Neptunians&#41;, Gas Giants, super-Earths and
                  terrestrial.
                </h3>
                <div className="my-5">
                  <h3 className="exoplanetsPageSecondaryTitles">
                    super-Earths
                  </h3>

                  <h5>
                    Planets which exceed the size of our terrestrial planets but
                    remain less massive than Neptunians. These can be composed
                    of rock and metals, or they can also be defined as
                    Mini-Neptunes, mainly composed of Hydrogen and Helium.
                  </h5>
                </div>
                <div className="my-5">
                  <h3 className="exoplanetsPageSecondaryTitles">Terrestrial</h3>

                  <h5>
                    Planets with similar sizes to our terrestrial planets,
                    mainly composed of rocks and metals.
                  </h5>
                </div>
                <div className="my-5">
                  <h3 className="exoplanetsPageSecondaryTitles">Gas Giants</h3>

                  <h5>
                    Planets similar to Jupiter and Saturn, gasseous planet
                    mainly composed of Hydrogen & Helium which can orbit very
                    close to their parent star.
                  </h5>
                </div>
                <div className="my-5">
                  <h3 className="exoplanetsPageSecondaryTitles">Neptunians</h3>

                  <h5>
                    Planets similar to Neptune and Uranus, gasseous planets
                    mainly composed of Hydrogen & Helium atmospheres and
                    rocky/heavy metal cores.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div id="exoplanetDetectionSection">
            <div className="d-flex flex-column justify-content-end align-items-center">
              <br />
              <br />
              <br />
              <br />
              <h1 className="mb-5">How do we find exoplanets?</h1>
              <div className="homeImages align-self-center rounded mx-5">
                <img
                  src="/assets/exoplanets/transitExoplanet.jpg"
                  alt="Graphic art of transiting exoplanet"
                  className="rounded"
                />
              </div>
              <div
                id="findingExoplanetsExplanation"
                className="d-flex flex-column justify-content-around align-items-center"
              >
                <div className="col-10 col-md-6 flex-wrap text-center">
                  <h3 className="my-5">
                    There are five main ways to detect exoplanets:
                  </h3>
                  <div>
                    <div className="my-5">
                      <h3 className="exoplanetsPageSecondaryTitles">Tansit</h3>

                      <h5>
                        This technique allows us, the observer, to detect an
                        exoplanet when it passes in front of its parent star,
                        allowing us to measure a dip in the star's luminosity.
                      </h5>
                    </div>
                    <div className="my-5">
                      <h3 className="exoplanetsPageSecondaryTitles">
                        Radial Velocity
                      </h3>

                      <h5>
                        When observing a star its wavelength can be measured,
                        and if a planet is orbiting that star, then we can
                        observe a change in the star's luminosity, caused by the
                        "back-and-forth" gravitational pull of the planet on its
                        star, slightly changing the star's luminosity
                        &#40;wavelenght&#41;.
                      </h5>
                    </div>
                    <div className="my-5">
                      <h3 className="exoplanetsPageSecondaryTitles">
                        Gravitational Microlensing
                      </h3>

                      <h5>
                        This is when the light from a star is slight bent as the
                        exoplanet passes between us, the observer, and its
                        parent star.
                      </h5>
                    </div>
                    <div className="my-5">
                      <h3 className="exoplanetsPageSecondaryTitles">
                        Direct Imaging
                      </h3>

                      <h5>
                        Planets which can be detected by observing a star and
                        "covering" that star in order to view whether there are
                        orbiting exoplanets, detected by the reflected light.
                      </h5>
                    </div>
                    <div className="my-5">
                      <h3 className="exoplanetsPageSecondaryTitles">
                        Astrometry
                      </h3>

                      <h5>
                        A method which observes a star's "wobble" in the sky
                        compared to nearby stars.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="exoplanetLifeSection">
            <div
              id="exoplanetsSectionTitle"
              className="d-flex flex-column justify-content-end align-items-center"
            >
              <br />
              <br />
              <br />
              <br />
              <h1 className="mb-5">Is there extraterrestrial life?</h1>
              <div className="homeImages align-self-center rounded mx-5">
                <img
                  src="/assets/exoplanets/exoplanet.jpg"
                  alt="Graphic art of exoplanets"
                  className="rounded"
                />
              </div>
              <div className="d-flex flex-column justify-content-around align-items-center">
                <div className="col-10 col-md-6 flex-wrap text-center">
                  <h3 className="my-5">
                    To this day there is no evidence of the existance of
                    extraterrestrial life, not in our Solar System nor on
                    exoplanets. If there were aliens somewhere out in space,
                    would they be as smart and technologically advanced as us?
                  </h3>
                  <h3 className="my-5">
                    We cannot assume that extraterrestrial life, if any out
                    there, is the same as that on our planet but we should
                    rather assume they are completely different from us.
                  </h3>
                  <h3 className="my-5">
                    Light travels at ~300,000 km/s, so even if we detected
                    intelligent life would we be able to communicate with them?
                    If we were to find evidence of extraterrestrial life on a
                    planet 600 light-years, sending a message would take that
                    much time to reach, assuming they are able to detect it.
                  </h3>
                  <h3 className="my-5">
                    Additonaly, water is thought to be the universal solvent for
                    many reasons, and it's considered the best solvent for
                    organic chemical reactions. For this reason, we are looking
                    among exoplanets in the habitable zone where water could
                    exist in its liquid form. However, liquid water and whether
                    an exoplanet is within the habitable zone are not the only
                    factors in determining the potential for life. Other
                    factors, such as a planet's albedo, atmospheric composition,
                    cloud presence, tidal heating, primordial heating,
                    greenhouse gases, and internal radioactive decay, also play
                    a significant role in determining a planet's habitabilit and
                    whether water could exist in its liquid form.
                  </h3>
                  <h3 className="my-5">
                    It seems unlikely that we will be able to have direct
                    communication with hypothetical alien beings, but we can
                    always send out messages for any distant listener, just as
                    we are tuned for any incoming "space call" that might have
                    been sent.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div id="exoplanetsEndImageContainer"></div>
        </div>
      </div>
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
          <li>Loading error...try again later.</li>
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
