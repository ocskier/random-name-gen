import { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

import persons from '../../persons.json';
import ticking from '../../audio/clock-ticking-4.mp3';

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
  darkTxt: {
    color: 'black',
  },
  lightTxt: {
    color: 'white',
  },
  header: {
    marginTop: '0.8rem',
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

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;

const AnimatedCard = animated(Card);

export const LearnerCard = () => {
  const [loading, setLoading] = useState(false);
  const [randomColor, setRandomColor] = useState('blue');
  const [randomPerson, setRandomPerson] = useState(persons[0]);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  const soundEl = useRef(null);

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [setRandomColor]);

  const start = () => {
    if (window.myInterval) {
      clearInterval(window.myInterval);
      window.myInterval = 0;
      setLoading(false);
      soundEl.current.pause();
      return;
    }
    setLoading(true);
    soundEl.current.play();
    window.myInterval = window.setInterval(() => {
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
      setRandomPerson(persons[Math.floor(Math.random() * persons.length)]);
    }, 300);
  };

  return (
    <>
      <AnimatedCard
        centered
        raised
        style={{ ...styles.card, transform: props.xys.interpolate(trans) }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
      >
        <Card.Content style={styles[randomColor]}>
          <Card.Header
            style={Object.assign(
              {},
              styles.header,
              randomColor === 'yellow' ||
                randomColor === 'teal' ||
                randomColor === 'violet' ||
                randomColor === 'pink' ||
                randomColor === 'orange'
                ? styles.darkTxt
                : styles.lightTxt
            )}
          >
            {randomPerson}
          </Card.Header>
          <Card.Description
            style={Object.assign(
              {},
              styles.description,
              randomColor === 'yellow' ||
                randomColor === 'teal' ||
                randomColor === 'violet' ||
                randomColor === 'pink' ||
                randomColor === 'orange'
                ? styles.darkTxt
                : styles.lightTxt
            )}
          >
            Who's It going to be ?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              secondary
              color="green"
              onClick={start}
              loading={loading ? loading : null}
            >
              Start
            </Button>
          </div>
        </Card.Content>
      </AnimatedCard>
      <audio ref={soundEl} loop src={ticking} />
    </>
  );
};
