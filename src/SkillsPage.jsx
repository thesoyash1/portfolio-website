import PropTypes from 'prop-types';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaJava, FaBootstrap, FaGithub, FaPhp, FaLaravel 
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { 
  SiJavascript, SiNextdotjs, SiExpress, SiMongodb, 
  SiDocker, SiShopify, SiGraphql, SiRemix, SiMysql, SiCplusplus 
} from "react-icons/si";
import styles from './SkillPage.module.css';

const SkillsPage = ({ darkMode }) => {
  const skillGroups = [
    {
      category: "Frontend & Design",
      description: "Crafting modern, responsive, and high-performance user interfaces.",
      skills: [
        { name: "React.js", icon: <FaReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Remix", icon: <SiRemix /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#38B2AC" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      ]
    },
    {
      category: "Backend & Systems",
      description: "Building scalable server-side logic and robust API architectures.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Core Java", icon: <FaJava color="#007396" /> },
        { name: "PHP", icon: <FaPhp color="#777BB4" /> },
        { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
        { name: "REST & GraphQL", icon: <SiGraphql color="#E10098" /> },
      ]
    },
    {
      category: "Databases & DevOps",
      description: "Managing data integrity and streamlining deployment workflows.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Shopify", icon: <SiShopify color="#96BF48" /> },
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      ]
    }
  ];

  return (
    <div className={`${styles.skillWrapper} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
      <div className={styles.contentContainer}>
        <header className={styles.headerSection}>
          <h1 className={styles.title}>Technical <span>Expertise</span></h1>
          <p className={styles.subtitle}>A step-wise breakdown of my development stack and specialized tools.</p>
        </header>

        <div className={styles.bentoGrid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <h2>{group.category}</h2>
                <p>{group.description}</p>
              </div>
              <div className={styles.skillsGrid}>
                {group.skills.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillItem} title={skill.name}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SkillsPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default SkillsPage;