function firstFunction(_callback){
    console.log("Inside 1st")
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    _callback();    
}

function secondFunction(){
    console.log("Inside secnopd");
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        console.log('huzzah, I\'m done!');
    });    
}