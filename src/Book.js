import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <tr>
                <td>{this.props.book.titulo}</td>
                <td>{this.props.book.autor}</td>
                <td>{this.props.book.editora}</td>
                <td>{this.props.book.area}</td>
                <td className="text-right">
                    <button className="btn btn-primary mr-2">Editar</button> 
                    <button className="btn btn-danger">Remover</button>
                </td>
            </tr>
        );
    }
}

export default Book;
