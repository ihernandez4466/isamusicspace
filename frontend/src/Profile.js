import React from 'react';
import { useState, useEffect } from 'react';
import { catchErrors } from './utils';
import { getCurrentUserProfile } from './Spotify';
import { Box, Text } from 'grommet';

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userPlaylist, setuserPlaylist] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getCurrentUserProfile();
            setCurrentUser(data);
        };
        catchErrors(fetchUser());
    }, []);

    return (
        <Box>
            {currentUser && ( <Text>{currentUser.display_name}</Text>)}
        </Box>
    );
}
export default Profile;