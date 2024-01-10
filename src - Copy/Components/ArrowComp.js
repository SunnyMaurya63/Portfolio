import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import right from '../Assets/right-arrow.png';
import left from '../Assets/left-arrow.png';

export default function ArrowComp(props) {
  const location = useLocation();
  const pages = ['/', '/contact', '/projects'];
  const currentPageIndex = pages.indexOf(location.pathname);
  const nextPageIndex = (currentPageIndex + 1) % pages.length;
  const prevPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;

  return (
    <div className="flex items-center justify-between mx-4 my-4">
      <Link to={pages[prevPageIndex]}>
        <div className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110">
          <img src={left} alt="left arrow" />
        </div>
      </Link>
      <Link to={pages[nextPageIndex]}>
        <div className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110">
          <img src={right} alt="right arrow" />
        </div>
      </Link>
    </div>
  );
}
