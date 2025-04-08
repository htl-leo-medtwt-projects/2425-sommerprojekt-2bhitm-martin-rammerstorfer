/// <reference path="ships.js" />
/// <reference path="characters.js" />

let media = {
  TC: {
    id: 0,
    name: "The Cage",
    abbreviation: "TC",
    description: "Pilot episode of Star Trek: The Original Series",
    type: "episode",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 63,
    totalLengthMinutes: 63,
    firstAired: "1965-01-23",
    lastAired: "1965-01-23",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tc0.jpg"
      }
    ]
  },
  TOS: {
    id: 1,
    name: "Star Trek: The Original Series",
    abbreviation: "TOS",
    description: "The first Star Trek television series, following the adventures of the starship Enterprise",
    type: "series",
    seasons: 3,
    episodes: 79,
    avgLengthMinutes: 50,
    totalLengthMinutes: 3950,
    firstAired: "1966-09-08",
    lastAired: "1969-06-03",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tos0.jpg"
      }
    ]
  },
  TAS: {
    id: 2,
    name: "Star Trek: The Animated Series",
    abbreviation: "TAS",
    description: "An animated continuation of Star Trek: The Original Series",
    type: "series",
    seasons: 2,
    episodes: 22,
    avgLengthMinutes: 24,
    totalLengthMinutes: 528,
    firstAired: "1973-09-08",
    lastAired: "1974-10-12",
    isAnimated: true,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tas0.jpg"
      }
    ]
  },
  TMP: {
    id: 3,
    name: "Star Trek: The Motion Picture",
    abbreviation: "TMP",
    description: "The first Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 132,
    totalLengthMinutes: 132,
    firstAired: "1979-12-07",
    lastAired: "1979-12-07",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tmp0.jpg"
      }
    ]
  },
  TWOK: {
    id: 4,
    name: "Star Trek II: The Wrath of Khan",
    abbreviation: "TWOK",
    description: "The second Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 113,
    totalLengthMinutes: 113,
    firstAired: "1982-06-04",
    lastAired: "1982-06-04",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "twok0.jpg"
      }
    ]
  },
  TSFS: {
    id: 5,
    name: "Star Trek III: The Search for Spock",
    abbreviation: "TSFS",
    description: "The third Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 105,
    totalLengthMinutes: 105,
    firstAired: "1984-06-01",
    lastAired: "1984-06-01",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tsfs0.jpg"
      }
    ]
  },
  TVH: {
    id: 6,
    name: "Star Trek IV: The Voyage Home",
    abbreviation: "TVH",
    description: "The fourth Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 119,
    totalLengthMinutes: 119,
    firstAired: "1986-11-26",
    lastAired: "1986-11-26",
    isAnimated: false,
    mainShip: ships.ENTERPRISE,
    characters: [],
    images: [
      {
        path: "tvh0.jpg"
      }
    ]
  },
  TFF: {
    id: 7,
    name: "Star Trek V: The Final Frontier",
    abbreviation: "TFF",
    description: "The fifth Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 107,
    totalLengthMinutes: 107,
    firstAired: "1989-06-09",
    lastAired: "1989-06-09",
    isAnimated: false,
    mainShip: ships.ENTERPRISE_A,
    characters: [],
    images: [
      {
        path: "tff0.jpg"
      }
    ]
  },
  TUC: {
    id: 8,
    name: "Star Trek VI: The Undiscovered Country",
    abbreviation: "TUC",
    description: "The sixth Star Trek feature film",
    type: "movie",
    seasons: null,
    episodes: null,
    avgLengthMinutes: 110,
    totalLengthMinutes: 110,
    firstAired: "1991-12-06",
    lastAired: "1991-12-06",
    isAnimated: false,
    mainShip: ships.ENTERPRISE_A,
    characters: [],
    images: [
      {
        path: "tuc0.jpg"
      }
    ]
  } 
};

let mediaArr = [
  media.TC,
  media.TOS,
  media.TAS,
  media.TMP,
  media.TWOK,
  media.TSFS,
  media.TVH,
  media.TFF,
  media.TUC,
  // media.TNG,
  // media.DS9,
  // media.GEN,
  // media.VOY,
  // media.FC,
  // media.INS,
  // media.NEM,
  // media.ENT,
  // media.ST09,
  // media.STID,
  // media.STB,
  // media.DIS,
  // media.SHO,
  // media.PIC,
  // media.LOW,
  // media.SNW,
  // media.S31
];

for (let i = 0; i < mediaArr.length; i++) {
  mediaArr[i].characters = charactersArr.filter(character => character.media.includes(mediaArr[i]));
}
