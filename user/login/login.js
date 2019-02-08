import React from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'

import CheckIn from './checkin'
import Products from '../directory/products'
import Account from '../directory/account'

export default class LogIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[],
            status: ""
        }
        this.data = this.data.bind(this)
        this.logout = this.logout.bind(this)    
    }

	data(){
        axios.post('http://job.goodstudio.by/api/users', {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        })
             .then(res => {
                this.setState({data: res.data})
                this.setState({status: res.data.status})
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userid', res.data.user._id)
                console.log(res.data)
                console.log(res.data.status)
            })
             console.log(this.usernameInput.value)
             console.log(this.passwordInput.value)

    }

    logout(){
        axios.get('http://job.goodstudio.by/api/users/logout').then(res => {
            this.setState({status: ''})
            localStorage.setItem('token', null)
            localStorage.setItem('userid', null)
            console.log(res)})
    }

    
    renderNull(a){
        return(
            <div id='loginform'>
             <input id='loginput' placeholder='Введите username' type='text' ref={input =>{this.usernameInput = input}} />
             <input id='loginput' placeholder='Введите пароль' type='password' ref={input =>{this.passwordInput = input}} />
             <div>
             <Button id='logbtns' onClick={this.data}>Войти</Button>
             <Button id='logbtns' onClick={()=>(this.setState({status: 'reg'}))}>Создать аккаунт</Button>
             <h1 id='err'>{a}</h1>
             </div>
            </div>

            );
    }

    renderFailed(){
        return(
            <div>
             <h1 color='red'>Incorrect Data</h1>
            </div> 
            );

    }

    renderOk(){
        return(
            <div id='account'>
            {/*<Account name='User' login='LogIn' />
             // */}
            <div id='user'>
            
            <Account name={this.state.data.user.name} login={this.state.data.user.username}/>
            
            <Button id='logoutbtn' onClick={this.logout}>Exit</Button>
            </div>
            <Products />
            </div>
            );
    }

	render(){
         if (this.state.status===""){
             return this.renderNull();
         } else if (this.state.status==="reg"){
             return <CheckIn />;
        } else if (this.state.status==="ok"){ 
          return this.renderOk();
        } else { return(
                         <div>
                         {this.renderNull('Ошибка!')}
                        </div>)
        }
		
	}
}
