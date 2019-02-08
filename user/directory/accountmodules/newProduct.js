import React from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'

export default class AddProduct extends React.Component {
	constructor(props){
		super(props)
		this.state = {product: false, categories: [] }
		this.addproduct = this.addproduct.bind(this)
		this.show = this.show.bind(this)
	}

	componentWillMount(){
		axios.get('http://job.goodstudio.by/api/categories/')
		     .then(res => {
		     	this.setState({categories: res.data.categories})
		     	console.log(res.data)}) 
	}


	show(){
        this.setState({product: !this.state.product})
       }

	addproduct(){
		axios.put('http://job.goodstudio.by/api/products/', {
			        name: this.catnameInput.value,
		     		category: this.catnameInput.value,
		     		picture: this.urlInput.value,
		     		recommended: this.checkbox.checked
		})
		     .then(res => { if(res.data.status==='failed'){
		     	alert('Все пропало')
		     	console.log(res.data)
		        } else {
		     	alert('Продукт добавлен')
		     	console.log(res.data)	
		     	}})

		this.show()
		
	}
    
	render(){

		if (this.state.product) {
		return(
			<div id='addmenu'>
			<input id='addprodinput' placeholder='Название продукта' type='text' ref={input=>{this.prodnameInput=input}} />
			<input id='addprodinput' placeholder='Название категории' type='text' ref={input=>{this.catnameInput=input}} />
			<input id='addprodinput' placeholder='Url картинки' type='text' ref={input=>{this.urlInput=input}} />
			<p><h4>Рекомендация</h4><input type='checkbox' ref={check=>this.checkbox=check}/></p>
			<div id='addbtns'>
			<Button id='addbtn2' onClick={this.addproduct}>Добавить</Button><Button id='addbtn2' onClick={this.show}>Отмена</Button>
			</div>
			</div>
			)
	     }  else {
		  return <Button id='addbtn' onClick={this.show}>Добавить товар</Button>
	       }
	}
} 