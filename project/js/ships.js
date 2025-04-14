/// <reference path="characters.js" />

let ships = {
  ENTERPRISE: {
    name: "USS Enterprise",
    registry: "NCC-1701",
    class: "Constitution II",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    // crew: [],
    images: [{ path: "enterprise_0.jpg" }]
  },
  ENTERPRISE_A: {
    name: "USS Enterprise-A",
    registry: "NCC-1701-A",
    class: "Constitution II",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    // crew: [],
    images: [{ path: "enterprise_a_0.jpg" }]
  },
  ENTERPRISE_B: {
    name: "USS Enterprise-B",
    registry: "NCC-1701-B",
    class: "Excelsior",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: [{ path: "enterprise_b_0.jpg" }]
  },
  ENTERPRISE_C: {
    name: "USS Enterprise-C",
    registry: "NCC-1701-C",
    class: "Ambassador",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    // crew: [],
    images: []
  },
  ENTERPRISE_D: {
    name: "USS Enterprise-D",
    registry: "NCC-1701-D",
    class: "Galaxy",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    // crew: [],
    images: []
  },
  ENTERPRISE_E: {
    name: "USS Enterprise-E",
    registry: "NCC-1701-E",
    class: "Sovereign",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "out of service",
    // crew: [],
    images: []
  },
  ENTERPRISE_F: {
    name: "USS Enterprise-F",
    registry: "NCC-1701-F",
    class: "Odyssey",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "decommissioned",
    // crew: [],
    images: []
  },
  ENTERPRISE_G: {
    name: "USS Enterprise-G",
    registry: "NCC-1701-G",
    class: "Constitution III",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: []
  },
  DEFIANT: {
    name: "USS Defiant",
    registry: "NX-74205",
    class: "Defiant",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: []
  },
  VOYAGER: {
    name: "USS Voyager",
    registry: "NCC-74656",
    class: "Intrepid",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: []
  },
  DISCOVERY: {
    name: "USS Discovery",
    registry: "NCC-1031",
    class: "Miranda",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    // crew: [],
    images: []
  },
  LA_SIRENA: {
    name: "SS La Sirena",
    registry: "NAR-93131",
    class: "Kaplan F17 Speed Freighter",
    owner: "Crist\u{00f3}bal Rios",
    operator: "Crist\u{00f3}bal Rios",
    status: "active",
    // crew: [],
    images: []
  },
  CERRITOS: {
    name: "USS Cerritos",
    registry: "NCC-75567",
    class: "California",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: []
  },
  EXCELSIOR: {
    name: "USS Excelsior",
    registry: "NCC-2000",
    class: "Excelsior",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    // crew: [],
    images: [{ path: "excelsior_0.jpg" }]
  },
  STARGAZER: {
    name: "USS Stargazer",
    registry: "NCC-2893",
    class: "Constellation",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    // crew: [],
    images: [{ path: "stargazer_0.jpg" }]
  },
  STARDIVER: {
    name: "USS Stardiver",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    // crew: [],
    images: []
  },
  TITAN: {
    name: "USS Titan",
    registry: "NCC-80102",
    class: "Luna",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "decommissioned",
    // crew: [],
    images: []
  },
  FARRAGUT: {
    name: "USS Farragut",
    registry: "NCC-1647",
    class: "Bellerophon",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    // crew: [],
    images: []
  },
  ANTARES: {
    name: "USS Antares",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    // crew: [],
    images: []
  },
  CHATELET: {
    name: "USS Chatelet",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    // crew: [],
    images: []
  },
  ARYABHATTA: {
    name: "USS Aryabhatta",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    // crew: [],
    images: []
  },
  ARTEMIS: {
    name: "USS Artemis",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    // crew: [],
    images: []
  },
  SURAK: {
    name: "USS Surak",
    registry: null,
    class: "Oberth",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "lost",
    // crew: [],
    images: []
  },
  INTREPID_II: {
    name: "USS Intrepid II",
    registry: null,
    class: "Oberth",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    // crew: [],
    images: []
  },
  MONITOR: {
    name: "USS Monitor",
    registry: null,
    class: "Defiant",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    // crew: [],
    images: []
  },
  LEONDEGRANCE: {
    name: "USS Leondegrance",
    registry: "NCC-2176",
    class: "Lancelot",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "decommissioned",
    // crew: [],
    images: []
  },
  DEEP_SPACE_9: {
    name: "Deep Space 9",
    registry: null,
    class: null,
    owner: "Bajoran Republic",
    operator: "Bajoran Militia",
    status: "active",
    // crew: [],
    images: []
  },
};

let shipsArr = [
  ships.ENTERPRISE,
  ships.ENTERPRISE_A,
  ships.ENTERPRISE_B,
  ships.ENTERPRISE_C,
  ships.ENTERPRISE_D,
  ships.ENTERPRISE_E,
  ships.ENTERPRISE_F,
  ships.ENTERPRISE_G,
  ships.DEFIANT,
  ships.VOYAGER,
  ships.DISCOVERY,
  ships.ANTARES,
  ships.CHATELET,
  ships.ARYABHATTA
];

// for (let i = 0; i < shipsArr.length; i++) {
//   shipsArr[i].crew = charactersArr.filter(character => character.ships.includes(shipsArr[i]));
// }
