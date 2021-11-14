$(document).ready(function() {

$.getJSON('/apis/todos')
.done(addTodos)
.fail(err => {
    console.error("Error: ", err)
})

// add
$('#todoInput').keypress((e) => {
if(e.which == 13) {
    createTodo()
}
})

// edit
$('.list').on('click', 'li', function(e) {
    updateTodo($(this))
})

// delete
$('.list').on('click', 'span', function(e) {
    e.stopPropagation();
    removeTodo($(this).parent())
})

})

function addTodos(todos) {
    todos.forEach(todo => {
       addTodo(todo);
    })
}

function addTodo(todo) {
    let newTodo = $(`<li data-id=${todo._id} class="task">${todo.name}<span>x</span></li>`);
    newTodo.data('completed', todo.completed)
    if(todo.completed) {
        newTodo.addClass('done');
    }
    $('.list').append(newTodo)
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

function removeTodo(todo) {
    let todoId = todo[0].dataset.id;
    $.ajax({
        method: 'Delete',
        url: '/apis/todos/' + todoId
    })
    .done((data) => {
        todo.remove();
    })
    .catch((err) => {
        console.log(err);
    })
}

function updateTodo(todo) {
    let todoId = todo[0].dataset.id;
    let isDone = !todo.data('completed');
    let updateData = {completed: isDone}
    console.log(updateData)
    $.ajax({
        method: 'PUT',
        url: '/apis/todos/' + todoId,
        data: updateData
    })
    .done(updatedTodo => {
        todo.toggleClass('done');
        todo.data('completed', isDone)
    })
    .fail(err => {
        console.log(err);
    })
}
   
    