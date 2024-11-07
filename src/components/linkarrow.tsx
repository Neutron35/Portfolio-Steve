import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { linkarrowType } from '@/types/ui.types.ts';
import { useState } from 'react';

function LinkArrow({ linkto, text, className }: linkarrowType) {
  const [hover, setHover] = useState(false);

  return (
    <NavLink to={linkto}>
      <Button
        className={`flex items-center gap-1.5 bg-transparent underline underline-offset-8 hover:bg-transparent hover:no-underline ${className}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
        <FontAwesomeIcon icon={faArrowRight} className={`transition-transform ${hover ? 'rotate-[-30deg]' : ''}`} />
      </Button>
    </NavLink>
  );
}

export default LinkArrow;
