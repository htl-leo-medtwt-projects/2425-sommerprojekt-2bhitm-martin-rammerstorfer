/// <reference path="ships.js" />
/// <reference path="media.js" />

let charactersArr = [
  {
    id: 0,
    name: "Christopher Pike",
    description: "",
    firstNames: "Christopher",
    lastName: "Pike",
    altNames: [],
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
    images: []
  },
  {
    id: 100,
    name: "James T. Kirk",
    description: "",
    firstNames: "James Tiberius",
    lastName: "Kirk",
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
        path: "kirk0.jpg",
        year: 2266,
        media: media.TOS,
        actor: "William Shatner"
      }
    ]
  }
];
