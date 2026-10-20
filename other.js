// let cart = [];
// let total = 0;
// function AddToCart(cart, item) {
//   if (typeof item === "string") {
//     const target = catalog.find((i) => i.name === item);
//     const cost = target.price;
//     if (target) {
//       cart.push(target.name);
//       total += cost;
//     } else {
//       return "Item Not Found";
//     }
//   } else if (Array.isArray(item)) {
//     for (a of item) {
//       const want = catalog.find((w) => w.name === a);
//       const c = want.price;
//       if (want) {
//         cart.push(want.name);
//         total += c;
//       } else {
//         return "Item(s) Not Found";
//       }
//     }
//   }

//   const result = cart.join(", ");
//   return `Total: ${total}\nCart:\n${result}`;
// }

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

function PrintTotal() {
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
