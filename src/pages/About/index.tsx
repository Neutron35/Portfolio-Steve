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
      <div className="flex w-full justify-between px-8 pt-8">
        <h3 className="h-fit bg-black2 px-7 py-2">Parcours</h3>
        <div className="flex w-1/2 flex-col gap-3">
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
