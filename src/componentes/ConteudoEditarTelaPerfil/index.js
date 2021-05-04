import React, { useState, useContext } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
function ConteudoEditarTelaPerfil() {

    const initialUserState = {
        id: null,
        nome: "",
        cpf: "",
        sexo: "",
        cep: "",
        email: "",
        raca: "",

        modificed: Date.now()
    };

    const [user, setUser] = useState(initialUserState);
    const { idUsuario } = useContext(StoreContext);
    const [dataNasc, setDataNasc] = useState(null);
    const [ultMest, setUltMest] = useState(null);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = async () => {
        var data = {
            nome: user.nome,
            cpf: user.cpf,
            sexo: user.sexo,
            cep: user.cep,
            email: user.email,
            raca: user.raca,
            dataNasc: dataNasc,
            ultMest: ultMest,
            modificed: user.modificed

        };
        await api.put(`/user/${idUsuario}`, data)

            .then(response => {
                setUser({

                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    sexo: response.data.sexo,
                    cep: response.data.cep,
                    email: response.data.email,
                    raca: response.data.raca,
                    dataNasc: response.data.dataNasc,
                    ultMest: response.data.ultMest,
                    modificed: response.data.modificed

                });
                alert("Perfil atualizado com sucesso")
                window.location.replace("/TelaAtividade")

            })
            .catch(e => {

                console.log("Erro ao Alterar");
            });

    };

    return (
        < div >
            <S.Container >

                <S.EditarPerfil >

                    <S.TopSide >

                        <a> Editar Perfil </a>
                    </S.TopSide>
                    <S.Centro >
                        <S.Form1 >
                            <input type="text"
                                className="inputEditarPerfil"
                                placeholder="Nome Completo"
                                id="nome"
                                required value={user.nome}
                                onChange={handleInputChange}
                                name="nome" >
                            </input>

                            < input type="number"
                                className="inputEditarPerfil"
                                placeholder="CPF"
                                id="cpf"
                                required value={user.cpf}
                                onChange={handleInputChange}
                                name="cpf" >

                            </input>



                            <select type="text"
                                className="inputEditarPerfil"
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

                            <DatePicker
                                selected={dataNasc}
                                dateFormat="dd/MM/yyyy"

                                onChange={date => setDataNasc(date)}
                                className="inputEditarPerfil"
                                disabled={false}
                                placeholderText="Data de Nascimento"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                popperModifiers={{
                                    offset: "5px, 3px"

                                }}
                            />
                        </S.Form1>

                        <S.Form2 >
                            <input type="text"
                                className="inputEditarPerfil"
                                placeholder="CEP"
                                id="cep"
                                required value={user.cep}
                                onChange={handleInputChange}
                                name="cep" >

                            </input>

                            < input type="text"
                                className="inputEditarPerfil"
                                placeholder="E-mail"
                                id="email"
                                required value={user.email}
                                onChange={handleInputChange}
                                name="email"

                            >
                            </input>



                            <select type="text"
                                className="inputEditarPerfil"
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


                            <DatePicker
                                selected={ultMest}
                                dateFormat="dd/MM/yyyy"

                                onChange={date => setUltMest(date)}
                                className="inputEditarPerfil"
                                disabled={false}
                                placeholderText="Data da Ultima Mestruação"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                popperModifiers={{
                                    offset: "5px, 3px"

                                }}
                            />

                        </S.Form2>

                    </S.Centro>

                    <S.BottomSide >


                        <button className="btnCadastrar" onClick={saveUser} > Alterar </button>

                    </S.BottomSide>

                </S.EditarPerfil>

            </S.Container>

        </div>

    )

}

export default ConteudoEditarTelaPerfil;