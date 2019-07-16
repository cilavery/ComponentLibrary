import React from 'react';
import {Button} from './components'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>A Component Library</div>
      </header>
      <Button url="" type="filled" value={"Button"} size="large"/>
    </div>
  );
}

export default App;
