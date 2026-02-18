import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import heroImg from '../../assets/WhatsApp Image 2026-02-17 at 20.57.57.jpeg';

interface HeroProps {
    onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-kawaii-bg">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-4xl animate-bounce delay-100">🎀</div>
                <div className="absolute bottom-20 right-10 text-6xl animate-pulse">💖</div>
                <div className="absolute top-1/3 right-1/4 text-5xl animate-spin-slow opacity-50">🌸</div>
                <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-50">⭐</div>
            </div>

            <Container className="text-center z-10 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative"
                >
                    {/* Hero Image */}
                    <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden relative">
                        <img src={heroImg} alt="Nós" className="w-full h-full object-cover" />
                    </div>
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-4 -right-4 text-7xl drop-shadow-lg"
                    >
                        🎀
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading text-white drop-shadow-lg mb-4">
                        Parabéns pelos 22 anos meu Amor!
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-body drop-shadow-md font-bold">
                        Fiz esse cantinho especial somente para você...
                    </p>
                </motion.div>



                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Button onClick={onStart} className="text-xl px-10 py-4 shadow-xl box-shadow-xl" variant="secondary">
                        Começar! 🎂
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
