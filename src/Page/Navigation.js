import React from 'react'
import x from "../Assect/codding/x.png";
import gfg from "../Assect/codding/gfg.svg";
import leetcode from "../Assect/codding/leetcode.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

export const Navigation = () => {
  return (
    <>
      <div className='flex flex-col gap-9'>
        
        {/* <p className='mt-10 font-bold text-2xl'>Social Media</p> */}
        <a className='cursor-pointer flex items-center gap-4'>
        <XIcon fontSize='large' />
          <p className='text-xl'>Twitter</p>
        </a>
        <a className='cursor-pointer flex items-center gap-4'>
        <LinkedInIcon fontSize='large' />
          <p className=' text-xl'>LinkedIn</p>
        </a>
        <a className='cursor-pointer flex items-center gap-4'>
          <EmailIcon fontSize='large' />
          <p className=' text-xl'>Email</p>
        </a>

        {/* <p className='font-bold text-2xl'>Codding Profile</p> */}
        <a className='cursor-pointer flex items-center gap-4'>
          <img className='w-[30px]' src={leetcode} />
          <p className=' text-xl'>LeetCode</p>
        </a>
        <a className='cursor-pointer flex items-center gap-4'>
          <img className='w-[40px]' src={gfg} />
          <p className='text-xl'>GeekForGeeks</p>
        </a>

      </div>
    </>
  )
}
