
export function Entry (entry) {
  this.entry = entry
}



Entry.prototype.wordCount = function(entry) {
  return this.entry.split(" ").length;
  }

Entry.prototype.vowelCount = function(entry){
  var vowel= this.entry.match(/[aeiou]/g)
    return vowel.length
  }

  Entry.prototype.consCount = function(entry){
    var consonant= this.entry.match(/[^aeiou]/g)
      return consonant.length
    }
