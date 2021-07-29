import ticking from '../../audio/clock-ticking-4.mp3';

export const Audio = ({ soundEl }) => {
  return <audio ref={soundEl} loop src={ticking} />;
};
