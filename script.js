document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.projects__container');
  
    carousels.forEach(carousel => {
      const screenshots = carousel.querySelectorAll('.screenshot');
      const prevButton = carousel.querySelector('.screenshot-nav.prev');
      const nextButton = carousel.querySelector('.screenshot-nav.next');
      const screenshotWrapper = carousel.querySelector('.screenshot-wrapper');
      let currentIndex = 0;
  
      function showScreenshot(index) {
        screenshots.forEach((screenshot, i) => {
          screenshot.classList.toggle('active', i === index);
        });
        screenshotWrapper.style.transform = `translateX(-${index * 100}%)`;
      }
  
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : screenshots.length - 1;
        showScreenshot(currentIndex);
      });
  
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < screenshots.length - 1) ? currentIndex + 1 : 0;
        showScreenshot(currentIndex);
      });
  
      // Initial display
      showScreenshot(currentIndex);
    });
  });

// Function to copy text and display success message
function copyToClipboard(text, event) {
  navigator.clipboard.writeText(text).then(function() {
      const copySuccessMessage = document.getElementById('copy-success');
      
      // Position the message near the mouse cursor using clientX and clientY
      copySuccessMessage.style.left = event.clientX + 'px'; // X coordinate
      copySuccessMessage.style.top = (event.clientY - 30) + 'px'; // Y coordinate, offset by 30 pixels for visibility
      copySuccessMessage.style.display = 'block'; // Show the message

      // Hide the success message after 2 seconds
      setTimeout(function() {
          copySuccessMessage.style.display = 'none';
      }, 500);
  }).catch(function(error) {
      alert('Failed to copy: ' + error);
  });
}

// Copy email on click
document.getElementById('copy-email-icon').addEventListener('click', function(event) {
  const email = document.getElementById('email').textContent;
  copyToClipboard(email, event);
});

// Copy phone number on click
document.getElementById('copy-phone-icon').addEventListener('click', function(event) {
  const phone = document.getElementById('phone').textContent;
  copyToClipboard(phone, event);
});








// Username : "niveditalondhe3@gmail.com",
// Password : "541E0CE3BF4DEE9D2DD2CBA5170FADA0AA99",