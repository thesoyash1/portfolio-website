import React from 'react';
import styles from './ShowCasePage.module.css'; 

const ShowCasePage = () => {
  return (
    <>
      <div className={styles.showcase_container}>
        <div className={styles.inner_container}>
          <div className={styles.collect_showcase}>
          <div className={styles.image_showcase}>
            <img src="https://res.cloudinary.com/dtj9srbsk/image/upload/v1726485149/Project%20Images/p7wtvmnad2hwe1sdxsfk.png" alt="img_showcase" />
          </div>
          <h2 className={styles.head_of_shocase}>Portfolio WebPage</h2>
          <div className={styles.grid_in}>
            <p className={styles.p_grid_in}>Personal Portfolio-Page</p>
           <div className={styles.svg_foot} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
</svg></div>
          </div>
          </div>

          <div className={styles.collect_showcase}>
          <div className={styles.image_showcase}>
            <img src="https://res.cloudinary.com/dtj9srbsk/image/upload/v1726567261/Project%20Images/eilvpx24tlreedlxcyye.png" alt="img_showcase" />
          </div>
          <h2 className={styles.head_of_shocase}>Shoes Webpage</h2>
          <div className={styles.grid_in}>
            <p className={styles.p_grid_in}>Nike Shoes Webpage using React</p>
           <div className={styles.svg_foot} > <a href="https://ec-frontend-chi.vercel.app/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
</svg></a></div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ShowCasePage;
