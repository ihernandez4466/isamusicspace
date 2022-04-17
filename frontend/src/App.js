import React from 'react';
import { useState } from 'react';
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

  const login = async () => {
    setIsLoading(true);
    const response = await fetch('/login', {mode:'no-cors'});
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    setLoggedIn(true);
    setCurrentUser(body);
    return body;
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
            <Button label={loggedIn ? 'Logout' : 'Login' } onClick={() => { login() }} />
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
