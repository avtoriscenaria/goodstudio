import React from 'react'
import {Button} from 'reactstrap'
import axios from 'axios'

export default class AddCategory extends React.Component {
	constructor(props){
		super(props)
		this.state = {category: false }
		this.addcategory = this.addcategory.bind(this)
		this.show = this.show.bind(this)
	}

	show(){
        this.setState({category: !this.state.category})
       }

	addcategory(){
		axios.put('http://job.goodstudio.by/api/categories/', {
		     		name: this.catnameInput.value 		
		}).then(res=>{ if(res.data.status==='failed') {
		     	  alert('Все пропало')
		     	  console.log(res.data)
		        } else {
		     	  alert('Категория добавлена')
		     	  console.log(res.data)	
		     	}})
		this.show()
	}
    
	render(){
		if (this.state.category) {
		return(
			<div id='addmenu'>
		    <input id='addprodinput' placeholder='Название категории' type='text' ref={input=>{this.catnameInput=input}} />
		    <div id='addbtns'>
			<Button id='addbtn2' onClick={this.addcategory}>Добавить</Button><Button id='addbtn2' onClick={this.show}>Отмена</Button>
			</div>
			</div>
			)
	} else {
		return <Button id='addbtn' onClick={this.show}>Добавить категорию</Button>
	}
	}
} 