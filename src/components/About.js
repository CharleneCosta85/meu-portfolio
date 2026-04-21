function About(props) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Sobre Mim</h2>
      <p>{props.descricao}</p>
      <p><strong>Área:</strong> {props.area}</p>
    </section>
  );
}

export default About;