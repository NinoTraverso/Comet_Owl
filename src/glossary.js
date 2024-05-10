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
    term: "",
    description: "",
  },
  {
    id: 36,
    term: "",
    description: "",
  },
  {
    id: 37,
    term: "",
    description: "",
  },
  {
    id: 38,
    term: "",
    description: "",
  },
  {
    id: 39,
    term: "",
    description: "",
  },
  {
    id: 40,
    term: "",
    description: "",
  },
  {
    id: 41,
    term: "",
    description: "",
  },
  {
    id: 42,
    term: "",
    description: "",
  },
  {
    id: 43,
    term: "",
    description: "",
  },
  {
    id: 44,
    term: "",
    description: "",
  },
  {
    id: 45,
    term: "",
    description: "",
  },
  {
    id: 46,
    term: "",
    description: "",
  },
  {
    id: 47,
    term: "",
    description: "",
  },
];

export default glossary;
