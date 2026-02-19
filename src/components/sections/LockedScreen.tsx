import { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

interface LockedScreenProps {
    targetDate: Date;
}

export function LockedScreen({ targetDate }: LockedScreenProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                // Timer expired
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-kawaii-bg text-white">
            <Container className="text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-4 border-white/30 shadow-2xl"
                >
                    <div className="text-6xl mb-6">🔒</div>
                    <h1 className="text-3xl md:text-5xl font-heading mb-4 drop-shadow-lg">
                        Shhh! É segredo...
                    </h1>
                    <p className="text-xl font-body mb-8 font-bold">
                        O presente só pode ser aberto dia 18/02! 🎁
                    </p>

                    <div className="flex gap-4 justify-center font-heading text-2xl md:text-4xl text-kawaii-primary bg-white p-6 rounded-xl shadow-inner">
                        <div className="flex flex-col">
                            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                            <span className="text-xs text-gray-400 uppercase">Horas</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                            <span className="text-xs text-gray-400 uppercase">Min</span>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                            <span className="text-xs text-gray-400 uppercase">Seg</span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
