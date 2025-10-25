'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// Contact form component
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-[var(--bg-light-blue)] p-6 sm:p-8"
    >
      <div>
        {/* 4. CHANGED: Label size to text-base */}
        <label htmlFor="name" className="mb-2 block body">
          full Name :
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          className="h-14 rounded-xl border-0 bg-white shadow-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        {/* 4. CHANGED: Label size to text-base */}
        <label htmlFor="email" className="mb-2 block body">
          Email Adders :
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="h-14 rounded-xl border-0 bg-white shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        {/* 4. CHANGED: Label size to text-base */}
        <label htmlFor="message" className="mb-2 block body">
          Enter Your Message :
        </label>
        {/* 5. CHANGED: Textarea height to min-h-[140px] */}
        <Textarea
          id="message"
          placeholder="Your message here..."
          className=" rounded-xl border-0 bg-white shadow-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* 6. CHANGED: Removed 'mt-4' to rely on parent flex 'gap-6' */}
      <Button variant="dark" size="hero" type="submit" className="flex w-60 items-center justify-between">
        <span>Send Your Message</span>
       
      </Button>
    </form>
  );
};

// Contact info item component
const ContactInfoItem = ({ icon: Icon, title, content }) => (
  <div className="flex items-center gap-4">
    {/* 3. CHANGED: Icon box size to h-14 w-14 */}
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2a2d58] text-white">
      {/* 3. CHANGED: Icon size to h-7 w-7 */}
      <Icon className="h-7 w-7" />
    </div>
    <div>
      <h3 className="text-xl font-[var(--font-work-sans)] text-gray-900">{title}</h3>
      <p className="text-base body text-gray-600">{content}</p>
    </div>
  </div>
);

// Contact section component
export const ContactSection = () => {
  return (
    // 1. CHANGED: Background to 'bg-gray-50'
    <section className="bg-gray-50 py-16 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Left Column: Info */}
        <div className="flex flex-col justify-center gap-12">
          {/* 2. CHANGED: Weight to 'font-light' and added 'leading-tight' */}
          <h2 className='px-2'>
            We are always ready to help you and answer your questions
          </h2>
          <div className="flex flex-col gap-6">
            <ContactInfoItem
              icon={PhoneIcon}
              title="Call us"
              content="+60-998930645"
            />
            <ContactInfoItem
              icon={EnvelopeIcon}
              title="Email us"
              content="Fourgenix@gmail.com"
            />
            <ContactInfoItem
              icon={MapPinIcon}
              title="Head office"
              content="Sanfranciso,USA, Tower 24, Church Street"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};