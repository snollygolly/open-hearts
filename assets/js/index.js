$( document ).ready(function() {
	document.body.style.backgroundColor = 'darkgreen';

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
		 		alert(result.message);
			 	return console.error(result.message);
		 	}
			// do something with the success, like show a link
			document.getElementById("confirmationMessage").style.visibility = "visible";
			$("#confirmationMessage").html("<a href='/game/" + result.id + "'>Join the Game!</a>");
	 	}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
	 });
	});
});
