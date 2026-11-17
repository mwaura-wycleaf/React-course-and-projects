import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export function CurrentTime() {
  
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    // Set up an interval to update the state every second
    const timer = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once on mount

  return <p>currentTime: {time}</p>;
}
