// Import React and any other necessary libraries
import React from 'react';
import './App.css'; // Import your CSS file for styling
import man from './asserts/man.png';

// CompanyInfo component for displaying company name and description
const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="company-name">
        <h1>Easy Buy Nest</h1>
      </div>
      <div className='company-description'>
      <p><br/>Welcome to Easy Buy Nest, where a dedicated team of professionals works<br/>
      together to bring innovation, creativity, and expertise to the software industry. Get to know<br/>
      the individuals who make your company thrive.<br/></p>
      </div> 
    </div>
  );
};

// TeamMember component for displaying individual team members
const TeamMember = ({ name, position, image }) => {
  return (
    <div className="team-member-card">
      <img src={man} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

// TeamSection component for displaying a responsive team section
const TeamSection = () => {
  // Sample team data (replace with your actual team members)
  const teamData = [
    { name: '[Founder Name]', position: 'Founder/CEO', image: {man} },
    { name: '[Founder Name]', position: 'Founder/CEO', image: {man} },
  ];
  const teamData1=[
    { name: '[VIP Name]', position: 'VIP,Development & Growth', image: {man} },
    { name: '[VIP Name]', position: 'VIP,Sales & Marketing', image: {man} },
    { name: '[VIP Name]', position: 'VIP,Finance & Operation', image: {man} },
];
const teamData2=[
  { name: '[Developer Name]', position: 'Team Lead,SE', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
  { name: '[Developer Name]', position: 'Software Engineer', image: {man} },
];
const teamData3=[
  { name: '[Employee Name]', position: 'Team Lead', image: {man} },
  { name: '[Employee Name]', position: 'Sales Officer', image: {man} },
  { name: '[Employee Name]', position: 'Sales Officer', image: {man} },
  { name: '[Employee Name]', position: 'Sales Officer', image: {man} },
  { name: '[Employee Name]', position: 'Sales Officer', image: {man} },
  { name: '[Founder Name]', position: 'Marketing Officer', image: {man} },
  { name: '[Founder Name]', position: 'Marketing Officer', image: {man} },
  { name: '[Founder Name]', position: 'Marketing Officer', image: {man} },
  { name: '[Founder Name]', position: 'Marketing Officer', image: {man} },


];
    // Add more team members as needed
  

  return (
    <div className="team-section">
      <h2> Meet Our Team</h2><br/>
      <div className="team1"> <p>Leadership/ Management Team</p> </div>
      <div className="team-members">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="team-members">
        {teamData1.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div><br/>
      <div className="team1"> <p>Development Team</p> </div><br/>
      <div className="team-members">
        {teamData2.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div><br/>
      <div className="team1"> <p>Sales and Marketing Team</p> </div><br/>
      <div className="team-members">
        {teamData3.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

// App component that includes CompanyInfo and TeamSection
const App = () => {
  return (
    <div className="app">
      <CompanyInfo />
      <TeamSection />
    </div>
  );
};

export default App;
