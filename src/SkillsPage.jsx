import React from 'react';
import styles from './SkillPage.module.css'; // Import the CSS module

const SkillsPage = () => {
  return (
    <>
      <div className={styles.skillpage_container}>
        <div className={styles.inner_skillpage}>
          <div className={styles.left_img_container}>
            <img 
              src="https://antonyjudeshaman.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftools.ff2b8f7d.png&w=640&q=75" 
              alt="left_img" 
            />
          </div>
          <div className={styles.right_img_container}>
            <div className={styles.inner_right_box}>
              <div className={styles.collection_skills}>
                <ul>
                  <li>React JS</li>
                  <li>Laravel</li>
                  <li>Shopify</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>GIT</li>
                  <li>JAVA</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>DOCKER</li>
                  <li>C++</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
