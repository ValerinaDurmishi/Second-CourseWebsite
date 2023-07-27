//-----------------------------
//----teksti i shtuar me queryselector
//---------------------------------
let redContent = document.querySelector("#addcolor");

redContent.innerHTML =
  "*The application process is open until August 15th for the fastest 10 students!";

let blueContent = document.querySelector("#blueetext");

blueContent.innerHTML = "early bird price!";

let newContent = [{ content: "Real Project" }];

//////////////////////////////////////////

//-----------------------------
//---------Modulet
//----------------------------

let listsJS = [
  {
    title: "Week 1",
    description: " Introduction to Software Testing and Selection",
  },
  { title: "Week 2", description: "  Manual Testing Fundamentals" },
  { title: "Week 3-6", description: " Introduction to OPO (Java)" },
  {
    title: "Week 7",
    description: " Introduction to Automation Testing",
  },
  {
    title: "Week 8-10",
    description: " Back-end Test Automation using rest vassured (Java)",
  },
  {
    title: "Week 11-13",
    description: "Front-end Test Automation using Selenium (Java) - GUI",
  },
  { title: "Week 14", description: " Database connection -Postgre" },
  { title: "Week 15", description: "End 2 End Testing" },
  { title: "Week 16", description: "Testing Best Practices" },
  { title: "Week 17", description: "Prepare for Job Interview " },
];

console.log(listsJS);

document.getElementById("fromMap").innerHTML += listsJS
  .map(
    (item) =>
      "<li class='anotherli'>" +
      "<strong>" +
      item.title +
      "</strong>" +
      ":" +
      "<span>" +
      item.description +
      "</span>" +
      "</li>"
  )
  .join("");

///////////////////////////

//-----------------------------
//---------3 real projects
//----------------------

console.log(newContent);

document.getElementById("blue_border").innerHTML += newContent
  .map(
    (item) =>
      "<h5 class='firsth5'>" + item.content + "<p class='prova'>1</p>" + "</h5>"
  )
  .join("");
document.getElementById("blue_border1").innerHTML += newContent
  .map(
    (item) =>
      "<h5 class='firsth5'>" + item.content + "<p class='prova'>2</p>" + "</h5>"
  )
  .join("");
document.getElementById("blue_border2").innerHTML += newContent
  .map(
    (item) =>
      "<h5 class='firsth5'>" + item.content + "<p class='prova'>3</p>" + "</h5>"
  )
  .join("");

//////////////////////////////

//---------------------------
//-----3 boxes
//--------------------

let listsTwo = [
  { description: "Individual work" },
  { description: "Feedback and support from the mentors" },
  { description: "Assignments to validate your skills" },
  { description: "Projects for Git " },
  { description: "LinkedIn recommendation for the best students " },
];

document.getElementById("lists4").innerHTML += listsTwo
  .map((item) => "<li class='another2li'>" + item.description + "</li>")
  .join("");

let listsThree = [
  {
    description:
      "Every student will work in a team with students from front-end and back-end Academies",
  },
  { description: "Feedback from your mentor and analysis " },
  { description: "Real experience" },
  { description: "Certificate for participation in Hackaton week" },
];

document.getElementById("lists3").innerHTML += listsThree
  .map((item) => "<li class='another2li'>" + item.description + "</li>")
  .join("");

let listsFour = [
  {
    description: "Real-world scenario and work in a team",
  },
  { description: "Project manager from an  IT company  " },
  { description: "Networking and building contacts with the IT industry" },
  { description: "Mentorship feedback and project analysis" },
  { description: "Projects for your portfolio" },
  { description: "Certificate for participation" },
];

document.getElementById("lists5").innerHTML += listsFour
  .map((item) => "<li class='another2li'>" + item.description + "</li>")
  .join("");

let listsLast = [
  { description: "Academies" },
  { description: "Lorem ipsum  " },
  { description: "Lorem ipsum" },
  { description: "Lorem ipsum" },
  { description: "Lorem ipsum" },
  { description: "Lorem ipsum" },
  { description: "Lorem ipsum" },
  { description: "Lorem ipsum" },
];

document.getElementById("lastlists").innerHTML += listsLast
  .map((item) => "<li class='anotherlastsli'>" + item.description + "</li>")
  .join("");

/////////////////////////

//-------------------------
//----Hamburger menu
//-------------------------
function navToggle() {
  const myNav = document.getElementById("menu");
  myNav.classList.toggle("opened");
}

////////////////////////////////////////

//--------------------------
//--Validimi i formes
//-------------------------
const form = document.getElementById("application-form");
const errormessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emri = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phonenumber = document.getElementById("phonenumber").value;
  const select = document.getElementById("choose_program").value;
  const agree = document.getElementById("agree").checked;

  const namePattern = /^[a-zA-Z\s]+$/;
  if (!namePattern.test(emri)) {
    errormessage.textContent =
      "Emri dhe mbiemri duhet të përmbajnë vetëm shkronja dhe hapsira!!!";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errormessage.textContent = "Ju lutemi, jepni një adresë email valide!!!";
    return;
  }

  if (!agree) {
    errormessage.textContent = "Ju duhet të pranoni kushtet e aplikimit!!!";
    return;
  }

  errormessage.textContent = "";
  alert("Forma është e vlefshme dhe është gati për dërgim!");

  console.log("Emri: " + emri);
  console.log("Email: " + email);
  console.log("Select: " + select);
  console.log("Numri i telefonit: " + phonenumber);
});

//////////////////////////////////

//----------------------
//-----Buttonat me dergu te forma
//---------------------------
function scrolltoForm() {
  const element = document.getElementById("theapplicationform");
  element.scrollIntoView();
}

/////////////////////////////

//----------------------
//--Kalkulatori
//---------------------

function clickButton() {
  const jacademy = document.getElementById("justacademy");
  const euacademy = document.getElementById("euacademy");
  const buttonOne = document.getElementById("butoni1");
  const buttonTwo = document.getElementById("butoni2");
  const buttonThree = document.getElementById("butoni3");
  const months = document.getElementById("months");

  jacademy.style.backgroundColor = "white";
  jacademy.style.color = "black";
  euacademy.style.backgroundColor = "black";
  euacademy.style.color = "white";
  euacademy.style.border = "none";
  buttonOne.style.backgroundColor = "white";
  buttonOne.style.color = "black";
  buttonTwo.style.backgroundColor = "black";
  buttonTwo.style.border = "none";
  buttonTwo.style.color = "white";
  buttonThree.style.backgroundColor = "black";
  buttonThree.style.border = "none";
  buttonThree.style.color = "white";

  months.value = "12";
}

function clickButton2() {
  const jacademy = document.getElementById("justacademy");
  const euacademy = document.getElementById("euacademy");
  const buttonOne = document.getElementById("butoni1");
  const buttonTwo = document.getElementById("butoni2");
  const buttonThree = document.getElementById("butoni3");
  const months = document.getElementById("months");

  jacademy.style.backgroundColor = "white";
  jacademy.style.color = "black";
  euacademy.style.backgroundColor = "black";
  euacademy.style.color = "white";
  euacademy.style.border = "none";
  buttonTwo.style.backgroundColor = "white";
  buttonTwo.style.color = "black";
  buttonOne.style.backgroundColor = "black";
  buttonOne.style.border = "none";
  buttonOne.style.color = "white";
  buttonThree.style.backgroundColor = "black";
  buttonThree.style.border = "none";
  buttonThree.style.color = "white";

  months.value = "6";
}

function clickButton3() {
  const jacademy = document.getElementById("justacademy");
  const euacademy = document.getElementById("euacademy");
  const buttonOne = document.getElementById("butoni1");
  const buttonTwo = document.getElementById("butoni2");
  const buttonThree = document.getElementById("butoni3");
  const months = document.getElementById("months");

  euacademy.style.backgroundColor = "white";
  euacademy.style.color = "black";
  jacademy.style.backgroundColor = "black";
  jacademy.style.color = "white";
  jacademy.style.border = "none";
  buttonThree.style.backgroundColor = "white";
  buttonThree.style.color = "black";
  buttonOne.style.backgroundColor = "black";
  buttonOne.style.border = "none";
  buttonOne.style.color = "white";
  buttonTwo.style.backgroundColor = "black";
  buttonTwo.style.border = "none";
  buttonTwo.style.color = "white";

  months.value = "3";
}
