export async function getAllProducts() {
  const res = await fetch(
    `https://next-project-by-rahat-default-rtdb.firebaseio.com/products.json`
  );
  const data = await res.json();
  const products = [];
  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    });
  }
  return products;
}
export async function getIsFeatured() {
  return getAllProducts.filter((products) => products.isFeatured);
}
