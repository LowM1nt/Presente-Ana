import { Container } from '../layout/Container';
import { Card } from '../ui/Card';

import img1 from '../../assets/WhatsApp Image 2026-02-15 at 15.34.03 (1).jpeg';
import img2 from '../../assets/WhatsApp Image 2026-02-15 at 15.34.03 (2).jpeg';
import img3 from '../../assets/WhatsApp Image 2026-02-15 at 15.34.03.jpeg';
import img4 from '../../assets/WhatsApp Image 2026-02-15 at 15.34.55.jpeg';

const photos = [
    { id: 1, src: img1, caption: 'Outback ksks' },
    { id: 2, src: img2, caption: 'Perfeição' },
    { id: 3, src: img3, caption: ':P' },
    { id: 4, src: img4, caption: 'Pessoa mais linda da terra' },
];

export function Gallery() {
    return (
        <section className="py-20 bg-kawaii-bg/50">
            <Container>
                <h2 className="text-4xl font-heading text-white text-center mb-12 drop-shadow-md">Nossos Momentos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {photos.map((photo, index) => (
                        <Card
                            key={photo.id}
                            className={`transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform duration-300 pb-12`}
                        >
                            <div className="bg-gray-100 aspect-square mb-4 rounded-sm overflow-hidden">
                                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                            </div>
                            <p className="font-heading text-center text-gray-600 font-bold text-xl">{photo.caption}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
