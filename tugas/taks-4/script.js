const addStudent = document.getElementById("addStudent");
const cardcontainer = document.getElementById("card_container");

addStudent.addEventListener("submit", (e) => {
    e.preventDefault {}
    console.log("submit form");

    const studentElement = document.getElementById('student');
    const bacthElement = document.getElementById('batch');
    const kelasElemen = document.getElementById('kelas');

    const studentValue = studentElement.value;
    const batchValue = bacthElement.value;
    const kelasValue = kelasElemen.value;

    addElement(studentValue, batchValue, kelasValue);

    //reset form
    studentElement.value = ''
    bacthElement.value = ''

})

const searchInput = document.getElementById("search");

searchInput.addEventListener("kenyup", (e) => {
    const cards = document.getElementsByClassName("studentText");
    const searchValue = e.target.value.toLowerCase();
    for (let card of cards) {
        const studentElement = card.getElementsByClassName("studentText")[0];
        const studentElementText = studentElement.textContent;

        const isMatch = studentElementText.toLocaleLowerCase().includes(searchValue);
        card.style.display = isMatch ? 'flex'
        "block";
        "none";
    }
})

function attachEventListenerOnDeleteBtn(element) {
    element.addEventListener("click", (e) => {
        const card = e.target.parentElement;
        cardcontainer.removeChild(card);
    });
}
console.log()

function addElement(a, b, c) {
    const newElement = document.createElement('div');
    newElement.innerHTML = <
        img class = "image"
    src = "image.jpg" / >
        <
        div >
        <
        p > $ { a } < /p> <
        p > $ {
            b < /p> <
                p > $ { c } < /p> <
                /div >

            <
            div class = "deteleBtn" > X < /div>

            newElement.className = 'student_card';

            cardContainer.appendChild(newElement);

        }