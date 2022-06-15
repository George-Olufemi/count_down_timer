import React,{useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {
  const[ timerDays, setTimerDays] =useState('00');
  const[ timerHours, setTimerHours] =useState('00');
  const[ timerMinutes, setTimerMinutes] =useState('00');
  const[ timerSeconds, setTimerSeconds] =useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('June 30 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
      const seconds = Math.floor(((distance % (1000 * 60 ))) / 1000);
  
      if (distance < 0 ){
        // stop timer   
        clearInterval(interval.current);
      } else {
       // update timer
       setTimerDays(days);
       setTimerHours(hours);
       setTimerMinutes(minutes);
       setTimerSeconds(seconds);
      }
    }, 1000);
  
  };


  //componentDidMount
   useEffect(() => {
     startTimer();
     return() => {
      clearInterval(interval.current);
     };
   });


  return (
    <div className="">
      <section className="timer-container">
        <section className='timer'>
          {/* #first-child */}
          <div className='main'>
            <span className=''><svg xmlns="http://www.w3.org/2000/svg" className="pic h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg></span>
            <h2>Countdown To Our Next Service</h2>
            <p>Countdown to Our Services!. One you should never miss.</p>
          </div>

          <div className="time">
            <section>
              <p>{timerDays}</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{timerHours}</p>
              <p><small>Hours</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{timerMinutes}</p>
              <p><small>Minutes</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{timerSeconds}</p>
              <p></p>
              <p><small>Seconds</small></p>
            </section>
            
          </div>
        </section>

      </section>
    </div>
  );
}

export default App;