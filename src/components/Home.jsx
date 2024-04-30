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
            src="./assets/space-images/spaceFlashlight.jpg"
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
                  <h6 className="py-3 ">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 0.4 AU</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Atmosphere: None</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 0.72 AU</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Our home planet, with an average temperature of 15&deg; C
                    with an orbital period of 365 days, and the only planet
                    known to host life.
                  </h6>
                  <ul>
                    <li>Radius: 6,371 km</li>
                    <li>Distance from Sun: 1 AU</li>
                    <li>Composition: Iron core and rocky crust. </li>
                    <li>
                      Atmosphere: 78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon,
                      0.04% other gases.
                    </li>
                    <li>Moons: 1</li>
                    <li>Day length: 24h</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    The only satellite of Earth, and due to its surface
                    composition it reflects about 5-10% of the Sun's light.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 1,737.4 km</li>
                    <li>Distance from Sun: 1 AU</li>
                    <li>
                      Composition: Oxygen, Silicon, Manesium, Iron, Calcium,
                      Aluminum, Titanium, Uranium, Potassium, Hydrogen..
                    </li>
                    <li>Atmosphere: Helium, neon, argon and hydrogen.</li>
                    <li>Moons: None</li>
                    <li>Day length: 29.5d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Fourth planet in our Solar System and has an average surface
                    temperature of -65 C&deg; and orbiting the Sun every 687
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 3,390 km</li>
                    <li>Distance from Sun: 1.52 AU&#41;</li>
                    <li>Composition: Iron, nickel and sulfur.</li>
                    <li>
                      Atmosphere: 95% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: 2 &#40;Phobos and Deimos &#41;</li>
                    <li>Day length: 1d 37min</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    This is the zone between Mars and Jupiter where we can find
                    asteroids of different sizes, shapes and compositions.
                  </h6>
                  <ul>
                    <li>Radius: 2.06 AU</li>
                    <li>Distance from Sun: 2.5 - 2.8 AU</li>
                    <li>
                      Composition: Rocky and ston, some contain iron and nickel.
                    </li>
                    <li>Atmosphere: N/A</li>
                    <li>Moons: N/A</li>
                    <li>Day length: N/A</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
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
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ----------------------------------- PLUTO ---------------------------------------- */}

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
                  <h1 className="ms-0 ms-md-4 py-3 t">PLuto</h1>
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ----------------------------------- ERIS ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/ceres.jpg"
                    alt="eris"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Eris</h1>
                  <h6 className="py-3 ">
                    Second planet in our Solar System and has the hottest
                    average surface temperature of 465&deg; C and orbiting the
                    Sun every 225 days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 6,051.8 km</li>
                    <li>Distance from Sun: 108.2 million km</li>
                    <li>Composition: Iron core with rocky mantle.</li>
                    <li>
                      Atmosphere: 96% Carbon Dioxide, 3% Nitrogen and other
                      gases.
                    </li>
                    <li>Moons: None</li>
                    <li>Day length: 243d</li>
                  </ul>
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
