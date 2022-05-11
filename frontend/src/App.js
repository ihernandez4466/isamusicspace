import React from 'react';
import { useState, useEffect } from 'react';
import { mytheme } from './theme';
import { Tip, Grommet, Box,Header, Button, Image, Text } from 'grommet';
import { Moon, Sun, Spotify } from 'grommet-icons';
import { access_token, logout } from './Spotify';
import AnalyticsGrid from './AnalyticsGrid';
import Loading from './Loading';
import Profile from './Profile';
import play from './playgify.gif';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [ token, setToken ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setToken(access_token);
      setIsLoading(false);
    }, 1000);
  }, [token]);
  return (
    <Grommet
        full
        responsive
        theme={mytheme}
        themeMode={darkMode ? 'dark' : 'light'}
        height={{ min: '100%' }}
      >
      <Box direction="column" fill>
        <Header background='brand'>
          <Tip 
          dropProps={{ align: { left: "right" } }}
          content={
            <Box background="accent-2" round pad="small" width={{ max: 'small' }}>
              <Text color="text-strong">Go To Spotify</Text>
            </Box>
          }>
            <a href="https://www.spotify.com/us/"><Button primary margin="xsmall" icon={<Spotify />} /></a>
          </Tip>
          <Box direction="row" gap="xsmall" pad="xsmall">
          {token && <Button label='logout' onClick={() => logout()}/>}
            <Button
              secondary
              background="green"
              padding="small"
              icon={darkMode ? <Sun /> : <Moon /> }
              onClick={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Header>
        <Profile />
        {isLoading ? ( <Loading /> ) : (
        <Box height="100%" round background='background-contrast' margin="medium">
          {!token ? (
            <Box fill margin="small" align="center" justify="center" gap="xxsmall">
              <h1>Welcome! </h1>
              <Box direction='row' align="center" gap="small">
                <Spotify size="large"/>
                <h2>See my Spotify Analytics</h2>
              </Box>
              <a href="http://localhost:8000/login"><Button label='Login'/></a> 
              <Image src={play}/>
            </Box>
          ): <AnalyticsGrid  />}
        </Box>
        )}
      </Box>
    </Grommet>
  );
}

export default App;
