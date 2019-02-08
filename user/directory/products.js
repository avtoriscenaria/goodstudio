import React from 'react'
import axios from 'axios'

import PrCard from './card'

export default class Products extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			products:[]
		}
	}

	componentWillMount(){
		axios.post('http://job.goodstudio.by/api/products')
		     .then(res => {
		     	this.setState({products:res.data.products})
		     	console.log(res.data)})   
	}

	render(){
		return(
			<div id='interface'>
			<div id='products'>
			{
				this.state.products.map(el => (
					<PrCard name={el.name} img={el.picture} comments={el.comments} category={el.category} date={el.date} id={el._id}/>
					))
			}
			</div>
			</div>
			)
	}
}