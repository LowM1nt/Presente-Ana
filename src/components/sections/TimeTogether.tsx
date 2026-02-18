import { Container } from '../layout/Container';
import { Timer } from '../ui/Timer';
import { motion } from 'framer-motion';

export function TimeTogether() {
    return (
        <section className="py-12 bg-kawaii-primary text-white text-center">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-heading mb-6 text-white">
                        Estamos juntos desde 12/06/2024
                    </h2>
                    <p className="font-body text-lg mb-8 opacity-90 font-bold">
                        E cada segundo ao seu lado é o melhor da minha vida! 💑
                    </p>

                    <div className="flex justify-center">
                        <Timer startDate="2024-06-12" />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
