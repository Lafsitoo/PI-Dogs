export const SEARCH_DOGS = "SEARCH_DOGS";
export const ALL_DOGS = "ALL_DOGS";
export const ORDER_SORT = "ORDER_SORT";
export const FILTER = "FILTER";
export const TEMPERAMENT = "TEMPERAMENT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const GET_DETAILS = "GET_DETAILS"
export const GET_CLEAN = "GET_CLEAN"
export const POST_DOG = "POST_DOG"

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

const sortLifeSpan = (a) => {
  let lifeA = a.life_span.split(" - ").map(e => Number(e))
  let lifeB = 12
  if (lifeA[0] > lifeB) return 1;
}

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
  {
    id: 4,
    name: "Vida mayor a 12",
    sort: sortLifeSpan
  }
];