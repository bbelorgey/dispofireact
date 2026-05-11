import React, { useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../scss/scrollToTop.scss';

const SCROLL_THRESHOLD = 300;

const ScroolToTop = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.opacity = window.scrollY > SCROLL_THRESHOLD ? '1' : '0';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnchorLink href="#topPage">
      <i ref={ref} className="fas fa-home scrollButton" style={{ opacity: 0 }} />
    </AnchorLink>
  );
};

export default ScroolToTop;
