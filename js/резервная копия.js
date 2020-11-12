$('#add-button1').on('click', function(event){
	event.preventDefault();
	
	var $labelMessage = $('#add-input1');
	
	if (!$labelMessage.val()){
		alert('Please, enter your task');
		return false;		
	}	
	
	var $newTask = $('<li class="work-task--list_elements">');
	var $taskButtons = $('<p class="right-group-buttons">');
	
	$('.work-task--list__wrapper').append($newTask);
	
		$newTask.append('<input type="checkbox">');	
		$newTask.append('<label class="title">').append($labelMessage.val());
		$newTask.append($taskButtons);
		$taskButtons.append('<button class="move">');
		$taskButtons.append('<button class="edit">');
		$taskButtons.append('<button class="delete">');
		
		$labelMessage.val('');
		
		$('button.delete').on('click', function (){
	    $(this).closest('li').remove();			
	});	
	
});


$('button.delete_top-panel').on('click', function (){
	     $(this).closest('div.work-task_main').remove();			
});	


$('#main-button').on('click', function(){
	
  $('<div class="new-task">').append('<div class="work-task_main">').append('<div class="work-task--top-panel">');
	
  var $topButtons = $('div.top-buttons').append('button.edit_top-panel', 'button.delete_top-panel');  
  var $topPanel = $('div.work-task--top-panel').append('$topButtons' + 'p.work-task--top-panel_title').text('Enter name of your project');
	
	
});

$('.work-task--list_elements').hover(function(){
		  
		$(this)('.right-group-buttons').show();
			   },
		function(){
		
		$(this)('.right-group-buttons').hide();	
	});