// TODO make a function that return an object like so:
// {
//   "profile": {
//     "name": "Chanda K. Chaudhary",
//     "employer": {
//       "name": "Scholastic Inc.",
//       "title": "Quality Czar",
//       "address": "1271 6th Avenue, New York"
//     }
//   }
// }
// This object concatonates the users first name, middle name initial and last name
// It also nests an object with the profile object for the "employer"

var profile = require('./modules/profile');
var fullName =  profile.firstName +' '+ profile.middleName.slice(0,1) +'. '+ profile.lastName;
//console.log(profile);
var newProfile = {}
newProfile.profile = {};
newProfile.profile.name = fullName;
newProfile.profile.employer ={};
newProfile.profile.employer.name = profile.company;
newProfile.profile.employer.title = profile.title;
newProfile.profile.employer.address = profile.workAddress;

console.log(JSON.stringify(newProfile, null, 2));
