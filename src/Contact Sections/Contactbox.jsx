import React, { useState } from "react";
import './Contactbox.css';
import { supabase } from '../Supabase';

export default function Contactbox() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('clients messages')
        .insert([{
          name: fullName || 'Anonymous',
          message: message || '',
          status: 'unread',
          time: new Date().toLocaleTimeString(),
          title: "Project Inquiry",
          Senders_pfp: "" // optional
        }]);

      if (error) throw error;

      alert('Message sent!');
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Error sending message. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="contact-formm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="full-name" className="form-input" placeholder="Full Name" 
            value={fullName} onChange={e => setFullName(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="tel" id="phone-number" className="form-input" placeholder="Phone Number" 
            value={phone} onChange={e => setPhone(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="email" id="email" className="form-input" placeholder="Email" 
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <textarea id="message" className="form-input form-textarea" rows="1" placeholder="Your message" 
            value={message} onChange={e => setMessage(e.target.value)} />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Let's Get In Touch"}
          <span className="submit-arrow" aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  );
}
