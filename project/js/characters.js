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
        path: "scotty_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "James Doohan"
      }
    ]
  },
  {
    id: 4,
    name: "Hikaru Sulu",
    description: "Helmsman aboard the USS Enterprise",
    firstNames: "Hikaru",
    lastName: "Sulu",
    titles: null,
    altNames: [],
    species: [
      "Human"
    ],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant",
    occupation: "Helmsman",
    serialNumber: "SL-0000",
    ships: [
      ships.ENTERPRISE,
      ships.ENTERPRISE_A
    ],
    status: "active",
    birthDate: "2230-04-10",
    birthPlace: "Earth,United States of America,California,San Francisco",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "George Takei"
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
        path: "sulu_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "George Takei"
      }
    ]
  },
  {
    id: 5,
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
    id: 6,
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
    homePlanet: "Qo'noS",
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
    birthPlace: "Qo'noS",
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
  },
  {
    id: 200,
    name: "Benjamin Sisko",
    description: "Commander and later Captain of Deep Space Nine",
    firstNames: "Benjamin",
    lastName: "Sisko",
    titles: "Captain",
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Captain",
    occupation: "Emissary of the Prophets",
    serialNumber: "DS9-001",
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "missing",
    birthDate: "2332",
    birthPlace: "Earth,United States of America,Louisiana,New Orleans",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: null,
    mother: null,
    siblings: ["Judith Sisko"],
    partners: [
      "Kassidy Yates-Sisko",
      "Jennifer Sisko"
    ],
    actors: [
      "Avery Brooks"
    ],
    media: [
      media.DS9
    ],
    images: [
      {
        path: "sisko_0.jpg",
        year: 2371,
        media: media.DS9,
        actor: "Avery Brooks"
      }
    ]
  },
  {
    id: 201,
    name: "Kira Nerys",
    description: "Former Bajoran resistance fighter and station commander on Deep Space Nine",
    firstNames: "Kira",
    lastName: "Nerys",
    titles: null,
    altNames: [],
    species: ["Bajoran"],
    gender: "female",
    homePlanet: "Bajor",
    affiliation: "Bajoran Militia / Federation",
    rank: "Colonel",
    occupation: "Military officer",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: "2333-05-08",
    birthPlace: "Bajor",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Nana Visitor"
    ],
    media: [
      media.DS9,
      media.DIS
    ],
    images: [
      {
        path: "kira_0.jpg",
        year: 2369,
        media: media.DS9,
        actor: "Nana Visitor"
      }
    ]
  },
  {
    id: 202,
    name: "Odo",
    description: "Shape-shifting security officer aboard Deep Space Nine",
    firstNames: "Odo",
    lastName: null,
    titles: null,
    altNames: [],
    species: ["Changeling"],
    gender: "male",
    homePlanet: "Unknown",
    affiliation: "Deep Space Nine Security",
    rank: "Chief of Security",
    occupation: "Security Officer",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: null,
    birthPlace: "The Great Link",
    deathDate: null,
    deathPlace: null,
    maritalStatus: null,
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "René Auberjonois"
    ],
    media: [
      media.DS9,
      media.DIS
    ],
    images: [
      {
        path: "odo_0.jpg",
        year: 2369,
        media: media.DS9,
        actor: "René Auberjonois"
      }
    ]
  },
  {
    id: 203,
    name: "Quark",
    description: "Ferengi bartender and owner of a bar on Deep Space Nine",
    firstNames: "Quark",
    lastName: null,
    titles: null,
    altNames: [],
    species: ["Ferengi"],
    gender: "male",
    homePlanet: "Ferenginar",
    affiliation: "None",
    rank: null,
    occupation: "Bar owner / Merchant",
    serialNumber: null,
    ships: [],
    status: "active",
    birthDate: null,
    birthPlace: "Ferenginar",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Armin Shimerman"
    ],
    media: [
      media.DS9,
      media.DIS
    ],
    images: [
      {
        path: "quark_0.jpg",
        year: 2369,
        media: media.DS9,
        actor: "Armin Shimerman"
      }
    ]
  },
  {
    id: 204,
    name: "Julian Bashir",
    description: "Chief Medical Officer aboard Deep Space Nine",
    firstNames: "Julian",
    lastName: "Bashir",
    titles: "Doctor",
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Commander",
    occupation: "Doctor",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: "2336-04-15",
    birthPlace: "Earth",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Alexander Siddig"
    ],
    media: [
      media.DS9,
      media.DIS
    ],
    images: [
      {
        path: "bashir_0.jpg",
        year: 2369,
        media: media.DS9,
        actor: "Alexander Siddig"
      }
    ]
  },
  {
    id: 300,
    name: "Jonathan Archer",
    description: "Captain of the NX-01 Enterprise",
    firstNames: "Jonathan",
    lastName: "Archer",
    titles: "Captain",
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Captain",
    occupation: "Starfleet Captain",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2112-07-12",
    birthPlace: "Earth,United States,California,San Francisco",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Scott Bakula"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "archer_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "Scott Bakula"
      }
    ]
  },
  {
    id: 301,
    name: "T'Pol",
    description: "Science officer aboard the NX-01 Enterprise",
    firstNames: "T'Pol",
    lastName: null,
    titles: null,
    altNames: [],
    species: ["Vulcan"],
    gender: "female",
    homePlanet: "Vulcan",
    affiliation: "United Earth Starfleet / Vulcan",
    rank: "Commander",
    occupation: "Science Officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2100-01-01",
    birthPlace: "Vulcan",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Jolene Blalock"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "tpol_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "Jolene Blalock"
      }
    ]
  },
  {
    id: 302,
    name: "Charles 'Trip' Tucker III",
    description: "Chief Engineer aboard the NX-01 Enterprise",
    firstNames: "Charles",
    lastName: "Tucker",
    titles: null,
    altNames: [
      "Trip"
    ],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Lieutenant Commander",
    occupation: "Chief Engineer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2115-05-18",
    birthPlace: "Earth,United States,Texas,Houston",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Connor Trinneer"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "tucker_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "Connor Trinneer"
      }
    ]
  },
  {
    id: 303,
    name: "Malcolm Reed",
    description: "Armory officer aboard the NX-01 Enterprise",
    firstNames: "Malcolm",
    lastName: "Reed",
    titles: null,
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Lieutenant",
    occupation: "Armory Officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2110-02-20",
    birthPlace: "Earth,United States,Virginia,Richmond",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Anthony Montgomery"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "reed_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "Anthony Montgomery"
      }
    ]
  },
  {
    id: 304,
    name: "Hoshi Sato",
    description: "Communications officer aboard the NX-01 Enterprise",
    firstNames: "Hoshi",
    lastName: "Sato",
    titles: null,
    altNames: [],
    species: ["Human"],
    gender: "female",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Ensign",
    occupation: "Communications Officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2117-11-09",
    birthPlace: "Earth,United States,California,Los Angeles",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "Linda Park"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "sato_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "Linda Park"
      }
    ]
  },
  {
    id: 305,
    name: "Dr. Phlox",
    description: "Chief Medical Officer aboard the NX-01 Enterprise",
    firstNames: "Phlox",
    lastName: null,
    titles: "Doctor",
    altNames: [],
    species: ["Denobulan"],
    gender: "male",
    homePlanet: "Denobula",
    affiliation: "United Earth Starfleet",
    rank: "Commander",
    occupation: "Chief Medical Officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_NX1
    ],
    status: "active",
    birthDate: null,
    birthPlace: "Denobula",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: [
      "John Billingsley"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "phlox_0.jpg",
        year: 2151,
        media: media.ENT,
        actor: "John Billingsley"
      }
    ]
  },
  {
    id: 400,
    name: "Michael Burnham",
    description: "Science specialist and former Starfleet officer aboard the USS Discovery",
    firstNames: "Michael",
    lastName: "Burnham",
    titles: "Commander",
    altNames: ["Burnham"],
    species: ["Human"],
    gender: "female",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Commander",
    occupation: "Science Specialist",
    serialNumber: null,
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: "Earth",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: ["Sonequa Martin-Green"],
    media: [media.DIS],
    images: [
      {
        path: "burnham_0.jpg",
        year: 2255,
        media: media.DIS,
        actor: "Sonequa Martin-Green"
      }
    ]
  },
  {
    id: 401,
    name: "Saru",
    description: "First officer aboard the USS Discovery and a pioneering Kelpien",
    firstNames: "Saru",
    lastName: null,
    titles: "Lieutenant Commander",
    altNames: [],
    species: ["Kelpien"],
    gender: "male",
    homePlanet: "Kaminar",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant Commander",
    occupation: "First Officer",
    serialNumber: null,
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: "Kaminar",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: ["Doug Jones"],
    media: [media.DIS],
    images: [
      {
        path: "saru_0.jpg",
        year: 2255,
        media: media.DIS,
        actor: "Doug Jones"
      }
    ]
  },
  {
    id: 402,
    name: "Paul Stamets",
    description: "Chief engineer aboard the USS Discovery and a brilliant astromycologist",
    firstNames: "Paul",
    lastName: "Stamets",
    titles: null,
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant Commander",
    occupation: "Engineer / Astromycologist",
    serialNumber: null,
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: "Unknown",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: ["Anthony Rapp"],
    media: [media.DIS],
    images: [
      {
        path: "stamets_0.jpg",
        year: 2255,
        media: media.DIS,
        actor: "Anthony Rapp"
      }
    ]
  },
  {
    id: 403,
    name: "Ash Tyler",
    description: "Security officer aboard the USS Discovery with a mysterious past",
    firstNames: "Ash",
    lastName: "Tyler",
    titles: null,
    altNames: [],
    species: ["Human"],
    gender: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant",
    occupation: "Security Officer",
    serialNumber: null,
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: "Unknown",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: null,
    mother: null,
    siblings: [],
    partners: [],
    actors: ["Shazad Latif"],
    media: [media.DIS],
    images: [
      {
        path: "tyler_0.jpg",
        year: 2255,
        media: media.DIS,
        actor: "Shazad Latif"
      }
    ]
  }
];
