import React, { useEffect, useState } from "react";

interface ClockOneProps {
  duration: number;
  onTimesup: any;
}

const ClockOne: React.FC<ClockOneProps> = ({ duration, onTimesup }) => {
  const [count, setCount] = useState(duration);
  const [renderTimes, setRenderTimes] = useState(0);

  const fmtMSS = (s: number) => {
    // const ms = s * 1000;
    // const days = Math.floor(s / (24 * 60 * 60));
    const hours = Math.floor((s % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((s % (60 * 60)) / 60);
    const seconds = Math.floor(s % 60);

    return `Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
  };

  useEffect(() => {
    let timer: any;
    if (renderTimes === 0) {
      timer = setInterval(() => {
        setCount((c) => {
          if (c === 0) {
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      setRenderTimes(1);
    }

    if (count === 0) {
      clearInterval(timer);
      onTimesup();
    }

    console.log("Run useEffect");
  }, [count, renderTimes, onTimesup]);

  return <>{fmtMSS(count)}</>;
};

export default ClockOne;
