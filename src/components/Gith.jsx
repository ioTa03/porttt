import React, { useState, useEffect } from "react";

const GitHubDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const response = await fetch("https://api.github.com/users/ioTa03");
      const data = await response.json();
      setUserData(data);
    };

   

    fetchGitHubData();
  }, []);
};

export default GitHubDetails;




 