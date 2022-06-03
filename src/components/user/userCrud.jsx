  {/* sexta-feira,27/05/2022 as 22:00:00 h+|- */}
import React, { Component } from "react"
import axios from 'axios'
import Main from "../templates/main"
import main from '../templates/main'
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuarios: Incluir, Listar e Excluir!'
}
const baseUrl = 'http://localhost:3001/users'
const initialState ={
    user: {name:'',email:''},
    list: []


}
export default class usercrud extends Component{
    state = {...initialState}
    componentDidMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }
    clear(){
        this.setState({user:initialState.user})
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        axios [method](url, user)
         .then(resp => {
             const list = this.getUpdatelist(resp.data)
             this.setState({user: initialState.user, list})
         })
    }
    getUpdatelist(user, add = true){
    const list = this.state.list.filter(u => u.id !== user.id)
   if(add)list.unshift(user)
    return list
    }
    // terça-feira,31 de maio de 2022 as 21:05:00 h+|- 
    updateField(event){
        const user = {... this.state.user }
        user[event.target.name] = event.target.value 
        this.setState ({user})
    }
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Nome  </label>
                            <input type= "text" className="form-control"
                                    name="name"value= {this.state.user.name}
                                      onChange={e => this.updateField(e)} 
                                        placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> E-mail</label>
                            <input type= "text" className="form-control"
                                    name="e-mail"value= {this.state.user.e-mail}
                                      onChange={e => this.updateField(e)} 
                                        placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            <label> Salvar</label>
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    load(user){
       this.setState({ user })
    }
    remove(user) {
         axios.delete(`${baseUrl}/${user.id}`).then(resp => {
             const list = this. getUpdatelist(user, false)
               this.setState({list})
         }) 
        //  Quinta-feira,02/06/22 as 21:30:00h +|-
    }
    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr><th>ID</th>
                        <th> Nome </th>
                        <th> E-mail </th>
                        <th> Ações </th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}

                </tbody>
            </table>
        )
    }

renderRows() {
     return this.state.list.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
               <td> {user.name}</td>
               <td> {user.email}</td>
               <td>
                   <button className="btn btn-warning"
                   onClick={() => this.load(user)}>
                       <i className="fa fa-pencil">

                       </i>
                   </button>
                   <buttom className="btn btn danger ml-2"
                   onClick={()=> this.remove(user)}>
                     <i className="fa fa-trash">

                     </i>
                   </buttom>
               </td>
            </tr>

        )
    })
}
    render() {
        // console.log(this.state.list)
        return(
            <Main {...headerProps}> 
             {this.renderForm()}
             {this.renderTable()}
             </Main>

        )
    }

}  