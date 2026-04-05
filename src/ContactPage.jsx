import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSend, FiMail, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import styles from './ContactPage.module.css';

const ContactPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (formData.message.length < 10) newErrors.message = 'Message too short';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus(null), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`${styles.pageWrapper} ${darkMode ? styles.darkTheme : styles.lightTheme}`}>
      <div className={styles.container}>
        
        {/* Left Side: Info & Socials */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>Let&apos;s <span>Connect</span></h1>
          <p className={styles.description}>
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I typically respond within 24 hours.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:thesoyashtiwari49@gmail.com" className={styles.linkCard}>
              <FiMail className={styles.icon} />
              <div>
                <span>Email me at</span>
                <strong> thesoyashtiwari49@gmail.com</strong>
              </div>
            </a>
          </div>

          <div className={styles.socialGrid}>
            <a href="https://www.linkedin.com/in/soyash-tiwari/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="https://x.com/thesoyash" target="_blank" rel="noreferrer"><FiTwitter /></a>
            <a href="https://instagram.com/thesoyash" target="_blank" rel="noreferrer"><FiInstagram /></a>
          </div>
        </div>

        {/* Right Side: Glassmorphic Form */}
        <div className={styles.formSection}>
          {submitStatus === 'success' && (
            <div className={styles.successToast}>✓ Message sent successfully!</div>
          )}
          
          <form onSubmit={handleSubmit} className={styles.glassForm}>
            <div className={styles.inputGroup}>
              <input 
                type="text" id="name" required 
                value={formData.name} onChange={handleChange} 
                className={errors.name ? styles.errorBorder : ''}
                placeholder=" "
              />
              <label>Full Name</label>
              {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="email" id="email" required 
                value={formData.email} onChange={handleChange} 
                className={errors.email ? styles.errorBorder : ''}
                placeholder=" "
              />
              <label>Email Address</label>
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                id="message" required 
                value={formData.message} onChange={handleChange}
                className={errors.message ? styles.errorBorder : ''}
                placeholder=" "
              />
              <label>Your Message</label>
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <FiSend />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

ContactPage.propTypes = { darkMode: PropTypes.bool.isRequired };
export default ContactPage;