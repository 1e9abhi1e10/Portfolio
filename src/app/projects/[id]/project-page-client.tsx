'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Tag, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AnimatedSection, FadeIn } from '@/components/ui/animated-section';
import { formatDate } from '@/lib/utils';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { useEffect, useState } from 'react';
import { Project } from '@/types/portfolio';

export default function ProjectPageClient({ params }: { params: Promise<{ id: string }> }) {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    params.then(resolvedParams => {
      const foundProject = portfolioData.projects.find((p: Project) => p.id === resolvedParams.id);
      setProject(foundProject || null);
    });
  }, [params, portfolioData.projects]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  const statusIcons = {
    completed: CheckCircle,
    'in-progress': Clock,
    planned: AlertCircle
  };

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
    planned: 'bg-red-100 text-red-800'
  };

  const StatusIcon = project.status ? statusIcons[project.status] : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Back Navigation */}
          <AnimatedSection>
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
          </AnimatedSection>

          {/* Project Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              {project.status && StatusIcon && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}>
                  <StatusIcon size={16} className="mr-1" />
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              )}
            </div>

            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
            </FadeIn>

            {/* Links Section */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Project Image */}
          {project.image && (
            <FadeIn delay={200}>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}


          {/* Project Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Long Description */}
              {project.longDescription && (
                <FadeIn delay={400}>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">About This Project</h2>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        {project.longDescription.split('\n').map((paragraph, index) => (
                          paragraph.trim() && (
                            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          )
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <FadeIn delay={500}>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">Challenges Overcome</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle size={20} className="mr-3 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <FadeIn delay={600}>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">Key Learnings</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={20} className="mr-3 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <FadeIn delay={500}>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          <Tag size={14} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Project Stats */}
              <FadeIn delay={600}>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-gray-900">Project Details</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.status && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Status</span>
                          <p className="text-lg font-semibold text-gray-900 capitalize">
                            {project.status.replace('-', ' ')}
                          </p>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-600">Category</span>
                        <p className="text-lg font-semibold text-gray-900 capitalize">
                          {project.category}
                        </p>
                      </div>
                      {project.createdDate && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Created</span>
                          <p className="text-lg font-semibold text-gray-900">
                            {formatDate(project.createdDate)}
                          </p>
                        </div>
                      )}
                      {project.completedDate && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Completed</span>
                          <p className="text-lg font-semibold text-gray-900">
                            {formatDate(project.completedDate)}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Contact CTA */}
              <FadeIn delay={700}>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Interested in this project?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let's discuss how we can work together on similar projects.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact" className="text-white">
                        Get In Touch
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}