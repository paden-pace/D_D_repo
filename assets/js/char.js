console.log("char.js has been opened.");




$( document ).ready(function() {

	var config = {
		apiKey: "AIzaSyB6VDtff7XjXPuAlYuMZwOKNFGEzsc5DgQ",
		authDomain: "ddproj-78722.firebaseapp.com",
		databaseURL: "https://ddproj-78722.firebaseio.com",
		projectId: "ddproj-78722",
		storageBucket: "ddproj-78722.appspot.com",
		messagingSenderId: "944554149074"
		};
	firebase.initializeApp(config);

	var database = firebase.database();
	var ref = database.ref();

	function newClick () {
		$("#option-new").addClass("active in");
		$("#option-lib").removeClass("active in");
		$("#option-import").removeClass("active in");
		$("#list-new").addClass("active");
		$("#list-lib").removeClass("active");
		$("#list-import").removeClass("active");
	};
	function libClick () {
		$("#option-new").removeClass("active in");
		$("#option-lib").addClass("active in");
		$("#option-import").removeClass("active in");
		$("#list-new").removeClass("active");
		$("#list-lib").addClass("active");
		$("#list-import").removeClass("active");
	};
	function importClick () {
		$("#option-new").removeClass("active in");
		$("#option-lib").removeClass("active in");
		$("#option-import").addClass("active in");
		$("#list-new").removeClass("active");
		$("#list-lib").removeClass("active");
		$("#list-import").addClass("active");
	};
	$("#tab-new").on('click', function(){
		newClick ();
	});
	$("#tab-lib").on('click', function(){
		libClick ();
	});
	$("#tab-import").on('click', function(){
		importClick ();
	});

	// liveHpBaseStr = $("#char-hp-base-input").val().trim();
	// liveHpConStr = $("#char-hp-con-input").val().trim();
	// liveHpRaceStr = $("#char-hp-race-input").val().trim();
	// liveHpMax = (parsInt(liveHpBaseStr) + parsInt(liveHpConStr) + parsInt(liveHpRaceStr));
	// $("#char-hp-max-input").html(liveHpMax);

	$("#new-char-button").on('click', function(){
		newChar();
	});

	function newChar() {
		// Grab values from text boxes
		newCharName = $("#char-name-input").val().trim();
		newCharName = $("#player-name-input").val().trim();
		newGender = $("#char-gender-input").val().trim();
		newAge = $("#char-age-input").val().trim();
			newHeightFt = $("#char-ht-ft-input").val().trim();
			newHeightIn = $("#char-ht-in-input").val().trim();
		newHeight = ((parseInt(newHeightFt)*12) + parseInt(newHeightIn));
			newWeightStr = $("#char-wt-input").val().trim();
		newWeight = (parseInt(newWeightStr));
		newRace = $("#char-race-input").val().trim();
			newExpStr = $("#char-exp-input").val().trim();
		newExp = (parseInt(newExpStr));
		newBack = $("#char-back-input").val().trim();
		newClass = $("#char-class-input").val().trim();
			newLevelStr = $("#char-level-input").val().trim();
		newLevel = (parseInt(newLevelStr));
			newHpBaseStr = $("#char-hp-base-input").val().trim();
			newHpConStr = $("#char-hp-con-input").val().trim();
			newHpRaceStr = $("#char-hp-race-input").val().trim();
		newHpMax = (parseInt(newHpBaseStr) + parseInt(newHpConStr) + parseInt(newHpRaceStr));


		console.log(newCharName);
		console.log(newCharName);
		console.log(newGender);
		console.log(newAge);
		console.log(newHeightFt);
		console.log(newHeightIn);
		console.log(newHeight);
		console.log(newWeightStr);
		console.log(newWeight);
		console.log(newRace);
		console.log(newExpStr);
		console.log(newExp);
		console.log(newBack);
		console.log(newClass);
		console.log(newLevelStr);
		console.log(newLevel);
		console.log(newHpBaseStr);
		console.log(newHpConStr);
		console.log(newHpRaceStr);
		console.log(newHpMax);

		// database.ref('users/'+uid+'/events').push({
		// 		title: newName,
		// 		location: newLocation,
		// 		start: newStartDate,
		// 		startTime: newStartTime,
		// 		dateAdded: firebase.database.ServerValue.TIMESTAMP
		// });

	};

	// Firebase watcher + initial loader HINT: .on("value")
		// database.ref('users/'+uid+'/events').on("child_added", function(snapshot) {

		// 	// storing the snapshot.val() in a variable for convenience
		// 	var snapValue = snapshot.val();
			
		// 	// Getting an array of each key In the snapshot object
		// 	var snapValueArr = Object.keys(snapValue);

		// 	// Finding the last user's key
		// 	var lastIndex = snapValueArr.length - 1;

		// 	var lastKey = snapValueArr[lastIndex];

		// 	// Using the last user's key to access the last added user object
		// 	var lastObj = snapValue[lastKey]

		// 			// Handle the errors
		// }, function(errorObject) {
		// 		console.log("Errors handled: " + errorObject.code);
		// });



		// database.ref('users/'+uid+'/events').orderByChild("start").on("child_added", function(snapshot) {

		// 		var removeRef = database.ref('users/'+uid+'/events');

		// 		var calMarkUp = {
		// 			title: snapshot.val().title,
		// 			startDate: snapshot.val().start
		// 		};

		// 		var newKey = snapshot.key;
				
		// 		eventsArray.push(calMarkUp);
		// 		refreshCal();
		// 		$('.cal1').clndr().setEvents(eventsArray);
				
		// 		var adjustedStart = moment(snapshot.val().start).format('LL');
		// 		var adjustedStartTime = moment(snapshot.val().startTime).format('h:mm:ss a');


		// 		// adding new event to the page
		// 		var newUpcoming = "<tr><td>" + snapshot.val().title 
		// 		+ "</td><td>" + snapshot.val().location 
		// 		+ "</td><td>" + adjustedStart 
		// 		+ "</td><td>" + snapshot.val().startTime
		// 		// + "</td><td>" + newEventButton
		// 		+ "</td></tr>";
		// 		$("#upcoming-Tbody").append(newUpcoming);

		// 		// creating the delete button for an event
		// 		var newEventButton = $('<button/>',{
		// 			class: 'delete-button',
		// 			text: 'Remove: '+snapshot.val().title,
		// 			value: 'remove',
		// 			click: function removal(){
		// 				console.log("remove clicked")
		// 				removeRef.child(newKey).remove().key;
		// 				location.reload(true);
		// 			}
		// 		});
		// 		// adding new button to the page
		// 		$("#newButtonGoHere").append(newEventButton);

		// 		numberOfEvents++;

		// });

});























