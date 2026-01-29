import { motion } from 'framer-motion';

// Client data - Replace with actual client names/logos
const clients = [
    { name: 'TechVenture', highlight: 'Tech' },
    { name: 'Innovate Co', highlight: 'Innovate' },
    { name: 'Nexus Labs', highlight: 'Nexus' },
    { name: 'Quantum AI', highlight: 'Quantum' },
    { name: 'Stellar Inc', highlight: 'Stellar' },
    { name: 'Apex Digital', highlight: 'Apex' },
    { name: 'Fusion Works', highlight: 'Fusion' },
    { name: 'Velocity X', highlight: 'Velocity' },
];

// Duplicate for seamless loop
const duplicatedClients = [...clients, ...clients];

export const ClientLogosSection = () => {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden bg-background">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Section Header */}
            <div className="container-standard mb-10 md:mb-14">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="label-uppercase text-center"
                >
                    Trusted by Industry Leaders
                </motion.p>
            </div>

            {/* Logo Scroller Container */}
            <div className="relative">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 md:gap-16"
                        animate={{
                            x: [0, -50 * clients.length * 4],
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: 'linear',
                            },
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="flex-shrink-0 flex items-center justify-center min-w-[180px] md:min-w-[220px] h-16 md:h-20 group"
                            >
                                <div className="relative px-6 py-3 rounded-xl transition-all duration-500 hover:bg-white/[0.02]">
                                    {/* Logo Text */}
                                    <span className="text-lg md:text-xl font-semibold tracking-tight text-white/30 group-hover:text-white/60 transition-colors duration-500">
                                        <span className="group-hover:gradient-text transition-all duration-500">
                                            {client.highlight}
                                        </span>
                                        <span className="font-light">
                                            {client.name.replace(client.highlight, '')}
                                        </span>
                                    </span>

                                    {/* Subtle glow on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-xl -z-10" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom subtle divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
};
