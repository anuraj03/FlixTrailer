import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {action,orginals,horror,romance,documentaries,comedy} from './urls'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost  url={orginals}title='Netflix Orginals'   />
     <Rowpost   url={action} title='Action'isSmall   />
     <Rowpost   url={comedy} title='Comedy'isSmall   />
     <Rowpost   url={horror} title='Horror'isSmall   />
     <Rowpost   url={romance} title='Romance'isSmall   />
     <Rowpost   url={documentaries} title='Documentaries'isSmall   />
    </div>
  );
}

export default App;
