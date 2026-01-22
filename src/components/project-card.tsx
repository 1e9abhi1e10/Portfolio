'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Tag, Link as LinkIcon } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/animated-section';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const categoryColors = {
    web: 'bg-blue-100 text-blue-800',
    mobile: 'bg-green-100 text-green-800',
    desktop: 'bg-purple-100 text-purple-800',
    ai: 'bg-orange-100 text-orange-800',
    other: 'bg-gray-100 text-gray-800'
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    planned: 'bg-gray-100 text-gray-800'
  };

  return (
    <FadeIn delay={index * 0.1}>
      <Card className="h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
              {project.category}
            </span>
            {project.status && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}>
                {project.status.replace('-', ' ')}
              </span>
            )}
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                Featured
              </span>
            </div>
          )}
        </div>

        <CardContent className="flex-1 flex flex-col">
          {/* Project Title & Description */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                >
                  <Tag size={12} className="mr-1" />
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Links Section */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <LinkIcon size={14} className="mr-1 text-gray-500" />
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Links</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <Github size={14} className="mr-1.5" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0">
          <Link href={`/projects/${project.id}`} className="w-full">
            <Button size="sm" className="w-full">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}