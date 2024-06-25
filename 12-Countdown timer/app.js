const months = [
  "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  
  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  
  /* ========== setting up current and future Dates ========== */
  
  let currDate = new Date();

  const futureDate = new Date(currDate);
  futureDate.setDate(currDate.getDate() + 10);
  futureDate.setHours(11, 30, 0, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();

  /* ============================================================ */

  // adjust date in hmtl
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;
  

  const futureTime = futureDate.getTime();
  
  function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    // values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculations
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values in array

    const values = [days, hours, minutes, seconds];
    function format(item){
      if (item < 10){
        return (item = `0${item}`)
      }
      return item;
    }

    items.forEach((item, index) => item.innerHTML = format(values[index]));

    if (t < 0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  };

  // countdown
  let countdown = setInterval(getRemainingTime, 1000);

  // set initial values
  getRemainingTime();



