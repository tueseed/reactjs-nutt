// MessageList.js
import React, {Component} from 'react'
import Message from './Message'
import Card from './card'

import _ from 'lodash'

class Messagelist extends Component {
  constructor(props){
                      super(props)
                      this.state = {
                        messages: []
                      }
                      let app = this.props.db.database().ref('job')
                      app.on('value', snapshot => {
                        console.log(snapshot.val())
                        this.getData(snapshot.val())
                      })
                    }
  getData(values){
    let messagesVal = values
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey])
                      cloned.key = messageKey
                      return cloned
                    }).value()
    this.setState({
      messages: messages
    });
  }
  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
            <Card calssName="mt-2" name = {message.ca} />
      )
    })
    return (
      <div>
        {messageNodes}
      </div>
    )
  }
}
export default Messagelist