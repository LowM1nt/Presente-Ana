import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        question: "Onde foi nosso primeiro beijo?",
        options: ["Cinema", "Represa", "Festa", "Portão de casa"],
        correct: 1 // Index
    },
    {
        question: "Qual minha cor favorita?",
        options: ["Azul", "Rosa", "Roxo", "Preto"],
        correct: 3
    },
    {
        question: "O que a gente mais comeu juntos?",
        options: ["Pizza", "Sushi", "Hambúrguer", "Açaí"],
        correct: 0
    }
];

interface QuizProps {
    onComplete: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
    const correctAudio = useRef<HTMLAudioElement | null>(null);
    const errorAudio = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        correctAudio.current = new Audio(`${import.meta.env.BASE_URL}correct.mp3`);
        errorAudio.current = new Audio(`${import.meta.env.BASE_URL}error.mp3`);

        // Preload
        correctAudio.current.load();
        errorAudio.current.load();
    }, []);

    const playSound = (type: 'correct' | 'error') => {
        const audio = type === 'correct' ? correctAudio.current : errorAudio.current;
        if (audio) {
            audio.currentTime = 0; // Reset to start
            audio.play().catch(e => console.log("Audio play failed", e));
        }
    };

    const handleAnswer = (index: number) => {
        if (index === questions[currentQuestion].correct) {
            playSound('correct');
            setLastCorrect(true);
            if (currentQuestion < questions.length - 1) {
                setTimeout(() => {
                    setLastCorrect(null);
                    setCurrentQuestion(prev => prev + 1);
                }, 1000);
            } else {
                setTimeout(() => {
                    setIsCompleted(true);
                    onComplete();
                    confetti({
                        particleCount: 150,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#FF69B4', '#FFC0CB', '#FFFFFF']
                    });
                }, 500);
            }
        } else {
            playSound('error');
            setLastCorrect(false);
            setTimeout(() => setLastCorrect(null), 1000);
        }
    };

    return (
        <section className="py-20 bg-kawaii-bg">
            <Container>
                <h2 className="text-4xl font-heading text-white text-center mb-8 drop-shadow-md">Quiz do Amor</h2>

                <Card className="text-center min-h-[400px] flex flex-col justify-center items-center relative overflow-hidden">
                    <AnimatePresence mode='wait'>
                        {isCompleted ? (
                            <motion.div
                                key="completed"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="text-6xl mb-4">🏆</div>
                                <h3 className="text-2xl font-heading text-kawaii-primary mb-4">Parabéns!</h3>
                                <p className="text-gray-600 mb-6 font-body text-lg">Você me conhece tão bem! ❤️</p>
                                <div className="p-4 bg-kawaii-bg/30 rounded-lg">
                                    <p className="font-bold text-kawaii-primary">Prêmio desbloqueado: Cupons do Amor!</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="w-full"
                            >
                                <div className="mb-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
                                    Pergunta {currentQuestion + 1} de {questions.length}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 font-body">{questions[currentQuestion].question}</h3>

                                <div className="grid gap-4 max-w-xs mx-auto">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                            variant="outline"
                                            className="w-full border-kawaii-primary text-kawaii-primary hover:bg-kawaii-primary hover:text-white transition-colors"
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>

                                <div className="h-8 mt-4">
                                    {lastCorrect === false && (
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-bold">Tente de novo! 🙈</motion.p>
                                    )}
                                    {lastCorrect === true && (
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 font-bold">Isso aí! 🥰</motion.p>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>
            </Container>
        </section>
    );
}
