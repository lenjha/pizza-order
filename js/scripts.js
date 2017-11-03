//back-end
// pizza object constructor
function Pizza(size, toppings, delivery, others) {
  this.size = "";
  this.toppings = toppings;
  this.delivery = "";
  this.others = others;
  this.cost = 0;
}

//prototype method for pizza cost depending on selections
Pizza.prototype.calculate = function() {
  if (size = "an oca") {
    this.cost += 8
  } else if (size = "a baniţă") {
    this.cost += 10
  } else {
    this.cost += 12
  }
  if (this.toppings.includes(" eye of newt")) {
    this.cost += 3
  }
  if (this.toppings.includes(" wing of bat")) {
    this.cost += 4
  }
  if (this.toppings.includes(" slime of snail")) {
    this.cost += 2
  }
  if (this.toppings.includes(" hen's tooth")) {
    this.cost += 13
  }
  if (this.toppings.includes(" dragon's tongue")) {
    this.cost += 17
  }
  if (this.toppings.includes(" howlet's wing")) {
    this.cost += 1
  }
  if (this.toppings.includes(" wool of bat")) {
    this.cost += 4
  }
  if (this.toppings.includes(" toe of frog")) {
    this.cost += 2
  }
  if (this.toppings.includes(" root of hemlock")) {
    this.cost += 6
  }
  if (this.toppings.includes(" gall of goat")) {
    this.cost += 7
  }
  if (this.toppings.includes(" liver rof a blasphemer")) {
    this.cost *= 4
  }
  if (this.others.includes(" wormwood")){
    this.cost *= 2
  }
  if (this.others.includes(" moonlit")){
    this.cost *= 2
  }
  if (this.others.includes(" chanted")){
    this.cost += 10
  }
  if (this.others.includes(" war water")){
    this.cost += 10
  }
  if (delivery = "pigeon") {
    this.cost += 1
  } else if (delivery = "owl") {
    this.cost += 2
  } else {
    this.cost += 4
  }
  return this.cost
}

//front-end
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var others = [];
    var size = $("#size").val();
    var delivery = $("#delivery").val();
    var pizza = new Pizza(size, toppings, delivery, others)

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsSelected = $(this).val();
      toppings.push(" " + toppingsSelected);
    });
    $("input:checkbox[name=other-things]:checked").each(function(){
      var othersSelected = $(this).val();
      others.push(" " + othersSelected);
    });

    pizza.calculate();

    if (others = []) {
      others.push("no");
    }

    $("#results").prepend("<li>You ordered " + size + " of " + toppings + " 'pizza' with " + others + " specifications.</li><li>Your total comes to " + pizza.cost + " coinage.</li>  <li>Expect to see your " + delivery + " soon!</li>")
    $(".pizza-order-form").hide();
    $(".user-order").fadeIn();

  }); //pizza-order submitted
}); //document ready
