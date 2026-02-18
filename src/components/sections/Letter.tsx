import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import letterImg from '../../assets/WhatsApp Image 2026-02-17 at 20.57.57.jpeg';

export function Letter() {
    return (
        <section className="py-20 bg-kawaii-bg relative">
            <Container>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden min-h-[500px]"
                    >
                        {/* Paper lines - fixed 32px height */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(transparent 31px, #ffb7b2 31px)',
                                backgroundSize: '100% 32px',
                                marginTop: '4rem' // Offset for title
                            }}>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-heading text-kawaii-primary mb-8 text-center" style={{ height: '32px', lineHeight: '32px' }}>
                                Para o Amor da Minha Vida
                            </h2>

                            <div className="font-body text-lg text-gray-700 space-y-0">
                                <p style={{ lineHeight: '32px' }}>Meu mozinho,</p>
                                <p style={{ lineHeight: '32px' }}>&nbsp;</p>
                                <p style={{ lineHeight: '32px' }}>Em primeiro lugar,</p>
                                <p style={{ lineHeight: '32px' }}>você é a mulher mais linda do mundo.</p>
                                <p style={{ lineHeight: '32px' }}>pessoa mais incrível que eu já conheci na vida</p>
                                <p style={{ lineHeight: '32px' }}>acima de tudo a pessoa que mais me faz feliz.</p>
                                <p style={{ lineHeight: '32px' }}>&nbsp;</p>
                                <p style={{ lineHeight: '32px' }}>Espero q goste dessa pequena surpresa fiz de coração.</p>
                                <p style={{ lineHeight: '32px' }}>&nbsp;</p>
                                <p style={{ lineHeight: '32px' }}>Você merece todo o amor do mundo!</p>
                                <p style={{ lineHeight: '32px' }}>&nbsp;</p>
                                <div className="flex justify-end mt-8">
                                    <div className="text-right">
                                        <p className="font-heading text-kawaii-primary" style={{ lineHeight: '32px' }}>Com todo meu amor,</p>
                                        <p className="font-heading text-kawaii-primary font-bold" style={{ lineHeight: '32px' }}>Luís</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorations */}
                        <div className="absolute top-4 right-4 text-4xl animate-pulse">💌</div>
                        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-kawaii-primary shadow-lg rotate-12">
                            <img src={letterImg} alt="Nós" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
