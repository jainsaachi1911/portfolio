import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Badge } from '@/components/ui/badge';

const SkillsVisualization = ({ skills }: { skills: any }) => {
  const aiMlData = [
    { name: 'TensorFlow', proficiency: 60 },
    { name: 'OpenCV', proficiency: 85 },
    { name: 'YOLO', proficiency: 89 },
    { name: 'NLP', proficiency: 40 },
    { name: 'Scikit-learn', proficiency: 70 },
    { name: 'Pandas', proficiency:65 },
  ];

  const webTechData = [
    { subject: 'React.js', A: 70, fullMark: 100 },
    { subject: 'Spring Boot', A: 50, fullMark: 100 },
    { subject: 'REST APIs', A: 77, fullMark: 100 },
    { subject: 'OAuth2', A: 55, fullMark: 100 },
    { subject: 'MySQL', A: 70, fullMark: 100 },
    { subject: 'AWS', A: 35, fullMark: 100 },
  ];

  const toolsData = [
    { name: 'Git', proficiency: 95 },
    { name: 'Docker', proficiency: 80 },
    { name: 'Kubernetes', proficiency: 70 },
    { name: 'AWS', proficiency: 60 },
  ];

  const COLORS = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'];

  return (
    <div className="space-y-12">
      {/* Core Languages - Card */}
      <div className="skill-glow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover-lift animate-fade-in">
        <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Languages</h3>
        <div className="mb-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Proficient in multiple programming languages with extensive experience in both frontend and backend development, 
            data science, and system programming.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {["Python", "Java", "C++"].map((lang: string, index: number) => (
            <Badge 
              key={lang} 
              variant="outline" 
              className="p-3 text-center justify-center hover:scale-105 transition-transform duration-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {lang}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["JavaScript", "HTML & CSS"].map((lang: string, index: number) => (
            <Badge 
              key={lang} 
              variant="outline" 
              className="p-3 text-center justify-center hover:scale-105 transition-transform duration-200"
              style={{animationDelay: `${(index + 3) * 0.1}s`}}
            >
              {lang}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Web Technologies - Radar Chart */}
        <div className="skill-glow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Web Technologies</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={webTechData}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff', fontSize: 11 }} />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: '#fff', fontSize: 10 }}
              />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#ff006e"
                fill="#ff006e"
                fillOpacity={0.3}
                strokeWidth={2}
                animationDuration={1500}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* AI/ML Technologies - Progress Bars */}
        <div className="skill-glow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 gradient-text">AI/ML Technologies</h3>
          <div className="space-y-4">
            {aiMlData.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{tech.name}</span>
                  <span>{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${tech.proficiency}%`,
                      background: `linear-gradient(90deg, ${COLORS[index % COLORS.length]}, ${COLORS[(index + 1) % COLORS.length]})`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Key Concepts - List */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Key Concepts</h3>
          <div className="skill-glow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <ul className="text-muted-foreground text-lg leading-relaxed space-y-3">
              {skills.concepts.map((concept: string, index: number) => (
                <li key={concept} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  • <strong className="text-foreground">{concept}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft Skills - List */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Soft Skills</h3>
          <div className="skill-glow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <ul className="text-muted-foreground text-lg leading-relaxed space-y-3">
              {skills.soft.map((skill: string, index: number) => (
                <li key={skill} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  • <strong className="text-foreground">{skill}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;