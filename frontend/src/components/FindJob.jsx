import React from 'react';
import Filter from './Filter';
import FindSide from './FindSide';
import FindRec from './FindRec';
import './Student_dashboard.css';
function FindJob({studentMain,setStudentMain,setDemoTry}) {
  return (
    <>
      <div className= 'find-home'>
            <FindSide />
            <FindRec studentMain={studentMain} setStudentMain={setStudentMain } setDemoTry={setDemoTry} />
      </div>
    </>

  )
}

export default FindJob;