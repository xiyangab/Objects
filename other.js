let cart = [];
let total = 0;
function AddToCart(cart, item) {
  if (typeof item === "string") {
    const target = catalog.find((i) => i.name === item);
    const cost = target.price;
    if (target) {
      cart.push(target.name);
      total += cost;
    } else {
      return "Item Not Found";
    }
  } else if (Array.isArray(item)) {
    for (a of item) {
      const want = catalog.find((w) => w.name === a);
      const c = want.price;
      if (want) {
        cart.push(want.name);
        total += c;
      } else {
        return "Item(s) Not Found";
      }
    }
  }

  const result = cart.join(", ");
  return `Total: ${total}\nCart:\n${result}`;
}
