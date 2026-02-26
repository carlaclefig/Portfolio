export interface Technology {
  name: string;
  imageIcon: string;
  color: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: Technology[];
  demoUrl?: string;
  githubUrl: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "notepad-app",
    title: "Notepad App",
    shortDescription:
      "A lightweight note-taking application built with vanilla JavaScript. Create, edit, and delete notes with a clean interface while data persists in Local Storage.",
    fullDescription:
      "Notepad is a minimalist note-taking application that demonstrates the power of vanilla JavaScript without relying on frameworks. The app provides a seamless experience for capturing thoughts and ideas with instant saving capabilities.\n\nUsers can effortlessly create multiple notes, edit them on the fly, and organize their thoughts with an intuitive interface. All data is stored locally in the browser's Local Storage, ensuring privacy and offline access.",
    features: [
      "Create and delete notes instantly",
      "Persistent storage using Local Storage API",
      "Clean and intuitive user interface",
      "Real-time auto-save functionality",
      "No backend required - fully client-side",
      "Responsive design for mobile and desktop",
    ],
    technologies: [
      {
        name: "HTML5",
        imageIcon: "/html.png",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        description:
          "The cornerstone of modern web development, used to structure the app's content and layout.",
      },
      {
        name: "CSS3",
        imageIcon: "/css.png",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        description:
          "A design powerhouse used to create captivating visuals, animations, and responsive layouts.",
      },
      {
        name: "JavaScript",
        imageIcon: "/javascript.png",
        color:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        description:
          "Versatile scripting language powering all interactivity, data manipulation, and app logic.",
      },
      {
        name: "Local Storage",
        imageIcon: "/localstorage.webp",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
        description:
          "Browser API used to persist notes client-side, enabling offline access with no backend needed.",
      },
    ],
    demoUrl: "https://notepad-vanila-js.netlify.app/",
    githubUrl: "https://github.com/carlaclefig/js-notepad",
    imageUrl: "/notepad.png",
  },
  {
    slug: "track-library",
    title: "Track Library",
    shortDescription:
      "A full-stack music management application featuring a custom-built RESTful API, advanced search and filtering, and efficient audio streaming. Designed with a strong focus on backend architecture, performance, and scalability.",
    fullDescription:
      "Track Library is a full-stack music management platform built with a clear separation between frontend and backend. The backend is powered by Node.js and written in TypeScript, exposing a robust RESTful API with complete CRUD operations, multi-criteria filtering, and proper HTTP status handling.\n\nIt also includes stream-based file serving with partial content support for smooth audio playback. The frontend, built with Vite and Tailwind CSS, delivers a fast, responsive, and intuitive interface for browsing, searching, and managing the music library.",
    features: [
      "Complete CRUD operations for song management",
      "Advanced search and filtering (title, artist, album, genre, year)",
      "RESTful API with proper HTTP methods and status codes",
      "Stream-based file serving for large media files",
      "Partial content support for audio streaming",
      "Responsive and accessible user interface",
      "Client-side routing and state management",
      "Custom error handling and 404 pages",
      "Persistent relational data storage",
    ],
    technologies: [
      {
        name: "Node.js",
        imageIcon: "/node.png",
        color:
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        description:
          "JavaScript runtime powering the backend server and RESTful API.",
      },
      {
        name: "TypeScript",
        imageIcon: "/typescript.svg",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        description:
          "Strongly-typed superset of JavaScript used to improve code quality and maintainability.",
      },
      {
        name: "PostgreSQL",
        imageIcon: "/postgresql.png",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
        description:
          "Relational database used for persistent and structured data storage.",
      },
      {
        name: "Vite",
        imageIcon: "/vite.png",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
        description:
          "Modern frontend tooling providing fast development and optimized builds.",
      },
      {
        name: "Tailwind CSS",
        imageIcon: "/tailwind.png",
        color:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
        description:
          "Utility-first CSS framework for building responsive and modern user interfaces.",
      },
    ],
    demoUrl: "https://track-library.netlify.app/",
    githubUrl: "https://github.com/carlaclefig/song-server",
    imageUrl: "/tracklibrary.png",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
