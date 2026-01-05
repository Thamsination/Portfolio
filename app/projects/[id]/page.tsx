import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.id === params.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return <ProjectDetail project={project} nextProject={nextProject} prevProject={prevProject} />;
}
