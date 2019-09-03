import {Entry} from './journal';

$(document).ready(function() {
$(".formOne").submit(function(event){
  event.preventDefault();
  var entry = $("input#body").val();
  var newEntry = new Entry(entry);
   $("#output").text(newEntry.wordCount());
 });
});
