import imgSteveTablet from '@/assets/images/portrait-steve-360.webp';
import imgSteveMobile from '@/assets/images/portrait-steve-240.webp';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import LinkArrow from '@/components/linkarrow.tsx';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';

function Home() {
  const { ref, isVisible } = useIntersectionObserver();
  const { tabletBP } = getTailwindBreakpoints();

  const animationClasses = (baseClass: string) =>
    `${baseClass} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;

  return (
    <section className="w-full pt-9 md:pt-16">
      <img
        src={imgSteveMobile}
        srcSet={`${imgSteveTablet} 360w, ${imgSteveMobile} 240w`}
        sizes={`(min-width: ${tabletBP}px) 360px, 240px`}
        width={240}
        height={240}
        loading="eager"
        className="animate-appear absolute inset-x-0 -z-10 m-auto w-[240px] overflow-hidden rounded-[16px] md:w-[360px]"
        alt="Portrait de Steve Lieuron"
      />
      <div
        ref={ref}
        className={`flex flex-col items-center gap-5 pt-[220px] md:pt-[321px] xl:pt-[288px] ${isVisible ? 'animate-scroll' : 'opacity-0'}`}
      >
        <h2 className={`title1 transition-opacity delay-[400ms] duration-700 ${animationClasses('')}`}>
          Steve LIEURON
        </h2>
        <p className={`w-full text-center transition-opacity delay-[800ms] duration-[800ms] ${animationClasses('')}`}>
          Développeur web passionné, j'aime créer des expériences utilisateur intuitives et performantes. Formé aux
          technologies modernes et fort de projets concrets, je m'engage à concevoir des solutions élégantes et
          efficaces, en affinant sans cesse mes compétences.
        </p>
        <LinkArrow
          linkto="/about"
          text="En savoir plus"
          className={`transition-opacity delay-1000 duration-[800ms] ${animationClasses('')}`}
        />
      </div>
    </section>
  );
}

export default Home;
