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
  Opine,


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
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Language Agnostic",
    icon: mobile,
  },
  {
    title: "Game Programmer",
    icon: creator,
  },
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
    title: "Full-Stack Developer",
    company_name: "Opine",
    icon: Opine,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Epicodus post grad Internship (Remote)",
      "Tasked with updating an ongoing project by implementing bug fixes and incorporating new features.",
      "Actively participating in daily stand-up sessions to receive guidance and coaching from a senior developer.",
      "Identifying potential issues and improvements for the current production phase of the project.",
      "Utilizing Firestore, Firebase, JavaScript, and React.js to develop and enhance the project.",
      "Prioritizing the delivery of user-friendly educational experiences.",
    ],
  },
  {
    title: "Full-Stack Software Development Certificate",
    company_name: "Epicodus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Epicodus 2023 Graduate, Tree Cohort-full time student (remote)",
      "A Coding bootcamp that emphasizes pair programming in a fast-paced, results-driven setting.",
      "The program offers instruction in key competencies such as C#, JavaScript, React, SQL, and .NET, with an emphasis on building a strong foundation.",
      "In addition to technical skills, the program also prioritizes Diversity, Equity, and Inclusion lessons to help students develop soft skills and become well-rounded team players.",
      "With completion of the program, I gained skills in .NET Core, JavaScript, React, HTML, GitHub, C#, .NET Framework, Pair Programming, Cascading Style Sheets (CSS), Test Driven Development, Object-Oriented Programming (OOP), Responsive Web Design, and User Interface Design.",
      "I Participated in code reviews and recieved constructive feedback on projects weekly.",
    ],
  },
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
  }
];

const testimonials = [
  {
    testimonial:
      "Awesome work on your team week project #1. It’s clear you had a lot of fun working on this project, and you  gained a ton of valuable JavaScript experience. The fact that this is all Vanilla JS is really impressive. Delta time is a pretty important concept in game development, and you tackled it very well. Over all, this is a super sweet project. Nice work",
    name: "Calvin Will",
    designation: "Instructor",
    company: "Epicodus",
    image: "https://media.licdn.com/dms/image/D5603AQHla7xO5hGz9w/profile-displayphoto-shrink_800_800/0/1688948134846?e=1716422400&v=beta&t=16BGlJq1fnXS1Sj505UtV87y5Sx16kSyKwrGTdwqphA",
  },
  {
    testimonial:
      "Mitchell is an impressive software developer with exceptional problem-solving skills and attention to detail. He's passionate about his work, always contributing new ideas to improve our projects, and goes the extra mile to bring the team's ideas to life. I feel fortunate to have worked with him and have no doubt that he'll make significant contributions to the field.",
    name: "Noah Atkinson",
    designation: "Student",
    company: "Epicodus",
    image: "https://avatars.githubusercontent.com/u/90878417?v=4",
  },
  {
    testimonial:
      "Mitchell is a fantastic full-stack developer who has a real passion for game development. I've learned so much from him, particularly when it comes to using the Unity game engine. His guidance has been invaluable, and he's been incredibly generous in sharing his knowledge and helping me improve my skills.",
    name: "Brishna Bakshev",
    designation: "Student",
    company: "Epicodus",
    image: "https://avatars.githubusercontent.com/u/121061679?v=4",
  },
  {
    testimonial:
      "Mitchell is an amazing mentor who I studied with for 6 weeks. He had the insight to consider how tough a software developer boot camp can be, helping me reach appropriate conclusions on my own terms, while sharing his knowledge of the field in an exciting and intuitive way. From recommending great books to improve my study habits, providing insights into our shared experience, he was always kind and generous with his time, even going out of his way on a weekend to assist with challenging coding problems! I’m fortunate to have had the time I did with him, and I will always recommend Mitchell to any company interested in working with him.",
    name: "Eusebie Siebenberg",
    designation: "Student",
    company: "Epicodus",
    image: "https://media.licdn.com/dms/image/D5635AQG41quo-I6ivw/profile-framedphoto-shrink_400_400/0/1694809755959?e=1711504800&v=beta&t=Pz8uqyuICnsczqRJ_S6DMIuHSFxRIDJxgOrKNeGzOjY",
  },
  {
    testimonial:
      "Mitchell was an integral part of our small project teams, working closely with superintendents, foremen, and other carpenters to solve complex construction problems and execute exacting design with the highest quality craftsmanship. He contributed to a positive work environment and was willing and eager to take on any task.",
    name: "Thomas Johnston",
    designation: "Superintendent",
    company: "DoveTail",
    image: "https://media.licdn.com/dms/image/C5603AQGR8oxauiZKyg/profile-displayphoto-shrink_400_400/0/1520975480049?e=1716422400&v=beta&t=BDi4mNLdr919kCZayqaPYoXe6i1v4bbVne8x2jujhiw",
  }
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
    source_code_link: "https://github.com/MGantz22/Functional-RPG/",
    live_link: "https://mgantz22.github.io/Functional-RPG/",
  },
  {
    name: "Burning Oil",
    description:
      "I gained my initial experience with the Unity engine by creating a 2D melee combat adventure game during Team week #2 (week 7 of C#) at Epicodus. Our team consisted of John Lenz, Noah Atkinson, Justin Lee, Owen Brown, and myself, and we had four days to complete the project before presenting it on Thursday afternoon. Through collaborative efforts, we delved into the realm of game development and acquired knowledge on using and navigating Unity for the first time. This experience provided me with the opportunity to learn new technologies and apply my C# skills towards writing scripts that controlled the player, enemies, actions, and animations, which was both challenging and enjoyable.",
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
    live_link: "https://play.unity.com/mg/other/webgl-builds-338664",
  },
  {
    name: "Recipe Box",
    description:
      "An online recipe book website that hosts a collection of recipes accessible to its users. The website consists of a homepage that showcases popular or recently added recipes, along with the use of Authentication, Authorization and filtering functionalities to help users easily find a recipe that matches their preferences. This comprehensive recipe managment platform allows users to register, login, upload recipes, share, and view everyones favorite recipe! (Sorry, Live site coming soon)",
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
    live_link: "https://github.com/MGantz22/RecipeBox",
  },
  {
    name: "The Event Handlers",
    description:
      "During the seventh week of my HTML and JavaScript course at Epicodus, the first and much-anticipated 'Team Week' was finally here. The objective was to form a development team and create a project that would be presented by the end of the week. My team, named 'The Event Handlers', consisted of Jackson Levine, Carl Sustrich, Jannon Sielaff, Jacob Maier, and Ashe Urban. Together, we decided to develop a game. I take immense pride in the outcome of our project and appreciate the knowledge I gained from my team members.",
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
    source_code_link: "https://github.com/MGantz22/the-event-handlers",
    live_link: "https://mgantz22.github.io/the-event-handlers/", 
  }
];

export { services, technologies, experiences, testimonials, projects };