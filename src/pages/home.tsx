import Linkarrow from '@/components/linkarrow';
import imgSteve from '@/assets/photo-steve.png';

function Home() {
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
        <Linkarrow linkto="/about" text="En savoir plus" />
      </div>
    </section>
  );
}

export default Home;
