export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  rating: number;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    date: "2024-02-15",
    rating: 4.8,
    link: "https://github.com/username/ecommerce"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    date: "2024-01-20",
    rating: 4.5,
    link: "https://github.com/username/task-manager"
  },
  {
    id: "3",
    title: "AI Image Generator",
    description: "Web application that generates images using AI models",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    date: "2023-12-10",
    rating: 4.9,
    link: "https://github.com/username/ai-image-gen"
  }
];