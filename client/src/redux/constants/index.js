export const SEARCH_DOGS = "SEARCH_DOGS";
export const ALL_DOGS = "ALL_DOGS";
export const ORDER_SORT = "ORDER_SORT";
export const FILTER = "FILTER";

const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

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

const filterByAPI = (id) => {
  return !regex.test(id)
}

const filterByUsers = (id) => {
  return regex.test(id)
}

export const origin = [
  {
    id: 0,
    name: "All dogs",
    filter: () => true,
  },
  {
    id: 1,
    name: "Created by API",
    filter: filterByAPI,
  },
  {
    id: 2,
    name: "Created by Users",
    filter: filterByUsers,
  },
];
