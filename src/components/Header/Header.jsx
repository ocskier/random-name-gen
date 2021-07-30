import { Advertisement } from 'semantic-ui-react';

const styles = {
  header: {
    width: '100%',
    background: 'rgb(9, 20, 164)',
    background:
      '-moz-radial-gradient(center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)',
    background:
      '-webkit-radial-gradient(center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)',
    background:
      'radial-gradient(ellipse at center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)',
  },
};

export const Header = () => {
  return (
    <Advertisement
      style={styles.header}
      unit="top banner"
      test="Random Cold Caller"
    />
  );
};
