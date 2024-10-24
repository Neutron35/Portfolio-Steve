import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgSteve from '../../assets/photo-steve.png';
import { useState } from 'react';

function Home() {
  const [hover, setHover] = useState(false);
  return (
    <section className="w-full pt-9 md:pt-16">
      <img
        src={imgSteve}
        className="absolute inset-x-0 -z-10 m-auto w-[240px] overflow-hidden rounded-[16px] md:w-[360px]"
      ></img>
      <div className="flex flex-col items-center gap-5 pt-[220px] md:pt-[321px] xl:pt-[288px]">
        <h1>Steve LIEURON</h1>
        {/*
        <Button className="flex w-fit gap-3 rounded-[118px] bg-[#1C1C1C] px-7 py-3.5">
          <span className="inline-block size-1.5 rounded-[100%] bg-[#4BCF1F]" />
          <p>Disponible</p>
        </Button>
        */}
        <p className="w-full text-center md:w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
          Vestibulum accumsan enim at vehicula feugiat.
        </p>
        <NavLink to="/about">
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="gap-1.5 bg-transparent underline underline-offset-8 hover:bg-transparent hover:no-underline"
          >
            En savoir en plus
            <FontAwesomeIcon icon={faArrowRight} className={`transition-transform ${hover && 'rotate-[-20deg]'}`} />
          </Button>
        </NavLink>
      </div>
    </section>
  );
}

export default Home;
