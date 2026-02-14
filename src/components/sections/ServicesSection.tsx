import { FadeIn } from '@/components/FadeIn';

export const ServicesSection = () => {
  return (
    <section className="bg-background p-2 md:p-[10px] flex items-center justify-center">
      {/* Inner Container: White background with rounded corners 
                Desktop: 3/4 height (min-h-[75vh])
                Mobile: Optimized height (min-h-[60vh])
            */}
      <div className="w-full min-h-[60vh] md:min-h-[75vh] bg-white rounded-[24px] md:rounded-[40px] flex items-center justify-center text-center relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="container-standard py-12 md:py-24 px-4 md:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="label-uppercase mb-4 md:mb-6 text-xs md:text-sm text-black/50 tracking-widest uppercase font-medium">
                What we do
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-0">
                We turn complex processes into <span className="gradient-text">automated systems.</span>
              </h2>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
