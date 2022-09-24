const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://sociabuzz.com/sandis1",
  title: "SS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sandi Sopian",
  role: "Front End Engineer",
  description: "I'm work for developing, plan, UI/UX design, build, and implement the user interface systems of websites, software programs, and web-based applications.",
  resume: "https://drive.google.com/file/d/1cGZiZe_u0zOljaCfyKaiw-okA5sLNPm4/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/sandi-sopian-007623227/",
    github: "https://github.com/SandiSopian",
    language: "https://nakamapedia.blogspot.com/",
    behance: "https://www.behance.net/sandisopian",
    medium: "https://medium.com/@sandis1",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Landing Page",
    description: "I'm build simple Landing Pages for selling meats of cow and chickens",
    stack: ["React", "Javascript", "CSS"],
    sourceCode: "https://github.com/SandiSopian/Landing-Page_Dagangan",
    livePreview: "https://jongko-daging-mang-umis.vercel.app/",
  },
  {
    name: "Blog",
    description: "I'm build simple Blog for personal and commercial ",
    stack: ["Next", "JavaScript", "SCSS", "CSS"],
    sourceCode: "https://github.com/SandiSopian/personal-blog-v1",
    livePreview: "https://personal-blog-v1.vercel.app/",
  },
  {
    name: "Rest API",
    description: "I'm build simple Rest API for getting Pokemon information from PokeAPI",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/SandiSopian/Pokemon-app",
    livePreview: "https://pokemon-app-nine-umber.vercel.app/",
  },
  {
    name: "Rest API",
    description: "I'm build simple Rest API for getting Movie IMDb information from IMDb API",
    stack: ["HTML", "JavaScript", "PHP"],
    sourceCode: "https://github.com/SandiSopian/IMBD-web",
    livePreview: "https://imbd-web.vercel.app/",
  },
  {
    name: "Rest API",
    description: "I'm build simple Rest API for getting Recipe information from Edamam API",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/SandiSopian/Recipe-App",
    livePreview: "https://simple-recipe-app-omega.vercel.app/",
  },
  {
    name: "Landing Page",
    description: "I'm slicing my own figma design for e-commerce - Venendria plants shop ",
    stack: ["Next", "JavaScript", "TailwindCSS"],
    sourceCode: "https://github.com/SandiSopian/Figma-to-NextJs-Tailwind---Slicing-1",
    livePreview: "https://figma-to-next-js-tailwind-slicing-ver-1.vercel.app/",
  },
  {
    name: "Landing Page",
    description: "I'm slicing my own figma design for bussiness landing page - Sarang Coffee cafe",
    stack: ["Next", "JavaScript", "TailwindCSS"],
    sourceCode: "https://github.com/SandiSopian/Figma-to-NextJs-Tailwind---Slicing-2",
    livePreview: "https://figma-to-next-js-tailwind-slicing-sarang-coffee-cafe.vercel.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Bootstrap",
  "TailwindCSS",
  "Material UI",
  "Git",
  "Figma",
  "Canva",
  "Adobe",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "shunasand73@gmail.com",
};

export { header, about, projects, skills, contact };
