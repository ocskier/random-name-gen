import { useRef } from 'react';

import Audio from './components/Audio';
import Card from './components/Card';
import Header from './components/Header';

import './App.css';

const styles = {
  bg: {
    width: '100%',
    position: 'absolute',
    height: 'calc(100vh - 180px)',
    opacity: '0.75',
    // background: 'rgb(0 0 0)', future theme implementation
  },
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
        <div style={styles.bg}></div>
        <Audio soundEl={soundEl} />
        <Card soundEl={soundEl} />
      </div>
    </div>
  );
}

export default App;
