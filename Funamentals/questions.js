// What is happening?

setTimeout( function() { console.log("start") }, 3000 );
console.log("end");

// what is function word for?
var exampleFunction = function(message){
    console.log( message );
};
exampleFunction( "Hello from exampleFunction" );



// Black magic??
function parentFunction( callback ) {
    callback( "information from the parent function" );
}

parentFunction( exampleFunction );

parentFunction( function(message) {
    console.log( message );
});

