import React from 'react'
import {ListGroupItem, Button } from 'reactstrap'
import axios from 'axios'

export default class Comment extends React.Component {

  constructor(props){
    super(props)
    this.deleteComment=this.deleteComment.bind(this)
  }
  
  deleteComment(){
    axios.delete(`http://job.goodstudio.by/api/products/comment/${this.props.id}`, {
            date: this.props.date
        }).then(res => {
          console.log(res)
          
        })
    console.log("нажал")    
  }

  render() {
    return (
      <div>
      <p id="commentlist"><ListGroupItem id="commentlist2" >{this.props.text}</ListGroupItem><Button onClick={this.deleteComment} id="commentbtn"><img src="http://www.bugtreat.com/blog/wp-content/uploads/2012/06/Delete.png" width="40px" height="40px"/></Button></p>
      </div>
    );
  }
}