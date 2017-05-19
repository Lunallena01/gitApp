var profile = require( './modules/profile' );
var fullName =  profile.firstName +' '+ profile.middleName.slice( 0, 1 ) +'. '+ profile.lastName;
var newProfile = {}

newProfile.profile = {};
newProfile.profile.name = fullName;
newProfile.profile.employer = {};
newProfile.profile.employer.name = profile.company;
newProfile.profile.employer.title = profile.title;
newProfile.profile.employer.address = profile.workAddress;

module.exports = newProfile;
