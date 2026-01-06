import { FadeIn } from '@/components/FadeIn';
import { LogoLoop } from '@/components/ui/LogoLoop';

// Brand Logos
import Logo1 from '@/assets/Brands_logos/1.png';
import Logo2 from '@/assets/Brands_logos/2.png';
import Logo3 from '@/assets/Brands_logos/3.png';
import Logo4 from '@/assets/Brands_logos/4.png';
import Logo5 from '@/assets/Brands_logos/5.png';
import Logo6 from '@/assets/Brands_logos/6.png';
import Logo7 from '@/assets/Brands_logos/7.png';
import Logo8 from '@/assets/Brands_logos/8.png';
import Logo9 from '@/assets/Brands_logos/9.png';
import Logo10 from '@/assets/Brands_logos/10.png';

const clientLogos = [
    { src: Logo1, alt: 'Brand Logo 1' },
    { src: Logo2, alt: 'Brand Logo 2' },
    { src: Logo3, alt: 'Brand Logo 3' },
    { src: Logo4, alt: 'Brand Logo 4' },
    { src: Logo5, alt: 'Brand Logo 5' },
    { src: Logo6, alt: 'Brand Logo 6' },
    { src: Logo7, alt: 'Brand Logo 7' },
    { src: Logo8, alt: 'Brand Logo 8' },
    { src: Logo9, alt: 'Brand Logo 9' },
    { src: Logo10, alt: 'Brand Logo 10' },
];

export const OurClientsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-black/20">
            <div className="container mx-auto px-6 lg:px-24 mb-12">
                <FadeIn>
                    <h3 className="text-[1.5rem] font-semibold tracking-tight text-center text-white/50 uppercase">
                        Trusted by Industry Leaders
                    </h3>
                </FadeIn>
            </div>

            <FadeIn delay={100}>
                <div className="py-4">
                    <LogoLoop
                        logos={clientLogos}
                        speed={40}
                        logoHeight={85}
                        gap={80}
                        pauseOnHover={true}
                        className="opacity-70 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </FadeIn>
        </section>
    );
};
