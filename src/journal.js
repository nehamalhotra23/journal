export function journal() {


function Entry (title, entry) {
  this.title = title,
  this.entry = entry
}

var newEntry = new Entry ("title", "this is a test sentence.")


Entry.prototype.wordCount = function(entry) {
  var words = [];
  console.log(this.entry.split(" ").length);
  
}
