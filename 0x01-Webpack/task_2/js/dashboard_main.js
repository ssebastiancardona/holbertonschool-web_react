import $ from 'jquery';
const _ = require('lodash');

$.when( $.ready ).then(function() {

let conteo = 0;
function updateCounter() {
    conteo++;
    $('#count').html(`${conteo} clicks on the button`);
};
$('body').append($('<div>').attr('id', 'logo'));
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append($('<p>').attr('id', 'count'));
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', _.debounce(updateCounter, 500));
});
