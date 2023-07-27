import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';

const App = () => {
  useEffect(() => {
    const testBooked = localStorage.getItem('testBooked')
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if(isAuthenticated === null) {
      localStorage.setItem('isAuthenticated', false);
    }

    if (testBooked === null) {
      localStorage.setItem('testBooked', false)
    }    
    const classNumber = localStorage.getItem('classNumber')
    if (classNumber === null) {
      localStorage.setItem('classNumber', 'Class 5 - Single Vehicle or Combination')
    } 
    const locations = {
      Halifax: 'Bayers Lake Business Park, 300 Horseshoe Lake Dr, Halifax NS, B3S 0B7',
      Dartmouth: '250 Baker Dr, Dartmouth NS, B2W6L4',
      Sackville: '486 Sackville Drive, Lower Sackville NS, B4C 2R8',
      Bridgewater: '81 Logan Road, Bridgewater NS, B4V 3T3',
      Kentville: '5 Shylah Drive, Kentville NS, B4N 0H2'
    };
    const locationDict = JSON.stringify(locations);
    localStorage.setItem('locations', locationDict);
  }, []);

  return (
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
  );
};

export default App;
