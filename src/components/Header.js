import foto from "../foto.jpg";

function Header(props) {
  return (
    <header className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white p-10 text-center shadow-lg">

      {/* FOTO */}
      <div className="flex justify-center">
        <img
          src={foto}
          alt="Minha foto"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* NOME */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 animate-fadeIn">
        {props.nome}
      </h1>

      {/* TÍTULO */}
      <p className="text-base sm:text-lg mt-2 opacity-90">
        {props.titulo}
      </p>

      {/* LINHA */}
      <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>

      {/* REDES SOCIAIS */}
      <div className="flex justify-center gap-4 mt-6">

        <a
          href="https://github.com/CharleneCosta85"
          target="_blank"
          className="bg-white text-pink-500 px-4 py-2 rounded-full shadow hover:bg-pink-100 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/charlenecosta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-pink-500 px-4 py-2 rounded-full shadow hover:bg-pink-100 transition"
        >
          LinkedIn
        </a>

      </div>

    </header>
  );
}

export default Header;