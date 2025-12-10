import React from 'react';
import { Award } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

export const Achievements: React.FC = () => {
    return (
        <Section title="Impact & Interests" icon={<Award />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-4">Positions of Responsibility</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                            <div>
                                <span className="text-slate-200 font-semibold">Technical Head — SIC</span>
                                <p className="text-sm text-slate-400">Organized technical events and guided junior developers.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                            <div>
                                <span className="text-slate-200 font-semibold">Volunteer Teacher — Udaan Bharat</span>
                                <p className="text-sm text-slate-400">Providing free education to underprivileged students.</p>
                            </div>
                        </li>
                    </ul>
                </GlassCard>

                <GlassCard>
                    <h3 className="text-lg font-bold text-white mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Video Editing', 'Volleyball', 'Fitness', 'Gaming'].map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};
