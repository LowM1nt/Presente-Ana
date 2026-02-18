import { useState } from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

const coupons = [
    { id: 1, title: 'Vale um Jantar', icon: '🍕', color: 'bg-red-200 text-red-600' },
    { id: 2, title: 'Vale Carinhos', icon: '💆‍♀️', color: 'bg-purple-200 text-purple-600' },
    { id: 3, title: 'Vale Beijos', icon: '💋', color: 'bg-blue-200 text-blue-600' },
];

export function Coupons() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <h2 className="text-4xl font-heading text-kawaii-primary text-center mb-12">Seus Presentes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function CouponCard({ coupon }: { coupon: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="h-64 group perspective-[1000px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
                className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-pink-100 border-4 border-kawaii-primary rounded-xl flex flex-col items-center justify-center p-4 shadow-lg">
                    <span className="text-6xl mb-4">🎁</span>
                    <h3 className="text-xl font-heading text-kawaii-primary">Toque para abrir</h3>
                </div>

                {/* Back */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${coupon.color} rounded-xl flex flex-col items-center justify-center p-4 shadow-lg border-4 border-white`}>
                    <span className="text-6xl mb-4">{coupon.icon}</span>
                    <h3 className="text-xl font-heading font-bold">{coupon.title}</h3>
                    <p className="text-sm mt-2 opacity-80">Válido para sempre! ❤️</p>
                </div>
            </motion.div>
        </div>
    );
}
