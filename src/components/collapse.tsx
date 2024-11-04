import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, desc, solutions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronDown} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
}

export default Collapse;
