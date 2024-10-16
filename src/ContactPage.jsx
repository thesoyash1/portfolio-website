import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Hello! Let's Talk</h1>
      <h5 className={styles.subheading}>
        Fill the form to contact me or send an email to <a href="mailto:thesoyashtiwari49@gmail.com">thesoyashtiwari49@gmail.com</a>
      </h5>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputField}
            placeholder=" "
          />
          <label htmlFor="name" className={styles.label}>Enter your Name</label>
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
            placeholder=" "
          />
          <label htmlFor="email" className={styles.label}>Enter your Email</label>
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textArea}
            placeholder=" "
          />
          <label htmlFor="message" className={styles.label}>Type your message here</label>
        </div>
        <button type="submit" className={styles.sendButton}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
