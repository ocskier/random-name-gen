import { Advertisement } from 'semantic-ui-react';

const styles = {
  header: {
    width: '100%',
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
