import React from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';

const ExperienceCard = ({ side, title, company, period, description }: { side: 'left' | 'right'; title: string; company: string; period: string; description: string }) => {
    const isLeft = side === 'left';
    return (
        <div className={`relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            {/* Spacer for desktop alignment */}
            <div className="hidden md:block w-1/2"></div>

            {/* The Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 shadow-[0_0_15px_#06b6d4] z-20"></div>

            {/* The Card */}
            <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <GlassCard>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <p className="text-cyan-400 font-medium">{company}</p>
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-white/5">{period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </GlassCard>
            </div>
        </div>
    );
};

export const Experience: React.FC = () => {
    return (
        <Section title="Experience" icon={<Briefcase />}>
            <div className="relative space-y-12">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-slate-700 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

                <ExperienceCard
                    side="left"
                    title="Intern"
                    company="IIT BSSR"
                    period="7 Months"
                    description="Engineered Python web crawlers to harvest structured data. Developed automation scripts for data processing and cleaned large datasets for Machine Learning models."
                />

                <ExperienceCard
                    side="right"
                    title="Full-Stack Developer"
                    company="Indorve"
                    period="2 Months"
                    description="Architected a student earning platform using React & Firebase. Implemented secure Authentication, CRUD operations, and real-time database updates."
                />
            </div>
        </Section>
    );
};
