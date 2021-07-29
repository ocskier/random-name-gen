import { useRef } from 'react';

import Audio from './components/Audio';
import Card from './components/Card';
import Header from './components/Header';

import './App.css';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 180px)',
  },
};

function App() {
  const soundEl = useRef(null);
  return (
    <div className="App">
      <Header />
      <div style={styles.main}>
        <Audio soundEl={soundEl} />
        <Card soundEl={soundEl} />
      </div>
    </div>
  );
}

export default App;
