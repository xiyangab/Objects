const catalog = [
  //shoes
  { category: "Shoes", name: "Nike Sports Shoes", price: 115, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqde9iOITqyOsVrworl2l1rVeZboYGjuPObrzN0lPU-g&s=10" },
  { category: "Shoes", name: "Adidas Sports Shoes", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwA6NrjOx-iqut7zvxqL7pPfhL-d_xjgnL5u4QW0wHA&s=10" },
  { category: "Shoes", name: "Crocs", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgieGWMDLV9GEvgw-YnCxMH9975SBKx10cW9iUnmycbg&s" },
  { category: "Shoes", name: "Skechers", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQOQmLuHX8wXAfxdGntRl6_G3KWq-na2I9xerLDmbvQ&s=10" },
  //hoodie
  { category: "Hoodie", name: "Supreme Hoodie", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliTFDbryvZkRf9Jh0uCXTLpTN8X6MlbRQqFg9SpEHoA&s=10" },
  { category: "Hoodie", name: "Essentials Hoodie", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7CQ8lLUkiY95Jt5LuZ9MOQSTfGNPARfKX-xcoA6b0g&s=10" },
  { category: "Hoodie", name: "Balenciaga Hoodie", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQGbNzEa9x7VIVTN7zGme0IGR1N8T7qdgumOHd4Impg&s=10" },
  { category: "Hoodie", name: "Champion Hoodie", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPGXt2HxqMed2hE1QaPFNbwrwTLJEe-XCYxeUAE4Uag&s=10" },
  //pants
  { category: "Pants", name: "Levi's Pants", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoOD8T4HUEsIkSDVOmKsTr5_BpFf3370erDS5gy3aUQ&s" },
  { category: "Pants", name: "Lululemon Pants", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-6hIss10iX710VRxgJil7_hzNQRzth92uRRGThTELA&s=10" },
  { category: "Pants", name: "Banana Republic Pants", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzRKuapvMpJJ8FHHVENmEEbyEV4xdxLTGZo9jEoWzuw&s=10" },
  { category: "Pants", name: "J.Crew Pants", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIniNCUmTAWE5ckiJWYOTcW_c5ei3Ix63UTcXyxdQv1A&s=10" },
  //graphic tees
  { category: "Graphic Tees", name: "Uniqlo Graphic Tee", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfWCqwFF0U7uCKus9zvORcP5JYKHfKPuw8L9GoQLnxw&s=10" },
  { category: "Graphic Tees", name: "Hot Topic Graphic Tee", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAydtZh1bV3Rl_m7gjijiwyohWKrAQWag82NJal9oGw&s=10" },
  { category: "Graphic Tees", name: "Represent Graphic Tee", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaYZzBwBnAEz_rPn6pCJVPVu59qmFnaeDydwKkQo1ow&s=10" },
  { category: "Graphic Tees", name: "Tillys Graphic Tee", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakspTxRPEnWPtlJKmqxil-0ObYYAF9RIYtznlKOARlQ&s=10" },
  //socks
  { category: "Socks", name: "Uniqlo Socks", price: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihwYT7wRZr3pSXCr4_f2UZt0-xEnlLJYnmvzj0lQnAw&s=10" },
  { category: "Socks", name: "Dickies Socks", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgV6zXACsWwPypgh8gsmbUNpjI7PJsTTm-hSHwi94inQ&s=10" },
  { category: "Socks", name: "Nike Socks", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDm-4wdqnTpI8ASdfsdHSQ1XYGZ9JHGlmS3ucJl4xgw&s=10" },
  { category: "Socks", name: "Bombas Socks", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRfE6MWWl5RfxHgq7p1YkWC64gDdFDIBTLUg9y7Azfw&s" },
];

let cart = [];
let total = 0;
let discountCode = ["SAVE10", "XIYANGISHANDSOME", "ILOVEXIYANG"];

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

console.log(AddToCart(cart, "Nike Sports Shoes"));
console.log(AddToCart(cart, "Adidas Sports Shoes"));
console.log(AddToCart(cart, "Crocs"));

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

function PrintTotal(cart) {
  // for (item of cart) {
  //   const target = catalog.find((i) => i.name === item);
  //   const cost = target.price;
  //   total += cost;
  // }

  return `Total: ${total}`;
}

function UseDiscount(code) {
  if (discountCode.find((c) => c === code)) {
    total = total * 0.9;
    return "Discount Activated";
  } else {
    return "Discount Not Valid";
  }
}

console.log(UseDiscount("ILOVEXIYANG"));
console.log(total);
