// Smooth scroll for navigation
const links = document.querySelectorAll('nav a');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
}

let lastScrollY = window.scrollY;
const header = document.querySelector('.main-header');
let ticking = false;

function handleHeaderScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    header.style.transform = 'translateY(-120%)';
    header.style.opacity = '0';
  } else {
    header.style.transform = 'translateY(0)';
    header.style.opacity = '1';
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(handleHeaderScroll);
    ticking = true;
  }
});

  const wineSelect = document.getElementById('wineSelect');
const wineDescription = document.getElementById('wineDescription');
const wineImage = document.getElementById('wineImage');

const wineData = {
  espoir: {
    text: "<br>Ce vin blanc rencontrera avec perfection des mets de la mer de type poissons grillés, fruits de mer ou encore repas frais tel que salade fraîche au chèvre.",
    image: "medias/poisson.jpg"
  },
  ame: {
    text: "<br>Notre vin rouge s'accompagne avec élégance de viandes telles qu'un magret de canard, ou encore des plats en sauce. Vous pouvez même le réserver pour plus tard avec un plateau de fromages affinés.",
    image: "medias/canard.jpg"
  },
  idee: {
    text: "<br>Le rosé est idéal pour une entrée d'été de type tarte aux légumes, ou encore pour une cuisine méditerranéenne ou des grillades estivales. ",
    image: "medias/tarte.jpg"
  }
};

// Fonction pour mettre à jour l'affichage
function updateWineInfo(selected) {
  wineDescription.innerHTML = wineData[selected].text;
  wineImage.src = wineData[selected].image;
}

// Mise à jour au changement de sélection
wineSelect.addEventListener('change', function () {
  updateWineInfo(this.value);
});

// Affichage par défaut au chargement
updateWineInfo(wineSelect.value);


document.getElementById('footerContactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const nom = form.nom.value.trim();
  const email = form.email.value.trim();
  const telephone = form.telephone.value.trim();
  const objet = form.objet.value.trim();
  const message = form.message.value.trim();
  const formMessage = document.getElementById('footerFormMessage');

  formMessage.textContent = '';
  formMessage.style.color = '';

  if (!nom || !email || !objet || !message) {
    formMessage.textContent = 'Merci de remplir tous les champs obligatoires.';
    formMessage.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Merci de saisir un email valide.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Envoi en cours...';
  formMessage.style.color = 'black';

  setTimeout(() => {
    formMessage.textContent = 'Merci pour votre message, nous vous répondrons rapidement !';
    formMessage.style.color = 'green';
    form.reset();
  }, 1500);
});
