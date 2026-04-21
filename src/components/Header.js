function Header(props) {
  return (
    <header className="bg-blue-600 text-white p-6 text-center">
      <h1 className="text-3xl font-bold">{props.nome}</h1>
      <p>{props.titulo}</p>
    </header>
  );
}

export default Header;