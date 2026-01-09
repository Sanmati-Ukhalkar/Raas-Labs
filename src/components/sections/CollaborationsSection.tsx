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

import ImgHero from '@/assets/hero-visual.jpg';

const bollywoodCards = [
  {
    title: 'Kriti Sanon',
    label: 'Style Icon',
    image: ImgKriti,
    className: 'md:col-span-1 md:row-span-2',
    aspectRatio: '125%', // 4:5
    objectPosition: 'center 20%',
  },
  {
    title: 'Manoj Bajpayee',
    label: 'Masterclass',
    image: ImgManoj,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '90%', // Increased from 16:9 to fill vertical space
    objectPosition: 'top',
  },
  {
    title: 'Sunil Shetty',
    label: 'Presence',
    image: ImgSunil,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '90%', // Increased from 16:9 to fill vertical space
    objectPosition: 'top',
  },
  {
    title: 'Taapsee Pannu',
    label: 'Powerhouse',
    image: ImgTapsi,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '100%', // 1:1
    objectPosition: 'center',
  },
  {
    title: 'Pankaj Tripathi',
    label: 'Versatility',
    image: ImgPankaj,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '100%', // 1:1
    objectPosition: 'center',
  },
];

const youtubeCards = [
  {
    title: 'Bhuvan Bam',
    label: 'Pioneer',
    image: ImgBhuvan,
    className: 'md:col-span-1 md:row-span-2',
    aspectRatio: '125%',
    objectPosition: 'top',
  },
  {
    title: 'Ranveer Allahbadia',
    label: 'Mindset',
    image: ImgRanveer,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '90%', // Increased from 16:9 to fill vertical space
    objectPosition: 'top',
  },
  {
    title: 'Nitish Rajput',
    label: 'Impactful',
    image: ImgNitish,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '90%', // Increased from 16:9 to fill vertical space
    objectPosition: 'top',
  },
  {
    title: 'Ankit Baiyanpuria',
    label: 'Dedicated',
    image: ImgAnkit,
    className: 'md:col-span-1 md:row-span-1',
    aspectRatio: '100%',
    objectPosition: 'top',
  },
];

export const CollaborationsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] opacity-[0.03] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #5227FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-standard relative z-10">
        <FadeIn>
          <div className="mb-16 md:mb-24 text-center mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="label-uppercase !text-[10px] !text-white/40">Editorial Portfolio</span>
            </div>
            <h2 className="mb-8">
              The Wall of <span className="opacity-30">Influence.</span>
            </h2>
            <p className="max-w-xl mx-auto !text-sm leading-relaxed text-white/50">
              A curated showcase of industry leaders and cultural icons. Defining the next era of digital excellence.
            </p>
          </div>
        </FadeIn>

        {/* Bollywood Media Grid */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/5 pb-8 gap-6">
            <div className="max-w-md">
              <span className="text-primary/60 font-black uppercase text-[9px] tracking-[0.3em] mb-3 block">Cinema Division</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">Celebrity Collective</h3>
              <p className="text-white/30 text-xs font-medium">Strategic architecture for cinema's leading voices.</p>
            </div>
          </div>

          <FadeIn delay={80} direction="up">
            <div className="max-w-5xl mx-auto">
              <MagicBento
                cards={bollywoodCards}
                gridClassName="grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4"
              />
            </div>
          </FadeIn>
        </div>

        {/* YouTube Media Grid */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/5 pb-8 gap-6">
            <div className="max-w-md">
              <span className="text-secondary/60 font-black uppercase text-[9px] tracking-[0.3em] mb-3 block">Digital First</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">Creator Alliance</h3>
              <p className="text-white/30 text-xs font-medium">Empowering the visionaries of the modern web.</p>
            </div>
          </div>

          <FadeIn delay={80} direction="up">
            <div className="max-w-5xl mx-auto">
              <MagicBento
                cards={youtubeCards}
                gridClassName="grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
