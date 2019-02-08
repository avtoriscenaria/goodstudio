import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import axios from 'axios'

import Comment from './comment'

 export default class Comments extends React.Component {

  constructor(props){
    super(props)
    this.deleteComment=this.deleteComment.bind(this)
  }
  
  deleteComment(){
    axios.delete(`http://job.goodstudio.by/api/products/comment/${this.props.id}`, {
            date: this.props.comments.date
        }).then(res => {
          console.log(res)
          
        })
    console.log("нажал")    
  }

  render() {
    return (
      <ListGroup>
      {
        this.props.comments.map(el => < Comment date={el.date} id={this.props.id} text={el.text} />)
      }
      </ListGroup>
    );
  }
}