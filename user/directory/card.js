import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap'

import ButtonCollapse from './card/collapse'  
import Info from './card/info'

export default class PrCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {

      t: this.dateFromat(this.props.date)
    }
    this.dateFromat = this.dateFromat.bind(this)
  }

 dateFromat(date){

  let t = new Date(date)
  let m = t.getMonth()+1
  return (`${t.getHours()}:${t.getMinutes()} ${t.getDate()}.${m}.${t.getFullYear()}`)
 }

	render(){
        return (
          <div id='card'>
            <Card>
              <CardImg id='cardimg' top width='100%' src={this.props.img} alt='Card image cap' />
              <CardBody>
                <div id='cardbtn'><CardTitle id='cardtitle'>{this.props.name}</CardTitle><Info category={this.props.category} date={this.state.t}/></div>
                <ButtonCollapse comments={this.props.comments} id={this.props.id}/>
              </CardBody>
            </Card>
          </div>
        )
    }
}