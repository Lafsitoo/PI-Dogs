export const SEARCH_DOGS = "SEARCH_DOGS";
export const ALL_DOGS = "ALL_DOGS";
export const ORDER_SORT = "ORDER_SORT";
export const FILTER = "FILTER";
export const TEMPERAMENT = "TEMPERAMENT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"

const sortOrderNameAsc = (a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  return 0;
};

const sortOrderNameDesc = (a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) return 1;
  if (nameA > nameB) return -1;
  return 0;
};

const sortWeightAsc = (a, b) => {
  let weightA = a.weight.split(" - ").map((n) => Number(n));
  let weightB = b.weight.split(" - ").map((n) => Number(n));
  if (weightA[0] > weightB[0]) return 1;
  if (weightA[0] < weightB[0]) return -1;
  if (weightA[1] > weightB[1]) return 1;
  if (weightA[1] < weightB[1]) return -1;
  return 0;
};

const sortWeightDesc = (a, b) => {
  let weightA = a.weight.split(" - ").map((n) => Number(n));
  let weightB = b.weight.split(" - ").map((n) => Number(n));
  if (weightA[0] < weightB[0]) return 1;
  if (weightA[0] > weightB[0]) return -1;
  if (weightA[1] < weightB[1]) return 1;
  if (weightA[1] > weightB[1]) return -1;
  return 0;
};

export const order = [
  {
    id: 0,
    name: "Name (A - Z)",
    sort: sortOrderNameAsc,
  },
  {
    id: 1,
    name: "Name (Z - A)",
    sort: sortOrderNameDesc,
  },
  {
    id: 2,
    name: "Weight (Low to high)",
    sort: sortWeightAsc,
  },
  {
    id: 3,
    name: "Weight (High to low)",
    sort: sortWeightDesc,
  },
];

export const allTemperaments = [
  {
    id: "a57b47ac-fd48-4713-a280-20aa66d04d97",
    name: "Stubborn",
  },
  {
    id: "e2578b3f-3a17-4c02-b2b2-7766474ae740",
    name: "Adventurous",
  },
  {
    id: "32900888-cfba-4a11-802f-e85a32601003",
    name: "Playful",
  },
  {
    id: "0914cc73-44f0-4ad4-a805-870be58c9bc2",
    name: "Aloof",
  },
  {
    id: "098a6748-b5bb-4cdc-aacd-3307d6723821",
    name: "Clownish",
  },
  {
    id: "49a11e32-1c53-4f58-a573-822fd28dfb56",
    name: "Fun-loving",
  },
  {
    id: "03d66599-5183-4f55-b347-3a9d7b9d2c0d",
    name: "Independent",
  },
  {
    id: "be444c6e-45aa-418f-9d30-4a9e87843330",
    name: "Happy",
  },
  {
    id: "e6f7e694-84f3-4947-b42f-a749e29749f1",
    name: "Wild",
  },
  {
    id: "a8df7237-3db6-4561-adf0-fcc094804b1c",
    name: "Outgoing",
  },
  {
    id: "f18766c4-e518-4bdc-8abe-5033a83329b4",
    name: "Friendly",
  },
  {
    id: "3b903218-1c57-4a7f-9039-e38f7b96ecd3",
    name: "Confident",
  },
  {
    id: "cab5f66c-dc86-4856-9a8c-542bc5e31975",
    name: "Courageous",
  },
  {
    id: "c5100bf0-096c-42da-a6bf-a7cabe7694a1",
    name: "Loyal",
  },
  {
    id: "42f42cdc-1a48-418a-9b0f-85dea014fe0e",
    name: "Docile",
  },
  {
    id: "0fbfa638-ba9d-4acd-94b7-62a83864a712",
    name: "Composed",
  },
  {
    id: "67e6135a-619e-4969-becf-2e155dcedad7",
    name: "Faithful",
  },
  {
    id: "0935fe27-15c5-469b-a24e-07dff1a83333",
    name: "Loving",
  },
  {
    id: "30af98ab-9715-4645-9b9f-203323ae939d",
    name: "Protective",
  },
  {
    id: "c28741d9-141d-4dec-b74a-9fa8b221364a",
    name: "Responsible",
  },
  {
    id: "d17510c2-3dde-4ad6-ac67-f072fc92d6f2",
    name: "Energetic",
  },
  {
    id: "337eb876-3533-4a71-96d3-c88c349040c5",
    name: "Affectionate",
  },
  {
    id: "3eb98d64-85c1-4074-b8a5-39037b2d05fb",
    name: "Assertive",
  },
  {
    id: "76b05ce4-7336-49cc-ad03-f6530249bd43",
    name: "Dominant",
  },
  {
    id: "80db0971-2e02-414e-8d6c-94dbd0466ca9",
    name: "Obedient",
  },
  {
    id: "7adddb29-7fc3-42ca-b42c-bef5cb2e84b9",
    name: "Attentive",
  },
  {
    id: "73a81186-2253-48cd-ba7a-e015ff324807",
    name: "Bold",
  },
  {
    id: "9b4a139c-bfb9-4604-8f50-4df8e6ef6e3b",
    name: "Proud",
  },
  {
    id: "8e54bf89-0690-47b6-82ec-2589f1805ee4",
    name: "Reliable",
  },
  {
    id: "ba13deb3-ef9e-45c8-9490-fb2a9f6bff00",
    name: "Self-assured",
  },
  {
    id: "9e692fce-2c30-4472-954d-fe0ad129e5e9",
    name: "Cautious",
  },
  {
    id: "fe389535-3144-48b8-bb32-35ea34c2aec1",
    name: "Good-natured",
  },
  {
    id: "7d145a78-32e8-4979-b30a-3e4f407f41d7",
    name: "Even Tempered",
  },
  {
    id: "3cdb6275-095c-48ad-bba0-744605502676",
    name: "Fierce",
  },
  {
    id: "b26eb1c4-c38f-41b4-a662-2d7e12812dd3",
    name: "Refined",
  },
  {
    id: "bc868fcf-767b-476b-b4b9-f63359b013e8",
    name: "Agile",
  },
  {
    id: "ce0e7823-2874-4669-a7ac-c8a826276c24",
    name: "Amiable",
  },
  {
    id: "68377982-baad-4f77-8756-47721790a0cd",
    name: "Excitable",
  },
  {
    id: "dd90eee9-de87-4b1c-ad23-c320c748c962",
    name: "Hardy",
  },
  {
    id: "3f3c34c7-0441-4d96-833f-c3b2b7e41b2c",
    name: "Calm",
  },
  {
    id: "ac455c73-7487-4c4f-ae8b-e53444f9c083",
    name: "Watchful",
  },
  {
    id: "9ba3e50c-c6d0-455d-b1e1-dd1ee6f0994b",
    name: "Feisty",
  },
  {
    id: "47619961-aab6-45f3-b706-077e59b63983",
    name: "Easygoing",
  },
  {
    id: "57cd3e5d-4e1f-4fce-b654-eaa95227d0ba",
    name: "Adaptable",
  },
  {
    id: "03dae095-1aef-4fd7-8bd9-d7c4b64b2f6a",
    name: "Territorial",
  },
  {
    id: "9984431b-e03c-45fa-a836-58026c091136",
    name: "Keen",
  },
  {
    id: "54346850-27fd-4a1b-bdf3-a2a7f0838404",
    name: "Rational",
  },
  {
    id: "3b9ecd58-e50d-44af-9d99-3e914b236461",
    name: "Bright",
  },
  {
    id: "8a0fda4c-a2ed-4afe-b0f7-fe4010a55ec6",
    name: "Quick",
  },
  {
    id: "9db5a68e-61ec-4373-8438-4d4bef5e40f2",
    name: "Powerful",
  },
  {
    id: "58e0f015-1494-4f05-9d1b-1232878538eb",
    name: "Quiet",
  },
  {
    id: "880e501a-7d22-4254-bbdf-cb5aa6f5d0c6",
    name: "Inquisitive",
  },
  {
    id: "c65ed051-aba8-4789-bafb-5300985f37aa",
    name: "Patient",
  },
  {
    id: "43810fac-f4f8-4ff9-806d-9d8fb5baacd6",
    name: "Great-hearted",
  },
  {
    id: "1eeb02b6-8199-4254-b0c5-f325fd003832",
    name: "Merry",
  },
  {
    id: "ea82660c-e937-416f-88ab-eaf3d7e701d9",
    name: "Tolerant",
  },
  {
    id: "434546f3-5bf9-4c58-9219-2930366669de",
    name: "Mischievous",
  },
  {
    id: "9fab5fc6-8d1a-4210-bd57-c9fb4f577157",
    name: "Bossy",
  },
  {
    id: "08121eaf-0ac8-4803-826b-873fc219c9a9",
    name: "Cunning",
  },
  {
    id: "f81ccf71-2e66-4388-825a-5f06bf04cc13",
    name: "Athletic",
  },
  {
    id: "64af741c-2f30-4337-b9a0-265a9112c995",
    name: "Cooperative",
  },
  {
    id: "a0cd7b73-13c2-4017-bd45-020028c593b6",
    name: "Respectful",
  },
  {
    id: "a0cd4f69-71ed-481e-8064-bc9f0d403441",
    name: "Thoughtful",
  },
  {
    id: "61311e77-19c6-4c58-8189-d5dfb66b8d15",
    name: "Cat-like",
  },
  {
    id: "4095ce31-fe76-4fb1-94f6-23cc08afc55f",
    name: "Sturdy",
  },
  {
    id: "8ed58820-8457-4044-9552-098e2ca2b09b",
    name: "Clever",
  },
  {
    id: "5d39b17b-51a9-477a-9f2c-29bc7ff636ab",
    name: "Aggressive",
  },
  {
    id: "cdfbeec0-6eb5-4002-8aa8-d9103078c357",
    name: "",
  },
  {
    id: "b1c02c71-4e64-483a-8330-f82589b167b7",
    name: "Charming",
  },
  {
    id: "c4ed03c2-82c1-4a11-9328-27f2ca8093d7",
    name: "Spunky",
  },
  {
    id: "fbb0320b-44c4-4f7a-af0d-6af72b2a38ac",
    name: "Willful",
  },
  {
    id: "2699c7d7-7d4c-47a6-a82c-b158b89d3680",
    name: "Fast",
  },
  {
    id: "36160e01-6219-4d1a-9488-7759e2c30fcb",
    name: "Vigilant",
  },
  {
    id: "fddf28e9-dc1e-446c-9723-bfb6764b2ba9",
    name: "Curious",
  },
  {
    id: "c2d54ddf-1ee1-4c18-a801-ea028dd66347",
    name: "Dutiful",
  },
  {
    id: "9cc0fd19-f55d-4b3e-9cd1-0f8bc8cd0eb5",
    name: "Intelligent",
  },
  {
    id: "172c24a8-d164-4d58-9071-4347ef516064",
    name: "Brave",
  },
  {
    id: "358bb538-ba88-4fc9-b9a5-976c4976491c",
    name: "Receptive",
  },
  {
    id: "b7d13b73-b14e-4962-b4ed-2ec77aab4d83",
    name: "Devoted",
  },
  {
    id: "ebca5695-6076-4f5c-8c8b-9ba766bdb0b3",
    name: "Strong Willed",
  },
  {
    id: "b575bc30-1fb5-47c8-b2d0-3adf47aa5167",
    name: "Reserved",
  },
  {
    id: "5c700114-0ecf-4688-8de4-1b87e2921a88",
    name: "Kind",
  },
  {
    id: "9beb6e09-b613-4230-bb4f-08ba7ce88a11",
    name: "Steady",
  },
  {
    id: "029685f0-8336-423e-8fe2-51b5ac225e3a",
    name: "Fearless",
  },
  {
    id: "d4850432-c9ac-4c97-aa45-7ed21a2c3969",
    name: "Eager",
  },
  {
    id: "a77b9230-a5a5-44d6-b997-d03410839ce1",
    name: "Companionable",
  },
  {
    id: "d5d73328-9ecb-4164-bbdc-514cd0c3b66a",
    name: "Rugged",
  },
  {
    id: "c7bda49e-2cfd-4f1e-b9e8-b01181eff5a4",
    name: "Joyful",
  },
  {
    id: "a0a4287f-b048-4dd4-b989-863605df6944",
    name: "Determined",
  },
  {
    id: "f7f4ac09-dcf8-4b58-aad7-c7e169c38a05",
    name: "Hard-working",
  },
  {
    id: "d62422d3-b022-48ef-a55f-047458c68ae4",
    name: "Sensitive",
  },
  {
    id: "e19659c1-f4b3-4847-86f7-130402fea619",
    name: "Lovable",
  },
  {
    id: "3ac98e91-5588-449d-af6d-fefe1ae3cf55",
    name: "Stable",
  },
  {
    id: "1fd9e92e-43c1-482c-89d9-1dae2f7802b2",
    name: "Strong",
  },
  {
    id: "1697e9c7-2801-4037-a0a4-c28f7dc1bdc4",
    name: "Vocal",
  },
  {
    id: "50f6f3f2-7636-448e-9ab5-3bc053135046",
    name: "Boisterous",
  },
  {
    id: "1d6881b2-e951-4f3d-9e3e-a5005a8a89ff",
    name: "Active",
  },
  {
    id: "882b7e8b-7971-4da2-beff-68e646e4f087",
    name: "Dignified",
  },
  {
    id: "7fc65198-cb74-49b1-941f-228996b9c99f",
    name: "Hardworking",
  },
  {
    id: "a65bf25f-5304-4472-ab52-682fa72e35f8",
    name: "Alert",
  },
  {
    id: "68381694-5f6c-48f3-b1bb-460fc3372ac8",
    name: "Responsive",
  },
  {
    id: "9b321021-570b-4944-8e21-9c121e878900",
    name: "Trainable",
  },
  {
    id: "975a3b60-c468-47b9-bdb9-62bd02369bde",
    name: "Gentle",
  },
  {
    id: "f2656d64-e1e7-42e1-9660-644887994e87",
    name: "Sweet-Tempered",
  },
  {
    id: "c32c54cc-dcb2-4bee-97ce-dc38d6e0b992",
    name: "Tenacious",
  },
  {
    id: "4227be66-beae-478a-86c9-cc5911895cdd",
    name: "Lively",
  },
  {
    id: "40047343-1685-4e98-a6e8-c4d2cad7da55",
    name: "Spirited",
  },
  {
    id: "857b4708-b7e3-461c-a5e9-776f5a71bab3",
    name: "Self-confidence",
  },
  {
    id: "1b9ab448-a3cb-470f-abb0-9a9e15695725",
    name: "Good-tempered",
  },
  {
    id: "b9dc0951-f9c7-4654-8416-f376c89a7f8a",
    name: "Cheerful",
  },
  {
    id: "34b21f27-ebc9-40b2-9791-f266803d4319",
    name: "Trusting",
  },
  {
    id: "d388d165-3a65-4eb3-b120-2d2eebd57ab7",
    name: "Familial",
  },
  {
    id: "a761ce90-178c-4556-bb5b-405f89aa13e5",
    name: "Gay",
  },
  {
    id: "eb0ebac0-094b-4913-8142-969b8796e48f",
    name: "Sociable",
  },
  {
    id: "772ef26f-cc54-46d8-8a93-aae6981fd6e2",
    name: "Suspicious",
  },
  {
    id: "b8acb82e-17f8-4cf3-adb8-8dd4173f02fa",
    name: "People-Oriented",
  },
  {
    id: "13590943-da18-4402-b83b-de8281e8f91a",
    name: "Trustworthy",
  },
  {
    id: "54cb7333-0285-4f8a-a7ed-65434ca48e2c",
    name: "Self-important",
  },
  {
    id: "959be3da-4fc8-493d-853f-24387e595c95",
    name: "Generous",
  },
  {
    id: "faffba84-d743-432f-ba1e-44af35acda2b",
    name: "Benevolent",
  },
  {
    id: "a676e3f2-1a0a-4388-b7a2-7719b8dfbb71",
    name: "Bubbly",
  },
  {
    id: "00b3425a-926d-4375-8d6c-b60106040b05",
    name: "Opinionated",
  },
  {
    id: "44d75f4a-8077-4b90-9a0d-09899a0c0a70",
    name: "Extroverted",
  },
  {
    id: "925f5178-53f0-40b0-a8b7-4b54fc1edff2",
    name: "Unflappable",
  },
  {
    id: "478982f9-d84a-4192-ad3e-f38ef25cfa28",
    name: "Diligent",
  },
];
