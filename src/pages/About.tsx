
const About= () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Our Project</h1>
        <p>This is a modern React application built with the latest technologies.</p>
        
        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <ul>
            <li><strong>Frontend Framework:</strong> React 18 with TypeScript</li>
            <li><strong>Build Tool:</strong> Vite</li>
            <li><strong>Routing:</strong> React Router DOM</li>
            <li><strong>Styling:</strong> CSS Modules</li>
            <li><strong>Package Manager:</strong> npm</li>
          </ul>
        </div>

        <div className="project-info">
          <h2>Project Features</h2>
          <ul>
            <li>Modern React Hooks</li>
            <li>TypeScript for type safety</li>
            <li>Client-side routing</li>
            <li>Responsive design</li>
            <li>Fast development with HMR</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 