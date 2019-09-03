import {Entry} from './journal';

$(document).ready(function() {
$(".formOne").submit(function(event){
  event.preventDefault();
  var entry = $("#body").val().toLowerCase();
  var newEntry = new Entry(entry);
   $("#output").text("Number of words" +  " " + newEntry.wordCount());
   $("#vowelOutput").text("Number of Vowels" + " " + newEntry.vowelCount());
   $("#consOutput").text("Number of consonants" + " " + newEntry.consCount());
 });
});
