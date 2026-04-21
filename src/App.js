import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Button from "./components/Button";

function App() {

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const projects = [
    { nome: "Site Pessoal", desc: "Meu portfólio" },
    { nome: "Lista de Tarefas", desc: "App simples" }
  ];

  return (
    <div>
      <Header nome="Charlene Costa" titulo="Desenvolvedora Frontend" />

      <About
        descricao="Desenvolvedora iniciante apaixonada por tecnologia."
        area="Desenvolvimento Web"
      />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <div className="p-4">
        <Button />
      </div>
    </div>
  );
}

export default App;