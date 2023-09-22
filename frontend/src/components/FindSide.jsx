import React from 'react'
import Banner from '../images/Flt-hire.jpg';
import './Student_dashboard.css';
export default function FindSide() {
  return (
    <div  className='find-side'>
      <img src={Banner} alt="" className='find-banner'/>
      <ul className='find-ul'>
        <li className='job-type'>
            <h2>Job Type</h2>
            <div>
                <input type="checkbox" />
                <label>All</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Full time</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Part time</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Internship</label>
            </div>
            
            <div>
                <input type="checkbox" />
                <label>Freelancing</label>
            </div>
        </li>
        <li className='job-type'>
            <h2>Domain</h2>
            <div>
                <input type="checkbox" />
                <label>All</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Software</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Hardware</label>
            </div>
        </li>
        <li className='job-type'>
            <h2>Skills</h2>
            <div>
                <input type="checkbox" />
                <label>Programming & Development</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Writing & Translation</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Design & Art</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Administrative & Secretarial</label>
            </div>
            
            <div>
                <input type="checkbox" />
                <label>Sales & Marketing</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Engineering & Architecture</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Business & Finance</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Education & Training</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Legal</label>
            </div>
        </li>
        <li className='job-type'>
            <h2>Languages</h2>
            <div>
                <input type="checkbox" />
                <label>English</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>German</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>French</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Japanese</label>
            </div>
            
            <div>
                <input type="checkbox" />
                <label>Korean</label>
            </div>
        </li>
        
      </ul>
    </div>
  )
}
