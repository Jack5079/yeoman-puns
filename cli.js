#!/usr/bin/env node
const puns = require( '.' )
console.log( puns[ Math.floor( Math.random() * puns.length ) ].replace( 'generator-', 'yo ' ) )