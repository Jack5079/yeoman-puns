module.exports = require( 'an-array-of-english-words' ) // A list of words
  .filter( w => !!w.startsWith( 'yo' ) ) // Only words that start with "yo"
  .filter( e => !!e.substring( 2 ) ) // Remove any words that are only "yo"
  .map( e => e.substring( 2 ) ) // Removes "yo" from the start
  .filter( async w => !require( 'util' ).promisify( require( 'npm-taken' ) )( `generator-${ w }` ) ) // Check if it's taken
  .map( w => `generator-${ w }` ) // Add "generator-" to the start