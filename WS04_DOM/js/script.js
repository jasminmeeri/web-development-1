// Task 1

const changeHeadingButton =
    document.querySelector("#changeHeadingButton");

const changeStyleButton =
    document.querySelector("#changeStyleButton");
const changeTextButton =
    document.querySelector("#changeTextButton");

const taskOneHeading =
    document.querySelector("#taskOneHeading");

const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "This is the new heading I made!";
});

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tigers come in different color variations!";
});

// Animal table script

const animalbutton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalbutton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Animal Table button was clicked");
});

// Listen dropdown select

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for select dropdown
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
    animalName.textContent = "Tiger";
    animalImage.src = "images/tiger.png";
    animalImage.alt = "Tiger";
    animalDescription.textContent =
        "Tigers are the largest cat species in the world!";

    }

    else if (selectedAnimal === "elephant") {
    animalName.textContent = "Elephant";
    animalImage.src = "images/elephant.png";
    animalImage.alt = "Elephant";
    animalDescription.textContent =
        "Elephants are the largest land animals on Earth!";

    }

    else if (selectedAnimal === "penguin") {
    animalName.textContent = "Penguin";
    animalImage.src = "images/penguin.png";
    animalImage.alt = "Penguin";
    animalDescription.textContent =
        "Penguins are flightless birds that live in the Southern Hemisphere!";

    }

    else if (selectedAnimal === "panda") {
    animalName.textContent = "Panda";
    animalImage.src = "images/panda.png";
    animalImage.alt = "Panda";
    animalDescription.textContent =
        "Pandas are black and white bears that are native to China!";

    }
});

// image hover

animalImage.addEventListener("mouseenter", function ()
{ animalImage.classList.add("image-highlight"); });

animalImage.addEventListener("mouseleave", function ()
{ animalImage.classList.remove("image-highlight"); });

// task 4

const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");

const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");

    // adding the listener for submit event
animalForm.addEventListener("submit", function (event) {
    //  Prevent the form's default reload action
    event.preventDefault();

    //  Read the values from the input fields
    const animalValue = observationAnimal.value.trim();
    const locationValue = observationLocation.value.trim();
    const dateValue = observationDate.value.trim();

    // Checks that none of the fields are empty
    if (animalValue === "" || locationValue === "" || dateValue === "") {
        alert("Please fill in all fields before adding an observation!");
        return; 
    }

    // Create a new table row and cells for the observation
    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animalValue;

    const locationCell = document.createElement("td");
    locationCell.textContent = locationValue;

    const dateCell = document.createElement("td");
    dateCell.textContent = dateValue;

    newRow.append(animalCell, locationCell, dateCell);

    observationTableBody.append(newRow);

    // Clear the form inputs
    animalForm.reset();
});