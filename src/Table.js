import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = ( props ) => {

    const rows = props.workersData.map(( objeto, index ) => {

        return (
            <tr key={ index }>
                <td>{ objeto.name }</td>
                <td>{ objeto.job }</td>
                <td>
                    <button onClick={ () => props.removerWorker(index) } >Delete</button>
                </td>
            </tr>
        )

    });

    return <tbody>{rows}</tbody>
}

class Table extends Component {

    render() {

        const { workersData, removerWorker } = this.props;

        return (

            <table>
                <TableHeader />
                <TableBody workersData={ workersData } removerWorker={ removerWorker } />
            </table>

        )
    }

}


export default Table;

/**
 * Table
 * Este é um 'componente de classe' customizado.
 * Capitalizamos os nomes deos componentes personalizados para diferenciá-los dos elementos HTML comuns.
 * 
 * Um componente de classe deve incluir render()e return somente pode retornar um elemento pai.
 * retorna apenas <table> neste caso.
 */

 /**
  * TableHeader e TableBody
  * O outro tipo de componente no React é o componente simples.
  * Que é uma função sem escopo propio (this) (arrow function). 
  * Este componente não usa a classpalavra - chave.
  * Componentes Simples nao possuem o metodo render
  */