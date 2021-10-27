var input = document.querySelector("input[type = 'text']"); // enter deal
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");

function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //creating lists and span when enter is clicked
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");

    var newTodo = this.value;
    this.value = " " ;

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();
    
    }
    
});

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  window.location.reload();
});

clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

deleteTodo();

loadTodo();
