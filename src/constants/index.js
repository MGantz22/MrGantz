import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  tesla,
  carrent,
  starbucks,
  jobit,
  tripguide,
  threejs,
  space,
  unity,
  Csharp,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  // {
  //   title: "Game Programmer",
  //   icon: creator,
  // },
  {
    title: "Unity Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Csharp",
    icon: Csharp,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Carpenter",
    company_name: "DoveTail General Contractors",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2019 - Oct 2022",
    points: [
      "Worked on a team of 5-10 on projects at various jobsites in both residential and commercial structures. ",
      "Collaborated with subcontractors and trained oncoming carpenters, employing a professional attitude and thorough communication to ensure a cohesive partnership with foremen, architects, and clients.",
      "Visited multiple different locations throughout greater Seattle to get an idea of how the company operated in the flesh, then used the skills I observed to apply firsthand on the projects and tasks I was personally assigned.",
    ],
  },
  {
    title: "Student",
    company_name: "Epicodus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Epicodus Tree 2023 Cohort",
      " A Coding Bootcamp with a focus on pair programming in a fast paced, results-oriented environment.",
      "C#, JavaScript, React, SQL, and .NET instruction to establish core competencies. ",
      "Prioritization of Diversity, Equity and Inclusion lessons to develop soft skills and create well-rounded team-players",
      "Participating in code reviews and recieved constructive feedback on projects.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Awesome work on your team week project #1. It’s clear you had a lot of fun working on this project, and you  gained a ton of valuable JavaScript experience. The fact that this is all Vanilla JS is really impressive. Delta time is a pretty important concept in game development, and you tackled it very well. Over all, this is a super sweet project. Nice work",
    name: "Calvin Will",
    designation: "Instructor",
    company: "Epicodus",
    image: "https://media.licdn.com/dms/image/C4E03AQHV81KPq_bTlg/profile-displayphoto-shrink_400_400/0/1581905259661?e=1687996800&v=beta&t=oyhQMh114VAGsDK15jUrUqGYkKym-EVpAa_KQaSm6Dk",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mitchell does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mitchell optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mythic Siege",
    description:
      "An RPG (Role Playing Game) is a game where players assume the roles of characters in a fictional world. Pick a character and charge into battle against many powerful foes. Winning a battle will grant you experience points to level up, along with some gold in your pocket to spend at the shop. failure to defeat your opponent results in death, thus ending your siege",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mgantz22.github.io/Functional-RPG/",
  },
  {
    name: "Burning Oil",
    description:
      "My first Unity game! This is a 2d melee combat adventure game made during week 7 of C#, at Epicodus- Team Week #2.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MGantz22/BurningOilV2",
  },
  {
    name: "Recipe Box",
    description:
      "A comprehensive recipe managment platform (with the use of Authentication and Authorization) that allows users to register, login, upload recipes, share, and view everyones favorite recipe today!",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MGantz22/RecipeBox",
  },
  {
    name: "The Event Handlers",
    description:
      "An arcade style, space themed side scrolling shooter game. Made during Epicodus team week #1",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://mgantz22.github.io/the-event-handlers/", 
  },
];

export { services, technologies, experiences, testimonials, projects };