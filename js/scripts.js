//back-end
// pizza object constructor
function Pizza(size, toppings) {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}


//prototype method for pizza cost depending on selections
Pizza.prototype.calculate = function() {
  if (size = "small") {
    this.cost += 8
  } else if (size = "medium") {
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
  // alert(this.size + this.toppings);
}

//front-end
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var size = $("#size").val();
    var pizza = new Pizza(size, toppings)

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsSelected = $(this).val();
      toppings.push(" " + toppingsSelected);
    });

    pizza.calculate();


    $("#results").append("<li>You ordered a " + size + " " + toppings + " pizza! </li>")
    $(".user-order").show();


    alert(pizza.cost);

  }); //pizza-order submitted
}); //document ready
