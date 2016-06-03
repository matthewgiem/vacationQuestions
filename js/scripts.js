// define global variables
var name;
var dob;
var sex;
var ssn;
var realPref;
var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
// q15 is sun
var q15;
// q23 is outdoors
var q23;
// q46 is city
var q46;

//back end logic (decision maker)
// add up questions 1 & 5 to see how much you like the sun
var oneAndFive = function() {
  q15 = q1 + q5;
}

var twoAndThree = function() {
  q23 = q2 + q3;
}

var fourAndSix = function() {
  q46 = q4 + q6;
}

alert("hi");


// function that finds out what has the higher score sun city outdoors

var compare1 = function()  {
  if ( q15 == q46 == q23 ) {
    // they are tied at the top
    alert('they are tied');
  } else if ( q15 > q23 && q15 > q46 ) {
    // then q15 is the highest
    alert("You're going to the Sun");
  } else if ( q23 > q15 && q23 > q46 ) {
    // then q23 is the highest
    alert("You're going to the Ocean");
  } else if ( q46 > q15 && q46 > q23 ) {
    // the q46 is the highest
    alert("You're going to the city" );
  } else if ( q15 === q23 && q15 > q46 )  {
    // we need to choose between q15 and q23
    alert('you need to choose between the sun and outdoors');
  } else if ( q15 === q46 && q15 > q23 )  {
    // we need to choose between q15 and q46
    alert('you need to choose between the sun and the city');
  } else if ( q46 === q23 && q46 > q15 )  {
    // we need to choose between q46 and q23
    alert('you need to choose between the outdoors and the city')
  } else {
    // we need to run the operation again cause we are getting an error
    alert("something is wrong with your application try and subbmitting it agian if it doesn't work don't worry we allready have your ssn so we don't need anything else")
  }
}



// front end logic (interacts with the website)
$(function()  {
  $("form.blank").submit(function(event) {
    name = $("#name").val();
    dob = $("#born").val();
    sex = $("#pref").val();
    realPref = $("#realPref").val();
    q1 = parseInt($("input:radio[name=q1]:checked").val());
    q2 = parseInt($("input:radio[name=q2]:checked").val());
    q3 = parseInt($("input:radio[name=q3]:checked").val());
    q4 = parseInt($("input:radio[name=q4]:checked").val());
    q5 = parseInt($("input:radio[name=q5]:checked").val());
    q6 = parseInt($("input:radio[name=q6]:checked").val());
    event.preventDefault();
    oneAndFive();
    twoAndThree();
    fourAndSix();
    alert("hi");
    alert(q15);
    compare1();

  });

});
