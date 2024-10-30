/**
 * Lab Week 09 Exercise for Full Stack Development
 * @author: Jam Furaque
 */

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';                       // Importing Welcome Message
import LabExercise from './components/LabExercise';               // Importing Lab Exercise Message
import StudentId from './components/StudentId';                   // Importing Student Id
import StudentName from './components/StudentName';               // Importing Student Name
import Gbc from './components/Gbc';                               // Importing GBC for School Name

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <Welcome />                                                 {/* Using Welcome Component */}
        <LabExercise />                                             {/* Using Lab Exercise*/}
        <StudentId studentId="101382608"></StudentId>               {/* Using Student ID with PROPS*/}
        <StudentName fname="Jam" lname="Furaque"></StudentName>     {/* Using Student Name */}
        <Gbc name="George Brown College, Toronto"></Gbc>            {/* Using GBC Component */}
    </div>
  );
}

export default App;
