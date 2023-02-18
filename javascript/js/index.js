name = prompt("Enter your name.");
document.getElementById("myName").textContent = name;



function showTime() {
  let date = new Date();

  year = date.getFullYear();
  mount = date.getMonth();
  day = date.getDate();

  second = date.getSeconds();
  minute = date.getMinutes();
  hours = date.getHours();




  let tarih = day + "." + mount + "." + year;
  let saat = ("0" + hours).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);




  document.getElementById("myClock").textContent = tarih;
  document.getElementById("myhours").textContent = saat;
}

setInterval(showTime, 1000);