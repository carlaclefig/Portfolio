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
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
