import { useEffect, useState } from 'react';

const useScrollVisibility = (threshold = 50) => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setVisible(position > moving || moving < threshold);
      setPosition(moving);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [position, threshold]);

  return visible;
};

export default useScrollVisibility;
