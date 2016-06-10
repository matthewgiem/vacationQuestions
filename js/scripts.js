// define global variables
var name;
var dob;
var sex;
var ssn;
var realPref;
var oceanQuestion1;
var outdoorQuestion1;
var outdoorQuestion2;
var cityQuestion1;
var oceanQuestion2;
var cityQuestion2;
var combindedBeachQuestions;
var combindedOutdoorQuestions;
var combindedCityQuestions;
//back end logic (decision maker)
var compareBeachQuestions = function() {
  combindedBeachQuestions = oceanQuestion1 + oceanQuestion2;
}
var compareOutdoorQuestions = function() {
  combindedOutdoorQuestions = outdoorQuestion1 + outdoorQuestion2;
}
var compareCityQuestions = function() {
  combindedCityQuestions = cityQuestion1 + cityQuestion2;
}
var compareAnswers = function()  {
  compareBeachQuestions();
  compareOutdoorQuestions();
  compareCityQuestions();
  if ( combindedBeachQuestions == combindedCityQuestions == combindedOutdoorQuestions ) {
    alert('they are tied try again');
  } else if ( combindedBeachQuestions > combindedOutdoorQuestions && combindedBeachQuestions > combindedCityQuestions ) {
    alert("You're going to the ocean");
    $("#ocean").show();
    $("#mainPage").hide();
  } else if ( combindedOutdoorQuestions > combindedBeachQuestions && combindedOutdoorQuestions > combindedCityQuestions ) {
    alert("You're going to the Outdoors");
    $("#outdoors").show();
    $("#mainPage").hide();
  } else if ( combindedCityQuestions > combindedBeachQuestions && combindedCityQuestions > combindedOutdoorQuestions ) {
    alert("You're going to the city" );
    $("#city").show();
    $("#mainPage").hide();
  } else if ( combindedBeachQuestions === combindedOutdoorQuestions && combindedBeachQuestions > combindedCityQuestions )  {
    if (confirm("our algoryth has it as a tie between the ocean and the outdoors click ok if you'd like the outdoors or cancel if you'd like the ocean")) {
      alert("You're going to the outdoors");
      $("#outdoors").show();
      $("#mainPage").hide();
    } else {
      alert("You're going to the ocean" );
      $("#ocean").show();
      $("#mainPage").hide();
    }
  } else if ( combindedBeachQuestions === combindedCityQuestions && combindedBeachQuestions > combindedOutdoorQuestions )  {
    if (confirm("our algoryth has it as a tie between the ocean and the city click ok if you'd like the ocean or cancel if you'd like the city")) {
      alert("You're going to the ocean");
      $("#ocean").show();
      $("#mainPage").hide();
    } else {
      alert("You're going to the city" );
      $("#city").show();
      $("#mainPage").hide();
    }
  } else if ( combindedCityQuestions === combindedOutdoorQuestions && combindedCityQuestions > combindedBeachQuestions )  {
    if (confirm("our algoryth has it as a tie between the outdoors and the city click ok if you'd like the outdoors or cancel if you'd like the city")) {
      alert("You're going to the outdoors");
      $("#outdoors").show();
      $("#mainPage").hide();
    } else {
      alert("You're going to the city" );
      $("#city").show();
      $("#mainPage").hide();
    }
  } else {
    alert("something is wrong with your application try and subbmitting it agian if it doesn't work don't worry we allready have your ssn so we don't need anything else")
  }
}
// front end logic (interacts with the website)
$(function()  {
  $("#ocean").hide();
  $("#city").hide();
  $("#outdoors").hide();
  $("#cityLink").click(function(event){
    $("#city").show();
    debugger;
    $("#mainPage").hide();
    event.preventDefault();
  });
  $("form.blank").submit(function(event) {
    name = $("#name").val();
    dob = $("#born").val();
    sex = $("#pref").val();
    ssn = parseInt($("#ssn").val());
    realPref = $("#realPref").val();
    oceanQuestion1 = parseInt($("input:radio[name=oceanQuestion1]:checked").val());
    outdoorQuestion1 = parseInt($("input:radio[name=outdoorQuestion1]:checked").val());
    outdoorQuestion2 = parseInt($("input:radio[name=outdoorQuestion2]:checked").val());
    cityQuestion1 = parseInt($("input:radio[name=cityQuestion1]:checked").val());
    oceanQuestion2 = parseInt($("input:radio[name=oceanQuestion2]:checked").val());
    cityQuestion2 = parseInt($("input:radio[name=cityQuestion2]:checked").val());
    $(".person").text(name);
    event.preventDefault();
    compareAnswers();
  });
});
