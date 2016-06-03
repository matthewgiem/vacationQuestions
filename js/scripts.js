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
// q15 is ocean
var q15;
// q23 is outdoors
var q23;
// q46 is city
var q46;

//back end logic (decision maker)
// add up questions 1 & 5 to see how much you like the ocean
var oneAndFive = function() {
  q15 = q1 + q5;
}

// add up questions 2 & 3 to see how much you like the outdoors
var twoAndThree = function() {
  q23 = q2 + q3;
}

// add up question 4 & 6 to see how much you like the city
var fourAndSix = function() {
  q46 = q4 + q6;
}



// function that finds out what has the higher score ocean city outdoors

var compare1 = function()  {
  oneAndFive();
  twoAndThree();
  fourAndSix();
  $(".person").text(name);
  if ( q15 == q46 == q23 ) {
    // they are tied at the top
    alert('they are tied');
  } else if ( q15 > q23 && q15 > q46 ) {
    // then q15 is the highest
    alert("You're going to the ocean");
    window.location.replace("ocean.html");
  } else if ( q23 > q15 && q23 > q46 ) {
    // then q23 is the highest
    alert("You're going to the Outdoors");
    window.location.replace("outdoors.html");
  } else if ( q46 > q15 && q46 > q23 ) {
    // the q46 is the highest
    alert("You're going to the city" );
    window.location.replace("city.html");
  } else if ( q15 === q23 && q15 > q46 )  {
    // we need to choose between q15 and q23
    if (confirm("our algoryth has it as a tie between the ocean and the outdoors click ok if you'd like the outdoors or cancel if you'd like the ocean")) {
      alert("You're going to the outdoors");
      window.location.replace("outdoors.html");
    } else {
      alert("You're going to the ocean" );
      window.location.replace("ocean.html");
    }
  } else if ( q15 === q46 && q15 > q23 )  {
    // we need to choose between q15 and q46
    if (confirm("our algoryth has it as a tie between the ocean and the city click ok if you'd like the ocean or cancel if you'd like the city")) {
      alert("You're going to the ocean");
      window.location.replace("ocean.html");
    } else {
      alert("You're going to the city" );
      window.location.replace("city.html");
    }
  } else if ( q46 === q23 && q46 > q15 )  {
    // we need to choose between q46 and q23
    if (confirm("our algoryth has it as a tie between the outdoors and the city click ok if you'd like the outdoors or cancel if you'd like the city")) {
      alert("You're going to the outdoors");
      window.location.replace("outdoors.html");
    } else {
      alert("You're going to the city" );
      window.location.replace("city.html");
    }
  } else {
    // we need to run the operation again cause we are getting an error
    alert("something is wrong with your application try and subbmitting it agian if it doesn't work don't worry we allready have your ssn so we don't need anything else")
  }
}

//idea create a program that checks the place you wanted to go vs were the algoryth sent you and send you a model in the compar1 function before it sends you to the page either says sorry I sent you to the place you wanted to go or horray you got your choice











// front end logic (interacts with the website)
$(function()  {
  $("form.blank").submit(function(event) {
    name = $("#name").val();
    dob = $("#born").val();
    sex = $("#pref").val();
    ssn = parseInt($("#ssn").val());
    realPref = $("input:radio[name=pref]:checked").val();
    q1 = parseInt($("input:radio[name=q1]:checked").val());
    q2 = parseInt($("input:radio[name=q2]:checked").val());
    q3 = parseInt($("input:radio[name=q3]:checked").val());
    q4 = parseInt($("input:radio[name=q4]:checked").val());
    q5 = parseInt($("input:radio[name=q5]:checked").val());
    q6 = parseInt($("input:radio[name=q6]:checked").val());
    event.preventDefault();
    // check to see if the variables are all correct
    // alert(name);
    // alert(dob);
    // alert(realPref);
    // alert(ssn);
    // alert("you did it");
    // alert(q6);
    // function to run the backend logic
    compare1();

  });

});
