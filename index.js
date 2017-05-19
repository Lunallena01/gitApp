var newProfile = require( './newProfile' );

// console.log( JSON.stringify( newProfile, null, 2 ) );

//writeNewProfile( { name: 'Chanda' } );

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

console.log( makeProfile( 'Chanda' , 'Scholastic Inc', 'Quality Czar', '1271 6th Avenue, New York') );
