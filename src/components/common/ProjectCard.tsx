'use client';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-800/80 text-green-400 border-green-500/20';
      case 'In Development':
        return 'bg-yellow-900/80 text-yellow-300 border-yellow-700/40';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
    }
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-white">{project.title}</CardTitle>
        <CardDescription className="text-purple-400">{project.category}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-white/10 text-white">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-blue-500/20 hover:border-blue-500/40 text-blue-400 hover:text-blue-300"
            onClick={() => window.open(project.liveLink, '_blank')}
          >
            {project.category === 'Game Development' ? <Play className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
          </Button>
          
          {project.githubLink && (
            <Button
              size="sm"
              variant="outline"
              className="border-gray-500/20 hover:border-gray-500/40 text-gray-400 hover:text-gray-300"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;