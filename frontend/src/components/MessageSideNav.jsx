import React from 'react'
import {BsChatText} from 'react-icons/bs';
import {LiaHomeSolid} from 'react-icons/lia';
import {BsChatSquareText} from 'react-icons/bs';
import {SiGooglemeet} from 'react-icons/si';
import {MdContacts} from 'react-icons/md'


function MessageSideNav() {
  return (
    <>
        <BsChatText/>
        <div className='message-sidenavbar-icons'>
            <LiaHomeSolid className='message-icons'/>
            <BsChatSquareText className='message-icons' />
            <SiGooglemeet className='message-icons' onClick={()=>{}} />
            <MdContacts className='message-icons' />
        </div>  
    </>
  )
}

export default MessageSideNav
    