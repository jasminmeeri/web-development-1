// Select → Listen → Change the DOM

const changeHeadingButton =
    document.querySelector("#changeHeadingButton");

const taskOneHeading =
    document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
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

    //function to update the dom based on the selected animal

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
    animalName.textContent = "Tiger";
    animalImage.src = "images/tiger.png";
    animalImage.alt = "Tiger";
    animalDescription.textContent =
        "Tigers are the largest cat species in the world!";

    }

});