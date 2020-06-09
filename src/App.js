import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cadastro de livros</h1>
      </header>
      <main>
        <button className="btn btn-primary">Adicionar</button>
        <ul>
          <li>Livro 1 - Ulysses - Editora Atica <button className="btn btn-warning">Editar</button> <button className="btn btn-danger">Remover</button></li>
          <li>Livro 1 - Ulysses - Editora Atica <button className="btn btn-warning">Editar</button> <button className="btn btn-danger">Remover</button></li>
          <li>Livro 1 - Ulysses - Editora Atica <button className="btn btn-warning">Editar</button> <button className="btn btn-danger">Remover</button></li>
        </ul>
      </main>
    </div>
  );
}

export default App;
