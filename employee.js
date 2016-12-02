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

$("#submit").on("click", function(){

	var employeeName = $("#employee-name").val().trim();
	var employeeRole = $("#role").val().trim();
	var startDate = $("#start-date").val().trim();
	var monthsWorked = $("#months-worked").val().trim();
	var monthlyRate = $("#rate").val().trim();
	var totalBill = $("#total-bill").val().trim();

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
		months: monthsWorked,
		rate: monthlyRate,
		bill: totalBill

	})


});
