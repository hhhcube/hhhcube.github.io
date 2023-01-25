const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !message) {
    alert('All fields are required');
    return;
  }
  if (!email.includes('@')) {
    alert('Invalid email');
    return;
  }
  form.submit();
});
