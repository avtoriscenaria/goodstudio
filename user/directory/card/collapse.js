import React from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import axios from 'axios'

import Comments from './comments'

export default class ButtonCollapse extends React.Component {
  constructor(props){
    super(props)
    this.state = { collapse: false }
    this.toggle = this.toggle.bind(this)
    this.comment = this.comment.bind(this)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  comment(){
    if(this.commentInput.value===''){
      console.log('no data')
    } else {
     axios.put(`http://job.goodstudio.by/api/products/comment/${this.props.id}`, {
            text: this.commentInput.value
        }).then(res => {
          console.log(res)
        })
    }

  }

  render() {
    return (
      <div>
        <Button id='collapsebtn' color='primary' onClick={this.toggle} style={{ marginBottom: '1rem' }}>Коментарии</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <Comments comments={this.props.comments} id={this.props.id} />
            <div id='commentinput'><input type='text' ref={input=>{this.commentInput = input}} id='input'/><Button onClick={this.comment} id='commentbtn'><img src='https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Circle_icon-icons.com_69145.png' width='40px' height='40px'/></Button></div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}