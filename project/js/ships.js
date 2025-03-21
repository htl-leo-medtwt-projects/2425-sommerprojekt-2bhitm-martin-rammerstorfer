/// <reference path="characters.js" />

let ships = {
  ENTERPRISE: {
    name: "USS Enterprise",
    registry: "NCC-1701",
    class: "Constitution II",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    crew: [],
    images: [{ path: "enterprise_0.jpg" }]
  },
  ENTERPRISE_A: {
    name: "USS Enterprise A",
    registry: "NCC-1701-A",
    class: "Constitution II",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    crew: [],
    images: [{ path: "enterprise_a_0.jpg" }]
  },
  ENTERPRISE_B: {
    name: "USS Enterprise B",
    registry: "NCC-1701-B",
    class: "Excelsior",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "enterprise_b_0.jpg" }]
  },
  ENTERPRISE_C: {
    name: "USS Enterprise C",
    registry: "NCC-1701-C",
    class: "Ambassador",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    crew: [],
    images: [{ path: "enterprise_c_0.jpg" }]
  },
  ENTERPRISE_D: {
    name: "USS Enterprise D",
    registry: "NCC-1701-D",
    class: "Galaxy",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "preserved",
    crew: [],
    images: [{ path: "enterprise_d_0.jpg" }]
  },
  ENTERPRISE_E: {
    name: "USS Enterprise E",
    registry: "NCC-1701-E",
    class: "Sovereign",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "out of service",
    crew: [],
    images: [{ path: "enterprise_e_0.jpg" }]
  },
  ENTERPRISE_F: {
    name: "USS Enterprise F",
    registry: "NCC-1701-F",
    class: "Odyssey",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "decommissioned",
    crew: [],
    images: [{ path: "enterprise_f_0.jpg" }]
  },
  ENTERPRISE_G: {
    name: "USS Enterprise G",
    registry: "NCC-1701-G",
    class: "Constitution III",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "enterprise_g_0.jpg" }]
  },
  DEFIANT: {
    name: "USS Defiant",
    registry: "NX-74205",
    class: "Defiant",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "defiant_0.jpg" }]
  },
  VOYAGER: {
    name: "USS Voyager",
    registry: "NCC-74656",
    class: "Intrepid",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "voyager_0.jpg" }]
  },
  DISCOVERY: {
    name: "USS Discovery",
    registry: "NCC",
    class: "Miranda",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    crew: [],
    images: [{ path: "discovery_0.jpg" }]
  },
  LA_SIRENA: {
    name: "SS La Sirena",
    registry: "NAR-93131",
    class: "Kaplan F17 Speed Freighter",
    owner: "Crist\u{00f3}bal Rios",
    operator: "Crist\u{00f3}bal Rios",
    status: "active",
    crew: [],
    images: [{ path: "la_sirena_0.jpg" }]
  },
  CERRITOS: {
    name: "USS Cerritos",
    registry: "NCC-75567",
    class: "California",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "cerritos_0.jpg" }]
  },
  FARRAGUT: {
    name: "USS Farragut",
    registry: "NCC-1647",
    class: "Bellerophon",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "active",
    crew: [],
    images: [{ path: "farragut_0.jpg" }]
  },
  ANTARES: {
    name: "USS Antares",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    crew: [],
    images: [{ path: "antares_0.jpg" }]
  },
  CHATELET: {
    name: "USS Chatelet",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    crew: [],
    images: [{ path: "chatelet_0.jpg" }]
  },
  ARYABHATTA: {
    name: "USS Aryabhatta",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    crew: [],
    images: [{ path: "aryabhatta_0.jpg" }]
  },
  ARTEMIS: {
    name: "USS Artemis",
    registry: null,
    class: null,
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    crew: [],
    images: [{ path: "artemis_0.jpg" }]
  },
  SURAK: {
    name: "USS Surak",
    registry: null,
    class: "Oberth",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "lost",
    crew: [],
    images: [{ path: "surak_0.jpg" }]
  },
  INTREPID_II: {
    name: "USS Intrepid II",
    registry: null,
    class: "Oberth",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "unknown",
    crew: [],
    images: [{ path: "intrepid_ii_0.jpg" }]
  },
  MONITOR: {
    name: "USS Monitor",
    registry: null,
    class: "Defiant",
    owner: "United Federation of Planets",
    operator: "Starfleet",
    status: "destroyed",
    crew: [],
    images: [{ path: "monitor_0.jpg" }]
  }
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

for (let i = 0; i < shipsArr.length; i++) {
  shipsArr[i].crew = charactersArr.filter(character => character.ships.includes(shipsArr[i]));
}
