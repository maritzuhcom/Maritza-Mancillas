window.addEventListener(
  'DOMContentLoaded',
  init, { once: true }
);

function init () {
  const arrow = document.body.querySelector('[data-ui~=arrow]');
  const work = document.body.querySelector('.work-content');
  const workButton = document.body.querySelector('.workButton');
  const bioButton = document.body.querySelector('.bioButton');
  const bioSection = document.body.querySelector('.bioWrapper');

  const contact = document.body.querySelector('.contactWrapper');
  const contactButton = document.body.querySelector('.contactButton');

  const sendEmail = document.body.querySelector('.sendEmail');
  const sendLinkedin = document.body.querySelector('.sendLinkedin');
  const sendFacebook = document.body.querySelector('.sendFacebook');
  const sendSpotify = document.body.querySelector('.sendSpotify');

  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu();
    bioSection.classList.remove('open');
    bioSection.dataset.status = 'closed';
    work.classList.remove('open');
    work.dataset.status = 'closed';
    contact.classList.remove('open');
    contact.dataset.status = 'closed';
  });

  bioButton.addEventListener('click', function(e) {
    e.preventDefault();
    bioSection.dataset.status = 'open';
    bioSection.classList.add('open');
    hideMenu();
  });

  workButton.addEventListener('click', function(e) {
    e.preventDefault();
    work.dataset.status = 'open';
    work.classList.add('open');
    hideMenu();
  });

  contactButton.addEventListener('click', function(e) {
    e.preventDefault();
    contact.dataset.status = 'open';
    contact.classList.add('open');
    hideMenu();
  });

  sendEmail.addEventListener('click', (e) => {
    const email = 'mancillas.maritza@gmail.com';
    const subject = 'Dear Maritza';
    const emailBody = 'Hello, ';
    document.location = `mailto:${email}?subject=${subject}&body=${emailBody}`;
  });

  sendLinkedin.addEventListener('click', (e) => {
    window.open('https://www.linkedin.com/in/maritza-m-328363133/', '_blank');
  });

  sendFacebook.addEventListener('click', (e) => {
    window.open('https://www.facebook.com/mancillas.maritza', '_blank');
  });

  sendSpotify.addEventListener('click', (e) => {
    window.open('http://open.spotify.com/user/maritzuhcom', '_blank');
  });
}

function showMenu() {
  const menu = document.body.querySelector('.content');
  const arrow = document.body.querySelector('[data-ui~=arrow]');

  arrow.classList.add('hidden');
  menu.classList.remove('closed');
  menu.dataset.status = 'open';
}

function hideMenu() {
  const menu = document.body.querySelector('.content');
  const arrow = document.body.querySelector('[data-ui~=arrow]');

  menu.classList.add('closed');
  menu.dataset.status = 'closed';
  arrow.classList.remove('hidden');
}
