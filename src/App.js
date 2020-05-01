import React, { Component } from 'react'
import './App.css'

import { Button,InputGroup, InputGroupAddon, InputGroupText,Input } from 'reactstrap'
import Header from '../src/components/nav'
import Card from '../src/components/card'
import firebase from 'firebase'
class App extends Component {
  constructor(props){
                      super(props)
                      var config = {
                                      apiKey: "AIzaSyDxNF3vWAXTNmNu6eifZkxTlPTJUmPQwTQ",
                                      authDomain: "cscn-2567c.firebaseapp.com",
                                      databaseURL: "https://cscn-2567c.firebaseio.com",
                                      projectId: "cscn-2567c",
                                      storageBucket: "cscn-2567c.appspot.com",
                                      messagingSenderId: "677224433732",
                                      appId: "1:677224433732:web:4b47e9cdb1ef8da0b4d411",
                                      measurementId: "G-4JDE5RP2WR"
                                    }
                        // Initialize Firebase
                        if (!firebase.apps.length) {
                          firebase.initializeApp(config);
                      }
                      this.state = {rows:[]}
                      

                    }
  componentDidMount(){
                      const dataArray = []
                      let app = firebase.database().ref('job')
                      app.on('value', snapshot => {
                                                    var jobData = snapshot.val()
                                                    var i = 0
                                                    while(Object.keys(jobData)[i])
                                                    {
                                                      dataArray.push(Object.values(jobData)[i])
                                                      i++
                                                    }
                                                    this.setState({rows:dataArray})
                              })
  }
  search = (keyword)=>{
                        console.log(keyword)
                        var dataArray = []
                        let app = firebase.database().ref('job')
                        app.on('value', snapshot => {
                          var jobData = snapshot.val()
                          var i = 0
                          while(Object.keys(jobData)[i])
                          {
                            dataArray.push(Object.values(jobData)[i])
                            i++
                          }
                        
                        })
                        const row = dataArray
                        const result = row.filter(row => row.reqNumber.includes(keyword))
                        console.log(result);
                        this.setState({rows:result})
                      }
  render() {
            return (
              <div className="container">
                <div className="row bg-dark text-white">
                  <div className="col-lg-12" ><h1>THEFOLDER</h1></div>
                </div>
                <div className="row"></div>
                <InputGroup className="mt-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="เลขที่คำร้อง " id="searchText" onChange={(event)=>{this.search(event.target.value)}}/>
                </InputGroup>
                {this.state.rows.map(item=>(<Card key={item.reqNumber} name={item.jobName} reqNumber={item.reqNumber}/>))}
              </div>
            )
  }
}
export default App
