import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';

const App = () => {
  useEffect(() => {
  }, []);

  return (
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
  );
};

export default App;
