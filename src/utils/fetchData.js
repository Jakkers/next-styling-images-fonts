export async function fetchData() {
  const result = await fetch("https://dummyjson.com/carts");
  const data = await result.json();
  const wrangledData = data.carts;
  return wrangledData;
}

// export async function fetchDynamicData(params) {
//   const result = await fetch(`https://dummyjson.com/carts/${params}`);
//   const data = await result.json();
//   const wrangledData = data.products;
//   return wrangledData;
// }
