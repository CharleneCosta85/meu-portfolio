import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-50 text-gray-800">

      <Header 
        nome="Charlene Costa" 
        titulo="Desenvolvedora Frontend" 
      />

      {/* SOBRE */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-2">✨ Sobre Mim</h2>
        <p>
          Desenvolvedora iniciante apaixonada por tecnologia e criação de interfaces modernas.
          Busco sempre aprender novas ferramentas e melhorar minhas habilidades.
        </p>
      </section>

      {/* HABILIDADES */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">💻 Habilidades</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-pink-100 p-3 rounded-xl text-center">HTML</div>
          <div className="bg-pink-100 p-3 rounded-xl text-center">CSS</div>
          <div className="bg-pink-100 p-3 rounded-xl text-center">JavaScript</div>
          <div className="bg-pink-100 p-3 rounded-xl text-center">React</div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🚀 Projetos</h2>

        <div className="space-y-4">

          <div className="p-4 bg-rose-50 rounded-xl shadow-sm">
            <h3 className="font-bold">Site Pessoal</h3>
            <p className="text-sm text-gray-600">
              Portfólio desenvolvido com React e Tailwind CSS.
            </p>
          </div>

          <div className="p-4 bg-rose-50 rounded-xl shadow-sm">
            <h3 className="font-bold">Lista de Tarefas</h3>
            <p className="text-sm text-gray-600">
              Aplicação simples para gerenciamento de tarefas.
            </p>
          </div>

        </div>
      </section>

      {/* BOTÃO */}
      <div className="text-center mb-10">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
          Entrar em Contato 💌
        </button>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 pb-6">
        © 2026 Charlene Costa
      </footer>

    </div>
  );
}

export default App;