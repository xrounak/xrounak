import React from 'react';
import { Terminal } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
    <GlassCard className="h-full" hoverEffect={false}>
        <h3 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
            ))}
        </div>
    </GlassCard>
);

export const Skills: React.FC = () => {
    return (
        <Section title="Technical Arsenal" icon={<Terminal />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillGroup title="Languages" skills={['C', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']} />
                <SkillGroup title="Frontend" skills={['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Redux']} />
                <SkillGroup title="Backend" skills={['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Flask']} />
                <SkillGroup title="Database" skills={['PostgreSQL', 'MongoDB', 'Firestore', 'Supabase']} />
                <SkillGroup title="AI & Automation" skills={['OpenCV', 'DeepFace', 'Python Automation', 'Scraping']} />
                <SkillGroup title="Tools" skills={['Git & GitHub', 'Docker', 'Postman', 'VS Code']} />
            </div>
        </Section>
    );
};
