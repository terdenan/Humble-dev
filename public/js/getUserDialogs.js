$(document).ready(function(){
	$.ajax({
		type: 'get',
		url: 'api/getUserDialogs',
		success: function (response)
		{
			var dialogList = "";
			response.forEach(function(curDialog, response){
				dialogList +=   "<div class='single-dialog' id='" + curDialog.id + "'>" + 
			                        "<div class='single-dialog-photo'>" + 
			                            "<div class='single-dialog-photo-border'>" + 
			                                "<img src='images/1.jpeg'>" + 
			                            "</div>" + 
			                            "<div class='online-status-dialogs active-status'></div>" + 
			                        "</div>" + 
			                        "<div class='single-dialog-body'>" + 
			                            "<div class='single-dialog-title'>" + 
			                                "<span class='dialog-title'>" + curDialog.name + "</span>" +
			                            "</div>" + 
			                            "<div class='single-dialog-last-message'>" + 
			                                "<span class='last-message'>" + curDialog.lastMessage + "</span>" + 
			                            "</div>" + 
			                            "<div class='single-dialog-time'>" + 
			                                "<span class='last-message-time'>12.47</span>" + 
			                            "</div>" + 
			                        "</div>" + 
			                    "</div>";
			});		
			$('.dialogs-list').prepend(dialogList);
		}
	});
});