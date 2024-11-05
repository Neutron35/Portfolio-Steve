import imgSteve from '@/assets/images/photo-steve.webp';
import { useEffect, useRef, useState } from 'react';
import LinkArrow from '@/components/linkarrow.tsx';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="w-full pt-9 md:pt-16">
      <img
        src={imgSteve}
        className="animate-appear absolute inset-x-0 -z-10 m-auto w-[240px] overflow-hidden rounded-[16px] md:w-[360px]"
        alt="Steve Lieuron"
      />
      <div
        ref={ref}
        className={`flex flex-col items-center gap-5 pt-[220px] md:pt-[321px] xl:pt-[288px] ${isVisible ? 'animate-scroll' : 'opacity-0'}`}
      >
        <h1
          className={`transition-opacity delay-[400ms] duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          Steve LIEURON
        </h1>
        <p
          className={`w-full text-center transition-opacity delay-[800ms] duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          Développeur web passionné, j'aime créer des expériences utilisateur intuitives et performantes. Formé aux
          technologies modernes et fort de projets concrets, je m'engage à concevoir des solutions élégantes et
          efficaces, en affinant sans cesse mes compétences.
        </p>
        <LinkArrow
          linkto="/about"
          text="En savoir plus"
          className={`transition-opacity delay-1000 duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        />
      </div>
    </section>
  );
}

export default Home;
