

/*import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data"; // Data for hogs
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";

function App() {
  // State hooks
  const [hogs, setHogs] = useState(hogsData); // Array of hogs
  const [isGreasedOnly, setIsGreasedOnly] = useState(false); // Filter greased hogs
  const [sortOption, setSortOption] = useState(''); // Sort by name or weight
  const [hiddenHogs, setHiddenHogs] = useState(new Set()); // Track hidden hogs by name

  // Filter hogs based on "Greased" and "Hidden"
  const filteredHogs = hogs.filter(hog => {
    if (isGreasedOnly && !hog.greased) {
      return false; // Exclude non-greased hogs when filter is enabled
    }
    return !hiddenHogs.has(hog.name); // Exclude hidden hogs
  });

  // Sort the filtered hogs
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortOption === 'weight') {
      return a.weight - b.weight; // Sort by weight
    }
    return 0; // Default, no sorting
  });

  // Function to add a new hog
  const addHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  // Function to hide a hog
  const hideHog = (hogName) => {
    setHiddenHogs((prevHiddenHogs) => new Set(prevHiddenHogs).add(hogName));
  };

  return (
    <div className="App">
      <Nav />
      
      {}
      <AddHogForm addHog={addHog} />
      
      {}
      <FilterSort 
        setGreased={setIsGreasedOnly} 
        setSortOption={setSortOption} 
      />
      
      {}
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogTile hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;*/

import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data"; // Data for hogs
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";

function App() {
  // State hooks
  const [hogs, setHogs] = useState(hogsData); // Array of hogs
  const [isGreasedOnly, setIsGreasedOnly] = useState(false); // Filter greased hogs
  const [sortOption, setSortOption] = useState(''); // Sort by name or weight
  const [hiddenHogs, setHiddenHogs] = useState(new Set()); // Track hidden hogs by name

  // Filter hogs based on "Greased" and "Hidden"
  const filteredHogs = hogs.filter(hog => {
    if (isGreasedOnly && !hog.greased) {
      return false; // Exclude non-greased hogs when filter is enabled
    }
    return !hiddenHogs.has(hog.name); // Exclude hidden hogs
  });

  // Sort the filtered hogs
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortOption === 'weight') {
      return a.weight - b.weight; // Sort by weight
    }
    return 0; // Default, no sorting
  });

  // Function to add a new hog
  const addHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  // Function to hide a hog
  const hideHog = (hogName) => {
    setHiddenHogs((prevHiddenHogs) => new Set(prevHiddenHogs).add(hogName));
  };

  return (
    <div className="App">
      <Nav />
      
      {/* Add new Hog Form */}
      <AddHogForm addHog={addHog} />
      
      {/* Filter and Sort Controls */}
      <FilterSort 
        setGreased={setIsGreasedOnly} 
        setSortOption={setSortOption} 
      />
      
      {/* Display Sorted and Filtered Hogs */}
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogTile hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;