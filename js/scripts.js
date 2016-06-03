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
var q15;
var q23;
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
  });

});
