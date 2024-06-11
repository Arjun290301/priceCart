import React from 'react';

import Hero from './Components/Hero';
import products, { UserContext } from './Components/Data';

const App = () => {
  return <>
    <UserContext.Provider value={{ products }}>
      <Hero />
    </UserContext.Provider>

  </>

};

export default App;