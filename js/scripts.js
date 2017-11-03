//back-end

// pizza object constructor
function Pizza(size, toppings) {
  this.size = 0;
  this.toppings = 0;
}

// pizza.size
// pizza.toppings
// pizza.cost = pizza.size + pizza.toppings

//if size = small, 8
//if size = medium, 10
//if size = large, 12

//if toppingsArray includes anchovies, 3
//if toppingsArray includes bacon, 4
//if toppingsArray includes cheese, 2

//prototype method for pizza cost depending on selections
Pizza.prototype.calculate = function() {
  return this.size + this.toppings;
}


//front-end
$(document).ready(function() {
  debugger;
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var toppingsArray = [];
    var size = $("#size").val();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsSelected = $(this).val();
      toppingsArray.push(" " + toppingsSelected);
    }); //toppings checkbox checking

    alert("you ordered a " + size + toppingsArray + " pizza!")

    // pizza.size =
    // pizza.toppings =

    //parseInt values?

  }); //pizza-order submitted
}); //document ready
