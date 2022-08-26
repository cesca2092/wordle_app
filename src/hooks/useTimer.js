import { useEffect, useState } from "react"


export const useTimer = () => {
    const [end, setEnd] = useState(0)
    const [remaining, setRemaining] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const getTimeLeft = time => {
        if(!time) return 0;

        const left = time - new Date().getTime();

        if(left < 0) return 0;

        return left;
    }

    const initCountDown = (init) => {
        setEnd(init);

        const id = setInterval(() => {
            const timeLeft = getTimeLeft(init);
            setRemaining(timeLeft);

            if(timeLeft === 0){
                clearInterval(id);
            }
        }, 1000)

        setIntervalId(id);
    }

    const clearCountDown = () => {
        clearInterval(intervalId);
    }

    useEffect(() => {
        setRemaining( getTimeLeft(end));
    }, [])

    useEffect(() => {
        const m = Math.floor(remaining / 60000) % 60 ;
        const s = Math.floor(remaining / 1000) % 60;
        setMinutes( m < 10 ? `0${m}` : m );
        setSeconds( s < 10 ? `0${s}` : s );        
    }, [remaining])

    
    


    return {
        minutes,
        seconds,
        remaining,
        initCountDown,
        clearCountDown,
    }
}