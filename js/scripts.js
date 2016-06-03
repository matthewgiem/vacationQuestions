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

//back end logic (decision maker)





//front end logic (interacts with webpage)
$(function()  {
  $(form.blank).submit(function(event)  {
    name = $(#"name").val();
    dob = $(#"born").val();
    sex = $(#"pref").val();
    ssn = $(#"").val();
    realPref = $(#"realPref").val();
    q1 = parseInt($("input:radio[name=q1]:checked").val());
    q2 = parseInt($("input:radio[name=q2]:checked").val());
    q3 = parseInt($("input:radio[name=q3]:checked").val());
    q4 = parseInt($("input:radio[name=q4]:checked").val());
    q5 = parseInt($("input:radio[name=q5]:checked").val());
    q6 = parseInt($("input:radio[name=q6]:checked").val());
    event.preventDefault();
  })
})
