import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { GoArrowUpRight } from "react-icons/go";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiExpress, SiMongodb, SiDocker, SiShopify, SiGraphql, SiRemix } from "react-icons/si";
import { SunIcon } from './Icons/SunIcon';
import { MoonIcon } from './Icons/MoonIcon';
import styles from './HomePage.module.css';

const HomePage = ({ darkMode, onToggleDarkMode }) => {
  
  const techStack = [
    { category: "Frontend", icons: [<FaReact />, <SiNextdotjs />, <SiRemix />, <RiTailwindCssFill />, <FaBootstrap />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />] },
    { category: "Backend & API", icons: [<FaNodeJs />, <SiExpress />, <FaJava />, <SiGraphql />] },
    { category: "Database & Tools", icons: [<SiMongodb />, <SiDocker />, <SiShopify />, <FaGithub />] }
  ];

  return (
    // The theme class is now on the outermost wrapper for full-page effect
    <div className={`${styles.pageWrapper} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        
        {/* Profile Card */}
        <div className={`${styles.card} ${styles.bioCard}`}>
          <div className={styles.avatar}>
            <img src="https://vaibhavdev.vercel.app/assets/avtar-qKT6WN_1.png" alt="Soyash Tiwari" />
          </div>
          <div className={styles.bioText}>
            <h1>Hi, I'm <span>Soyash</span></h1>
            <p>Full Stack Developer from MP, India. I build high-performance web applications and eCommerce solutions.</p>
          </div>
        </div>

        {/* Project Card with Image & Hover Animation */}
        <div className={`${styles.card} ${styles.projectCard}`}>
          <div className={styles.projectImageContent}>
             <img src="https://images.ui8.net/res/robot/image/upload/iir1ulncnejy0ehcak47/1502284824.jpg" alt="Featured Project" className={styles.bgImage} />
             <div className={styles.overlay}>
                <Link to='/showcase' className={styles.viewBtn}>
                  View All Projects <GoArrowUpRight />
                </Link>
             </div>
          </div>
          <div className={styles.cardLabel}>Portfolio Showcase</div>
        </div>

        {/* Categorized Tech Stack */}
        <div className={`${styles.card} ${styles.skillsBento}`}>
          {techStack.map((stack, idx) => (
            <div key={idx} className={styles.skillGroup}>
              <h4>{stack.category}</h4>
              <div className={styles.iconGrid}>
                {stack.icons.map((icon, i) => <span key={i}>{icon}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links & Contact */}
        <div className={`${styles.card} ${styles.connectCard}`}>
          <h3>Let's Connect</h3>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/..." target="_blank">LinkedIn</a>
            <a href="https://twitter.com/..." target="_blank">Twitter</a>
            <a href="https://github.com/..." target="_blank">GitHub</a>
            <a href="https://instagram.com/..." target="_blank">Instagram</a>
          </div>
          <Link to="/contact" className={styles.contactFooter}>
            Get in touch <GoArrowUpRight />
          </Link>
        </div>

      </div>

      {/* Floating Theme Toggle */}
      <button className={styles.themeToggle} onClick={() => onToggleDarkMode(!darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default HomePage;