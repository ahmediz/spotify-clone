import React, { useEffect, useState } from 'react';
import Login from './login/Login';
import { getTokenFromUrl } from './login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
   const hash = getTokenFromUrl();
   window.location.hash = '';
   const _token = hash.access_token;

   if(_token) {
     setToken(_token)
     dispatch({
       type: 'SET_TOKEN',
       payload: _token
     })
     spotify.setAccessToken(_token);

     spotify.getMe().then(user => {
       dispatch({
         type: 'SET_USER',
         payload: user
       })
     })
   }
  }, [])
  return (
    <div className="app">
      {
        token ? (
          <Player></Player>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
