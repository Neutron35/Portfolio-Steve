import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CollapseProps } from '@/types/collapse.types.ts';

function Collapse({ title, desc, solutions }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between rounded-[24px] bg-black2 px-7 py-2 text-base">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`flex origin-top flex-col gap-2 px-3 text-sm transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] py-2 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-l-4 border-destructive px-4">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 border-l-4 border-green-500 px-4">
          {solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Collapse;
