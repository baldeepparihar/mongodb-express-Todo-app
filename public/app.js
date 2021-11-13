$(document).ready(function() {

$.getJSON('/apis/todos')
.done(addTodos)
.fail(err => {
    console.error("Error: ", err)
})

$('#todoInput').keypress((e) => {
if(e.which == 13) {
    createTodo()
}
})


})

function addTodos(todos) {
    todos.forEach(todo => {
       addTodo(todo);
    })
}

function addTodo(todo) {
    $('.list').append( `<li class="task">${todo.name}</li>`)
    if(todo.completed === true) {
        $('.task').addClass('done');
    }
}

function createTodo() {
    let userInput = $('#todoInput').val()
    $.post('/apis/todos', {name: userInput})
    .done(newTodo => {
        addTodo(newTodo)
        $('#todoInput').val('');
    })
    .fail(err => {
        console.log(err)
    })
}