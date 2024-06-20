import bgAbout from "./assets/bgAbout.jpg";

function About() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-stone-950 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={bgAbout}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="work-sans-aesthetic inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-200 uppercase rounded-full bg-teal-accent-400">
            Sobre nosotros
          </p>
          <h2 className="kanit-black mb-3 text-3xl font-bold tracking-tight text-purple-600 sm:text-6xl sm:leading-none">
            Valores que nos{" "}
            <span className="text-deep-purple-accent-400">
              definen
            </span>
          </h2>
          <p className="work-sans-aesthetic text-base font-bold pr-5 mb-5 text-gray-700 md:text-lg">
            Aseguramos la calidad en nuestros servicios y nos centramos en el
            cliente con soluciones personalizadas. Practicamos transparencia,
            responsabilidad ambiental y fomentamos la colaboración. Nuestra
            respuesta rápida garantiza tu seguridad y bienestar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
