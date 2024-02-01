// App.js
import React from 'react';
import Home from './Home';
import About from './About';


function App() {
  const user = {
    name: "John Doe",
    username: "johndoe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/"
  };

  return (
    <div>
      <Home name={user.name} username={user.username} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;

