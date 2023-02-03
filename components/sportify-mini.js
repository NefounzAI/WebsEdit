import { SpotifyClient } from 'spotify-mini'

const spotify = new SpotifyClient({
  clientId: '<YOUR-SPOTIFY-CLIENT-ID>',
  clientSecret: '<YOUR-SPOTIFY-CLIENT_SECRET>',
  refreshToken: '<YOUR-SPOTIFY-REFRESH-TOKEN>',
})

// Get the currently playing track,(if there is no track playing, it will return the last played track)
const currentlyPlayingTrack = await spotify.getCurrentTrack()
/**
 {
    isPlaying: true,
    title: '<track title>',
    artist: '<artist name>',
    album: '<album name>',
 }
*/

// Get the most recently played tracks in order, default return limit is 1
const lastPlayedTracks = await spotify.getRecentTracks(2)
/**
 [
   {
      title: '<track title>',
      artist: '<artist name>',
      album: '<album name>',
   },
   {
      title: '<track title>',
      artist: '<artist name>',
      album: '<album name>',
   }
 ]
*/

// Get your most played tracks, see API doc below for available options
const topRecentTracks = await spotify.getTopTracks()
const topOverallTracks = await spotify.getTopTracks({ timeRange: 'long' })
