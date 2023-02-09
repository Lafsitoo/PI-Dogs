export const SEARCH_DOGS = "SEARCH_DOGS";
export const ALL_DOGS = "ALL_DOGS";
export const ORDER_SORT = "ORDER_SORT";

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
];
