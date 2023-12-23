import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [countdown, setCountdown] = useState("00 hrs, 00 min, 00 sec");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const offset = date.getTimezoneOffset();
      const seconds = Math.floor(date / 1000) % 60;
      const minutes = Math.floor(date / 1000 / 60) % 60;
      const hours = Math.floor(date / 1000 / 60 / 60) % 24;

      setCountdown(
        `${hours.toString().padStart(2, "0")} hrs, ${minutes
          .toString()
          .padStart(2, "0")} min, ${seconds.toString().padStart(2, "0")} sec`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{countdown}</div>;
}

export default CountdownTimer;
