import React from 'react';
import { useState, useEffect } from 'react';
import { mytheme } from './theme';
import { Grommet, Box,Header, Button, Tabs, Tab, Text } from 'grommet';
import { Home, Moon, Sun } from 'grommet-icons';
import { access_token, logout } from './Spotify';
import AnalyticsGrid from './AnalyticsGrid';
import Loading from './Loading';
import Profile from './Profile';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
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
          <Button primary margin="xsmall" icon={<Home />} />
          <Box direction="row" gap="xsmall" pad="xsmall">
          {token ? ( <Button label='logout' onClick={() => logout()}/> ) : 
            (<a href="http://localhost:8000/login"><Button label={token ? 'logout' : 'login'}/></a> 
          )}
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
            <Text alignSelf='center'>You are not logged in</Text>
          ): (
            <AnalyticsGrid  />
            )}
        </Box>
        )}
      </Box>
    </Grommet>
  );
}

export default App;
