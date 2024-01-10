import React, { useState, useEffect } from 'react';

export default function AboutMeComp(props) {
  const [containerClass, setContainerClass] = useState('w-[50%] bg-blue-900 space-y-5 container rounded-md px-4 py-3');
  const [headingClass, setHeadingClass] = useState('font-serif font-semibold text-blue-300 text-2xl mb-2');
  const [contentClass, setContentClass] = useState('font-sans text-sm text-gray-400 leading-6');

  useEffect(() => {
    if (props.currentTheme === 'light') {
      setContainerClass('w-[50%] bg-slate-900 space-y-5 container rounded-md px-4 py-3');
      setHeadingClass('font-serif font-semibold text-sky-200 text-2xl mb-2');
      setContentClass('font-sans text-sm text-gray-100 leading-6');
    } else {
      setContainerClass('w-[50%] bg-blue-900 bg-opacity-10 space-y-5 container rounded-md px-4 py-3');
      setHeadingClass('font-serif font-semibold text-blue-300 text-2xl mb-2');
      setContentClass('font-sans text-sm text-gray-400 leading-6');
    }
  }, [props.currentTheme]);

  return (
    <div className={containerClass}>
      {/* Division for Heading */}
      <div className={headingClass}>
        {props.title}
      </div>
      {/* Content */}
      <div className={contentClass}>
        {props.description}
      </div>
    </div>
  );
}
