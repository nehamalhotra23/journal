// export function journal() {
export function Entry (entry) {
  this.entry = entry
}



Entry.prototype.wordCount = function(entry) {
  return this.entry.split(" ").length;



  }
// }
