// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();

connect().on("Move: up", function(){

});

// connect().on("Name:AKA", function(){

// });