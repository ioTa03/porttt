import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get('https://api.github.com/users/ioTa03');
      const reposResponse = await axios.get('https://api.github.com/users/ioTa03/repos');

      setUser(userResponse.data);
      setRepos(reposResponse.data);
    };

    fetchData();
  }, []);

  const contextValue = {
    user,
    repos,
  };

  return <UserContext.Provider value={contextValue}>
    {children}
    </UserContext.Provider>;
};

export { UserContext, UserProvider };