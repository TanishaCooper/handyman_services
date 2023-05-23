// Create handyman image element
const handymanImage = document.createElement('img');
handymanImage.id = 'handyman-image';
handymanImage.src = 'handyman.jpg';
handymanImage.alt = 'Handyman';
handymanImage.width = 200;
handymanImage.height = 200;

// Append handyman image to the header
const header = document.querySelector('header');
header.appendChild(handymanImage);
