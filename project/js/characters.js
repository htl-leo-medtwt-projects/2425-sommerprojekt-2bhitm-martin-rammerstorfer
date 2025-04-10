/// <reference path="ships.js" />
/// <reference path="media.js" />

let charactersArr = [
  {
    id: 0,
    name: "James T. Kirk",
    description: "Starfleet officer, captain of the USS Enterprise",
    firstNames: "James Tiberius",
    lastName: "Kirk",
    titles: null,
    altNames: [
      "Jim"
    ],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Starfleet officer",
    serialNumber: "SC937-0176CEC",
    ships: [
      ships.FARRAGUT,
      ships.ENTERPRISE,
      ships.ENTERPRISE_A,
      ships.ENTERPRISE_B
    ],
    status: "deceased",
    birthDate: "2233-03-22",
    birthPlace: "Earth,United States of America,Iowa,Riverside",
    deathDate: "2371",
    deathPlace: "Veridian III",
    maritalStatus: "widower",
    father: "George Kirk",
    mother: "Winona Kirk",
    siblings: [
      "George Samuel Kirk"
    ],
    partners: [
      "Miramanee"
    ],
    actors: [
      "William Shatner",
      "Paul Wesley"
    ],
    media: [
      media.TOS,
      media.TAS,
      media.TMP,
      media.TWOK,
      media.TSFS,
      media.TVH,
      media.TFF,
      media.TUC,
      media.GEN,
      media.ST09,
      media.STID,
      media.STB
    ],
    images: [
      {
        path: "kirk_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "William Shatner"
      },
      {
        path: "kirk_1.jpg",
        year: 2371,
        media: media.GEN,
        actor: "William Shatner"
      },
      {
        path: "kirk_2.jpg",
        year: 2269,
        media: media.TAS,
        actor: "William Shatner"
      },
      {
        path: "kirk_3.jpg",
        year: 2259,
        media: media.STID,
        actor: "Paul Wesley"
      }
    ]
  },
  {
    id: 1,
    name: "Spock",
    description: "Science officer aboard the USS Enterprise",
    firstNames: "S'chn T'gai",
    lastName: "Spock",
    titles: null,
    altNames: [],
    species: [
      "Vulcan",
      "Human"
    ],
    gender: "male",
    homePlanet: "Vulcan",
    affiliation: "United Federation of Planets",
    rank: "Captain",
    occupation: "Federation Ambassador",
    serialNumber: "S 179-276 SP",
    ships: [
      ships.ENTERPRISE,
      ships.ENTERPRISE_A,,
      ships.ARTEMIS,
      ships.SURAK,
      ships.INTREPID_II,
      ships.MONITOR,
      ships.DEFIANT
    ],
    status: "missing in action",
    birthDate: "2230-03-26",
    birthPlace: "Vulcan",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "divorced",
    father: "Sarek",
    mother: "Amanda Grayson",
    siblings: [
      "Sybok",
      "Michael Burnham"
    ],
    partners: [
      "T'Pring"
    ],
    actors: [
      "Leonard Nimoy",
      "Ethan Peck"
    ],
    media: [
      media.TC,
      media.TOS,
      media.TAS,
      media.TMP,
      media.TWOK,
      media.TSFS,
      media.TVH,
      media.TFF,
      media.TUC,
      media.TNG,
      media.GEN,
      media.ST09,
      media.STID,
      media.STB,
      media.DIS,
      media.SNW
    ],
    images: [
      {
        path: "spock_0.jpg",
        year: 2265,
        media: media.TOS,
        actor: "Leonard Nimoy"
      },
      {
        path: "spock_1.jpg",
        year: 2293,
        media: media.TUC,
        actor: "Leonard Nimoy"
      },
      {
        path: "spock_2.jpg",
        year: 2387,
        media: media.STID,
        actor: "Leonard Nimoy"
      },
      {
        path: "spock_3.jpg",
        year: 2259,
        media: media.SNW,
        actor: "Ethan Peck"
      }
    ]
  },
  {
    id: 2,
    name: "Leonard McCoy",
    description: "Chief medical officer aboard the USS Enterprise",
    firstNames: "Leonard Horatio",
    lastName: "McCoy",
    titles: "Dr.",
    altNames: [
      "Bones",
      "Doc"
    ],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Admiral",
    occupation: "Doctor",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE,
      ships.ENTERPRISE_A
    ],
    status: "retired",
    birthDate: "2227-02-16",
    birthPlace: "Earth,United States of America,Georgia,Atlanta",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "divorced",
    father: "David McCoy",
    mother: "Eleanora McCoy",
    siblings: [
      "Donna McCoy"
    ],
    partners: [
      "Natira"
    ],
    actors: [
      "DeForest Kelley",
      "Karl Urban"
    ],
    media: [
      media.TOS,
      media.TAS,
      media.TMP,
      media.TWOK,
      media.TSFS,
      media.TVH,
      media.TFF,
      media.TUC,
      media.GEN,
      media.ST09,
      media.STID,
      media.STB
    ],
    images: [
      {
        path: "mccoy_0.jpg",
        year: 2268,
        media: media.TOS,
        actor: "DeForest Kelley"
      },
      {
        path: "mccoy_1.jpg",
        year: 2293,
        media: media.TUC,
        actor: "DeForest Kelley"
      },
      {
        path: "mccoy_2.jpg",
        year: 2269,
        media: media.TAS,
        actor: "DeForest Kelley"
      },
      {
        path: "mccoy_3.jpg",
        year: 2263,
        media: media.STB,
        actor: "Karl Urban"
      }
    ]
  },
  {
    id: 3,
    name: "Christopher Pike",
    description: "Starfleet officer, captain of the USS Enterprise",
    firstNames: "Christopher",
    lastName: "Pike",
    titles: null,
    altNames: [
      "Captain Pike"
    ],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Fleet captain",
    occupation: "Starfleet officer",
    serialNumber: "TG009-00995501",
    ships: [
      ships.ANTARES,
      ships.CHATELET,
      ships.ARYABHATTA,
      ships.ENTERPRISE,
      ships.ENTERPRISE_A,
      ships.ENTERPRISE_B
    ],
    status: "active",
    birthDate: null,
    birthPlace: "Earth,United States of America,California,Mojave",
    deathDate: null,
    deathPlace: null,
    maritalStatus: null,
    father: "Charlie Pike",
    mother: "Willa McKinnies",
    siblings: [],
    partners: [],
    actors: [
      "Jeffrey Hunter",
      "Sean Kenney",
      "Anson Mount"
    ],
    media: [
      media.TC,
      media.TOS,
      media.ST09,
      media.STID,
      media.DIS,
      media.SNW
    ],
    images: [
      {
        path: "pike_0.jpg",
        year: 2254,
        media: media.TC,
        actor: "Jeffrey Hunter"
      },
      {
        path: "pike_1.jpg",
        year: 2267,
        media: media.TOS,
        actor: "Sean Kenney"
      },
      {
        path: "pike_2.jpg",
        year: 2259,
        media: media.SNW,
        actor: "Anson Mount"
      }
    ]
  },
];
