import PropTypes from 'prop-types';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';
import styles from './AboutPage.module.css';

const AboutPage = ({ darkMode }) => {
  return (
    <div className={`${styles.pageWrapper} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        
        {/* Intro Section */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.profileHeader}>
            <img src="https://vaibhavdev.vercel.app/assets/avtar-qKT6WN_1.png" alt="Soyash Tiwari" />
            <div className={styles.titleInfo}>
              <h1>Soyash <span>Tiwari</span></h1>
              <p><FaCode /> Full Stack Developer • Technical Associate</p>
            </div>
          </div>
          <p className={styles.bio}>
            I am a **Technical Associate** and Full Stack Developer with a passion for architecting high-performance digital solutions. 
            With expertise across the **MERN stack**, **Next.js**, and **Shopify ecosystems**, I specialize in building 
            seamless end-to-end applications that bridge complex backend logic with premium, intuitive user interfaces.
          </p>
        </div>

        {/* Experience Section */}
        <div className={`${styles.card} ${styles.experienceCard}`}>
          <div className={styles.cardHeader}>
            <FaBriefcase className={styles.icon} />
            <h2>Professional Journey</h2>
          </div>
          
          <div className={styles.timeline}>
            {/* OrangeMantra - Promoted Role */}
            <div className={styles.timelineItem}>
              <div className={styles.timeLineHeader}>
                <h3>OrangeMantra Technology Pvt Ltd</h3>
                <span className={styles.location}><FiMapPin /> Gurugram</span>
              </div>
              <h4 className={styles.role}>Technical Associate (Promoted from Jr. Dev)</h4>
              <p className={styles.workDesc}>
                Engineered full-stack features for healthcare and eCommerce platforms. Developed scalable **Node.js** backends, integrated **GraphQL APIs**, and crafted responsive **Next.js/React** frontends with complex state management and secure payment gateways.
              </p>
              <div className={styles.techPills}>
                <span>Full Stack</span> <span>Next.js</span> <span>Node.js</span> <span>GraphQL</span> <span>MongoDB</span>
              </div>
            </div>

            {/* Elsner - Intern Role */}
            <div className={styles.timelineItem}>
              <div className={styles.timeLineHeader}>
                <h3>Elsner Technology Pvt Ltd</h3>
                <span className={styles.location}>2024</span>
              </div>
              <h4 className={styles.role}>MERN Stack Intern (Shopify Team)</h4>
              <p className={styles.workDesc}>
                Contributed to the Shopify App Development team using the **MERN stack**. Developed custom app features, UI extensions, and explored automated store operations as part of the core development internship.
              </p>
              <div className={styles.techPills}>
                <span>MERN</span> <span>Shopify API</span> <span>Remix</span> <span>React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={`${styles.card} ${styles.educationCard}`}>
          <div className={styles.cardHeader}>
            <FaGraduationCap className={styles.icon} />
            <h2>Education</h2>
          </div>
          
          <div className={styles.eduItem}>
            <h4>B.Tech in Computer Science</h4>
            <p>Bansal Institute of Science & Technology • 2024</p>
            <span className={styles.grade}>8.7 CGPA</span>
          </div>

          <div className={styles.eduItem}>
            <h4>Higher Secondary (12th PCM)</h4>
            <p>Saraswati Higher Secondary School • 2020</p>
            <span className={styles.grade}>74.4%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

AboutPage.propTypes = { darkMode: PropTypes.bool.isRequired };
export default AboutPage;