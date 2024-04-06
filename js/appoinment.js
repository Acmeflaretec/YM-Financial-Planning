const scriptURL = 'https://script.google.com/macros/s/AKfycby33sYwMFY-XP92rasA8k-e4j8ZtdNWc-TKx0kdD9l6BYH5G7CN6Z5KFAebgKxUikRb/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})



