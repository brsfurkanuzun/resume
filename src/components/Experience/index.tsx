import "./style.css";
import Icon from "../../assets/experience";
import DecryptedText from "../DecryptedText";

const experienceData = [
  {
    title: "Software Development Specialist",
    company: "@ETIYA",
    location: "Hybrit, IST",
    year: "Dec 21 – Jan 25",
    responsibilities: [
      "Developed REST & SOAP APIs using Java Springboot",
      "Built web applications with .NET Core C# and NodeJS (Microservices)",
      "Created XSL/XSLT transformations for API integration",
      "Implemented ActiveMQ message queues for distributed systems",
      "Managed microservices with Docker & Kubernetes",
      "Developed order management processes with Camunda 7 & 8",
      "Built UI with Angular for tracking orders",
      "Analyzed and developed OpenAPIs",
    ],
  },
  {
    title: "Frontend Developer",
    company: "@ConneXio Cloud",
    location: "Remote, NY",
    year: "Mar 22 - Aug 22",
    responsibilities: [
      "Built responsive website using React.js",
      "Designed UI/UX prototypes with Figma",
      "Implemented reusable components and managed state effectively",
      "Integrated APIs and handled asynchronous data fetching",
      "Ensured cross-browser compatibility and accessibility standards",
      "Collaborated with backend developers to optimize performance",
      "Wrote clean, maintainable, and well-documented code",
    ],
  },
  {
    title: "Game Developer / Level Designer",
    company: "@ConneXio Cloud",
    location: "Remote, NY",
    year: "Mar 22 - Aug 22",
    responsibilities: [
      "Developed web3-compatible game using Unity & C#",
      "Designed and implemented game levels and mechanics",
      "Created AR and VR versions of the game",
      "Collaborated with artists and designers to improve game visuals",
      "Optimized game performance for web and mobile platforms",
      "Implemented interactive features and gameplay systems",
    ],
  },

  {
    title: "Intern",
    company: "@Caretta Software",
    location: "On-site, IST",
    year: "Jul 18 - Aug 18",
    responsibilities: [
      "Trained on database structures and relations",
      "Developed CRM system using C# (.NET), improving user retention by 15%",
    ],
  },
];

const Experience = () => {
  return (
    <div className="page">
      <div className="title-container">
        <Icon
          primaryColor="var(--icon-color1)"
          secondaryColor="var(--icon-color2)"
        />
        <div>
          <h1 className="title">
            <DecryptedText
              sequential={true}
              animateOn="view"
              text="Places that"
              speed={120}
            />
          </h1>
          <h1 className="title">
            <DecryptedText
              sequential={true}
              animateOn="view"
              text="I worked @"
              speed={120}
            />
          </h1>
        </div>
      </div>
      <div className="blured-container-bottom">
        {experienceData.map((job, index) => (
          <div className="job-container" key={index}>
            <div className="job-title-container">
              <h3>{job.title}</h3>
              <div className="location-container">
                <p>{job.company}</p>
                <div className="job-location">
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="job-date">
              <p>{job.year}</p>
            </div>
            <div className="job-resp">
              <h4>Responsibilites</h4>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
