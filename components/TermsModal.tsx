'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TermsModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) {
      setShowModal(true);
    }
  }, []);

  const acceptTerms = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        maxWidth: '400px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{color:'#555'}}>Terms & Conditions</h2>
        <p style={{ margin: '1rem 0' ,color: '#555' }}>
          Please accept our </p><p style={{ margin: '1rem 0' ,color: '#00f' }}><Link href="/terms">Terms and Conditions</Link></p><p style={{ margin: '1rem 0' ,color: '#555' }}> before using the app.
        </p>
        <button
          onClick={acceptTerms}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          I Accept
        </button>
      </div>
    </div>
  );
}
