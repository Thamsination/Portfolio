export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
  details: {
    role: string;
    timeline: string;
    tools: string[];
    overview: string;
    challenges?: string;
    outcome?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'sample-project-1',
    title: 'Sample Product Design',
    description: 'A modern approach to industrial design with focus on user experience and sustainability.',
    category: 'Product Design',
    thumbnail: '/projects/sample-project-1/thumbnail.jpg',
    images: [
      '/projects/sample-project-1/image1.jpg',
      '/projects/sample-project-1/image2.jpg',
      '/projects/sample-project-1/image3.jpg',
    ],
    featured: true,
    details: {
      role: 'Lead Industrial Designer',
      timeline: '2024',
      tools: ['SolidWorks', 'KeyShot', 'Adobe Creative Suite'],
      overview: 'This project focused on creating an innovative product that combines form and function...',
      challenges: 'The main challenge was balancing aesthetic appeal with manufacturing constraints...',
      outcome: 'Successfully delivered a product that exceeded client expectations...',
    },
  },
  {
    id: 'sample-project-2',
    title: 'Sustainable Design Concept',
    description: 'Exploring eco-friendly materials and manufacturing processes for consumer products.',
    category: 'Concept Design',
    thumbnail: '/projects/sample-project-2/thumbnail.jpg',
    images: [
      '/projects/sample-project-2/image1.jpg',
      '/projects/sample-project-2/image2.jpg',
    ],
    featured: true,
    details: {
      role: 'Industrial Designer',
      timeline: '2023',
      tools: ['Rhino 3D', 'Grasshopper', 'V-Ray'],
      overview: 'An exploration of sustainable materials and circular design principles...',
      outcome: 'Created a fully recyclable product concept with minimal environmental impact...',
    },
  },
  {
    id: 'sample-project-3',
    title: 'User-Centered Product Development',
    description: 'A comprehensive product development project from research to production.',
    category: 'Product Development',
    thumbnail: '/projects/sample-project-3/thumbnail.jpg',
    images: [
      '/projects/sample-project-3/image1.jpg',
    ],
    featured: false,
    details: {
      role: 'Product Developer',
      timeline: '2023',
      tools: ['Fusion 360', 'Arduino', 'Prototyping Tools'],
      overview: 'Full product development cycle including user research, prototyping, and testing...',
    },
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper function to get project by id
export const getProjectById = (id: string) => projects.find(p => p.id === id);

