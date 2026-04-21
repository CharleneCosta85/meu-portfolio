function Projects(props) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Projetos</h2>
      {props.projects.map((p, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{p.nome}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;