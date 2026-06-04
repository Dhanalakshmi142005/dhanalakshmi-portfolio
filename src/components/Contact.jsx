import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const validateForm = () => {
    const missing = [];
    if (!formData.name.trim()) missing.push('Name');
    if (!formData.email.trim()) missing.push('Email');
    if (!formData.subject.trim()) missing.push('Subject');
    if (!formData.message.trim()) missing.push('Message');

    if (missing.length) {
      return `Please fill in: ${missing.join(', ')}`;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_tvwkjzp',
        'template_ohvbhpo',
        formRef.current,
        '2lS-7qWo1CJmI6Oo7'
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('=== EMAILJS DEBUG ===');
      console.error('error:', error);
      console.error('error.status:', error.status);
      console.error('error.text:', error.text);
      console.error('error.message:', error.message);
      console.error('full API response (JSON):', JSON.stringify(error, Object.getOwnPropertyNames(error)));

      const errorDetail =
        error.text ||
        error.message ||
        (error.status ? `Status ${error.status}` : null) ||
        'Unknown error (check browser console for full details)';

      const errorMessage = `EmailJS Error: ${errorDetail}`;

      setStatus({
        type: 'error',
        message: errorMessage,
      });

      alert(errorMessage);
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'dhanama2005@gmail.com', href: 'mailto:dhanama2005@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 9080236650', href: 'tel:+919080236650' },
    { icon: <FiMapPin />, label: 'Location', value: 'Mela Kabisthalam, Papanasam', href: null },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="contact-description">
              Have a question or want to work together? Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-item">
                  <div className="contact-item-icon">{info.icon}</div>
                  <div>
                    <p className="contact-item-label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="contact-item-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-item-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <a
                href="https://github.com/Dhanalakshmi142005"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dhanalakshmi-arivazhagan-a820503a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="form-title">Send a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={sending}
            >
              {sending ? (
                <span className="sending-spinner" />
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
