import { useEffect, useState, useRef } from 'react';

const useCountDown = (nextTime) => {
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    const currentSeconds = Math.floor(Date.now() / 1000);
    const secondsRemainingCalc =
      nextTime < currentSeconds ? 0 : nextTime - currentSeconds;

    setSecondsRemaining(secondsRemainingCalc);
    
    timer.current = setInterval(() => {
      setSecondsRemaining(prevSecondsRemaining => {
        if (prevSecondsRemaining <= 1) {
          clearInterval(timer.current);
        }
        return prevSecondsRemaining > 0 ? prevSecondsRemaining - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer.current);
  }, [nextTime]);

  return secondsRemaining;
};

export default useCountDown;