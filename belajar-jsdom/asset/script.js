const addCarForm = document.getElementById('addCarForm');
const cardContainer = document.getElementById('card_container');

addCarForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Submit Form")

    const ownerElement = document.getElementById('owner');
    const platnoElement = document.getElementById('platnum');
    const brandElement = document.getElementById('brand');

    const ownerValue = ownerElement.value;
    const platnoValue = platnoElement.value;
    const brandValue = brandElement.value;

    addElement(ownerValue, platnoValue, brandValue);

    //reset form
    ownerElement.value = ''
    platnoElement.value = ''


})

function addElement(ownerValue, platnoValue, brandValue) {
    const newElement = document.createElement('div');
    newElement.innerHTML = '<p>' + ownerValue + '</p>'

    cardContainer.appendChild(newElement);
}