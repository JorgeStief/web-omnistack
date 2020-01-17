import React from "react";
import "./global.css";
import "./Sidebar.css";

//Componente: E um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado: INformações mantidas pelo componente (Lembrar: imutabilidade)
//Propriedade: Informações que um componente PAI passar para o componente FILHO
function App() {
  return (
    <div id="app">
      <aside>
        <strong> Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias </label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude </label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude </label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="" alt=""/>
            </header>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
