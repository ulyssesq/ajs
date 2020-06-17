import React from 'react';
import Book from './Book';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
            <h1 className="ml-2">Livraria</h1>
          </div>
        </header>
      <div className="container mt-5">
        
        <main>
        <h2 className="text-center h3">Cadastro de livros</h2>
          <nav className="text-right">
            <button className="btn btn-primary mb-1">Adicionar</button>  
          </nav>
          <table className="table">
            <thead>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Editora</th>
              <th>Area</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <Book book={{titulo: "Livro 1", autor: "Ulysses", editora: "Atica", area: "programador"}}></Book>
            </tbody>
            
          </table>
        </main>
      </div>
    </div>
  );
}

export default App;
