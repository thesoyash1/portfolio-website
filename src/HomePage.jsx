import { Link } from "react-router-dom"; // Import Link for routing
import { GoArrowUpRight } from "react-icons/go";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";
import { SunIcon } from './Icons/SunIcon';
import { MoonIcon } from './Icons/MoonIcon';
import styles from './HomePage.module.css'; 

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const images = [
    {
      image: 'https://cdn.logojoy.com/wp-content/uploads/20230511124058/instagram-new-gradient-logo-animation.gif',
      url: 'https://www.instagram.com/thesoyash/',
    },
    {
      image: 'https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5895.jpg',
      url: '/',
    },
    {
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/74/69/57/74695756-6bad-a444-f1b4-781c807f1352/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png',
      url: 'https://www.linkedin.com/in/soyash-tiwari-7b9172210/',
    },
  ];

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.projectCard1}`}>
        <div className={styles.in_projectcard1}><img src="https://vaibhavdev.vercel.app/assets/avtar-qKT6WN_1.png" alt="logo_img"/></div>
          <p>
            I'm <strong>Soyash</strong>, an enthusiastic Software Developer from Madhya Pradesh, India with a strong passion for web Development.
          </p>
      </div>

      <div className={`${styles.card} ${styles.projectCard2}`}>
        <h2 className={styles.head2}>Projects</h2>
        <Link to='/showcase' className={styles.projectLink}>
          <GoArrowUpRight size={24} />
        </Link>
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.projectCard3}>
          <FaReact className={styles.skillIcon} />
          <DiNodejs className={styles.skillIcon} />
          <RiTailwindCssFill className={styles.skillIcon} />
          <SiJavascript className={styles.skillIcon} />
          <SiNextdotjs className={styles.skillIcon} />
          <IoLogoVercel className={styles.skillIcon} />
          <SiTypescript className={styles.skillIcon} />
          <VscGithubInverted className={styles.skillIcon} />
          <FaHtml5 className={styles.skillIcon} />
          <FaCss3Alt className={styles.skillIcon} />
        </div>
        <Link to='/skills' className={styles.projectLink}>
          <GoArrowUpRight size={24} />
        </Link>
      </div>

      <div className={styles.carouselContainer}>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} transitionTime={1000} showIndicators={false} showArrows={false}>
          {images.map((image, index) => (
            <Link to={image.url} key={index}>
              <div className={styles.carouselImage} style={{ backgroundImage: `url(${image.image})` }}></div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className={styles.contactCard}>
  <h2>Get In Touch</h2>
  <Link to='/contact' className={styles.projectLink}>
    <GoArrowUpRight size={24} />
  </Link>
</div>

      <div className={styles.darkModeToggle} onClick={toggleDarkMode}>
        <div className={`${styles.toggleButton} ${darkMode ? styles.dark : ''}`}>
          {darkMode ? <SunIcon className="w-8 h-8" /> : <MoonIcon className="w-8 h-8" />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
