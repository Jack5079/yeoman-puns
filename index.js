const taken = require( 'util' ).promisify( require( 'npm-taken' ) ) // This is what we use to find taken modules
module.exports = require( 'an-array-of-english-words' ) // A list of words
  .filter( w => !!w.match( /^yo/i ) ) // Only words that start with "yo"
  .filter( async w => ( await taken( 'generator-' + w.substring( 2 ) ) ) === false ) // Removes names that are taken
  .filter( e => !!e.substring( 2 ) ) // Remove any words that are only "yo"
  .map( e => e.substring( 2 ) ) // Removes "yo" from the start
  .map( w => `generator-${ w }` ) // Add "generator-" to the start