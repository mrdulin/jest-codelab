const fetchData = async (product, numOfProducts) => {
  const res = await fetch('https://github.com/mrdulin');
  const data = await res.json();
  return data;
};

// user input for products looks like 'butter 2'
// selecting Breaskstone's butter (from mockData below)
export const addToShoppingList = async (product, numOfProducts = 10, getProducts = fetchData) => {
  const shoppingList = [];

  const item = product.slice(0, -2); // i.g. 'butter'
  const i = +product.split(' ').pop() - 1; // i.g. '2' which becomes 1, the index number in array
  const data = await getProducts(item, numOfProducts);

  // i, which is the index, is used to grab specific item from list of products
  let products = data.items[i].productInfo.name;
  let manufacturers = data.items[i].productInfo.manufacturer;

  const chosenItem = `${products} from ${manufacturers}`;

  shoppingList.push(chosenItem);

  return shoppingList;
};
