import { useState, useEffect } from 'react';

interface TimerProps {
    startDate: string; // Format: YYYY-MM-DD
}

export function Timer({ startDate }: TimerProps) {
    const [time, setTime] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTime = () => {
            const start = new Date(startDate);
            const now = new Date();

            let years = now.getFullYear() - start.getFullYear();
            let months = now.getMonth() - start.getMonth();
            let days = now.getDate() - start.getDate();
            let hours = now.getHours() - start.getHours();
            let minutes = now.getMinutes() - start.getMinutes();
            let seconds = now.getSeconds() - start.getSeconds();

            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }
            if (hours < 0) {
                hours += 24;
                days--;
            }
            if (days < 0) {
                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += previousMonth.getDate();
                months--;
            }
            if (months < 0) {
                months += 12;
                years--;
            }

            setTime({ years, months, days, hours, minutes, seconds });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div className="flex flex-wrap justify-center gap-4 text-white drop-shadow-md">
            {Object.entries(time).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[70px]">
                    <span className="text-3xl font-heading font-bold">{value}</span>
                    <span className="text-xs uppercase tracking-wider opacity-90">{translateLabel(label)}</span>
                </div>
            ))}
        </div>
    );
}

function translateLabel(label: string) {
    const translations: Record<string, string> = {
        years: 'Anos',
        months: 'Meses',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Min',
        seconds: 'Seg'
    };
    return translations[label] || label;
}
