import Linkarrow from '@/components/linkarrow';
import imgSteve from '@/assets/images/photo-steve.webp';

function Home() {
  return (
    <section className="w-full pt-9 md:pt-16">
      <img
        src={imgSteve}
        className="absolute inset-x-0 -z-10 m-auto w-[240px] overflow-hidden rounded-[16px] md:w-[360px]"
      ></img>
      <div className="flex flex-col items-center gap-5 pt-[220px] md:pt-[321px] xl:pt-[288px]">
        <h1>Steve LIEURON</h1>
        <p className="w-full text-center md:w-[560px]">
          Développeur web passionné, j'aime créer des expériences utilisateur intuitives et performantes. Formé aux
          technologies modernes et fort de projets concrets, je m'engage à concevoir des solutions élégantes et
          efficaces, en affinant sans cesse mes compétences.
        </p>
        <Linkarrow linkto="/about" text="En savoir plus" />
      </div>
    </section>
  );
}

export default Home;
