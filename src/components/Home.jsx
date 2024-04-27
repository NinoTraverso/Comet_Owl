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
            <div
              id="carouselIamgeContainer"
              className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center"
            >
              <div id="carouselCard">
                <img
                  src="./assets/planets/mercury.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Mercury"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Mercury</h2>
                  <h6 className="w-50">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/venus.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Venus"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Venus</h2>
                  <h6 className="w-50">
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
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/earth.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Earth"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Earth</h2>
                  <h6 className="w-50">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/moon.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Moon"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>The Moon</h2>
                  <h6 className="w-50">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/mars.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Mars"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Mars</h2>
                  <h6 className="w-50">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/asteroidBelt.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Asteroid Belt"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Asteroid Belt</h2>
                  <h6 className="w-50">
                    Closest planet to the Sun, with an average surface
                    temperature of 167&deg; C and orbiting the Sun every 88
                    days.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/jupiter.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Jupiter"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Jupiter</h2>
                  <h6 className="w-50">
                    IT's the largest planet in the Solar System, with over 90
                    moons and categorized as a gas giant.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/saturn.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Saturn"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Saturn</h2>
                  <h6 className="w-50">
                    Second largest planet in our Solar Stystem, disticting
                    itself from the other for its famusly know extended rings,
                    mainly made of dust and gas.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/uranus.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Uranus"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Uranus</h2>
                  <h6 className="w-50">
                    After Saturn we find this icy giant.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,871 billion km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/neptune.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Neptune"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Neptune</h2>
                  <h6 className="w-50">
                    This is the other icy giant and last planet in our Solar
                    System.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 4,5892 billion km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/ceres.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Ceres"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Eris</h2>
                  <h6 className="w-50">
                    Second largest Kuiper belt object after Pluto.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 2,439.7 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div id="carouselCard mx-auto">
                <img
                  src="./assets/planets/pluto.jpg"
                  className="carouselImage d-block mx-auto"
                  alt="Pluto"
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>Pluto</h2>
                  <h6 className="w-50">
                    Largest Kuiper belt object, has a distinguished heart shape
                    on it's surface.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 1,151 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item d-flex justify-content-center align-content-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row"
              >
                <div className="align-self-center">
                  <img
                    src="./assets/planets/pluto.jpg"
                    alt="pluto"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3">Pluto</h1>
                  <h6 className="py-3 ">
                    Largest Kuiper belt object, has a distinguished heart shape
                    on it's surface.{" "}
                  </h6>
                  <ul>
                    <li>Radius: 1,151 km</li>
                    <li>Distance from Sun: 58 million km</li>
                    <li>Composition: Metals and silicates</li>
                    <li>Moons: None</li>
                    <li>Day length: 59d</li>
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
