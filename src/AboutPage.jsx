import React from 'react';
import styles from './AboutPage.module.css'; // Import the CSS module

const AboutPage = () => {
  return (
    <>
      <div className={styles.full_aboutPage}>
        <div className={styles.about_container}>
          <div className={styles.grid1}>
            <div className={styles.in_grid1}>
              <img src="https://vaibhavdev.vercel.app/assets/avtar-qKT6WN_1.png" alt="Profile Pic" />
              <h2 className={`${styles.head_of_grid} ${styles.head_of_grid_one}`}>Hey I'm Soyash Tiwari</h2>
            </div>
            <p className={styles.grid1_head_bio}>
              An enthusiastic Software Developer from Madhya Pradesh, India, with a strong passion for Full Stack Development. With hands-on experience in developing impactful solutions, I am dedicated to leveraging my skills to drive innovation and deliver high-quality results.
            </p>
          </div>
          
          <div className={styles.grid2}>
            <div className={styles.in_grid2_head}>
              <h2 className={styles.head_of_grid}>Experience</h2>
            </div>
            <div className={styles.in_grid2_body}>
              <h3>Elsner Technology Pvt Ltd - 2024</h3>
              <h2>Associate Software Developer</h2>
              <p>
                Work as a shopify app developer.
              </p>
            </div>
          </div>
          
          <div className={styles.grid3}>
            <div className={styles.in_grid_head}>
              <h2 className={styles.head_of_grid}>Education</h2>
            </div>
            <div className={styles.in_grid3_body}>
              <div className={styles.in_grid1_item1}>
                <h4>Bansal Institute of Science & Technology Bhopal - 2020-2024</h4>
                <h2>Bachelors of Technology </h2>
                <p>Computer Science & Engineering - 8.7 CGPA</p>
              </div>
              <div className={styles.in_grid1_item2}>
                <h4>Saraswati Higher Secondary School Rewa MP - 2019-2020</h4>
                <h2>12th (PCM) - 74.4%</h2>
                <h2>8.7 CGPA</h2>
              </div>
              <div className={styles.in_grid1_item3}>
                <h4>Saraswati Higher Secondary School Rewa MP - 2017-2018</h4>
                <h2>10th - 76.6%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
