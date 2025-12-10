import React from 'react';
import { Code, Cpu, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import indorveImg from '../../assets/project-indorve.png';
import habitImg from '../../assets/project-habit.png';
import faceImg from '../../assets/project-face.png';
import blogImg from '../../assets/project-blog.png';

const ProjectCard = ({ title, tech, description, image }: { title: string; tech: string; description: string, image: string }) => (
    <GlassCard className="group cursor-pointer h-full flex flex-col p-0 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} />
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 group-hover:text-white group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    <Cpu size={24} />
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-xs text-cyan-500/80 mb-4 font-mono">{tech}</p>
            <p className="text-slate-400 text-sm flex-grow leading-relaxed">{description}</p>
        </div>
    </GlassCard>
);

export const Projects: React.FC = () => {
    return (
        <Section title="Featured Projects" icon={<Code />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                    title="Indorve Platform"
                    tech="React • Firebase • Tailwind"
                    description="A comprehensive earning platform for students featuring a dashboard, real-time task updates, and secure user management."
                    image={indorveImg}
                />
                <ProjectCard
                    title="Habit Tracker"
                    tech="Supabase • Capacitor • React"
                    description="Cross-platform mobile and web application for tracking daily habits and streaks with data synchronization."
                    image={habitImg}
                />
                <ProjectCard
                    title="Face Detection System"
                    tech="OpenCV • Flask • React"
                    description="Real-time computer vision application capable of facial recognition and behavioral analysis for security contexts."
                    image={faceImg}
                />
                <ProjectCard
                    title="Social Media Blog"
                    tech="Express.js • REST API • React"
                    description="Full-stack blogging engine with nested comments, like systems, and a complete CRUD backend architecture."
                    image={blogImg}
                />
            </div>
        </Section>
    );
};
