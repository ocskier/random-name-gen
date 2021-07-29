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
  return (
    <div className="App">
      <Header />
      <div style={styles.main}>
        <Card />
      </div>
    </div>
  );
}

export default App;
