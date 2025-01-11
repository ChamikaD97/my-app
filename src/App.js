import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [filteredData, setFilteredData] = useState([]);

  const fetchEngines = async () => {
    const API_URL = "http://13.60.98.221:5000";

    try {
      const engineRes = await axios.get(`${API_URL}/api/engines`, {
        headers: { Authorization: "token" },
      });

      setFilteredData(engineRes.data);

    } catch (error) {
      console.error("Error fetching engines:", error.message);
    }
  };
useEffect(()=>{
  fetchEngines()
},[])
  return (
    <div className="App">
      <header className="App-header">
       
        {filteredData.length}
      
      </header>
    </div>
  );
}

export default App;
