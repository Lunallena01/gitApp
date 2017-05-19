var newProfile = require( './newProfile' );

console.log( JSON.stringify( newProfile, null, 2 ) );

var makeProfile = require( './modules/MakeProfile');  

console.log( makeProfile( 'Chanda k.Chaudhary' , 'Scholastic Inc', 'Quality Czar', '1271 6th Avenue, New York') );
