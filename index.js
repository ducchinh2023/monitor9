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
  var user = database.ref("/user/aaa/username");
  var pass = database.ref("/user/aaa/email");
  
  user.on("value", function(snapshot) {
	document.getElementById("user").innerHTML = snapshot.val();
  });
  pass.on("value", function(snapshot) {
	document.getElementById("pass").innerHTML = snapshot.val();
  });
 
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
// Lấy ra form đăng nhập
const loginForm = document.querySelector('.login-section form');

// Lắng nghe sự kiện "submit" của form đăng nhập

//DOM load event
window.addEventListener("DOMContentLoaded",	() => {
    
  //Set speech recognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition(),
        padlock = document.querySelector('.padlock'),
        heardOutput = document.querySelector('.heard-output'),
        openPadlock = () => {
            padlock.classList.add('unlock');
        },
        closePadlock = () => {
            padlock.classList.remove('unlock');
        };

  //Start speech recognition
  recognition.start();

  //Listen for when the user finishes talking
  recognition.addEventListener('result', e => {

      //Get transcript of user speech
      const transcript = e.results[0][0].transcript.toLowerCase().replace(/\s/g, '');

      //Output transcript
      heardOutput.textContent = transcript;

      //Check if transcript is valid
      if (transcript === 'unlock' && !padlock.classList.contains('unlock')) {
          openPadlock();
      } else {
          if (transcript === 'lock' && padlock.classList.contains('unlock')) {
              closePadlock();
          }
      }
  });

  //Restart speech recognition after user has finished talking
  recognition.addEventListener('end', recognition.start);

  //Click padlock to open/close
  
  padlock.addEventListener('click', () => padlock.classList.contains('unlock') ? closePadlock() : openPadlock());
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn chặn hành động mặc định của form khi submit

  // Lấy ra giá trị của hai trường "email" và "mật khẩu"
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // Kiểm tra xem cả hai trường "email" và "mật khẩu" có được điền đầy đủ hay không
  const passElement = document.getElementById("pass");
  const userElement = document.getElementById("user");
  const password1 = passElement.innerHTML;
  const user1 = userElement.innerHTML;
  if (email.trim() === "DATN@gmail.com" && password.trim() === "phudang2023") {
    setTimeout(() => {
      window.location.href = 'index.html';}, 2000); 
    
  } else {
    alert('THONG TIN DANG NHAP KHONG DUNG');
  }
  // Nếu thông tin hợp lệ, chuyển hướng đến trang abc.html
});
