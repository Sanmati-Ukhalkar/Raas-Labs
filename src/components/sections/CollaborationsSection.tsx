import { FadeIn } from '@/components/FadeIn';
import { MagicBento } from '@/components/ui/MagicBento';

// Bollywood Photos
import ImgKriti from '@/assets/celebs_photos/bollywood/kriti.jpg';
import ImgManoj from '@/assets/celebs_photos/bollywood/manoj.jpg';
import ImgPankaj from '@/assets/celebs_photos/bollywood/pankaj.jpg';
import ImgSunil from '@/assets/celebs_photos/bollywood/sunilshetty.webp';
import ImgTapsi from '@/assets/celebs_photos/bollywood/tapsi.jpg';

// YouTube Photos
import ImgAnkit from '@/assets/celebs_photos/Youtube/Ankit.jpg';
import ImgBhuvan from '@/assets/celebs_photos/Youtube/Bhuvan_Bam.jpg';
import ImgNitish from '@/assets/celebs_photos/Youtube/NITISH RAJPUT.jpg';
import ImgRanveer from '@/assets/celebs_photos/Youtube/RANVEER ALLAHBADIA.jpg';

const bollywoodCards = [
  {
    title: 'Kriti Sanon',
    label: 'Style Icon',
    image: ImgKriti,
    className: 'md:col-span-3 md:row-span-2 min-h-[450px] md:min-h-0',
  },
  {
    title: 'Manoj Bajpayee',
    label: 'Masterclass',
    image: ImgManoj,
    className: 'md:col-span-2 md:row-span-1 min-h-[300px] md:min-h-0',
  },
  {
    title: 'Pankaj Tripathi',
    label: 'Versatility',
    image: ImgPankaj,
    className: 'md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-0',
  },
  {
    title: 'Sunil Shetty',
    label: 'Timeless',
    image: ImgSunil,
    className: 'md:col-span-3 md:row-span-1 min-h-[300px] md:min-h-0',
  },
  {
    title: 'Taapsee Pannu',
    label: 'Powerhouse',
    image: ImgTapsi,
    className: 'md:col-span-6 md:row-span-1 min-h-[300px] md:min-h-0',
  },
];

const youtubeCards = [
  {
    title: 'Bhuvan Bam',
    label: 'Digital Pioneer',
    image: ImgBhuvan,
    className: 'md:col-span-3 md:row-span-2 min-h-[450px] md:min-h-0',
  },
  {
    title: 'BeerBiceps',
    label: 'Growth Mindset',
    image: ImgRanveer,
    className: 'md:col-span-3 md:row-span-1 min-h-[300px] md:min-h-0',
  },
  {
    title: 'Ankit Baiyanpuria',
    label: 'Hard Work',
    image: ImgAnkit,
    className: 'md:col-span-2 md:row-span-1 min-h-[300px] md:min-h-0',
  },
  {
    title: 'Nitish Rajput',
    label: 'Impactful',
    image: ImgNitish,
    className: 'md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-0',
  },
];

export const CollaborationsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#030305]">
      <div className="section-divider absolute top-0 left-0 right-0 opacity-10" />

      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-[-10%] w-[1200px] h-[1200px] opacity-[0.07] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #5227FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-[-10%] w-[1200px] h-[1200px] opacity-[0.05] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #B19EEF 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 max-w-[1600px] relative z-10">
        <FadeIn>
          <div className="max-w-4xl mb-16 md:mb-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-8 md:mb-12">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/50">Prime Collaborations</span>
            </div>
            <h2 className="text-[2.25rem] md:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-[-0.05em] leading-[0.9] mb-8">
              Where Vision <br />
              <span className="gradient-text">Meets Influence.</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/40 leading-relaxed font-medium max-w-2xl">
              Architecting digital movements for culture definers. Empowering icons to scale beyond limits.
            </p>
          </div>
        </FadeIn>

        {/* Bollywood Grid */}
        <div className="mb-32 md:mb-56 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-12 gap-6">
            <div className="max-w-md">
              <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Entertainment Division</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Celebrity Portfolio</h3>
              <p className="text-white/40 font-medium">Strategic scaling for cinema's elite icons.</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-5xl md:text-8xl font-black text-white/[0.02] select-none block leading-none">BOLLYYWOOD</span>
            </div>
          </div>

          <FadeIn delay={200}>
            <MagicBento
              cards={bollywoodCards}
              gridClassName="grid-cols-1 md:grid-cols-6 md:grid-rows-2 auto-rows-fr md:h-[75vh] gap-4 md:gap-8"
            />
          </FadeIn>
        </div>

        {/* YouTube Grid */}
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-12 gap-6">
            <div className="max-w-md">
              <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Digital First</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Creator Network</h3>
              <p className="text-white/40 font-medium">Building modern empires for digital innovators.</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-5xl md:text-8xl font-black text-white/[0.02] select-none block leading-none">YOUTUBE</span>
            </div>
          </div>

          <FadeIn delay={200}>
            <MagicBento
              cards={youtubeCards}
              gridClassName="grid-cols-1 md:grid-cols-6 md:grid-rows-2 auto-rows-fr md:h-[75vh] gap-4 md:gap-8"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
