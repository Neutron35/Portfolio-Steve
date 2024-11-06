import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import { Popover } from './ui/popover';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import useScreenSize from '@/hooks/useScreenSize';

function Header() {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;

      setVisible(position > moving || moving < 50);
      setPosition(moving);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  useEffect(() => {
    if (screenSize.width >= tabletBP && isOpen) {
      setIsOpen(false);
    }
  }, [screenSize.width, tabletBP, isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-black1 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mt-5 max-w-none *:w-full">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between rounded-[100px] border-t bg-black2 px-7 py-3.5">
            <div className="py-2">
              <NavLink to="/" className="font-bold">
                LIEURON
              </NavLink>
            </div>
            <Navbar visible={visible} />
          </div>
        </Popover>
      </div>
    </header>
  );
}

export default Header;
