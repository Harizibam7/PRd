import React, { useState,useEffect } from 'react';
import './JobDetails.css';
import { useSelector, useDispatch} from 'react-redux';
import {useNavigate , Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {reset, ApplyJob} from '../features/auth/authSlice';
import Spinner from '../Spinner/Spinner';

const JobDetail = ({demotry,userDBData,setStudentMain}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [applyJob, setApplyJob] = useState({
    jobId:"",
    companyId:"",
    studentId:""
  });
  console.log("Company Id from Job Details",demotry.CompanyID);
  console.log("Company Post Id ",demotry._id);
  console.log("Apply Job : ",applyJob)
  const HandleApply = ()=>{
    setApplyJob({
      jobId:demotry._id,
      companyId:demotry.CompanyID,
      studentId:userDBData._id}
    )
    console.log("Form HandleApply",applyJob)
    dispatch(ApplyJob(applyJob)); 
  }
  const { user,  isError, isLoading, isSuccess, message } = useSelector((state) => state.auth);
  
  useEffect((()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess && user){
      setStudentMain('findjob')

    }
    if(isLoading){
      <Spinner/>
    }
    dispatch(reset());
  }),[user, isError, isLoading, isSuccess, message]);
  if (demotry) {
    const profile = demotry.profile;
    return (
      <div className='job-details-container'>
        <div className='job-header'>
          <h2>{profile}</h2>
          <ul className='job-details'>
            <li>{demotry.companyName}</li>
            <li>{demotry.location}</li>
            <li>Posted days ago</li>
          </ul>
        </div>
        <div className='job-content'>
          <div className='job-section'>
            <h2>About the Business and the Role</h2>
            <p>{demotry.experience}</p>
          </div>
          <div className='job-section'>
            <h2>Job Tasks and Responsibilities</h2>
            <p>{demotry.salary}</p>
          </div>
          <div className='job-section'>
            <h2>Skills and Experience</h2>
            <p>{demotry .technology.join(', ')}</p>
          </div>
        </div>
        <button className='job-apply' onClick={()=>{
          HandleApply();
        }}>Apply Now</button>
      </div>
    );
  } else {
    return (
      <div className='login-error'>
        <h2>No job details found</h2>
      </div>
    );
  }
};


export default JobDetail;
