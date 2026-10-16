const catalog = [
  //shoes
  {
    category: "Shoes",
    name: "Nike Sports Shoes",
    price: 115,
    image: "",
  },
  { category: "Shoes", name: "Adidas Sports Shoes", price: 100, image: "" },
  { category: "Shoes", name: "Crocs", price: 50, image: "" },
  { category: "Shoes", name: "Skechers", price: 80, image: "" },
  //hoodie
  { category: "Hoodie", name: "Supreme Hoodie", price: 160, image: "" },
  { category: "Hoodie", name: "Essentials Hoodie", price: 160, image: "" },
  { category: "Hoodie", name: "Balenciaga Hoodie", price: 1600, image: "" },
  { category: "Hoodie", name: "Champion Hoodie", price: 35, image: "" },
  //pants
  { category: "Pants", name: "Levi's Pants", price: 30, image: "" },
  {
    category: "Pants",
    name: "Lululemon Pants",
    price: 130,
    image: "",
  },
  {
    category: "Pants",
    name: "Banana Republic Pants",
    price: 120,
    image: "",
  },
  {
    category: "Pants",
    name: "J.Crew Pants",
    price: 100,
    image: "",
  },
  //
  {
    category: "Graphic Tees",
    name: "Uniqlo Graphic Tee",
    price: 30,
    image: "",
  },
  {
    category: "Graphic Tees",
    name: "Hot Topic Graphic Tee",
    price: 25,
    image: "",
  },
  {
    category: "Graphic Tees",
    name: "Represent Graphic Tee",
    price: 120,
    image: "",
  },
  {
    category: "Graphic Tees",
    name: "Tillys Graphic Tee",
    price: 25,
    image: "",
  },
  {
    category: "Socks",
    name: "Uniqlo Socks",
    price: 5,
    image: "",
  },
  {
    category: "Socks",
    name: "Dickies Socks",
    price: 15,
    image: "",
  },
  {
    category: "Socks",
    name: "Nike Socks",
    price: 20,
    image: "",
  },
  {
    category: "Socks",
    name: "Bombas Socks",
    price: 15,
    image: "",
  },
];

function filter(array, category) {
  let filtered = [];
  for (item of array) {
    if (item.category === category) {
      filtered.push(item.name);
    } else {
      return "Category Not Found";
    }
  }
  return filtered;
}

let cart = [];
let total = 0;
function AddToCart(cart, item) {
  const target = catalog.find((i) => i.name === item);
  const cost = target.price;
  if (target) {
    cart.push(target.name);
    total += cost;
  } else {
    return "Item Not Found";
  }
  const result = cart.join(", ");
  return `Total: ${total}\nCart:\n${result}`;
}

function RemoveFromCart(cart, item) {
  const target = catalog.find((i) => i.name === item);
  const cost = target.price;
  if (cart.includes(item)) {
    cart.pop(item);
    total -= cost;
  } else {
    return "Item Not In Array";
  }
  const result = cart.join(", ");
  return `Total: ${total}\nCart:\n${result}`;
}

console.log(AddToCart(cart, "Bombas Socks"));
console.log(AddToCart(cart, "Nike Socks"));
console.log(RemoveFromCart(cart, "Nike Socks"));
