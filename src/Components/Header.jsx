import React from 'react'

const Header = () => {
  return (
    // main header
    <div className='bg-[#F5F5F5] text-center flex justify-between px-40 w-screen py-2'> 

      {/* left header */}
      <div>
        <ul className='flex items-center justify-center gap-4 text-sm'>
          <li>Movies</li>
          <li>Stream</li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>

      </div>


      {/* right header */}
      <div className='ml-20'> 
        <ul  className='flex items-center justify-center gap-4 text-xs'>
          <li>ListYourShow</li>
          <li>Corporates</li>
          <li>Offers</li>
          <li>Gift Cards</li>
        </ul>


      </div>
    </div>
  )
}

export default Header