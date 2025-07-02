'use client';

import { useState } from 'react';
import events from '../data/events.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>CampusConnect Lite</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Find upcoming campus events by location</p>
      </header>

      <input
        type="text"
        placeholder="Search by location (e.g., Auditorium A)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.75rem',
          marginBottom: '2rem',
          width: '100%',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />

      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <div
            key={event.id}
            style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>{event.name}</h2>
            <p style={{ margin: '0.3rem 0',color: '#555' }}><strong>Club:</strong> {event.club}</p>
            <p style={{ margin: '0.3rem 0',color: '#555' }}><strong>Location:</strong> {event.location}</p>
            <p style={{ margin: '0.3rem 0',color: '#555' }}><strong>Date & Time:</strong> {new Date(event.datetime).toLocaleString('en-US')}</p>
            <p style={{ marginTop: '0.5rem', color: '#555' }}>{event.description}</p>
          </div>
        ))
      ) : (
        <p style={{ color: '#888' }}>No events found for that location.</p>
      )}
    </main>
  );
}
