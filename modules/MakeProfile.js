var makeProfile = function( name, employer, title, address ) {
  var returnObject = {
    profile: {
      name: '',
      employer: {
        name: '',
        title: '',
        address: ''
      }
    }
  };

  returnObject.profile.name = name;
  returnObject.profile.employer.name = employer;
  returnObject.profile.employer.title = title;
  returnObject.profile.employer.address = address;

  return returnObject;
}

module.exports = makeProfile;
