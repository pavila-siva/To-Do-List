const todoList = [
  ];
render()


function render(){

let todoListHTML = '';

todoList.forEach((todoObj,index) => { 
   //const name = todoObj.name;
   //const {name} = todoObj;
   const {name ,dueDate} = todoObj
   const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button class="delete js-delete">delete</button>`
   todoListHTML += html;
})


document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;

   document.querySelectorAll('.js-delete').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() =>{
         todoList.splice(index, 1);
   render();
      })

   })
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
   addTodo();
})

function addTodo(){
   const inputEle = document.querySelector('.js-name-input');
   const name = inputEle.value;
   const dateInputEle = document.querySelector('.js-due-dueDate')
   const dueDate = dateInputEle.value;
   todoList.push({
     // name: name,dueDate: dueDate}//SHORTHAND PROPERTY
   name, dueDate});

   inputEle.value = ' ';
   dateInputEle.value =' '
   render()
}

document.body.addEventListener('keydown', (event) => {
   if(event.key === 'Enter'){
      addTodo();
   }
 })
