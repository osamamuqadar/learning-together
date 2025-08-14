import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Our App</h1>
        <p>This is the home page of our React application with React Router.</p>
        <div className="features">
          <div className="feature-card">
            <h3>🚀 Fast</h3>
            <p>Built with Vite for lightning-fast development</p>
          </div>
          <div className="feature-card">
            <h3>⚛️ React</h3>
            <p>Modern React with TypeScript support</p>
          </div>
          <div className="feature-card">
            <h3>🛣️ Routing</h3>
            <p>Seamless navigation with React Router</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 