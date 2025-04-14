/// <reference path="ships.js" />
/// <reference path="media.js" />

let charactersArr = [
  {
    id: 0,
    name: "James T. Kirk",
    description: "Captain of the USS Enterprise",
    firstNames: "James Tiberius",
    lastName: "Kirk",
    titles: "Captain",
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
    titles: "Captain",
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
    titles: "Doctor",
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
    name: "Montgomery Scott",
    description: "Chief engineer aboard the USS Enterprise",
    firstNames: "Montgomery",
    lastName: "Scott",
    titles: null,
    altNames: [
      "Scotty"
    ],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Chief engineer",
    serialNumber: "SE 19754 T",
    ships: [
      ships.ENTERPRISE,
      ships.ENTERPRISE_A,
      ships.ENTERPRISE_B,
      ships.EXCELSIOR,
      ships.STARDIVER
    ],
    status: "active",
    birthDate: "2222",
    birthPlace: "Earth,United Kingdom,Scotland",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "James Doohan",
      "Martin Quinn",
      "Carlos Alazraqui",
      "Matthew Wolf"
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
      media.STB,
      media.LOW,
      media.SNW
    ],
    images: [
      {
        path: "scott_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "James Doohan"
      }
    ]
  },
  {
    id: 4,
    name: "Nyota Uhura",
    description: "Communications officer aboard the USS Enterprise",
    firstNames: "Nyota",
    lastName: "Uhura",
    titles: null,
    altNames: [],
    species: [
      "Human"
    ],
    gender: "female",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Commanding officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE,
      ships.ENTERPRISE_A,
      ships.LEONDEGRANCE
    ],
    status: "retired",
    birthDate: "2237",
    birthPlace: "Earth,Kenya",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Nichelle Nichols",
      "Celia Rose Gooding"
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
      media.ST09,
      media.STID,
      media.STB
    ],
    images: [
      {
        path: "uhura_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "Nichelle Nichols"
      }
    ]
  },
  {
    id: 5,
    name: "Christopher Pike",
    description: "Original captain of the USS Enterprise",
    firstNames: "Christopher",
    lastName: "Pike",
    titles: "Captain",
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
  {
    id: 100,
    name: "Jean-Luc Picard",
    description: "Captain of the USS Enterprise-D",
    firstNames: "Jean-Luc",
    lastName: "Picard",
    titles: null,
    altNames: [],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Admiral",
    occupation: "Flag officer",
    serialNumber: "SP-937-215",
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E,
      ships.STARGAZER
    ],
    status: "active",
    birthDate: "2305-07-13",
    birthPlace: "Earth,France,La Barre",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Maurice Picard",
    mother: "Yvette Picard",
    siblings: [
      "Robert Picard",
      "Marie Picard"
    ],
    partners: [],
    actors: [
      "Patrick Stewart"
    ],
    media: [
      media.TNG,
      media.GEN,
      media.FC,
      media.INS,
      media.NEM,
      media.DIS,
      media.PIC
    ],
    images: [
      {
        path: "picard_0.jpg",
        year: 2364,
        media: media.TNG,
        actor: "Patrick Stewart"
      }
    ]
  },
  {
    id: 101,
    name: "William T. Riker",
    description: "First officer of the USS Enterprise-D",
    firstNames: "William Thomas",
    lastName: "Riker",
    titles: "Captain",
    altNames: [],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Starfleet officer",
    serialNumber: "SC-231-427",
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E,
      ships.TITAN
    ],
    status: "active",
    birthDate: "2335-08-19",
    birthPlace: "Earth,United States of America,Alaska",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: "Kyle Riker",
    mother: "Betty Riker",
    siblings: [],
    partners: [
      "Deanna Troi"
    ],
    actors: [
      "Jonathan Frakes",
    ],
    media: [
      media.TNG,
      media.GEN,
      media.FC,
      media.INS,
      media.NEM,
      media.DIS,
      media.PIC
    ],
    images: [
      {
        path: "riker_0.jpg",
        year: 2364,
        media: media.TNG,
        actor: "Jonathan Frakes"
      }
    ]
  },
  {
    id: 102,
    name: "Deanna Troi",
    description: "Ship's counselor aboard the USS Enterprise-D",
    firstNames: "Deanna",
    lastName: "Troi",
    titles: null,
    altNames: [],
    species: [
      "Betazoid",
      "Human"
    ],
    gender: "female",
    homePlanet: "Betazed",
    affiliation: "Federation Starfleet",
    rank: "Commander",
    occupation: "Counselor",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E,
      ships.TITAN
    ],
    status: "active",
    birthDate: "2336-03-29",
    birthPlace: "Betazed",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: "Ian Andrew Troi",
    mother: "Lwaxana Troi",
    siblings: [
      "Kestra Troi"
    ],
    partners: [
      "William Riker"
    ],
    actors: [
      "Marina Sirtis",
    ],
    media: [
      media.TNG,
      media.GEN,
      media.VOY,
      media.FC,
      media.INS,
      media.NEM,
      media.DIS,
      media.PIC
    ],
    images: [
      {
        path: "troi_0.jpg",
        year: 2364,
        media: media.TNG,
        actor: "Marina Sirtis"
      }
    ]
  },
  {
    id: 103,
    name: "Worf",
    description: "Chief of security aboard the USS Enterprise-D",
    firstNames: null,
    lastName: "Worf",
    titles: "Captain",
    altNames: [],
    species: [
      "Klingon",
      "Human"
    ],
    gender: "male",
    homePlanet: "Qo-noS",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Starfleet officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E,
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: "2340",
    birthPlace: "Qo-noS",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "widower",
    father: "Mogh",
    mother: null,
    siblings: [
      "Kurn",
      "Nikolai Rozhenko",
      "Jeremy Aster"
    ],
    partners: [
      "Jadzia Dax"
    ],
    actors: [
      "Michael Dorn",
    ],
    media: [
      media.TNG,
      media.DS9,
      media.GEN,
      media.FC,
      media.INS,
      media.NEM,
      media.DIS,
      media.PIC
    ],
    images: [
      {
        path: "worf_0.jpg",
        year: 2366,
        media: media.TNG,
        actor: "Michael Dorn"
      }
    ]
  }
];
