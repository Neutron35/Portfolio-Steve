import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { linkarrowType } from '@/types/linkarrow.types';
import { useState } from 'react';

function Linkarrow({ linkto, text }: linkarrowType) {
  const [hover, setHover] = useState(false);
  return (
    <NavLink to={linkto}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="gap-1.5 bg-transparent underline underline-offset-8 hover:bg-transparent hover:no-underline"
      >
        {text}
        <FontAwesomeIcon icon={faArrowRight} className={`transition-transform ${hover && 'rotate-[-30deg]'}`} />
      </Button>
    </NavLink>
  );
}

export default Linkarrow;
