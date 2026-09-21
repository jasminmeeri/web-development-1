
// EXERCISE 1: Basic Click Events

function showTable() {
    // Variables for template string injection
    const animal1 = "Panda";
    const habitat1 = "Bamboo Forest";
    const diet1 = "Herbivore";

    const animal2 = "Wolf";
    const habitat2 = "Tundra";
    const diet2 = "Carnivore";

    const tableHTML = `
        <table border="1" style="border-collapse: collapse; margin-top: 10px; width: 100%;">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal1}</td>
                    <td>${habitat1}</td>
                    <td>${diet1}</td>
                </tr>
                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
            </tbody>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    if (container) {
        container.innerHTML = tableHTML;
    }
}


// EXERCISE 2: Event Listeners & DOM Manipulation

const headings = document.querySelectorAll("h2");
const ex1Heading = headings[0];
const ex2Heading = headings[1];

if (ex2Heading) {
    ex2Heading.addEventListener("mouseover", function () {
        console.log("Stepped over me with a mouse!");
    });
}
if (ex1Heading) {
    ex1Heading.addEventListener("click", function () {
        ex1Heading.textContent = "Bye bye mouse!";
        ex1Heading.style.color = "red";
    });
}


// EXERCISE 3: Input Events

const feedbackInput = document.querySelector("#feedback");
const statusDiv = document.querySelector("#status");
const charCountSpan = document.querySelector("#charcount");
const previewDiv = document.querySelector("#preview");

if (feedbackInput) {
    // Focus Event
    feedbackInput.addEventListener("focus", function () {
        if (statusDiv) statusDiv.textContent = "Please enter your feedback below.";
        feedbackInput.style.backgroundColor = "#eef7ff";
    });

    // Blur Event
    feedbackInput.addEventListener("blur", function () {
        if (statusDiv) statusDiv.textContent = "";
        feedbackInput.style.backgroundColor = "";
    });

    // Input Event
    feedbackInput.addEventListener("input", function () {
        const currentLength = feedbackInput.value.length;

        // Update character count
        if (charCountSpan) {
            charCountSpan.textContent = `${currentLength}/200`;
        }

        // Update preview
        if (previewDiv) {
            if (feedbackInput.value.trim() === "") {
                previewDiv.textContent = "(The preview will appear here)";
            } else {
                previewDiv.textContent = feedbackInput.value;
            }
        }
    });
}


// EXERCISE 4: Form Submission

const feedbackForm = document.querySelector("#feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent standard page reload

        const textLength = feedbackInput ? feedbackInput.value.trim().length : 0;

        if (textLength < 10 || textLength > 200) {
            if (statusDiv) {
                statusDiv.style.color = "red";
                statusDiv.textContent = "Feedback must be between 10 and 200 characters long.";
            }
        } else {
            if (statusDiv) {
                statusDiv.style.color = "green";
                statusDiv.textContent = "Thank you for your feedback!";
            }

            // Clear input field and reset preview / count
            feedbackInput.value = "";
            if (charCountSpan) charCountSpan.textContent = "0/200";
            if (previewDiv) previewDiv.textContent = "(The preview will appear here)";
        }
    });
}


// EXERCISE 5: Keyboard Events

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
    // Print event object to console
    console.log(event);

    // Update key details display
    if (keyinfo) {
        keyinfo.textContent = `Pressed Key: '${event.key}' | Key Code: '${event.code}'`;
    }

    // Display large key inside keybox
    if (keybox) {
        keybox.style.fontSize = "3em";
        keybox.style.fontWeight = "bold";
        keybox.style.textAlign = "center";
        keybox.textContent = event.key === " " ? "Space" : event.key;
    }
});