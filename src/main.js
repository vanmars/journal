import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import './business-logic.js';


$(document).ready(function() {
  $("#journalForm").submit(function(event){
    event.preventDefault();

    const inputtedTitle = $("#title").val(); 
    const inputtedBody = $("#body").val(); 

    $(".returnDiv").prepend("<h4>"+inputtedTitle+"</h4><hr><p class='lead'>"+inputtedBody+"</p><hr><br><br>");

    $(".returnDiv").show();

    $("#journalForm")[0].reset();
  });
});