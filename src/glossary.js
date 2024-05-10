const glossary = [
  {
    id: 1,
    term: "Accretion",
    description:
      "A larger body accumulating smaller bodies through collisions.",
  },
  {
    id: 2,
    term: "Accretion disc",
    description:
      "A disc of hot matter and gas which forms around massive bodies (such as black holes).",
  },
  {
    id: 3,
    term: "Active Galaxy",
    description:
      "A galaxy that, unlike others, emits large quantities of energy at high speeds, mostly in the non-visible spectrum of light,from its core.",
  },
  {
    id: 4,
    term: "Albedo",
    description:
      "It's used to describe how reflective an object is (planets, asteroids, comets...). It is measured between 1.0 (100% of light will be reflected) and 0.0 (0% of light will be reflected). E.g., the Earth has an estimated albedo of 0.30 (roughly 30% of incoming light is reflected back into space).",
  },
  {
    id: 5,
    term: "Aphelion",
    description: "The furthest point in an object's orbit from the Sun.",
  },
  {
    id: 6,
    term: "Asteroid",
    description: "A rocky body in space, varying in size, orbiting the Sun.",
  },
  {
    id: 7,
    term: "Barnard's Star",
    description:
      "This is a red dwarf, with an average temperature of 3,200 K and an apparent magnitude of +9.5 and a radial velocity of -120 km/s. Although too dim to spot with the naked eye, it's one of the closest stars to our Sun, with a distance of ~6 light-years.",
  },
  {
    id: 8,
    term: "Barred Spiral Galaxy",
    description: "A common type of galaxy with a bar-shape at its center.",
  },
  {
    id: 9,
    term: "Betelgeuse",
    description:
      "It is the right shoulder of the Orion constellation. It's famous for being bright orange-red in the sky, with an apparent magnitude of 0.58, it is believed it is at his carbon-burning stage, further leading it to explode into a supernova. This, will be so bright, it is said it will be like having a second moon in the sky for 2-3 after the explosion. It is uncertain when it will explode, it is estimated it might take another 100,000 years before it explodes.",
  },
  {
    id: 10,
    term: "Binary Stars",
    description:
      "This is a term to describe two stars orbiting each other, or one orbit another.",
  },
  {
    id: 11,
    term: "Black Hole",
    description:
      "	A region in the spacetime where gravity is so strong not even the electromagnetic waves (light) are able to escape. As one approaches a black whole, time for us would continue normally but outside it starts speeding up, while from an external observer we'd look like we are slowing down, to the point where we'd look like we have stopped entirely.",
  },
  {
    id: 12,
    term: "Callisto",
    description:
      "	Jupiter's third largest moon, with a radius of ~ 2,410 km (almost as big as Mercury, which has a radius of ~ 2,440 km).",
  },
  {
    id: 13,
    term: "Cassini Spacecraft",
    description:
      "The space craft took measures of Saturn's magnetic field to deepen our understanding of the planet, it also studied Saturn's rings and its moons, enhancing our understanding of these natural satellites.",
  },
  {
    id: 14,
    term: "CCD",
    description:
      "	A charged-coupled device is an instrument used for astronomical observations that creates images by capturing the photons and is mostly used for spectroscopic observations.",
  },
  {
    id: 15,
    term: "Chondrite",
    description:
      "A rocky meteorite containing chondrules, which are spherical mineral grains mostly composed of oxygen, iron, silicon and magnesium.",
  },

  {
    id: 16,
    term: "Comet",
    description:
      "A comet is a body mostly made of dust and ice which, on close approach to the Sun, can produce commas of dust and sublimed ice which can extend hundreds of thousands of km.",
  },

  {
    id: 18,
    term: "Dark Energy",
    description:
      "Believed to be the driven force that 'pushes' apart galaxies from one another, it is though to compose about ~ 70% of the Universe.",
  },
  {
    id: 19,
    term: "Dec (Declination)",
    description:
      "Part of the celestial coordinate system, corresponding to the celestial sphere's latitude,and is measure in dd:mm:ss (degress, arcminutes, arcseconds).",
  },
  {
    id: 20,
    term: "Deep-Sky Object",
    description:
      "These are objects that are not individual stars nor are part of our Solar System, for example Nebulae, star clusters and galaxies.",
  },
  {
    id: 21,
    term: "Doppler Effect",
    description:
      "As an object moves away (relative to us) its wavelength decreases; on the other hand, as it gets closer (relative to us) its wavelength increases. This helped astronomers come to the conclusion that the Universe is expanding.",
  },
  {
    id: 22,
    term: "Eccentricity",
    description:
      "This is simply the measure of how 'round' the orbit of an object is; the closer it is to 0, to more circular it is.",
  },
  {
    id: 23,
    term: "Eclipse",
    description:
      "An astronomical event in which the Moon passes in front of the Sun - Solar Eclipse, or, while the Earth passed in front of the Sun, it casts its shadow onto the Moon (Lunar Eclipse).",
  },
  {
    id: 24,
    term: "Enceladus",
    description:
      "It is Saturn's sixth largest moon with an icy crust on the surface. It is believed there might be an ocean under this crust at its South pole, which was also found to eject plumes and jets of water ice into space.",
  },
  {
    id: 25,
    term: "Eros",
    description:
      "This was the first NEA (Near Earth Asteroid) to be discovered in 1898. It was also the first asteroid to be orbited and landed by a spacecraft.",
  },
  {
    id: 26,
    term: "ESA",
    description: "European Space Agency, founded in 1975.",
  },
  {
    id: 27,
    term: "FITS",
    description:
      "These are most common digital formats for astronomical data, allowing large storage of images and tables of astronomical data.",
  },
  {
    id: 28,
    term: "Flare",
    description:
      "Release of huge amounts of magnetic energy and high-energy particles from the Sun.",
  },
  {
    id: 29,
    term: "Flyby",
    description:
      "A spacecraft that passes by a body but is not going to enter orbit or land on it.",
  },
  {
    id: 30,
    term: "FR I & FR II",
    description:
      "	Fanaroff-Riley I & II are radio galaxies categorized by their jets: FR I are more luminous at the galactic center and slowly fade in luminosity as they extend. FR II have two main lobes at the end with highest luminosity and decreasing towards the galactic center.",
  },
  {
    id: 31,
    term: "Galaxy",
    description:
      "	A huge collection of dust, clouds and stars (along their respective planets) orbiting around a galactic nucleus, usually containing a massive black hole. E.g, At the Milky way's galactic center we find Sagittarius A*, a black hole with a mass of ~4 million times that of our Sun.",
  },
  {
    id: 32,
    term: "Galilean Satellites",
    description:
      "These are the four largest moons of Jupiter: Io, Ganymede, Europa and Callisto.",
  },
  {
    id: 33,
    term: "Geomagnetic Storms",
    description:
      "Disturbances by solar flares in the Magnetosphere of the Earth.",
  },
  {
    id: 34,
    term: "Globular Cluster",
    description:
      "	These are large collection of stars generally found in the Milky Way's halo region, with the majority of stars being 'old'.",
  },
  {
    id: 35,
    term: "GMC (Giant Molecular Cloud)",
    description:
      "These are regions in the galaxy, usually with mass of 10^5 or more, where gas and dust accumulates and, although these are cold, they are also the birth places of stars.",
  },
  {
    id: 36,
    term: "Half-Life",
    description:
      "It's the time it takes for half of radioactive isotope to decay. E.g., Carbon-14 has a half-life of 5,730 years, meaning that for 1.0 kg of Carbon-14 it will take 5,730 years to decay to 0.5 kg.",
  },
  {
    id: 37,
    term: "Hertzsprung-Russell diagram",
    description:
      "This is a diagram showing the relationship between a star's luminosity and temperature. The stars can be grouped into four categories: White Dwarfs; Main Sequence (where the Sun is located); Giants; Super Giants. Star are also categorized by 'Spectral Types': O, B, A, F, G, K, M.",
  },
  {
    id: 38,
    term: "Hubble Constant",
    description:
      "This simply determines the rate at which the Universe is expanding. In order to find the Hubble Constant we simply use the formula [v = H_0 d ] where 'v' is the recessional velocity of a galaxy, and 'd' is its distance from us. Once estimated at 500 km/s/Mpc, today the Hubble constant holds a value of 70 km/s/Mpc.",
  },
  {
    id: 39,
    term: "Hubble Telescope",
    description:
      "Space-based telescope that has imaged different sky objects, from our Solar System to far away galaxies with incredible detail. It was launched in 1990 and to this day is still in operation.",
  },
  {
    id: 40,
    term: "IAU",
    description: "International Astronomical Union.",
  },
  {
    id: 41,
    term: "Ikeya-Seki Comet",
    description:
      "	This was a bright comet discovered in 1965 which approached very close to Sun, which reached a perihelion distance of 0.008 AU and a magnitude of ~ (-10), making it visible to the naked eye even during daylight!",
  },
  {
    id: 42,
    term: "Intereferometer",
    description:
      "Used in many science fields, it is used to combine two beams of light to create an interference. An important example is LIGO (The Laser Interferometer Gravitational-Wave Observatory) which has recorded proof of gravitational waves, caused by two black holes that merged into one, creating gravitational waves in the process.",
  },
  {
    id: 43,
    term: "Interstellar Medium",
    description: "	The material 'filling' the gaps between stars in a galaxy.",
  },
  {
    id: 44,
    term: "ISS",
    description: "The International Space Station.",
  },
  {
    id: 45,
    term: "Jeans Instability",
    description:
      "It is the instability withing a gas and dust cloud, which causes it to condense and collapse.",
  },
  {
    id: 46,
    term: "Jovian Satellites",
    description:
      "They are the total moons orbiting Jupiter, the fifth planet of our Solar System. Today, these have been counted up to 146 in total.",
  },
  {
    id: 47,
    term: "JPL",
    description: "Jet Propulsion Laboratory",
  },
  {
    id: 48,
    term: "Juno",
    description:
      "Space probe operated by the JPL, it was launched in 2011 and reached Jupiter in 2016 and is now in orbit studying its gravitational and magnetic field, as well study its clouds and composition.",
  },
  {
    id: 49,
    term: "JWST",
    description:
      "James Webb Space Telescope, launched in December 2023 and reached the Sun–Earth L2 Lagrange point in January 2023. The mission was a success and the telescope is currently fully operational.",
  },
  {
    id: 50,
    term: "Keck Telescopes",
    description:
      "Observatory consisting of two twin optical and infrared telescopes, located at the summit of mount Mauna Kea, Hawaii.",
  },
  {
    id: 51,
    term: "Kepler's Laws",
    description:
      "FIRST LAW: The path of the planets around the Sun is an ellipse, with the center of the sun being located at one focus. | SECOND LAW: An imaginary line drawn from the center of the Sun to the center of the planet will sweep out equal areas in equal intervals of time. | THIRD LAW: The ratio of the squares of the periods of any two planets is equal to the ratio of the cubes of their average distances from the sun. [ P^3 = a^3 ] where 'P' is the period the planet's orbit and 'a' is the semi-major axis of the orbit.",
  },
  {
    id: 52,
    term: "Kinetic Energy",
    description: "This is the energy an object holds while in motion.",
  },
  {
    id: 53,
    term: "Kirkwood gaps",
    description:
      "Gaps found in the main asteroid belt (between Mars and Jupiter) cause by Jupiter's gravity, causing dips in the distribution of the asteroids' semi-major axes.",
  },
  {
    id: 54,
    term: "Kuiper Belt",
    description:
      "	This is the Solar System's second belt, outside the orbit or Neptune, when we find find icy-rocky bodies and dwarf-planets such as Pluto (with a diameter of ~ 2,400 km) and Eris (with a diameter of ~ 2,300 km).",
  },
  {
    id: 55,
    term: "Lagrangian Points",
    description:
      "These are points in space, between two large object, where small bodies can maintain a stable orbit indefinitely.",
  },
  {
    id: 56,
    term: "Light Curve",
    description:
      "	A graph showing the fluctuating brightness of a star over time.",
  },
  {
    id: 57,
    term: "Light Pollution",
    description:
      "	The effect of cities and towns to the night sky, causing its visibility to decrease. Light pollution can also be cause by low-orbit satellites which can reflect the sunlight and affect the sky night appearance.",
  },
  {
    id: 58,
    term: "LMG",
    description:
      "Large Magellanic Cloud, could be considered one of the two 'satellites' of our Milky Way, which along the Small Magellanic Cloud. These orbit around the Milky Way, as the Moon orbits the Sun.",
  },
  {
    id: 59,
    term: "LMXB",
    description:
      "A low-mass X-ray binary composed of a neutron star orbiting around another star accreting its matter.",
  },
  {
    id: 60,
    term: "Luminosity",
    description:
      "This is a measure of the total amount of energy, generally stars, each second, measured in watts.",
  },
  {
    id: 61,
    term: "Magnitude",
    description:
      "It's a way to measure the brightness of a star or celestial object. The lower the number, the brighter it is, and vice-versa. The apparent magnitude (m) represents the apparent brightness of an object, while the absolute magnitude (M) represent the actual brightness of the object.",
  },
  {
    id: 62,
    term: "MBR",
    description:
      "Microwave Background Radiation is the 'leftover' radiation from the Big Bang, discovered in 1965 by Arno Penzias and Robert Wilson.",
  },
  {
    id: 63,
    term: "Messier Objects",
    description:
      "A set of cataloged deep sky by the French astronomer Charles Messier. He cataloged 110 objects - galaxies, nebulae and star clusters. The catalog was created in the early 1770s, later completed in the 1780s.",
  },
  {
    id: 64,
    term: "Meteor",
    description:
      "A rocky body from space travelling through a planet's atmosphere; here it burns through the atmosphere, emitting light in the process giving them the name of 'shooting stars'.",
  },
  {
    id: 65,
    term: "Meteorite",
    description:
      "The remnant of a rocky body from space after it collided into a planet's surface.",
  },
  {
    id: 66,
    term: "Natural Satellite - Moon",
    description:
      "A planet's natural satellite (Moon) is a body orbiting a planet. The main difference between a planet and a moon is that planets orbit a star, while a moon orbits a planet.",
  },
  {
    id: 67,
    term: "Nebula",
    description:
      "	A nebula is a point in space where containing large amounts of gas and dust. These,depending on their category, can be the birth-place of new stars or could represent the remnants of dying or exploded stars. Nebula can be put into five main categories: Planetary Nebulae; Emission Nebulae; Supernova remnant; Reflection Nebulae and Dark Nebulae.",
  },
  {
    id: 68,
    term: "NEO",
    description:
      "Near Earth Object, are asteroids and comet orbiting in the 1 AU range, which is the mean distance between the Sun and the Earth. There are about ~ 30,000 NEOs, but only ~ 2,000 are potentially hazardous to Earth.",
  },
  {
    id: 69,
    term: "Neutron Star",
    description:
      "These are super compacted cores of giant stars, which crushing the proton and electrons into protons. Additionally, these bodies have some of the strongest magnetic fields in the Universe.",
  },
  {
    id: 70,
    term: "NGC",
    description:
      "New General Catalogue, a catalog of deep sky objects (including Messier Objects).",
  },
  {
    id: 71,
    term: "Nova",
    description:
      "These are less powerful explosions, compared to supernovae, of stars. These explosions increase the star's brightness to then return to normal.",
  },
  {
    id: 72,
    term: "Olympus Mons",
    description:
      "Located on Mars, this is the tallest volcano in the entire Solar System, with a height of ~ 22 km.",
  },
  {
    id: 73,
    term: "Oort Cloud",
    description:
      "Lying beyond the Kuiper Belt, it is a spherical layer of cosmic rays, dust, gas and small bodies.",
  },
  {
    id: 74,
    term: "Open Cluster",
    description:
      "A collection of generally young stars found in plane of the Milky Way.",
  },
  {
    id: 75,
    term: "Optical Astronomy",
    description:
      "Branch of Astronomy that studies celestial objects in the visible-light.",
  },
  {
    id: 76,
    term: "Orbit",
    description: "The route a body take around another, generally elliptical.",
  },
  {
    id: 77,
    term: "Parallax",
    description:
      "The apparent change of an object based on the observer's position.",
  },
  {
    id: 78,
    term: "Parsec",
    description:
      "Astronomical unit of measure of distance, ~ 3.26 light-years.",
  },
  {
    id: 79,
    term: "Perihelion",
    description: "The closest point in an object's orbit from the Sun.",
  },
  {
    id: 80,
    term: "Photometry",
    description:
      "	Astronomical process in which a bright object to measure its brightness.",
  },
  {
    id: 81,
    term: "Planet",
    description:
      "A celestial, spheroidal body with a substantial size which meets the following three criteria adopted by the IAU (International Astronomical Union): 1) It must orbit a star; 2) It must be big enough to have enough gravity to force itself into a spherical shape; 3) It needs to be big enough that its gravity cleared any other objects of similar size near its orbit around the star. Planets can be put into four main categories: Terrestrial, Gas-Giant, Super-Earth and Neptune-Like.",
  },
  {
    id: 82,
    term: "Quadrantids",
    description: "An annual meteor shower with peak in January 3.",
  },
  {
    id: 83,
    term: "Quasar",
    description:
      "Also known as AGN (Active Galactic Nucleus), these are highly active galaxies with massive black hole at their center releasing giant jets of gas and large amounts of energy in the electromagnetic spectrum (such as X-rays and Gamma Rays) ejected on two sides.",
  },
  {
    id: 84,
    term: "RA (Right Ascension)",
    description:
      "Part of the celestial coordinate system, corresponding to the celestial sphere's longitude,and is measure in hh:mm:ss (hours, minutes, seconds).",
  },
  {
    id: 85,
    term: "Radio Astronomy",
    description:
      "A field of astronomy that studies celestial bodies in the radio frequencies.",
  },
  {
    id: 86,
    term: "Radiometric Dating",
    description:
      "Technique used to measure the date of an object, for example a meteorite, by measuring the amount of radioactive material within it (that was incorporated when it formed) and, knowing the isotopes half-life, establish its age.",
  },
  {
    id: 87,
    term: "Schwarzschild Radius",
    description:
      "For a non-rotating black hole, this is the radius of the black hole's event horizon - the point",
  },
  {
    id: 88,
    term: "Semimajor Axis",
    description:
      "For an ellipse, this is half the diameter of the longest diameter of an ellipse.",
  },
  {
    id: 89,
    term: "Singularity",
    description:
      "This is the point inside the black hole where the mass and gravity become infinite, and nothing can escape it.",
  },
  {
    id: 90,
    term: "Star",
    description:
      "A gaseous body emitting light and energy through nuclear reactions in its core.",
  },
  {
    id: 91,
    term: "Sun",
    description:
      "It is the star of our Solar System, a G-Type Main Sequence star formed ~4.6 billion years ago. These type of stars run for about 10 billion years, meaning the Sun is half through its life cycle. It will eventually become a red giant, increasing in size, swallowing most of the rocky planets (including Earth) and then will eventually turn into a white dwarf.",
  },
  {
    id: 92,
    term: "T Tauri Stars",
    description:
      "These are very young variable stars with irregular magnitude variations producing strong X-Rays.",
  },
  {
    id: 93,
    term: "Telescope",
    description:
      "	Tools that are used to observe far-away objects such as moons, stars, nebulae, galaxies, clusters...there are three main types of telescopes: Refractor, Reflector and Catadioptric Telescopes (a.k.k as Schmidt-Cassegrain telescopes).",
  },
  {
    id: 94,
    term: "Telescope",
    description:
      "Tools that are used to observe far-away objects such as moons, stars, nebulae, galaxies, clusters...there are three main types of telescopes: Refractor, Reflector and Catadioptric Telescopes (a.k.k as Schmidt-Cassegrain telescopes).",
  },
  {
    id: 95,
    term: "Terminator",
    description:
      "This is the 'line' at which a body has the division between the light-side and the dark-side of a planet or moon.",
  },
  {
    id: 96,
    term: "Tidal Heating",
    description:
      "It is the process in which a body is gravitationally affected by a parent body to the point that it gets deformed, causing its interior to heat up.",
  },
  {
    id: 97,
    term: "Transit",
    description:
      "Used to define the passage of a body in front of another relative to the observer - we witness this during solar eclipse as the Moon transits in front of the Sun. Another important example are exoplanets - some exoplanet were only discovered due to their transit in front (relative to us) of their parent star causing the star's brightness to slightly dip.",
  },
  {
    id: 98,
    term: "Ultraviolet Radiation",
    description:
      "With wavelength ranging between 100 nm and 400 nm, are energetic electromagnetic waves which can have damaging effect to the skin, eyes and even DNA.",
  },
  {
    id: 99,
    term: "Universe",
    description:
      "The Universe is everything that exists - the Earth, the Sun, star clusters, galaxies, black holes... it encapsulate all the energy and matter which in the space-time.",
  },
  {
    id: 100,
    term: "Uranus' Rings",
    description:
      "Like Saturn, Uranus has a set of rings which are mainly composed of ice and rocks - these are quite dark, so unlike Saturn these rings are not very visible.",
  },
  {
    id: 101,
    term: "Ursids",
    description:
      "These are a family of meteors visible annually, with peaks on December 22-23.",
  },
  {
    id: 102,
    term: "Variable Star",
    description:
      "It is a star that changes its apparent magnitude (m) over time - in simple words, it's a star that changes brightness over time.",
  },
  {
    id: 103,
    term: "Volcanism",
    description:
      "	Volcanism is the eruption of material from within the ground of a body. Volcanism is not only found on Earth but there is evidence for it on terrestrial planets, the Moon and Jupiter's moon Io. Today, active volcanic activity is only found here on Earth and Io.",
  },
  {
    id: 104,
    term: "Wavelength",
    description:
      "Represented by the letter λ, it is the distance between two successive wave peaks - in simple terms, how long a wave is. The longer the wavelength, the lower the frequency and the less energy it carries. The shorter the wavelength, the higher the frequency and more energy it carries.",
  },
  {
    id: 105,
    term: "White Dwarf",
    description:
      "This is the remnant of a dying star, the core of the star 'left behind' after the star exhausted its fuel and expelled all its outer layers, leaving its core - a white dwarf.",
  },
  {
    id: 106,
    term: "White Hole",
    description:
      "These purely theoretical object are seen as the opposite brother of black holes -they release matter rather than suck it in, and nothing can enter one.",
  },
  {
    id: 107,
    term: "Wormhole",
    description:
      "Also known as Einstein-Rosen Bridge, it is a theory which suggest that it is possible to create a 'bridge' between two points in space-time, significantly reducing travelling distance. Even if it were possible to create such bridge, the amounts of energy required would be so immense it is humanly impossible.",
  },
  {
    id: 108,
    term: "X-Ray Astronomy",
    description:
      "The branch of Astronomy which observes and studies celestial object emitting X-Rays.",
  },
  {
    id: 109,
    term: "X-Ray Binary",
    description:
      "These are a category of binary stars, generally consisting of a white dwarf and a collapsed star, emitting high amounts of energy in the for of X-Rays.",
  },
  {
    id: 110,
    term: "Zwicky Catalog",
    description:
      "	A catalog which encompassing almost 40,000 Galaxies and Galaxy Clusters.",
  },
];

export default glossary;
