//back-end
// pizza object constructor
function Pizza(size, toppings) {
  this.size = 0;
  this.toppings = 0;
}

var sizeCost = function(){
  //if size = small, 8
  //if size = medium, 10
  //if size = large, 12
}

var toppingsCost = function(){
  //if toppingsArray.includes anchovies, replace indexOf anchovies with 3
  //if toppingsArray.includes bacon, replace indexOf anchovies with 4
  //if toppingsArray.includes cheese, replace indexOf anchovies with 2
}




//prototype method for pizza cost depending on selections
Pizza.prototype.calculate = function() {
  return this.size + this.toppings;
}

//front-end
$(document).ready(function() {
  debugger;
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var toppingsCost = [];

    //STRINGS - toppings and size
    var toppingsArray = [];
    var toppingsStringArray = [];
    var size = $("#size").val();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsSelected = $(this).val();
      toppingsArray.push(toppingsSelected);
      toppingsStringArray.push(" " + toppingsSelected);
    }); //toppings checkbox checking

    $("#results").append("<li>You ordered a " + size + " " + toppingsStringArray + " pizza! </li>")
    $(".user-order").show();

    var pizza = new Pizza(size, toppingsArray)

    alert(toppingsArray);

  }); //pizza-order submitted
}); //document ready
