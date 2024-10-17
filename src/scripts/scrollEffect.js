document.addEventListener('scroll', () => {
  const image = document.querySelector('.image-container img');
  const body = document.body;
  const scrollPosition = window.scrollY;
  const scaleValue = 1 + scrollPosition / 1000; // Adjust the divisor to control the zoom speed

  console.log('scrolling');
  image.style.transform = `scale(${scaleValue})`;

  if (scaleValue > 2) { // Adjust the threshold as needed
    body.style.backgroundColor = '#f05454'; // Match the image color
  } else {
    body.style.backgroundColor = 'var(--darkblue)'; // Original background color
  }
});