  let today = new Date();
  let currentMonth =today.getMonth();
  let currentYear=today.getFullYear();

  let months=[
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jui",
    "Juil",
    "Aou",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  let monthAndYear=document.getElementById('monthAndYear')

  function showCalendar(month, year){
    let firstDay = new Date(year, month).getDay()
    let dayInMonth = 32 - new Date (year, month, 32).getDate()

    let tbl= document.getElementById("calendar-body");

    tbl.innerHTML = ""

    monthAndYear.innerHTML = months[month] + " " + year

    let date=1;

    for(let i = 0; i < 6; i++){
      let row = document.createElement('tr')

      for(let j=0; j<7; j++){
        if (i===0 && j <firstDay)
      }
    }
  }
