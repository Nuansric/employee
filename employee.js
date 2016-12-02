$(document).ready(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMuMIqmHqzY0ja7TjLiETncOC0KYbGALQ",
    authDomain: "employee-project-4b5ed.firebaseapp.com",
    databaseURL: "https://employee-project-4b5ed.firebaseio.com",
    storageBucket: "employee-project-4b5ed.appspot.com",
    messagingSenderId: "46566558066"
  };
  firebase.initializeApp(config);

	var database = firebase.database(); 

	var employeeName = "";
	var employeeRole = "";
	var startDate = "";
	var monthsWorked = 0;
	var monthlyRate = 0;
	var totalBill = 0;

$("#submit").on("click", function(){

	employeeName = $("#employee-name").val().trim();
	employeeRole = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	//monthsWorked = parseInt($("#months-worked").val().trim());
	monthlyRate = parseInt($("#rate").val().trim());
	//totalBill = monthsWorked * monthlyRate;

	console.log(employeeName);
	console.log(employeeRole);
	console.log(startDate);
	console.log(monthsWorked);
	console.log(monthlyRate);
	console.log(totalBill);

	//saving to database

	database.ref().push({
		name: employeeName,
		role: employeeRole,
		start: startDate,
		//months: monthsWorked,
		rate: monthlyRate,
		//bill: totalBill,
		dateAdded: firebase.database.ServerValue.TIMESTAMP

	})

	return false;


});

database.ref().on("child_added", function(snapshot){

	console.log(snapshot.val());
	console.log(snapshot.val().name);
	console.log(snapshot.val().role);
	console.log(snapshot.val().start);
	console.log(snapshot.val().worked);
	console.log(snapshot.val().rate);
	console.log(snapshot.val().bill);

	//calculated variable
	monthsWorked = (snapshot.val().dateAdded) - startDate;
	totalBill = monthsWorked * monthlyRate;


	//change HTML

	$("#display").append("<div class = 'employeeDisplay'>"+
		"<span id='displayName'>"+ snapshot.val().name + 
		"</span><span id='displayRole'>" + snapshot.val().role +
		"</span><span id='displayDate'>" + snapshot.val().start + 
		"</span><span id='displayMonths'>" + monthsWorked + 
		"</span><span id='displayRate'>" + snapshot.val().rate + 
		"</span><span id='displayBill'>" + totalBill + "</span></div>");

}, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    
   });

})
