import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';


var massiv = [];

massiv.push({delat: "сходить в парикмахерку"});
massiv.push({delat: "прибраться дома"});
massiv.push({delat: "оплатить комуналку"});

var massiv1 = []

massiv1.push({delat: "сходить в парикмахерку"});
massiv1.push({delat: "прибраться дома"});
massiv1.push({delat: "оплатить комуналку"});

class ToDo extends React.Component {
		constructor(props){
			super(props);
			this.press=this.press.bind(this);
			this.props = {className : "list-group-item list-group-item-action"};
			//this.state = {class: "list-group-item list-group-item-action"};

			this.handleChange = this.handleChange.bind(this);
			this.state = {value : ''};
			this.del=this.del.bind(this);
			this.changeClass=this.changeClass.bind(this);
		}



		press(e) {
		e.preventDefault();
		//console.log(this.state.value.length);
		if(this.state.value.length >= 1) {
			this.props.list.push({delat:this.state.value });
			this.setState({value : ''});
		}
		//this.setState({value: e.target.value});
		//alert( this.state.value);
		//console.log(e.target.name);
		//let p = (this.state.knopka === "Отжата")?"Нажата":"Отжата";
		//this.setState({knopka : p});
		//document.getElementById('todo').innerHTML = massiv.do;
		
		//let c = (this.state.class === "list-group-item list-group-item-action")?"list-group-item list-group-item-action active":"list-group-item list-group-item-action";
		//this.setState({class : c});
		
		this.forceUpdate();
		}

		handleChange(event) {
			this.setState({value : event.target.value});
		}


		del(e){
			console.log(e.target.id);
			let a1 = e.target.id;
			delete this.props.list[a1];
			this.forceUpdate();
		}

		changeClass(e){
			//let p = (this.state.knopka === "Отжата")?"Нажата":"Отжата";
		//this.setState({knopka : p});
		}
		

	render() {
		//console.log(this.props.list);

		const spisok = this.props.list.map((list1, index) =>
			<div>
			<li className="list-group-item list-group-item-action" onClick={this.changeClass}>
			{list1.delat} <button className="close" id={index} onClick={this.del}>x</button>
			</li>

			</div>
			);
		return (
		<div className="container">
		<nav class="navbar navbar-dark bg-primary">
 			 <a class="navbar-brand" href="#">ToDo List</a>
		</nav>
		<div >


		<ul class="list-group"> {spisok} </ul>
		<br/>
		<form>
		<div class="input-group mb-3">
  			<div class="input-group-prepend">
   			 <button class="btn btn-primary" onClick={this.press} type="submit" >Добавить</button>
  			</div>
 		 <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Напишите заметку"   name="go" aria-label="Example text with button addon" aria-describedby="button-addon1" />
		</div>
		</form>
		</div>
		</div>
		);
	}
}



class Click extends React.Component {
	constructor(props) {
		super(props);
		this.press=this.press.bind(this);
		this.state = {knopka : "Отжата"};
		//this.props = this.props.bind(this);

	}
	//this.press ="кнопка";
	press(e) {
		//console.log(e);
		let p = (this.state.knopka === "Отжата")?"Нажата":"Отжата";
		this.setState({knopka : p});
		//document.getElementById('todo').innerHTML = massiv.do;


	}
	render() {

		return (
			
			<button class="btn btn-primary" onClick={this.press}>{this.state.knopka} </button>
			
			)
			
	}		


}

function Text1(props) {
	return <div>
	{props.text}

	</div>
}







ReactDOM.render(
<React.StrictMode>
<ToDo list = {massiv1}/>



</React.StrictMode>,
document.getElementById('xxx')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
