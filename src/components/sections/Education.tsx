import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';

export const Education: React.FC = () => {
    return (
        <Section title="Education" icon={<GraduationCap />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-xl font-bold text-white">B.Tech (CSE)</h3>
                        <p className="text-cyan-400 font-medium">Government Engineering College, Palamu</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm text-slate-400">
                        <span>2023 – Present</span>
                        <span>3rd Semester</span>
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white">Intermediate (Class 12)</h3>
                    <p className="text-cyan-400">SL Arya Inter College</p>
                    <p className="text-sm text-slate-500 mt-1">Science Stream</p>
                </GlassCard>
            </div>
        </Section>
    );
};
