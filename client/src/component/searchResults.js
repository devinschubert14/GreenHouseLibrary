//searchResults.js
import React, { Component } from "react";
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Book = function(arg_title, arg_isbn, arg_dra, arg_fp){
	const title = arg_title;
	const isbn = arg_isbn;
	const dra = arg_dra;
	const fp = arg_fp;
};

/*
export default function searchResults (props){
	return(
		<div>
		<p> Title: {props.title}</p>
		<p> ISBN: {props.isbn}</p>
		<p> DRA: {props.dra}</p>
		<p> Fountas and Pinnell: {props.fp}</p>
		</div>
	)


}
*/
const harry = Book('Harry Potter', '059035342X', '40', 'M');


/*
const searchResults = function(props){
	render(){
		return(
			<div>
			<p> Title: {this.props.title}</p>
			<p> ISBN: {this.props.isbn}</p>
			<p> DRA: {this.props.dra}</p>
			<p> Fountas and Pinnell: {this.props.fp}</p>
			</div>
		);
	}
}
*/
//searchResults(harry);
//console.log(harry);
export const DisplayResults = function(props) {
	root.render(
		<p> Title: {this.props.title}</p>,
		<p> ISBN: {this.props.isbn}</p>,
		<p> DRA: {this.props.dra}</p>,
		<p> Fountas and Pinnell: {this.props.fp}</p>
	);
}
export default DisplayResults;
