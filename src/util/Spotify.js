const myClientId = 'e2c64c55c5544fd8b4cfc1630d4ce263';
const SpotifyAuthorizationUrl = 'hhtps://accounts.spotify.com/authorize';
const uri = 'https://my-jammming-app-login://callback';
const redirectUri = 'JAMM_ING.surge.sh';

let accessToken;
let timeExpiration;

const Spotify = {
  getAccessToken(){
      let URL = `${SpotifyAuthorizationUrl}?client_id=${myClientId}&redirect_uri=${uri}&response_type=token`;
      let getAccessToken =  window.location.href.match(/access_token=([^&]*)/);
      let getTimeExpiration = window.location.href.match(/expires_in=([^&]*)/);
    if(accessToken){
      return accessToken;
    }

    window.setTimeout(() => accessToken = '', getTimeExpiration * 1000);
    window.history.pushState('Access Token', null, '/');
        if(getAccessToken && getTimeExpiration){
          accessToken = getAccessToken[1];
          timeExpiration = getTimeExpiration[1];
        } else {
        window.location = SpotifyAuthorizationUrl;
      }
},
search(inputTerm) {
  let spotifyEndpoint = `https://api.spotify.com/v1/search?type=track&q=${inputTerm.replace(' ', '%20')}`;
  return fetch(spotifyEndpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.tracks) return [];
          return jsonResponse.tracks.items.map(track => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            }
          })
        });
},
savePlaylist(playlistName, URIsList){
  if(!playlistName || !URIsList) {
    return;
  }
  let currentToken = accessToken;
  let headers = {
    'Authorization': 'Bearer ' + accessToken
  };
  let userID;
  let playlistID;
  let spotifyEndpoint = 'https://api.spotify.com/v1/me';
  fetch(spotifyEndpoint, {
    method: 'GET',
    headers: headers
  }).then(response => {
    if(response.ok){
        userID = response.id;
    }
    throw new Error('Request failed!');
  },  networkError => {

  });
  let spotifyEndpointAddPlaylist = 'https://api.spotify.com/v1/users/' + userID +'/playlists';
  fetch(spotifyEndpointAddPlaylist,{
    method: 'POST',
      headers: headers,
      body: {
        name: playlistName
      }
  }).then(response => {
    if (response.ok){
    let responseJSON =  response.json();
    playlistID = responseJSON.id;
    }
  });
  let spotifyEndPointAddTracksPlaylist = 	'/v1/users/' + userID + '/playlists/' + playlistID + '/tracks';
    headers['content-type'] =  'application/json';
  fetch(spotifyEndPointAddTracksPlaylist, {
    method: 'POST',
      headers: headers,
      body: URIsList
  }).then();
}
}
export default Spotify;
