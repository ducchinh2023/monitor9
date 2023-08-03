
window.addEventListener("DOMContentLoaded",	() => {
    
	//Set speech recognition
	
		  padlock = document.querySelector('.padlock'),
		 
		  openPadlock = () => {
			  padlock.classList.add('unlock');
		  },
		  closePadlock = () => {
			  padlock.classList.remove('unlock');
		  };
  
	//Start speech recognition
	//Restart speech recognition after user has finished talking

  
	//Click padlock to open/close
	
	
	
  });
  
var firebaseConfig = {
	apiKey: "AIzaSyC8ByBE8fYEZRDdUe4zEj7CdLHq16bqZJk",
authDomain: "fir-mq3.firebaseapp.com",
databaseURL: "https://fir-mq3-default-rtdb.firebaseio.com",
projectId: "fir-mq3",
storageBucket: "fir-mq3.appspot.com",
messagingSenderId: "564081712506",
appId: "1:564081712506:web:221658b674e4d06d7e4ac3",
measurementId: "G-QBCS461Z14"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var tempRef = database.ref("/Nhietdo");
  var humidRef = database.ref("/Doam");
  var lightRef = database.ref("/CuongdoUV");
  var soilRef = database.ref("/Matdobui");
  
  var tempRef2 = database.ref("/DuLieuBoard/temperature2");
  var humidRef2 = database.ref("/DuLieuBoard/humidity2");
  var lightRef2 = database.ref("/DuLieuBoard/light2");
  var soilRef2 = database.ref("/DuLieuBoard/gas2");


  tempRef.on("value", function(snapshot) {
	document.getElementById("temperature").innerHTML = snapshot.val();
	
  });
  humidRef.on("value", function(snapshot) {
	document.getElementById("humidity").innerHTML = snapshot.val();
  });
  lightRef.on("value", function(snapshot) {
	document.getElementById("light").innerHTML = snapshot.val();
  });
  soilRef.on("value", function(snapshot) {
	document.getElementById("soil").innerHTML = snapshot.val();
  });
  tempRef2.on("value", function(snapshot) {
	document.getElementById("temperature2").innerHTML = snapshot.val();
	
  });
  humidRef2.on("value", function(snapshot) {
	document.getElementById("humidity2").innerHTML = snapshot.val();
  });
  lightRef2.on("value", function(snapshot) {
	document.getElementById("light2").innerHTML = snapshot.val();
  });
  soilRef2.on("value", function(snapshot) {
	document.getElementById("soil2").innerHTML = snapshot.val();
  });
$(document).ready(function(){
	var database = firebase.database();
	let Led1Status;
	let Led2Status;
	let Led3Status;
	let Led4Status;
	let Led5Status;
	let Led6Status;
	database.ref().on("value", function(snap){
	 	Led1Status = snap.val().DuLieuGuiXuongBoard.Quat1;
		Led2Status = snap.val().DuLieuGuiXuongBoard.Den1;
		Led3Status = snap.val().DuLieuGuiXuongBoard.Quat2;
		Led4Status = snap.val().DuLieuGuiXuongBoard.Den2;
		Led5Status = snap.val().DuLieuBoard.Mode;
		Led6Status = snap.val().DuLieuGuiXuongBoard.Modetam;
		if(Led5Status == "1"){
			padlock.classList.add('unlock');
			var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Modetam");
			firebaseRef.set(parseInt("1"));
		} else {
			padlock.classList.remove('unlock');
			var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Modetam");
			firebaseRef.set(parseInt("0"));
		
		}
		setTimeout(function() {
			if(Led6Status == "1"){	
				var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Mode");
				firebaseRef.set(parseInt("1"));
			} else {
				var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Mode");
				firebaseRef.set(parseInt("0"));
			
			}
		  }, 10000);
		
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
	});
	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Quat1");
		if(Led1Status == "1"){
			firebaseRef.set(parseInt("0"));
			Led1Status = "0";
			lightbulbImg.src = "fan.png";
			let msg = new SpeechSynthesisUtterance("The fan has been turned off.");
            window.speechSynthesis.speak(msg);

		} else {
			firebaseRef.set(parseInt("1"));
			Led1Status = "1";
			lightbulbImg.src = "fan.gif";
			let msg = new SpeechSynthesisUtterance("The fan has been turned on.");
            window.speechSynthesis.speak(msg);

			
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Den1");
		if(Led2Status == "1"){
			firebaseRef.set(parseInt("0"));
			Led2Status = "0";
			lightbulbImg2.src = "sun.png";
			let msg = new SpeechSynthesisUtterance("The light has been turned off.");
            window.speechSynthesis.speak(msg);
			
		} else {
			firebaseRef.set(parseInt("1"));
			Led2Status = "1";
			lightbulbImg2.src = "sun.gif";
			let msg = new SpeechSynthesisUtterance("The light has been turned on.");
            window.speechSynthesis.speak(msg);
			
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Quat2");
		if(Led3Status == "1"){
			firebaseRef.set(parseInt("0"));
			Led3Status = "0";
			lightbulbImg3.src = "fan.png";
			let msg = new SpeechSynthesisUtterance("Quạt đã tắt");
            window.speechSynthesis.speak(msg);
		} else {
			firebaseRef.set(parseInt("1"));
			Led3Status = "1";
			lightbulbImg3.src = "fan.gif";
			let msg = new SpeechSynthesisUtterance("Quạt đã bật");
            window.speechSynthesis.speak(msg);
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Den2");
		if(Led4Status == "1"){
			firebaseRef.set(parseInt("0"));
			Led4Status = "0";
			let msg = new SpeechSynthesisUtterance("Đèn đã tắt");
            window.speechSynthesis.speak(msg);
		} else {
			firebaseRef.set(parseInt("1"));
			Led4Status = "1";
			let msg = new SpeechSynthesisUtterance("Đèn đã bật");
            window.speechSynthesis.speak(msg);
		}
	})
	var modee = 0; // Khởi tạo giá trị ban đầu của "Mode"
$(".padlock").click(function(){

	var firebaseRef = firebase.database().ref().child("/DuLieuGuiXuongBoard/Mode");
	
	// Thay đổi giá trị của "Mode"
	modee = 1 - modee; // Nếu mode = 0 thì mode = 1, ngược lại nếu mode = 1 thì mode = 0
	
	// Ghi giá trị mới của "Mode" lên Firebase Realtime Database
	firebaseRef.set(modee);
});
	
	
	

});
let isLightOn = false;
let isLightOn1 = false;
let isLightOn2 = false;
let isLightOn3 = false;
$(document).ready(function() {
	setInterval(myfunc, 1000);
	$('.second').addClass('rotate');
	$('.minute').addClass('rotate-reverse');
	$('.hour').addClass('rotate');
  
	function myfunc() {
	  var dt = new Date();
	  var hour = dt.getHours();
	  var minute = dt.getMinutes();
	  var second = dt.getSeconds();
	  $('p').html(hour + ":" + minute + ":" + second);
	  for (var i = 0; i < second; i++) {
		if (i < 30) {
		  if (i == 0) {
			$('.second div').removeClass('light-before').removeClass('light-after');
			for (var j = 0; j < minute; j++) {
			  if (j < 30) {
				if (j == 0) {
				  $('.minute div').removeClass('light-before').removeClass('light-after');
				  for (var k = 1; k <= hour; k++) {
					if (hour >= 13 || hour == 1) {
					  $('.hour div').removeClass('light-before').removeClass('light-after');
					}
					if (k >= 19) {
					  for (n = 0; n <= k - 13; n++) {
						$('.hour div').eq(n).addClass('light-before');
						if (n >= 6) {
						  $('.hour div').eq(n - 6).addClass('light-after');
						}
					  }
					} else if (k >= 13 && k <= 18) {
					  for (m = 0; m <= k - 13; m++) {
						$('.hour div').eq(m).addClass('light-before');
					  }
					} else if (k >= 7 && k <= 12) {
					  $('.hour div').eq(k - 7).addClass('light-after');
					} else if (k <= 6) {
					  $('.hour div').eq(k - 1).addClass('light-before');
					}
				  }
				}
				$('.minute div').eq(j).addClass('light-before');
			  } else if (j >= 30) {
				$('.minute div').eq(j - 30).addClass('light-before');
				$('.minute div').eq(j - 30).addClass('light-after');
			  }
			}
		  }
		  $('.second div').eq(i).addClass('light-before');
		} else if (i >= 30) {
		  $('.second div').eq(i - 30).addClass('light-before');
		  $('.second div').eq(i - 30).addClass('light-after');
		}
	  }
	}
  });
  