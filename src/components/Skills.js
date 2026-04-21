function Skills(props) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Habilidades</h2>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;