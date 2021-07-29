import { useEffect, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';

import persons from '../../persons.json';

const colors = [
  'red',
  'orange',
  'yellow',
  'olivegreen',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

const styles = {
  card: {
    minHeight: '30vh',
  },
  description: {
    paddingTop: '2rem',
  },
  header: {
    color: 'white',
  },
  red: {
    backgroundColor: 'red',
  },
  orange: {
    backgroundColor: 'orange',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  olivegreen: {
    backgroundColor: 'olivegreen',
  },
  teal: {
    backgroundColor: 'teal',
  },
  blue: {
    backgroundColor: 'blue',
  },
  violet: {
    backgroundColor: 'violet',
  },
  purple: {
    backgroundColor: 'purple',
  },
  pink: {
    backgroundColor: 'pink',
  },
  brown: {
    backgroundColor: 'brown',
  },
  grey: {
    backgroundColor: 'grey',
  },
  black: {
    backgroundColor: 'black',
  },
};

export const LearnerCard = () => {
  const [randomColor, setRandomColor] = useState('blue');
  const [randomPerson, setRandomPerson] = useState(persons[0]);

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [setRandomColor]);

  const start = () => {
    if (window.myInterval) {
      clearInterval(window.myInterval);
      window.myInterval = 0;
      console.log(window.myInterval);
      return;
    }
    window.myInterval = window.setInterval(() => {
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
      setRandomPerson(persons[Math.floor(Math.random() * persons.length)]);
    }, 250);
  };

  return (
    <Card centered raised style={styles.card}>
      <Card.Content style={styles[randomColor]}>
        <Card.Header style={styles.header}>{randomPerson}</Card.Header>
        <Card.Description style={styles.description}>
          Who's It going to be ?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={start}>
            Start/Stop
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
