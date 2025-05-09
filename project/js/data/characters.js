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
    sex: "male",
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
      "Vulcan"
    ],
    sex: "male",
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
    name: "Leonard H. McCoy",
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
    sex: "male",
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
    titles: "",
    altNames: [
      "Scotty"
    ],
    species: [
      "Human"
    ],
    sex: "male",
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
      media.TNG,
      media.GEN,
      media.ST09,
      media.STID,
      media.STB,
      media.SNW
    ],
    images: [
      {
        path: "scotty_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "James Doohan"
      },
      {
        path: "scotty_1.jpg",
        year: 2369,
        media: media.TNG,
        actor: "James Doohan"
      },
      {
        path: "scotty_2.jpg",
        year: 2270,
        media: media.TAS,
        actor: "James Doohan"
      },
      {
        path: "scotty_3.jpg",
        year: 2259,
        media: media.SNW,
        actor: "Martin Quinn"
      }
    ]
  },
  {
    id: 4,
    name: "Hikaru Sulu",
    description: "Helmsman aboard the USS Enterprise",
    firstNames: "Hikaru",
    lastName: "Sulu",
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant",
    occupation: "Helmsman",
    serialNumber: null,
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
      },
      {
        path: "sulu_1.jpg",
        year: 2293,
        media: media.TUC,
        actor: "George Takei"
      },
      {
        path: "sulu_2.jpg",
        year: 2269,
        media: media.TAS,
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
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "female",
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
      media.STB,
      media.SNW
    ],
    images: [
      {
        path: "uhura_0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "Nichelle Nichols"
      },
      {
        path: "uhura_1.jpg",
        year: 2293,
        media: media.TUC,
        actor: "Nichelle Nichols"
      },
      {
        path: "uhura_2.jpg",
        year: 2270,
        media: media.TAS,
        actor: "Nichelle Nichols"
      },
      {
        path: "uhura_3.jpg",
        year: 2259,
        media: media.SNW,
        actor: "Celia Rose Gooding"
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
    sex: "male",
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
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "male",
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
      },
      {
        path: "picard_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Patrick Stewart"
      },
      {
        path: "picard_2.jpg",
        year: 2401,
        media: media.PIC,
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
    sex: "male",
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
      },
      {
        path: "riker_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Jonathan Frakes"
      },
      {
        path: "riker_2.jpg",
        year: 2401,
        media: media.PIC,
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
    titles: "",
    altNames: [],
    species: [
      "Betazoid"
    ],
    sex: "female",
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
      },
      {
        path: "troi_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Marina Sirtis"
      },
      {
        path: "troi_2.jpg",
        year: 2401,
        media: media.PIC,
        actor: "Marina Sirtis"
      },
      {
        path: "troi_3.jpg",
        year: 2380,
        media: media.LOW,
        actor: "Marina Sirtis"
      }
    ]
  },
  {
    id: 103,
    name: "Worf",
    description: "Chief of security aboard the USS Enterprise-D",
    firstNames: "",
    lastName: "Worf",
    titles: "Captain",
    altNames: [],
    species: [
      "Klingon"
    ],
    sex: "male",
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
      },
      {
        path: "worf_1.jpg",
        year: 2373,
        media: media.FC,
        actor: "Michael Dorn"
      },
      {
        path: "worf_2.jpg",
        year: 2401,
        media: media.PIC,
        actor: "Michael Dorn"
      }
    ]
  },
  {
    id: 104,
    name: "Data",
    description: "Chief medical officer aboard the USS Enterprise-D",
    firstNames: "Data",
    lastName: "",
    titles: "",
    altNames: [],
    species: [
      "Android"
    ],
    sex: "male",
    homePlanet: "Omicron Theta",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant commander",
    occupation: "Operations management officer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E
    ],
    status: "active",
    birthDate: "2338-02-02",
    birthPlace: "Omicron Theta",
    deathDate: null,
    deathPlace: null,
    maritalStatus: null,
    father: "Noonien Soong",
    mother: "Juliana Soong",
    siblings: [
      "B-4",
      "Lore"
    ],
    partners: [],
    actors: [
      "Brent Spiner"
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
        path: "data_0.jpg",
        year: 2366,
        media: media.TNG,
        actor: "Brent Spiner"
      },
      {
        path: "data_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Brent Spiner"
      }
    ]
  },
  {
    id: 105,
    name: "Geordi La Forge",
    description: "Chief medical officer aboard the USS Enterprise-D",
    firstNames: "Geordi",
    lastName: "La Forge",
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Commodore",
    occupation: "Fleet Museum Curator",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E
    ],
    status: "active",
    birthDate: "2338-02-02",
    birthPlace: "Earth,African Confederation,Somalia,Mogadishu",
    deathDate: null,
    deathPlace: null,
    maritalStatus: null,
    father: "Edward M. La Forge",
    mother: "Silva La Forge",
    siblings: [
      "Ariana La Forge",
    ],
    partners: [],
    actors: [
      "LeVar Burton"
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
        path: "laforge_0.jpg",
        year: 2368,
        media: media.TNG,
        actor: "LeVar Burton"
      },
      {
        path: "laforge_1.jpg",
        year: 2379,
        media: meüdia.NEM,
        actor: "LeVar Burton"
      },
      {
        path: "laforge_2.jpg",
        year: 2401,
        media: media.PIC,
        actor: "LeVar Burton"
      }
    ]
  },
  {
    id: 106,
    name: "Beverly Crusher",
    description: "Chief medical officer aboard the USS Enterprise-D",
    firstNames: "Beverly",
    lastName: "Crusher",
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "female",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Admiral",
    occupation: "Head of Starfleet Medical",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E
    ],
    status: "active",
    birthDate: "2324-10-13",
    birthPlace: "Luna,Copernicus City",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "widow",
    father: "Paul Howard",
    mother: "Isabel Howard",
    siblings: [],
    partners: [
      "Jack R. Crusher"
    ],
    actors: [
      "Gates McFadden"
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
        path: "crusher_0.jpg",
        year: 2364,
        media: media.TNG,
        actor: "Gates McFadden"
      },
      {
        path: "crusher_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Gates McFadden"
      },
      {
        path: "crusher_2.jpg",
        year: 2402,
        media: media.PIC,
        actor: "Gates McFadden"
      }
    ]
  },
  {
    id: 107,
    name: "Wesley Crusher",
    description: "Son of Beverly Crusher",
    firstNames: "Wesley",
    lastName: "Crusher",
    titles: "",
    altNames: [],
    species: [
      "Human"
    ],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant junior grade",
    occupation: "Traveler",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE_D,
      ships.ENTERPRISE_E
    ],
    status: "active",
    birthDate: "2348",
    birthPlace: null,
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Jack R. Crusher",
    mother: "Beverly Crusher",
    siblings: [
      "Jack Crusher"
    ],
    partners: [],
    actors: [
      "Wil Wheaton"
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
        path: "crusherw_0.jpg",
        year: 2364,
        media: media.TNG,
        actor: "Wil Wheaton"
      },
      {
        path: "crusherw_1.jpg",
        year: 2379,
        media: media.NEM,
        actor: "Wil Wheaton"
      },
      {
        path: "crusherw_2.jpg",
        year: 2401,
        media: media.PIC,
        actor: "Wil Wheaton"
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
    sex: "male",
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
    titles: "",
    altNames: [],
    species: ["Bajoran"],
    sex: "female",
    homePlanet: "Bajor",
    affiliation: "Federation Starfleet",
    rank: "Colonel",
    occupation: "Commanding officer",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: "2343",
    birthPlace: "Bajor",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Kira Taban",
    mother: "Kira Meru",
    siblings: [
      "Kira Reon",
      "Kira Pohl"
    ],
    partners: [],
    actors: [
      "Nana Visitor"
    ],
    media: [
      media.DS9,
      media.LOW
    ],
    images: [
      {
        path: "nerys_0.jpg",
        year: 2375,
        media: media.DS9,
        actor: "Nana Visitor"
      },
      {
        path: "nerys_1.jpg",
        year: 2381,
        media: media.LOW,
        actor: "Nana Visitor"
      }
    ]
  },
  {
    id: 202,
    name: "Odo",
    description: "Shape-shifting security officer aboard Deep Space Nine",
    firstNames: "Odo",
    lastName: "",
    titles: "",
    altNames: [],
    species: ["Changeling"],
    sex: "male",
    homePlanet: null,
    affiliation: "Great Link",
    rank: "Chief of Security",
    occupation: "Security Officer",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9
    ],
    status: "active",
    birthDate: null,
    birthPlace: null,
    deathDate: null,
    deathPlace: null,
    maritalStatus: "divorced",
    father: null,
    mother: null,
    siblings: [],
    partners: [
      "Lwaxana Troi",
    ],
    actors: [
      "René Auberjonois"
    ],
    media: [
      media.DS9
    ],
    images: [
      {
        path: "odo_0.jpg",
        year: 2375,
        media: media.DS9,
        actor: "René Auberjonois"
      }
    ]
  },
  {
    id: 203,
    name: "Julian Bashir",
    description: "Chief Medical Officer aboard Deep Space Nine",
    firstNames: "Julian",
    lastName: "Bashir",
    titles: "Doctor",
    altNames: [],
    species: ["Human Augment"],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant",
    occupation: "Chief medical officer",
    serialNumber: null,
    ships: [
      ships.DEEP_SPACE_9,
      ships.DEFIANT
    ],
    status: "active",
    birthDate: "2341",
    birthPlace: "Earth",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Richard Bashir",
    mother: "Amsha Bashir",
    siblings: [],
    partners: [],
    actors: [
      "Alexander Siddig"
    ],
    media: [
      media.DS9
    ],
    images: [
      {
        path: "bashir_0.jpg",
        year: 2373,
        media: media.DS9,
        actor: "Alexander Siddig"
      }
    ]
  },
  {
    id: 204,
    name: "Quark",
    description: "Ferengi bartender and owner of a bar on Deep Space Nine",
    firstNames: "Quark",
    lastName: "",
    titles: "",
    altNames: [],
    species: ["Ferengi"],
    sex: "male",
    homePlanet: "Ferenginar",
    affiliation: null,
    rank: null,
    occupation: "Entrepeneur",
    serialNumber: null,
    ships: [],
    status: "active",
    birthDate: null,
    birthPlace: "Ferenginar",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "divorced",
    father: "Keldar",
    mother: "Ishka",
    siblings: [
      "Rom"
    ],
    partners: [
      "Grilka"
    ],
    actors: [
      "Armin Shimerman"
    ],
    media: [
      media.DS9,
      media.LOW
    ],
    images: [
      {
        path: "quark_0.jpg",
        year: 2375,
        media: media.DS9,
        actor: "Armin Shimerman"
      },
      {
        path: "quark_1.jpg",
        year: 2381,
        media: media.LOW,
        actor: "Armin Shimerman"
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
    sex: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Admiral",
    occupation: "President of the Federation",
    serialNumber: "SA-022-9237-CY",
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2112",
    birthPlace: "Earth,United States of America,New York,Upstate New York",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Henry Archer",
    mother: "Sally Archer",
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
    firstNames: "",
    lastName: "T'Pol",
    titles: "",
    altNames: [],
    species: ["Vulcan"],
    sex: "female",
    homePlanet: "Vulcan",
    affiliation: "United Earth Starfleet",
    rank: "Commander",
    occupation: "Science officer",
    serialNumber: "2861F0306JB1",
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: "2088",
    birthPlace: "Vulcan",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "annulled",
    father: null,
    mother: "T'Les",
    siblings: [],
    partners: ["Koss"],
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
    name: "Charles Tucker III",
    description: "Chief Engineer aboard the NX-01 Enterprise",
    firstNames: "Charles",
    lastName: "Tucker",
    titles: "",
    altNames: [
      "Trip"
    ],
    species: ["Human"],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Commander",
    occupation: "Chief engineer",
    serialNumber: null,
    ships: [
      ships.ENTERPRISE
    ],
    status: "deceased",
    birthDate: "2121",
    birthPlace: "Earth,United States of America",
    deathDate: "2161",
    deathPlace: "USS Enterprise",
    maritalStatus: "single",
    father: "Charles Tucker II",
    mother: null,
    siblings: ["Elizabeth Tucker"],
    partners: [],
    actors: [
      "Connor Trinneer"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "trip_0.jpg",
        year: 2161,
        media: media.ENT,
        actor: "Connor Trinneer"
      }
    ]
  },
  // possibly need fixing
  {
    id: 303,
    name: "Malcolm Reed",
    description: "Armory officer aboard the NX-01 Enterprise",
    firstNames: "Malcolm",
    lastName: "Reed",
    titles: "",
    altNames: [],
    species: ["Human"],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "United Earth Starfleet",
    rank: "Lieutenant",
    occupation: "Tactical officer",
    serialNumber: "4767M6701DK1",
    ships: [
      ships.ENTERPRISE
    ],
    status: "active",
    birthDate: null,
    birthPlace: null,
    deathDate: null,
    deathPlace: null,
    maritalStatus: "single",
    father: "Stuart Reed",
    mother: "Mary Reed",
    siblings: ["Madeline Reed"],
    partners: [],
    actors: [
      "Dominic Keating"
    ],
    media: [
      media.ENT
    ],
    images: [
      {
        path: "reed_0.jpg",
        year: 2154,
        media: media.ENT,
        actor: "Dominic Keating"
      }
    ]
  },
  {
    id: 304,
    name: "Hoshi Sato",
    description: "Communications officer aboard the NX-01 Enterprise",
    firstNames: "Hoshi",
    lastName: "Sato",
    titles: "",
    altNames: [],
    species: ["Human"],
    sex: "female",
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
    maritalStatus: "married",
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
        year: 2161,
        media: media.ENT,
        actor: "Linda Park"
      }
    ]
  },
  {
    id: 305,
    name: "Phlox",
    description: "Chief Medical Officer aboard the NX-01 Enterprise",
    firstNames: "Phlox",
    lastName: "",
    titles: "Doctor",
    altNames: [],
    species: ["Denobulan"],
    sex: "male",
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
        year: 2154,
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
    altNames: [],
    species: ["Human"],
    sex: "female",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Admiral",
    occupation: "Flag officer",
    serialNumber: "SC0064-0974SHN",
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: "Earth",
    deathDate: null,
    deathPlace: null,
    maritalStatus: "married",
    father: "Mike Burnham",
    mother: "Gabrielle Burnham",
    siblings: [],
    partners: [],
    actors: ["Sonequa Martin-Green"],
    media: [media.DIS],
    images: [
      {
        path: "burnham_0.jpg",
        year: 2256,
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
    lastName: "",
    titles: "Lieutenant Commander",
    altNames: [],
    species: ["Kelpien"],
    sex: "male",
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
        year: 3191,
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
    titles: "",
    altNames: [],
    species: ["Human"],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant Commander",
    occupation: "Astromycologist",
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
        year: 2256,
        media: media.DIS,
        actor: "Anthony Rapp"
      }
    ]
  },
  {
    id: 403,
    name: "Ash Tyler",
    description: "Security officer aboard the USS Discovery",
    firstNames: "Ash",
    lastName: "Tyler",
    titles: "",
    altNames: [],
    species: ["Klingon"],
    sex: "male",
    homePlanet: "Earth",
    affiliation: "Federation Starfleet",
    rank: "Lieutenant",
    occupation: "Security Officer",
    serialNumber: null,
    ships: [ships.DISCOVERY],
    status: "active",
    birthDate: null,
    birthPlace: null,
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
        year: 2257,
        media: media.DIS,
        actor: "Shazad Latif"
      }
    ]
  }
];
