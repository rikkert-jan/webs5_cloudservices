
//We gaan een module ophalen genaamd file system.
//De module is globlaal en kunnen we altijd benaderen
//NodeJS heeft veel globale modules
var fs = require('fs');

//Via de command line kunnen we ku deze file execute en 2 parameters meegeven
var dirname = process.argv[2]; //De folder om in te zoeken
var ext = process.argv[3]; //De extensie waarop we willen zoeken.
var pat = RegExp('\\.' + ext + '$');

console.log("searching for all files in '" + dirname + "' with extension '" + ext + "'");
console.log("---------------------------");

file = fs.readdir(dirname, function(err, files) {
 for (i = 0; i < files.length; i++) {
   if (ext == undefined || pat.test(files[i])) {
     console.log(files[i]);
   }
 }
});