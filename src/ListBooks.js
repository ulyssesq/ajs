import React from 'react';
import Book from './Book';

class ListBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            books: []
          };
    }

    componentDidMount() {
        fetch("http://localhost:3001/books/getall")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                books: result
              });
            },
            // Nota: É importante lidar com os erros aqui
            // em vez de um bloco catch() para não recebermos
            // exceções de erros dos componentes.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        const { error, isLoaded, books } = this.state;
        return (
          <main>
            <h2 className="text-center h3">Cadastro de livros</h2>
            <nav className="text-right">
                <button className="btn btn-primary mb-1">Adicionar</button>  
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Area</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {books.map(b => (
                    <Book key={b.id} book={b} />
                ))}
                {/* <Book book={{titulo: "Livro 1", autor: "Ulysses", editora: "Atica", area: "programador"}}></Book> */}
                </tbody>
            </table>
          </main>
        );
    }
}

export default ListBooks;