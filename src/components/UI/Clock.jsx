import React, { useState, useEffect } from "react";
import "../../style/clock.css";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  function countDown() {
    const destination = new Date("June 30, 2023").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = destination - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) clearInterval(interval);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  }
  useEffect(() => {
    countDown();
  }, []);
  return (
    <>
      <div className="clock__wrapper">
        <div className="lock__data">
          <div className="text-center">
            <h1 className="text-while">{days}</h1>
            <h3 className="text-while">Days</h3>
          </div>
          <span className="text-while">:</span>
        </div>
        <div className="lock__data">
          <div className="text-center">
            <h1 className="text-while">{hours}</h1>
            <h3 className="text-while">Hours</h3>
          </div>
          <span className="text-while">:</span>
        </div>
        <div className="lock__data">
          <div className="text-center">
            <h1 className="text-while">{minutes}</h1>
            <h3 className="text-while">Minutes</h3>
          </div>
          <span className="text-while">:</span>
        </div>
        <div className="lock__data">
          <div className="text-center">
            <h1 className="text-while">{seconds}</h1>
            <h3 className="text-while">Seconds</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
