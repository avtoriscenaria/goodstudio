import React from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'



export default class CheckIn extends React.Component {
          constructor(props){
          	super(props)
          	this.data = this.data.bind(this)
          	this.event = this.event.bind(this)
          }

	data(){
		axios.put('http://job.goodstudio.by/api/users/', {
            "username": "login2",
            "password": "123456",
            "name": "TestUser2"
        }).then(res => {
        	console.log(res)
        });

        axios.post('http://job.goodstudio.by/api/users', {
            "username": "login2",
            "password": "123456",
            
        }).then(res => {
        	console.log(res)
        });


	}

	event(){
		console.log(this.usernameInput.value)
		console.log(this.loginInput.value)
		console.log(this.passwordInput.value)
		alert('Регистрация прошла успешно!')
	}




	render(){
		return(
			<div id='loginform'>
			 <input id='loginput' placeholder='Введите username' type='text' ref={input =>{this.usernameInput = input}} />
			 <input id='loginput' placeholder='Введите имя' type='text' ref={input =>{this.loginInput = input}} />
			 <input id='loginput' placeholder='Введите пароль' type='text' ref={input =>{this.passwordInput = input}} />
			 <Button id='checkbtn' onClick={this.event} >Создать аккаунт</Button>
			</div>
			)
	}
}