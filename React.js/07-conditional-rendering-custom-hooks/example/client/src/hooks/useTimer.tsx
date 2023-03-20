import React, { useState, useEffect } from 'react'

export default function useTimer(defaultClock = 0, defaultRunningStatus =false) {
    const [time, setTime] = useState(defaultClock);
    const [isTimerRunning, setTimerRunning] = useState(defaultRunningStatus);
    const [timerData, setTimerData] = useState('HH:MM:SS');

    const tick = (e:any) => {
        e && e.preventDefault()
        if (time >= 0 && isTimerRunning) {
            setTime(time + 1)
        }
    }

    const handleReset = (e:any) => {
        e && e.preventDefault()
        setTime(defaultClock)
    }

    const togglePlayPause = (e:any) => {
        e && e.preventDefault()
        setTimerRunning(!isTimerRunning)
    }

    const secondsToHMS = (seconds:any) => {
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);
    
        var hDisplay = h > 0 ? String(h).padStart(2, '0') : "00";
        var mDisplay = m > 0 ? String(m).padStart(2, '0') : "00";
        var sDisplay = s > 0 ? String(s).padStart(2, '0') : "00";
        return hDisplay + ':' + mDisplay + ':' + sDisplay; 
    }

    useEffect(() => {
        setTimerData(secondsToHMS(time))
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [time, isTimerRunning])


    return {timerData, isTimerRunning, togglePlayPause, handleReset}
}