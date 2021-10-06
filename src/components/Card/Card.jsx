import { useEffect, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

import persons from '../../persons.json';

const styles = {
  card: {
    minHeight: '40vh',
    boxShadow:
      '0 0 0 3px #d4d4d5, 0 0px 10px 0 rgb(34 36 38 / 50%), 0 0px 10px 0 rgb(34 36 38 / 70%)',
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
  extra: {
    backgroundColor: 'lightgray',
  },
  header: {
    marginTop: '0.8rem',
  },
  finalShadow: {
    boxShadow:
      'rgb(212 212 213) 0px 0px 0px 3px, rgb(34 36 38 / 50%) 0px 0px 20px 10px, rgb(34 36 38 / 70%) 0px 0px 20px 10px',
  },
};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;
const AnimatedCard = animated(Card);

const generateRandomColor = () => {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return {
    rgbVal: `rgb(${r},${g},${b})`,
    tone: b < 128 ? 'dark' : 'light',
  };
};

export const LearnerCard = ({ soundEl }) => {
  const [loading, setLoading] = useState(false);
  const [randomColor, setRandomColor] = useState({
    rgbVal: 'rgb(255,255,255)',
    tone: 'light',
  });
  const [randomPerson, setRandomPerson] = useState(persons[0]);
  const [spring, toggleSpring] = useState(false);
  const [final, setFinal] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: spring ? 1 : 0,
    config: { duration: 150 },
  });
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, [setRandomColor]);

  const start = () => {
    if (window.myInterval) {
      clearInterval(window.myInterval);
      window.myInterval = 0;
      setLoading(false);
      toggleSpring(!spring);
      setFinal(true);
      soundEl.current.pause();
      return;
    }
    setLoading(true);
    setFinal(false);
    soundEl.current.play();
    window.myInterval = window.setInterval(() => {
      setRandomColor(generateRandomColor());
      setRandomPerson(persons[Math.floor(Math.random() * persons.length)]);
    }, 150);
  };

  return (
    <AnimatedCard
      centered
      raised
      style={Object.assign(
        {},
        {
          ...styles.card,
          transform: props.xys.to(trans),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        },
        final ? { ...styles.finalShadow } : {}
      )}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1] });
        setFinal(false);
      }}
    >
      <Card.Content style={{ backgroundColor: randomColor.rgbVal, fontSize, '1.6rem' }}>
        <Card.Header
          style={Object.assign(
            {},
            styles.header,
            randomColor.tone === 'light' ? styles.darkTxt : styles.lightTxt
          )}
        >
          {randomPerson}
        </Card.Header>
        <Card.Description
          style={Object.assign(
            {},
            styles.description,
            randomColor.tone === 'light' ? styles.darkTxt : styles.lightTxt
          )}
        >
          Who's it going to be ?
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={styles.extra}>
        <div className="ui one buttons">
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
  );
};
