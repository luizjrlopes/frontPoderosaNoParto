import React, { useState } from "react";
import * as S from './styles.js'
import api from '../../services/api';



function ConteudoTelaCadastro() {

    const initialUserState = {
        id: null,
        nome: "",
        cpf: "",
        senha: "",
        sexo: "",
        cep: "",
        email: "",
        raca: "",
        dataNasc: "",
        ultMest: ""
    };
    const [user, setUser] = useState(initialUserState);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = async () => {
        var data = {
            nome: user.nome,
            cpf: user.cpf,
            senha: user.senha,
            sexo: user.sexo,
            cep: user.cep,
            email: user.email,
            raca: user.raca,
            dataNasc: `${user.dataNasc}T23:40:00.000+00:00`,
            ultMest: `${user.ultMest}T23:40:00.000+00:00`

        };

        await api.post("/user/", data)

            .then(response => {
                setUser({

                    //  id: response.data.id,
                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    senha: response.data.senha,
                    sexo: response.data.sexo,
                    cep: response.data.cep,
                    email: response.data.email,
                    raca: response.data.raca,
                    dataNasc: response.data.dataNasc,
                    ultMest: response.data.ultMest


                });

                window.location.replace("/")
            })
            .catch(e => {
                console.log("Erro ao cadastrar");//tratar erro e fazer popup
            });


    };



    return (
        < div >
            <S.Container >

                <S.Cadastro >

                    <S.TopSide >

                        <a> Cadastro </a>
                    </S.TopSide>
                    <S.Centro >
                        <S.Form1 >
                            <input type="text"
                                className="inputCadastro"
                                placeholder="Nome Completo"
                                id="nome"
                                required value={user.nome}
                                onChange={handleInputChange}
                                name="nome" >
                            </input>

                            < input type="number"
                                className="inputCadastro"
                                placeholder="CPF"
                                id="cpf"
                                required value={user.cpf}
                                onChange={handleInputChange}
                                name="cpf" >

                            </input>

                            <input type="password"
                                className="inputCadastro"
                                placeholder="Senha"
                                id="senha"
                                required value={user.senha}
                                onChange={handleInputChange}
                                name="senha" >

                            </input>

                            <select type="text"
                                className="inputCadastro"
                                placeholder="Sexo"
                                id="sexo"
                                required value={user.sexo}
                                onChange={handleInputChange}
                                name="sexo" >

                                <option value="null" > Sexo </option>
                                < option value="Feminino" > Feminino </option>
                                <option value="Masculino" > Masculino </option>
                                <option value="Outro" > Outro </option>

                            </select>

                            <label className="labelCadastro" > Data de Nascimento </label>

                            < input type="date"
                                className="inputDataCadastro"
                                id="dataNasc"
                                required value={user.dataNasc}
                                onChange={handleInputChange}
                                name="dataNasc"

                            >
                            </input>
                        </S.Form1>

                        <S.Form2 >
                            <input type="text"
                                className="inputCadastro"
                                placeholder="CEP"
                                id="cep"
                                required value={user.cep}
                                onChange={handleInputChange}
                                name="cep" >

                            </input>

                            < input type="text"
                                className="inputCadastro"
                                placeholder="E-mail"
                                id="email"
                                required value={user.email}
                                onChange={handleInputChange}
                                name="email"

                            >
                            </input>

                            <input type="text"
                                className="inputCadastro"
                                placeholder="Confirmar Senha" >
                            </input>

                            <select type="text"
                                className="inputCadastro"
                                placeholder="Raça/Cor"
                                id="raca"
                                required value={user.raca}
                                onChange={handleInputChange}
                                name="raca"


                            >
                                <option selected value="null" > Raça / Cor </option>
                                <option value="Preta" > Preta </option>
                                <option value="Branca" > Branca </option>
                                <option value="Parda" > Parda </option>
                                <option value="Indígena" > Indígena </option>
                                <option value="Amarela" > Amarela </option>
                            </select>

                            <label className="labelCadastro" > Última Mestruação </label>

                            <input type="date"
                                className="inputDataCadastro"
                                placeholder="Última Mestruação"
                                id="ultMest"
                                required value={user.ultMest}
                                onChange={handleInputChange}
                                name="ultMest"


                            >
                            </input>

                        </S.Form2>

                    </S.Centro>

                    <S.BottomSide >

                        <h3 > Ao clicar em Cadastrar, você concorda com nossa < a href="/TelaPoliticaDePrivacidade" >
                            {" Politica de Privacidade "} </a>  e aceita nossos <a href="/TelaTermosECondicoes" >Termos e Condições</a > . </h3>

                        <button className="btnCadastrar" onClick={saveUser} > Cadastrar </button>

                    </S.BottomSide>

                </S.Cadastro>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaCadastro;