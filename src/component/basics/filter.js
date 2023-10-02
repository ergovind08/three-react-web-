// filter.js

export const filterByCategory = (menu, category) => {
  return menu.filter((curElem) => {
    return curElem.category === category;
  });
};
