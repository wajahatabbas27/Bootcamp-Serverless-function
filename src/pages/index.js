import React, { useState, useEffect } from "react";

const Index = () => {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    console.log("useEffect Called");

    const fetchData = async () => {
      const response = await fetch(`/.netlify/functions/hello`);
      const data = await response.json();
      setData(data);
      console.log("Data: " + JSON.stringify(data));
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>Hello world with Gatsby from Netlify!</div>
      <div>{mydata.message}</div>
    </div>
  );
};

export default Index;
