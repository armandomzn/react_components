import { nanoid } from "nanoid";
import { NavLink } from "./interfaces/NavLinkInterface";
import { Stack } from "./interfaces/StackInterface";
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa6";
import { Projects } from "./interfaces/ProjectsInterface";

export const navLinks: NavLink[] = [
  {
    id: nanoid(),
    href: "#home",
    text: "home",
  },
  {
    id: nanoid(),
    href: "#skills",
    text: "skills",
  },
  {
    id: nanoid(),
    href: "#about",
    text: "about",
  },
  {
    id: nanoid(),
    href: "#projects",
    text: "projects",
  },
];

export const stack: Stack[] = [
  {
    id: nanoid(),
    title: "html",
    text: "As a software engineer, I possess strong HTML skills, allowing me to create structured and semantically meaningful web content using HTML5",
    icon: <FaHtml5 className="text-sky-500 w-16 h-16" />,
  },
  {
    id: nanoid(),
    title: "css",
    text: "My proficiency in CSS3 empowers me to craft visually captivating and responsive web designs.",
    icon: <FaCss3 className="text-sky-500 w-16 h-16" />,
  },
  {
    id: nanoid(),
    title: "javascript",
    text: "JavaScript is at the core of my skill set as a software engineer. I am highly proficient in developing interactive and dynamic web applications with JavaScript. My experience extends to working with modern frameworks and libraries for front-end development. I excel in asynchronous programming, DOM manipulation, and event handling. Debugging and optimizing JavaScript code for efficiency and performance are tasks I tackle with precision.",
    icon: <FaJs className="text-sky-500 w-16 h-16" />,
  },
  {
    id: nanoid(),
    title: "react",
    text: "My proficiency encompasses state management through Redux or Context API, enabling me to create organized and maintainable codebases. I am skilled in component-based architecture and the creation of reusable UI elements, ensuring efficient development processes.",
    icon: <FaReact className="text-sky-500 w-16 h-16" />,
  },
  {
    id: nanoid(),
    title: "nodejs",
    text: "Node.js is where I stand out in server-side development, using its capabilities to build efficient and scalable applications. My skills extend to building RESTful APIs and real-time applications, often integrating multiple databases to ensure seamless data management.",
    icon: <FaNode className="text-sky-500 w-16 h-16" />,
  },
];

export const projects: Projects[] = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/armandomzn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias. Non quis quo saepe, dolore ea quibusdam eum sunt sequi quidem at, iure eius? Ut fugiat reprehenderit reiciendis debitis laborum?",
    title: "first project",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/armandomzn",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore accusamus voluptatibus quos, libero debitis eum qui repellendus esse rem laudantium porro? Veritatis aut aliquid, quas dicta laudantium unde fugit.",
    title: "second project",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/armandomzn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam nobis vel, illum distinctio veniam assumenda odio officiis dolores quasi sunt magni provident numquam laborum amet et esse eaque nesciunt.",
    title: "third project",
  },
];
