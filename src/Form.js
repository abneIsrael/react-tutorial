import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState; //define um estado inicial ao componente
    }


    handleChange = event => {

        const { name, value } = event.target; // retorna o conteudo dos atributos name e value objeto input que executou este evento

        this.setState({
            [name]: value // nomeDoInput: ValorDoInput
        })

    }


    submitForm = () => {
        this.props.handleSubmit(this.state); // passa o estado deste componente (Form) para o componente Pai (App)
        this.setState(this.initialState); //limpa os campos do formulario, voltando o componente ao estado inicial
    }


    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={ name }
                    onChange={ this.handleChange }
                />
                <label>Job</label>
                <input 
                    type="text"
                    name="job"
                    value={ job }
                    onChange={ this.handleChange }
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }

}

export default Form;