/*
Title:

Choose a concise and descriptive title that accurately reflects the content of your article. It should be attention-grabbing yet informative.
Introduction:

Provide a brief overview of the topic you'll be discussing.
Introduce the importance or relevance of the topic.
Pose questions or hypotheses that will be addressed in the article.
Background/Context:

Offer background information necessary for understanding the topic.
Explain any relevant scientific concepts or theories.
Provide historical context if applicable.
Main Content:

Break down the main content into logical sections or subheadings.
Present your findings, analysis, or argument supported by scientific evidence.
Use clear and concise language, avoiding jargon whenever possible.
Include references or citations to credible sources.
Use bullet points, numbered lists, or visuals to enhance readability.
Examples/Illustrations:

Incorporate relevant examples, case studies, or experiments to illustrate key points.
Use diagrams, graphs, or images to visually represent data or concepts.
Ensure all visuals are properly labeled and cited.
Discussion/Analysis:

Analyze the implications of your findings or arguments.
Discuss any limitations or potential areas for further research.
Address counterarguments or alternative perspectives if relevant.
Encourage critical thinking and discussion among readers.
Conclusion:

Summarize the main points of the article.
Emphasize the significance of the topic and its relevance to the broader scientific community or society.
Suggest potential avenues for future research or exploration.
References:

Provide a list of all sources cited in the article.
Follow a consistent citation style (e.g., APA, MLA) and format.
Author Information (Optional):

Include a brief author bio or byline, highlighting relevant expertise or credentials.
Provide contact information or links to the author's website or social media profiles.

ARTICLE FORMAT

{
id: number,
title: "".
briefing: "".
frontImage: "".
introduction: "",
background: "",
illustrationOne: "",
textOne: "",
illustrationTwo: "",
textTwo: "",
textThree: "",
conclusionImage: "",
conclusion: "",
references: "",
author: "N.J.T.",
},
*/

const articles = [
  {
    id: 1,
    title: "Can we colonize Mars?",
    briefing:
      "Mars colonization faces immense challenges, from harsh conditions to limited resources. Surviving there would require heavy dependence on Earth, making the mission costly and risky.",
    frontImage: "../assets/articleImages/canWeColonizeMars/marsSpaceship.jpg",
    introduction:
      "For the past few years, space agencies have been planning to colonize Mars in the near future, with the first mission estimated to launch in the 2030s. Although colonizing other planets is becoming closer to reality than to science fiction, going to Mars would not be beneficial.",
    textOne: "",
    illustrationOne: "../assets/articleImages/canWeColonizeMars/mars.png",
    textTwo:
      "Mars is the fourth planet of our Solar System, about 228 million km (1.5 AU) from the Sun. Even though it is a rocky planet like Earth, it is very different, and these differences are what make future missions to Mars a big risk. Mars is a sterile planet. It is dry, cold, and the presence of liquid water is absent. Water in its liquid form does not exist on Mars, but it is located in the polar caps in the form of ice. The polar caps, though, are mostly composed of dry ice (carbon dioxide ice), so the water available is not much. In order to grow crops and plants, water is necessary, but since the availability is low, they would most likely need regular 'shipments' from Earth to bring in resources and equipment to sustain the people, the colonial bases, and the plants they grow. Since the atmosphere is thin, there is very little greenhouse effect, and this causes the planet to be generally cold, with temperatures ranging between -140°C (-220°F) and 21°C (70°F), with an average temperature of around -62°C (-81°F). Humans have evolved to survive on Earth, but we did not evolve to survive on Mars. Breathing is one of the most basic functions for any living being on Earth. Mars' very thin atmosphere (about 100 times less thick than Earth's) is mainly composed of carbon dioxide (95%), nitrogen (2.7%), argon (1.6%), and oxygen (only 0.13%). Oxygen can always be made by using the carbon dioxide in Mars' atmosphere, but that's no easy task, as it would be expensive and hard to bring machinery large enough to produce a sustainable amount of oxygen in the colonial bases. Not to mention, just dealing with the weight of the equipment from Earth to Mars would be challenging, costly, and time-consuming.",
    illustrationTwo:
      "../assets/articleImages/canWeColonizeMars/canWeColonizeMars.jpg",
    textThree:
      "It is also important to take into consideration the radiation on the planet. Growing plants will probably be a big challenge, but they, like the colonizers, also need protection from the damaging incoming radiation. Radiation levels on Mars are 45 times higher than on Earth for three reasons: it lacks a thick atmosphere, it lacks an ozone layer, and it lacks an iron-core dynamo. Earth has a thin layer of ozone (a molecule made up of three oxygen atoms) which absorbs most of the incoming UV radiation, protecting all life on Earth. UV radiation is a very damaging (especially to DNA) non-ionizing radiation produced by the Sun. As Mars has a thin atmosphere (which lacks an ozone layer), there is no protection from the harms of UV radiation. Mars used to have a thick atmosphere 4 billion years ago but lost it over time. Initially, Mars, like Earth, had an iron-core dynamo producing a protective magnetosphere, which means it had protection against cosmic radiation and solar wind. However, the core cooled down, and Mars lost its magnetosphere. As the Sun continued to emit solar wind and charged particles, Mars also continued to get bombarded by these energy sources. Some of the electrons carried by solar wind were captured by the upper atmosphere, which turned molecules located in the upper parts of the atmosphere into plasma. Consequently, as plasma is extremely conductive, electric currents are formed. This effect causes Mars to have an induced magnetic field today, which is formed because part of the incoming solar wind, along with the magnetic field, is being enveloped by the electric currents formed by the plasma. This is still not enough to protect the planet—the induced magnetic field is, counterintuitively, thinning the atmosphere: it causes atoms to become more energetic, obtaining the necessary velocity to escape into space.",
    textFour:
      "There seem to be many problems involved when planning to colonize Mars. It is a harsh, deadly environment that is not suited for life as we know it. Colonizing Mars will be challenging, time-consuming, and expensive beyond imagination, and it would doubtfully be a positive improvement to civilization at this time, since colonies will most likely be highly dependent on Earth for many decades.",
    conclusionImage:
      "../assets/articleImages/canWeColonizeMars/marsAstronaut.jpg",
    conclusion:
      "So, should we go to Mars? The current technology, as well as the social and political implications may suggest it is still too early to take such a big step. Moving to Mars would mean learning how to terraform an entire, sterile, new world, and currently, we can barely keep control over our own planet (the ozone layer hole, pollution, global warming…). Are we really ready for this kind of journey?",
    references: "",
    author: "Nino J. Traverso - 2024",
  },

  {
    id: 2,
    title: "The importance of Astronomy",
    frontImage:
      "../assets/articleImages/theImportanceOfAstronomy/theImportanceOfAstronomy.jpg",
    briefing:
      "Discover how astronomy not only unlocks the mysteries of the universe but also fuels groundbreaking technology like GPS and MRI. Learn why this field is crucial for both our survival and understanding of the cosmos.",
    introduction:
      "Astronomy has been exponentially developing over time and has been a tool used for our survival since the rise of mankind. It was used for predicting events on Earth, navigating the globe, understanding our planet and the Solar System it resides in, and much more.",
    textOne: "",
    illustrationOne:
      "../assets/articleImages/theImportanceOfAstronomy/groundSatellite.jpg",
    textTwo:
      "Astronomy has helped us evolve over the centuries. Without astronomy, we would have never known that the Sun is a star like any other in our galaxy and in neighboring galaxies, and that we orbit around it along with seven other planets. Astronomy studies the entire universe: how it started, how it developed, how it will likely end, and all the things that are found within it. It also helps us understand how our Solar System evolved, how other solar systems may develop, and how we got this far. Astronomy is a science, but it has also been one of the most useful tools for our society and human development, both directly and indirectly. Take, for example, the study of our nearest star, the Sun, which is a very important part of the field and beneficial to our society. Without it, we wouldn't be able to predict the Sun's behavior, its effects on Earth and the life on it, how it affects seasons, weather, and the water cycle of the planet. It also helps us predict any future threats it may pose to Earth. Another important contribution that astronomy has made is the ability to study the motion of the celestial bodies around us. Some of these bodies are called asteroids, which hit our planet on a daily basis. However, since these are extremely small in size, they do not generally cause concern or pose a threat, as they disintegrate in the atmosphere and never reach the surface. On the other hand, there are asteroids that are dangerously large—some can be hundreds of meters across, while others may have diameters measuring tens of kilometers. Fortunately, most of them will likely never reach Earth, though there are some Near-Earth Objects (NEOs) that could potentially collide with our planet in the future.",
    illustrationTwo:
      "../assets/articleImages/theImportanceOfAstronomy/spacesSatellitejpg.jpg",
    textThree:
      "By studying the impacted asteroids on Earth (meteorites), we have been able to create a predictive pattern that gives us an estimate of how often and how likely it is for an asteroid of a certain diameter to hit Earth. Asteroids with a 1 km diameter hit us, on average, every 500,000 years and can cause destruction across regions, and even continents, while also triggering climatic changes that could potentially kill millions of people. Larger asteroids with a 5 km radius hit us every 20 million years, while 10+ km asteroids impact our planet every 100 million years, with the last one occurring 66 million years ago (causing the extinction of the dinosaurs). Astronomy can help us find large NEOs, predict their orbits, and possibly stop them before they hit our planet. There are currently more than 20,000 known NEOs, but there may be more that we have not discovered yet. Another way astronomy has helped us grow is through the development of increasingly advanced instruments over time, contributing not only to the advancement of the field but also to the technological progress of instruments and software that can be applied to other fields. For example, since the invention of the first telescope, we have developed more powerful telescopes capable of observing billions of years across space. Without that first telescope, we might not have some of the most advanced telescopes ever created today, such as MeerKAT, the Keck telescopes, or the most recent James Webb Space Telescope. These are all results of technological advancements made in the field of astronomy (and other fields such as engineering, programming, physics, and mathematics).",
    textFour:
      "The advancement of one field often causes another to advance technologically and economically. This has helped us gain unimaginable knowledge over the decades and develop a growing economic system. Another benefit that astronomy has brought to society is the mathematics and physics behind it. Without it, we wouldn't have been able to develop those valuable satellites that allow us to communicate with one another from anywhere in the world, or the invention of GPS systems that ensure we never get lost. Magnetic Resonance Imaging (MRI) scanners are also a technology developed through the study of Earth, but as you may know, this technology has also been applied in other fields, such as medicine (MRI machines).",
    conclusionImage:
      "../assets/articleImages/theImportanceOfAstronomy/spaceFlashlight.jpg",
    conclusion:
      "Astronomy allows us to understand the universe we live in. This field has helped us create instruments to study the universe around us. We have been able to prove many scientific theories, such as Einstein’s prediction of how a black hole would look. We have also discovered exoplanets orbiting alien stars and predicted what will happen to our Sun. Astronomy is not only useful for our technological, scientific, and cultural development, but it is also necessary for our survival.",
    references: "",
    author: "Nino J. Traverso - 2024",
  },

  {
    id: 3,
    title: "Is Earth defenceless against asteroids and comets?",
    frontImage:
      "../assets/articleImages/isEarthDefenslessAgainstAsteroidsAndComets/meteorCrashing.jpg",
    briefing:
      "NASA's DART mission and the new Pulverize-It method offer promising ways to prevent catastrophic asteroid impacts on Earth. With further research, these strategies could help safeguard our planet from space threats.",
    introduction:
      "Imagine coming back from work one day, having dinner, and then enjoying some TV time when your favorite show is suddenly interrupted by breaking news: a space object with a 10 km radius will hit Earth in less than a year, resulting in a global extinction event. Panic would probably be the first response, as you might think there is not much we can do to prevent this catastrophe… but are we truly powerless against such threats?",
    textOne:
      "Currently, there are thousands of Near-Earth Objects (NEOs for short) orbiting close to Earth. Some of these are small objects and pose no threat to us, while others, on the other hand, could be potentially hazardous. Even one of these meteors, such as the Chelyabinsk meteor, can cause damage if not addressed, as it released an airburst that destroyed many glass windows and caused hundreds of injuries. This was 'only' a 15-meter diameter asteroid. Stopping one of these objects is more complex than you might think. Imagine someone throwing a 1 kg ball of steel from an airplane, destined to fall on your car, and you have to find a way to catch it safely before it damages your car or injures someone. Although it is no simple task, there have been recent studies and missions showing promising results for tackling these threats both in the short and long term.",
    illustrationOne:
      "../assets/articleImages/isEarthDefenslessAgainstAsteroidsAndComets/NASAJohnsHopkinsAPL2024.jpg",
    textTwo:
      "The first method, which you may have already come across in the news in recent years, is NASA's mission DART (Double Asteroid Redirection Test). The main concept behind this idea is sending a probe towards the target (asteroid or comet) and changing its orbit so that, if it was on course toward Earth, it would shift its orbit to avoid an impact event. The probe is a kinetic impactor—essentially a mass with a certain shape and speed, which, when smashed into the target, produces a small explosion causing the target to release an ejecta of mass and gas. This creates a force that alters its orbit. DART successfully impacted Dimorphos (an asteroid orbiting another asteroid, similarly to how the Moon orbits Earth) in 2022 and was able to alter its orbit around its parent asteroid, Didymos. Although this method was successful, it requires early detection of the object in order for a kinetic impactor to effectively alter its course. So, in the long run, this method has shown to be an efficient potential solution, but what about the short term, when we only notice an object about to hit Earth a couple of months in advance?",
    illustrationTwo:
      "../assets/articleImages/isEarthDefenslessAgainstAsteroidsAndComets/PIImpactor.jpg",
    textThree:
      "Fortunately, a promising paper written by Luben and Cohen in 2023 seems to have found a successful way to mitigate hazardous objects in both the short and long term, depending on their size. The method is called Pulverize-It (PI for short) and is essentially a similar concept to that of DART, with the key difference being that it’s not one kinetic impactor targeting the object, but a full 10x10 to 40x40 grid of hypervelocity kinetic impactors designed to break down an asteroid so that its fragments reach a diameter of 10 meters (or less). Computer simulations run during this study have shown that this method is not only able to mitigate asteroids as small as 15 meters in diameter (like the Chelyabinsk meteor) just 86 seconds before impact, but it can also mitigate asteroids up to 1 km in diameter 60 days before impact. After the asteroid has been broken down into 10-meter (or smaller) fragments, these are left to fall toward Earth, where the atmosphere does the hard work for us, breaking these fragments into smaller explosions that will cause minimal damage to the population. This includes avoiding airbursts, which for a 10-meter fragment would occur at a height of 30 km or less from the ground. This means that not only would this method allow us to mitigate these threats, but we would also be able to avoid any significant damage to the people and cities below the impact point.",
    textFour:
      "Although the second method is based on computer simulations, it's still one of the best current methods that could potentially tackle dangers in both the short and long term, unlike the kinetic impact method, which can 'only' mitigate threats in the long term. Perhaps further observation methods could be put into place specifically to constantly stay alert for any possible close encounters that could be hazardous on both small and large scales. One could also train AI models to sift through the thousands of data sets to see if something was missed and potentially detect the next threat Earth may face in the near or distant future.",
    conclusionImage:
      "../assets/articleImages/isEarthDefenslessAgainstAsteroidsAndComets/watchingMeteor.jpg",
    conclusion:
      "Currently, these two methods seem to be the most promising, but further studies, methods, and research must be done in order to develop a proper planetary defence strategy to protect our planet from such threats. A planetary defence system is key to safeguarding our planet and protecting the life it hosts.",
    references:
      "Lubin P., Cohen AN, (2023) ‘Asteroid interception and disruption for terminal planetary defense’, Advances in Space Research, vol 71 (issue 3), page 1827-1839. Available at: https://www.sciencedirect.com/science/article/pii/S0273117722009395 (Accessed on: September 9, 2024)_________NASA/Johns Hopkins APL (2024), ‘Illustration of DART 2 – Illustration of  DART, from behind the NEXT-C ion engine’ [Digital Art], Available at: https://dart.jhuapl.edu/Gallery/index.php (Accessed on: September 9, 2024)",
    author: "Nino J. Traverso - 2024",
  },
  {
    id: 4,
    title: "How do we find exoplanets?",
    frontImage: "../assets/articleImages/howDoWeFindExoplanets/exoplanets.jpg",
    briefing:
      "Ever wondered how astronomers discover distant worlds beyond our Solar System? From tracking tiny shifts in starlight to directly imaging alien planets, these methods reveal the secrets of planets orbiting distant stars, expanding our understanding of the universe.",
    introduction:
      "Since the first exoplanet discovery, back in 1992 of 51 Pegasi b [1], we’ve come to discover nearly 6,000 alien worlds in our galaxy [2]. Not only the number of discovered exoplanets increased exponentially over the years, so did the detection methods. Like in our Solar System, some of these might be rocky-like planets, others could be gas giants like Jupiter and Saturn, while others might be closer to Ice Giants like Uranus and Neptune. In this article we’ll explore the different detection methods used by scientists to discover alien worlds outside our own Solar System. There are five main methods to detect exoplanets: 1.	Transit method - 4,342 discoveries 2.	Radial velocity - 1,098 discoveries (including 51 Pegasi b) 3.	Gravitational Microlensing - 235 discoveries 4.	Direct Imaging – 82 discoveries 5.	Astrometry – 3 discoveries [3].",
    textOne:
      "The Radial Velocity method involves in observing spectrum shifts in a star’s brightness caused by the Doppler Effect. Generally speaking, a star is the centre of the system with planets orbiting around it (like the Sun and our planets). Planets though do have masses, especially giant ones like Saturn and Jupiter which exert some gravitational pull over the star (even if small). This causes the star to “move” a little bit towards that force, meaning that in the opposite direction it will appear, for a certain amount of time, that the star is moving “away” from us causing it’s spectrum to slightly shift towards red. This happens because, as it moves away, the star’s light wavelengths are being “stretched” and become longer, getting slightly closer towards the lower band of the light spectrum. The same happens when the observer is “on the other side” of the star where the planet is, “squeezing” the satr's light wavelengths and making its spectrum shift more towards the higher band of light. Astronomers call this effect “Blue shift” and “Red shift”, caused by the Doppler Effect, which tells us if an object is moving away or towards us, the observers.",
    illustrationOne:
      "../assets/articleImages/howDoWeFindExoplanets/transitExoplanet.jpg",
    textTwo:
      "The transit method involves observing a star’s brightness and, if an exoplanet orbiting it passes in front of it partially or completely (compared to us, the observers), a dip will then appear in the overall observed brightness of the star confirming the presence of an exoplanet orbiting the star. A transiting exoplanet can tell us its surface temperature, size and atmosphere [4]. The reason why we can obtain this information about its atmosphere is because each star has a spectrum which tells us their chemical composition. As we observe the transiting exoplanet, we can compare the star’s spectrum before and during a transit, occasionally allowing us to measure some of the exoplanets’ atmospheric composition.",
    illustrationTwo:
      "../assets/articleImages/howDoWeFindExoplanets/gravitationalMicrolensing.jpg",
    textThree:
      "Gravitational Microlensing involves observing two stars orbiting each other – one brighter star, that we’ll call A, and a dimmer star that we’ll call B. As B orbits A it can cause a Microlensing effect (space-time distortion) allowing instruments to measure A’s brightness. As B passes in front of A, A’s brightness will start to increase due to the Microlensing Effect, reaching a peak when B is right “in front” of A, and then decreasing as B continues on its orbit. Plotting a graph of the brightness over time, a bell curved shape will appear. In the case where an exoplanet orbits B, during the time that is passes in front of A, the exoplanet will cause a change in the bell curve shaped graph showing a small, short increase in A’s brightness during B’s passage, allowing us to detect the exoplanet. [5]",
    textFour:
      "Direct Imagining, as the name suggests, allows us to directly image the exoplanet orbiting its parent star. Like the planets in our solar system reflect light coming from the Sun, allowing us to see them even by the naked eye, the same can occur on extrasolar systems where a planet can reflect its star light allowing us, as the naming of this methods suggests, to directly observe and image them.",
    conclusionImage:
      "../assets/articleImages/howDoWeFindExoplanets/exoplanetDoublestar.jpg",
    conclusion:
      "Lastly, Astrometry has so far allowed us to discover three exoplanets [3] by observing a star’s motion in the sky compared to nearby stars. If a wobble is noticed while observing a star compared to nearby stars, we can determine the presence of an exoplanet. With approximately 100 billion stars in the Milky Way, we are surely on the road to make thousands of discoveries in the near future, enhancing our knowledge of extrasolar systems and our understanding of the universe.",
    references:
      "[1] Wikipedia, “51 Pegasi b,” 20 January 2025. [Online]. Available: " +
      "https://en.wikipedia.org/wiki/51_Pegasi_b. [Accessed 30 January 2025].\n" +
      "[2] NASA, ipac, NExScl, Caltech, “Nasa Exoplanet Archive,” n.d. [Online]. Available: " +
      "https://exoplanetarchive.ipac.caltech.edu/docs/counts_detail.html. [Accessed 30 January 2025].\n" +
      "[3] NASA, “5 Ways to Find a Planet,” n.d. [Online]. Available: " +
      "https://exoplanets.nasa.gov/alien-worlds/ways-to-find-a-planet/?intent=021. [Accessed 30 January 2025].\n" +
      "[4] LCO - Las Cumbres Observatory, “Transit Method,” n.d. [Online]. Available: " +
      "https://lco.global/spacebook/exoplanets/transit-method/. [Accessed 30 January 2025].\n" +
      "[5] LCO - Las Cumbres Observatory, “Gravitational Microlensing,” n.d. [Online]. Available: " +
      "https://lco.global/spacebook/exoplanets/gravitational-microlensing/. [Accessed 30 January 2025].",

    author: "Nino J. Traverso - 10/02/2025",
  },
];

export default articles;
