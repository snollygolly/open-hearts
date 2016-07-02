$( document ).ready(function() {
	$("#startButton").on("click", function(e) {
		e.preventDefault();
		var players = $("#playerNumber").val();
		$.ajax({
		 type: 'POST',
		 dataType: 'json',
		 url: "/api/game", // A valid URL
		 data: {players: players}
	 }).done(function(result) {
		 if (result.error === true) {
			 return console.error(result);
		 }
		 // do something with the success, like show a link
		 console.log(result);
	 }).fail(function(result) {
		 // do something with the failure, like laugh at the user
		 console.error(result);
	 });
	});
});
