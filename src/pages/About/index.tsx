function About() {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex w-full flex-col items-center gap-5 pt-9 md:pt-24">
        <h1>Mon profil</h1>
        <p className="w-full text-center md:w-[464px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
          Vestibulum accumsan enim at vehicula feugiat.
        </p>
      </div>
      <div className="flex w-full flex-col justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8 xl:flex-row">
        <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Parcours</h3>
        <div className="flex flex-col gap-3.5 xl:w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
            Vestibulum accumsan enim at vehicula feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
            Vestibulum accumsan enim at vehicula feugiat.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8 xl:flex-row">
        <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Compétences</h3>
        <div className="flex flex-col gap-3 xl:w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
            Vestibulum accumsan enim at vehicula feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus leo in orci volutpat sodales.
            Vestibulum accumsan enim at vehicula feugiat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
