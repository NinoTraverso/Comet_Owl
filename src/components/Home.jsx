import React from "react";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function Home() {
  return (
    <div>
      <div className="nav-separator"></div>
      <Analytics />
      <SpeedInsights />
      <div
        id="solarSystem"
        className="d-flex flex-row justify-content-between align-items-center mx-4"
      >
        <div id="sun"></div>
        <div id="mercury" className="planet"></div>
        <div id="venus" className="planet"></div>
        <div id="earth" className="planet"></div>
        <div id="mars" className="planet"></div>
        <div id="jupiter" className="planet"></div>
        <div id="saturn" className="planet"></div>
        <div id="uranus" className="planet"></div>
        <div id="neptune" className="planet"></div>
      </div>
      <div className="welcomeText d-flex justify-content-center align-items-center">
        <h1>Welcome to CometOwl</h1>
      </div>
      {/* ------------------------------------------------SECOND SECTION -------------------------------------------- */}
      <div className="d-flex flex-column  flex-xl-row justify-content-around align-items center">
        <div className="homeImages align-self-center rounded mx-5">
          <img
            src="./assets/space-images/northAmericanPelicanNebula.jpg"
            alt="North American and Pelican Nebula"
            className="rounded"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <img src="./assets/icons/satellite.svg" alt="" />
          </div>
          <h1 className="w-75 text-center">
            At CometOwl we strive to give you the best Astronomy experience...
          </h1>
          <div className="loaderOne my-5"></div>
        </div>
      </div>
      <div className="separator"></div>
      {/*---------------------------------------------- THIRD SECTION ----------------------------------------- */}
      <div className="d-flex flex-column  flex-xl-row justify-content-around align-items center">
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <img src="./assets/icons/rocket.svg" alt="" />
          </div>
          <h1 className="w-75 text-center">
            Discover the Solar System and delve with us into the stars.
          </h1>
          <div className="loaderTwo my-5"></div>
        </div>
        <div className="homeImages align-self-center rounded mx-5">
          <img
            src="./assets/space-images/javier-miranda-bDFP8PxzW1Q-unsplash.jpg"
            alt="Nightsky and flashlight"
            className="rounded"
          />
        </div>
      </div>
      <div className="separator"></div>
      {/* ------------------------------------------ FOURTH SECTION ----------------------------------------------- */}
      <div id="solarSystemCarousel d-flex justify-content-center align-items-center">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {/* ----------------------------------- MERCURY ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/mercury.jpg"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3">Mercury</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Closest planet to the Sun, with an average surface
                      temperature of 167&deg; C and orbiting the Sun every 88
                      days.{" "}
                    </h6>
                    <div>
                      <p>Radius: 2,439.7 km</p>
                      <p>Distance from Sun: 0.4 AU</p>
                      <p>Composition: Metals and silicates</p>
                      <p>Atmosphere: None</p>
                      <p>Moons: None</p>
                      <p>Day length: 59d</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- VENUS ---------------------------------------- */}
            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/venus.jpg"
                    alt="venus"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Venus</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Second planet in our Solar System and has the hottest
                      average surface temperature of 465&deg; C and orbiting the
                      Sun every 225 days.{" "}
                    </h6>
                    <div>
                      <p>Radius: 6,051.8 km</p>
                      <p>Distance from Sun: 0.72 AU</p>
                      <p>Composition: Iron core with rocky mantle.</p>
                      <p>
                        Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                        gases.
                      </p>
                      <p>Moons: None</p>
                      <p>Day length: 243d</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- EARTH ---------------------------------------- */}
            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/earth.jpg"
                    alt="earth"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Earth</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Our home planet, with an average temperature of 15&deg; C
                      with an orbital period of 365 days, and the only planet
                      known to host life.
                    </h6>
                    <div>
                      <p>Radius: 6,371 km</p>
                      <p>Distance from Sun: 1 AU</p>
                      <p>Composition: Iron core and rocky crust. </p>
                      <p>
                        Atmosphere: 78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon,
                        0.04% other gases.
                      </p>
                      <p>Moons: 1</p>
                      <p>Day length: 24h</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- MOON ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/moon.jpg"
                    alt="moon"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Moon</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      The only satellite of Earth, and due to its surface
                      composition it reflects about 5-10% of the Sun's light.{" "}
                    </h6>
                    <div>
                      <p>Radius: 1,737.4 km</p>
                      <p>Distance from Sun: 1 AU</p>
                      <p>
                        Composition: Oxygen, Sipcon, Manesium, Iron, Calcium,
                        Aluminum, Titanium, Uranium, Potassium, Hydrogen..
                      </p>
                      <p>Atmosphere: Hepum, neon, argon and hydrogen.</p>
                      <p>Moons: None</p>
                      <p>Day length: 29.5d</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- MARS ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/mars.jpg"
                    alt="mars"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Mars</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Fourth planet in our Solar System and has an average
                      surface temperature of -65 C&deg; and orbiting the Sun
                      every 687 days.{" "}
                    </h6>
                    <div>
                      <p>Radius: 3,390 km</p>
                      <p>Distance from Sun: 1.52 AU&#41;</p>
                      <p>Composition: Iron, nickel and sulfur.</p>
                      <p>
                        Atmosphere: 95% Carbon Dioxide, 3% Nitrogen and other
                        gases.
                      </p>
                      <p>Moons: 2 &#40;Phobos and Deimos &#41;</p>
                      <p>Day length: 1d 37min</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- ASTEROID BELT ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/asteroidBelt.jpg"
                    alt="asteroidBelt"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Asteroid Belt</h1>
                  <span className="inTextCard">
                    <h6 className="py-3">
                      This is the zone between Mars and Jupiter where we can
                      find asteroids of different sizes, shapes and
                      compositions.
                    </h6>
                    <div>
                      <p>Radius: 2.06 AU</p>
                      <p>Distance from Sun: 2.5 - 2.8 AU</p>
                      <p>
                        Composition: Rocky and ston, some contain iron and
                        nickel.
                      </p>
                      <p>Atmosphere: N/A</p>
                      <p>Moons: N/A</p>
                      <p>Day length: N/A</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- JUPITER ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/jupiter.jpg"
                    alt="jupiter"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Jupiter</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      This is the largest planet in the solar system, with four
                      main moons being Io, Europa, Ganymede and Callisto. Its
                      more famous feature is its "great red spot", a giant storm
                      16,000 km wide and an orbit period of 11.86 years.
                    </h6>
                    <div>
                      <p>Radius: 69,911 km</p>
                      <p>Distance from Sun: 5.2 AU</p>
                      <p>Composition: Hydrgen &#40;pquid&#41; and Hepum</p>
                      <p>Atmosphere: Hydrogen and Hepum.</p>
                      <p>Moons: 95</p>
                      <p>Day length: 09h 56min</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- SATURN ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/saturn.jpg"
                    alt="saturn"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Saturn</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Second largest planet in the Solar System, famously known
                      for its large rings, made of dust, ice and rocks. Among
                      its many moons, the two most famous are Titan and
                      Enceladus. It has an orbital period of 29.4 years.
                    </h6>
                    <div>
                      <p>Radius: 58,232 km</p>
                      <p>Distance from Sun: 9 AU</p>
                      <p>Composition: Hydrogen, Hepum, Iron, Nickel, rock.</p>
                      <p>Atmosphere: Hydrogen and Hepum.</p>
                      <p>Moons: 146</p>
                      <p>Day length: 10h 34min</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- URANUS ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/uranus.jpg"
                    alt="uranus"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Uranus</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      This is the seventh planet in our Solar System and has
                      dark rings. It has an average temperature of -195 C&deg;
                      and an orbital period of 84 years.
                    </h6>
                    <div>
                      <p>Radius: 25,362 km</p>
                      <p>Distance from Sun: 19 AU</p>
                      <p>
                        Composition: Rocky core, water, methane and ammonia.
                      </p>
                      <p>
                        Atmosphere: Hydrogen, Hepum, Methane, Water and Ammonia.
                      </p>
                      <p>Moons: 28</p>
                      <p>Day length: 17h 14min</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- NEPTUNE ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/neptune.jpg"
                    alt="neptune"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Neptune</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      This is the eighth and last planet in the Solar System,
                      with an average temperature of -214 C&deg; and an orbital
                      period of 165 Earth years.
                    </h6>
                    <div>
                      <p>Radius: 24,622 km</p>
                      <p>Distance from Sun: 30.1 AU</p>
                      <p>
                        Composition: Rocky core, water, methane and ammonia.
                      </p>
                      <p>Atmosphere: Hydrogen, Hepum and Methane.</p>
                      <p>Moons: 16</p>
                      <p>Day length: 16h 6min</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- KUIPER BELT ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/pluto.jpg"
                    alt="pluto"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Kuiper Belt</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      This is a second band of asteroid, larger in size and mass
                      to the asteroid belt between Mars and Jupiter. Found after
                      Neptune, it is host to the declassified planet, now dwarf
                      planet, Pluto. Other dwarf planets are found here such as
                      Eris, Haume and Makemake.{" "}
                    </h6>
                    <div>
                      <p>Radius: 20 AU</p>
                      <p>Distance from Sun: 30-50 AU</p>
                      <p>Composition: Large volumes of ices</p>
                      <p>Atmosphere: N/A</p>
                      <p>Moons: N/A</p>
                      <p>Day length: N/A</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
