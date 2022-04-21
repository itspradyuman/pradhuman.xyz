/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Pradhuman Singh Parmar <pradhumansp1@gmail.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

 import * as React from "react"

 // Size presets, defined by Spotify
 const sizePresets = {
   large: {
     width: 350,
     height: 380,
   },
   compact: {
     width: 300,
     height: 80,
   },
 }
 
 function SpotifyPlayer({ uri, view, theme, size }) {
   return (
     <iframe 
       title="Spotify"
       className="SpotifyPlayer"
       src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
       width={sizePresets[size].width}
       height={sizePresets[size].height}
       frameBorder="0"
       allowtransparency="true"
       
     />
   )
 }
 
 export default SpotifyPlayer