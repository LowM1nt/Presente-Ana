import { Container } from '../layout/Container';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaGift, FaKissWinkHeart } from 'react-icons/fa';

const milestones = [
    { date: '2024', title: 'O Começo', description: 'Lembra quando a gente foi no shopping? Pra mim vai ser sempre especial.', icon: FaHeart },
    { date: '2024', title: 'Eu Te Amo', description: 'Lembro certinho de quando sai da call morrendo de vergonha kkkkkkkkk', icon: FaStar },
    { date: '2025', title: 'A pessoa mais especial', description: 'você acompanhou todo meu crescimento e estava comigo enquanto não tinha nada.', icon: FaGift },
    { date: 'Hoje', title: 'Seu Aniversário', description: 'Celebrando a mais um ano de vida da minha pessoa mais especial!', icon: FaKissWinkHeart },
];

export function Timeline() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <h2 className="text-4xl font-heading text-kawaii-primary text-center mb-12">Nossa História</h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-kawaii-bg rounded-full"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className="w-5/12"></div>

                                <div className="z-10 bg-kawaii-primary text-white p-3 rounded-full border-4 border-white shadow-lg relative">
                                    <item.icon size={24} />
                                </div>

                                <div className="w-5/12 bg-kawaii-bg/20 p-4 md:p-6 rounded-xl shadow-md border-b-4 border-kawaii-bg/40">
                                    <span className="text-kawaii-primary font-bold text-sm block mb-1">{item.date}</span>
                                    <h3 className="text-lg md:text-xl font-heading text-gray-800 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-body text-sm md:text-base">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
