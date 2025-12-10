import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="mb-24"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        {children}
    </motion.section>
);
