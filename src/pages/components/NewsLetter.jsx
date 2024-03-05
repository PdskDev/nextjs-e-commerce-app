import Image from 'next/image';
import React from 'react';
import newsletter from '../../../public/images/newsletter.jpg';

const NewsLetter = () => (
  <div className='newsletter'>
    <form action='/send-data-here' method='post' className='email-signup'>
      <span>Join our Newsletter</span>
      <input
        type='text'
        id='firstName'
        name='firstName'
        placeholder='First name'
      />
      <input
        type='text'
        id='lastName'
        name='lastName'
        placeholder='last name'
      />
      <input type='email' id='email' name='email' placeholder='Email address' />
      <button type='submit'>Submit</button>
      <span className='newsletter-image'>
        <Image src={newsletter} alt='Newsletter' width={100} height={100} />
      </span>
    </form>
  </div>
);

export default NewsLetter;
