window.addEventListener(
  'DOMContentLoaded',
  init
);
function init () {
  window.removeEventListener(
    'DOMContentLoaded',
    init
  );

  var bioButton = document.body.querySelector('.bioButton');
  var workButton = document.body.querySelector('.workButton');
  var resumeButton = document.body.querySelector('.resumeButton');
  var contactButton = document.body.querySelector('.contactButton');
  var middle = document.body.querySelector('.middle');
  var arrow = document.body.querySelector('[data-ui~=arrow]');
  var sendEmail = document.body.querySelector('.sendEmail');

  bioButton.addEventListener('click', (e) => {
    e.preventDefault();
    middle.classList.add('showBio');
    arrow.classList.remove('hidden');
  });

  workButton.addEventListener('click', (e) => {
    e.preventDefault();
    middle.classList.add('showWork');
    arrow.classList.remove('hidden');
  });

  resumeButton.addEventListener('click', (e) => {

  });

  contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    middle.classList.add('showContact');
    arrow.classList.remove('hidden');
  });

  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    middle.className = 'middle';
    arrow.classList.add('hidden');
  });

  sendEmail.addEventListener('click', (e) => {
    var email = 'mancillas.maritza@gmail.com';
        var subject = 'Dear Maritza';
        var emailBody = 'Hello, ';
        document.location = `mailto:${email}?subject=${subject}&body=${emailBody}`;
  });
}
