import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let conteo = 0;

function updateCounter() {
	conteo += 1;
	return conteo;
}

$(function() {
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button><span>Click here to get started<span></button>');
	$('body').append("<p id='count'></p>");

	let debounFunc = _.debounce(() => {
		let conteo = updateCounter();
		$('#count').text(`${conteo} clicks on the button`);
	});
	$('button').on('click', debounFunc);
});
