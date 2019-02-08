import React from 'react'
import axios from 'axios'

import AddCategory from './accountmodules/newCategory'
import AddProduct from './accountmodules/newProduct'

export default class Account extends React.Component{

	render(){
		return(
		<div>
		<h1>{this.props.name}</h1>
		<h4>Ваш логин: {this.props.login}</h4>
        <div id='adds'>
        <AddProduct id='addmenu' />
        <AddCategory id='addmenu' />
		</div>
        </div>)
	}
}
