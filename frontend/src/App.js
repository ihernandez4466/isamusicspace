import React from 'react';
import { useState, useEffect } from 'react';
import { mytheme } from './theme';
import { Grommet, Box,Header, Button, Text, Tabs, Tab, dark } from 'grommet';
import { Home, Moon, Sun } from 'grommet-icons';
import Analytics from './Analytics';
import CompareProviders from './CompareProviders';
//  import $ from 'jquery';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const access_token = urlParams.get('access_token');
    const refresh_token = urlParams.get('refresh_token');
    console.log(access_token);
    console.log(refresh_token);
  }, [])
  const login = async () => {
    setIsLoading(true);
    fetch('http://localhost:8000/login')
      .then(response => response.json())
      .then(data => console.log(data));
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    setLoggedIn(true);
    setCurrentUser(body);
  }
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
          <Button label={loggedIn ? 'login' : 'logout'} onClick={() => login()}/>
            <Button
              secondary
              background="green"
              padding="small"
              icon={darkMode ? <Sun /> : <Moon /> }
              onClick={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Header>
        <Box height="100%" background='background-contrast' margin="medium">
          <Tabs>
            <Tab title="Analytics" alignControls="stretch">
              <Analytics />
            </Tab>
            <Tab title="Compare">
              <CompareProviders />
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
