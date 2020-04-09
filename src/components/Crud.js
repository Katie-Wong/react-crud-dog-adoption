import React, { Component } from 'react';
import './Crud.css';

class Crud extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'THROW US A BONE',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    
    // This is new 
    if(this.state.act === 0){   
      let data = {
        name, address
      }
      datas.push(data);
    }else{                      
    // This is update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  // This is to remove
  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  // This is to edit
  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
        <div className="back">
      <div className="Crud">
        <h2>{this.state.title}</h2>
        <h3>Comments are highly appreciated  </h3>
        <div>You can always Create Read Update Delete your comments as you wish</div>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Customer's name" className="formField" />
          <input type="text" ref="address" placeholder="Customer's comments" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">SEND</button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}<p>said:</p>{data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">delete</button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">update</button>
            </li>
          )}
        </pre>
      </div>
      </div>
    );
  }
}

export default Crud;