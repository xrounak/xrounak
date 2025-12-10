import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';
import profileImg from '../../assets/profile.png';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const Hero: React.FC = () => {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center mb-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
            >
                <motion.div variants={fadeInUp} className="inline-block relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
                    <span className="relative px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-300 text-sm font-semibold tracking-wider uppercase">
                        Available for Hire
                    </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <img src={profileImg} alt="Rounak Kumar" className="w-full h-full object-cover" />
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                    ROUNAK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">KUMAR</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Full-Stack Developer transforming ideas into reality through <span className="text-slate-200 font-medium">Automation</span> & <span className="text-slate-200 font-medium">Computer Vision</span>.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-sm text-slate-500 uppercase tracking-widest font-semibold">
                    <MapPin size={16} className="text-cyan-500" />
                    <span>Bokaro, Jharkhand</span>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center pt-8">
                    <SocialLink href="https://github.com/xrounak" icon={<Github />} label="GitHub" />
                    <SocialLink href="https://linkedin.com/in/rounak-kumar-unknown" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="mailto:rounakkumar@gmail.com" icon={<Mail />} label="Email" />
                    <SocialLink href="#" icon={<FileText />} label="Resume" />
                </motion.div>
            </motion.div>
        </section>
    );
};
