const mainHeading = document.getElementById('mainHeading');
const heroText = document.getElementById('heroText');
const reserveButton = document.getElementById('reserveButton');

reserveButton.addEventListener('click', () => {
    mainHeading.textContent = "Welcome to Royal Restaurant!";
    heroText.textContent = "Book your table now for an unforgettable experience.";
    reserveButton.style.backgroundColor = "green"; // Change button color
});

const dish1Name = document.getElementById('dish1Name');
const dish1Desc = document.getElementById('dish1Desc');
dish1Name.addEventListener('mouseover', () => {
    dish1Desc.style.color = 'blue';
});
dish1Name.addEventListener('mouseout', () => {
    dish1Desc.style.color = 'black'; // Reset to default color
});

const dish2Name = document.getElementById('dish2Name');
const dish2Desc = document.getElementById('dish2Desc');
dish2Name.addEventListener('mouseover', () => {
    dish2Desc.style.color = 'red';
});
dish2Name.addEventListener('mouseout', () => {
    dish2Desc.style.color = 'black'; // Reset to default color
});

const dish3Name = document.getElementById('dish3Name');
const dish3Desc = document.getElementById('dish3Desc');
dish3Name.addEventListener('mouseover', () => {
    dish3Desc.style.color = 'indigo';
});
dish3Name.addEventListener('mouseout', () => {
    dish3Desc.style.color = 'black'; // Reset to default color
});

const aboutHeading = document.getElementById('aboutHeading');
const aboutText = document.getElementById('aboutText');
aboutHeading.addEventListener('click', () => {
    aboutText.style.fontSize = "1.2em"; // Increase font size
    aboutText.style.fontStyle = "italic"; // Make text italic
});

const contactInfo = document.getElementById('contactInfo');
contactInfo.innerHTML = "<p>Nairobi,Royal Restaurant</p><p>Address, 2003-4567</p><p>Phone: +25470000000 </p>";


const toggleOfferButton = document.getElementById('toggleOfferButton');
const specialOffer = document.getElementById('specialOffer');

toggleOfferButton.addEventListener('click', () => {
  if (specialOffer.style.display === "none") {
    specialOffer.style.display = "block";
    toggleOfferButton.textContent = "Hide Special Offer";
  } else {
    specialOffer.style.display = "none";
    toggleOfferButton.textContent = "Show Special Offer";
  }
});