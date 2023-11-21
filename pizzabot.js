const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
console.log(alert);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}
function checkOrderName(orderName) {
  return (
    orderName == vegetarian || orderName == hawaiian || orderName == pepperoni
  );
}

function cookingTime(orderQuantity) {
  pizzaTime = 0;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return (cookingTime = 10);
  } else if (orderQuantity <= 5) {
    return (cookingTime = 15);
  } else if (orderQuantity >= 6) {
    return (cookingTime = 20);
  }
}

if (checkOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);

  const resultCookingTime = cookingTime(orderQuantity);
  const orderTotal = totalCost(orderQuantity);

  const finalOrder = alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizzas will take ${resultCookingTime} minutes.`
  );
} else {
  alert("We don't have that");
}
