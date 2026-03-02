import React from 'react';
import '../css/SkillGrid.css';

const skills = [
  { name: 'C++', src: 'cpp.png' },
  { name: 'Java', src: 'java.png' },
  { name: 'Python', src: 'python.png' },
  { name: 'Rust', src: 'rust.png' },
  { name: 'HTML5', src: 'html5.png' },
  { name: 'CSS3', src: 'css3.png' },
  { name: 'JavaScript', src: 'js.png' },
  { name: 'Node.js', src: 'nodejs.png'},
  { name: 'React', src: 'react.png' },
  { name: 'Debian', src: 'debian.png' },
  { name: 'Docker', src: 'docker.png' },
  { name: 'Git', src: 'git.png' }
];

const prefix = process.env.PUBLIC_URL + '/assets/logo/'

const SkillItem = ({ skill }) => {
  if (!skill.name) return <div className="skill-item empty" />;

  return (
    <div className="skill-item">
      <div className="skill-logo">
        <img 
          src={`${prefix}${skill.src}`} 
          alt={skill.name} 
          className="logo-gray"
        />
        <img 
          src={`${prefix}${skill.src}`} 
          alt={skill.name} 
          className="logo-color"
        />
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

const SkillGrid = () => {
  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillGrid;
