import React, {userState, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Subtitle from './components/Subtitle';
import StudentId from './components/StudentId';
import StudentName from './components/StudentName';
import Info from './components/Info';

function App() {

  const [info] =useState({
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab Exercise",
    studentId: "101426567",
    studentName: "Kei Ishikawa",
    collegeInfo: "George Brown College, Toronto"
  })
  return (
    <div className="App">
      <div className='content-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <Title  text={info.title} />
        <Subtitle text={info.subtitle} />
        <StudentId id={info.studentId} />
        <StudentName name={info.studentName}/>
        <Info text={info.collegeInfo} />
      </div>
    </div>
  );
}

export default App;
