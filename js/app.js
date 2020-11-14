	let input = document.querySelector('.add-input1');
	let addNewTaskButton = document.querySelector('.add-button1');
	let addNewTaskButtonMobile = document.querySelector('.add-button1-mobile');
	let ul = document.querySelector('.work-task--list__wrapper');
	let createProjectButton = document.querySelector('#main-button');
	let deleteTopPanelButton = document.querySelector('.delete_top-panel');
	let editTopPanelButton = document.querySelector('.edit_top-panel');
	let topButtons = document.querySelector('.top-buttons');
	let rightGroupButtons = document.querySelector('.right-group-buttons');
	let taskTopPanel = document.querySelector('.work-task--top-panel');
	
	
	function createTodo(){
		let li = document.createElement('li');
		li.classList.add('work-task--list_elements');
		let checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		let textSpan = document.createElement('span');
		textSpan.classList.add('text');
		let newTodoTask = input.value;
		textSpan.append(newTodoTask);
		
		let buttonsBlock = document.createElement('p');
		buttonsBlock.classList.add('right-group-buttons');
		let moveButton = document.createElement('button');
		moveButton.classList.add('move');
		let editButton = document.createElement('button');
		editButton.classList.add('edit');
		let deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		
		ul.appendChild(li).append(checkbox, textSpan, buttonsBlock);
		buttonsBlock.append(moveButton, editButton, deleteButton);
		input.value = "";
		
		deleteListFunction(deleteButton); 
		editListFunction(editButton);
	}
	
	function deleteListFunction(element){
		element.addEventListener("click", function(){
			element.closest('li').remove();
		});
	}
	
	function editListFunction (element){
		element.addEventListener("click", function(){
			element.closest('span').contentEditable = true;
		});
	}
	
	addNewTaskButton.addEventListener("click", function(event){
		event.preventDefault();
		
		if(!input.value){
			alert('Please, enter your task');
		} else{
			createTodo();
		}
	});
	
	addNewTaskButtonMobile.addEventListener("click", function(event){
		event.preventDefault();
		
		if(!input.value){
			alert('Please, enter your task');
		} else{
			createTodo();
		}
	});
	
	editTopPanelButton.addEventListener("click", function(){
		let projectName = document.querySelector('.work-task--top-panel_title');		
		projectName.contentEditable = true;
    
	});
	
	editTopPanelButton.addEventListener("click", function(event){
		let projectName = document.querySelector('.work-task--top-panel_title');
		projectName.contentEditable = true;
	});
	
	taskTopPanel.onmouseenter = function(){
		topButtons.classList.add('show-buttons');
	}
	
	taskTopPanel.onmouseleave = function(){
		topButtons.classList.remove('show-buttons');
	}	
	
	deleteTopPanelButton.addEventListener("click", function(){
		deleteTopPanelButton.closest('.work-task_main').remove();
	});

/*	

// Неудачная попытка создания функции добавления нового проекта по главной кнопке

	createProjectButton.addEventListener("click", function(content){
				
		let projectBlock = document.querySelector('.work-task_main');
		let cloneProject = projectBlock.cloneNode(true);
            
		document.querySelector('.new-project').prepend(cloneProject);
		document.querySelector('.work-task--top-panel_title').innerHTML = 'Edit name of your project';
		document.querySelector('.work-task--list__wrapper').innerHTML = '';
		
	});	
*/



		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
