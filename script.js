// Language translations
const translations = {
  en: {
    "nav-mission": "Mission",
    "nav-initiatives": "Initiatives",
    "nav-resources": "Resources",
    "nav-events": "Events",
    "nav-contact": "Contact",
    "mission-title": "Our Mission",
    "mission-text": "We advocate for gender equality and empower women students at TUM’s Garching campus through support, awareness and community.",
    "initiatives-title": "Initiatives",
    "initiative-1": "Mentorship programs connecting new students with experienced mentors.",
    "initiative-2": "Workshops on leadership, negotiation and personal development.",
    "initiative-3": "Advocacy for inclusive policies within departments and faculties.",
    "resources-title": "Resources",
    "resources-text": "Find campus services, support networks and informational materials to help you thrive at TUM.",
    "resource-equal-opportunity": "TUM Equal Opportunity & Diversity Office",
    "resource-frauenbeauftragte": "Department Frauenbeauftragte contacts",
    "resource-counselling": "Counselling & psychological services",
    "resource-security": "Campus security (Garching)",
    "events-title": "Upcoming Events",
    "event-1": "October 10: Networking lunch at MI building, 12 PM.",
    "event-2": "November 5: Panel discussion on women in STEM at MW Auditorium, 4 PM.",
    "event-3": "December 8: Self-defence workshop in PH gym, 6 PM.",
    "contact-title": "Get Involved",
    "contact-text": "Join our community or send us a message.",
    "form-name": "Name",
    "form-email": "Email",
    "form-message": "Message",
    "form-submit": "Send",
    "footer": "\u00a9 {year} Student initiative – not an official TUM website.",
  },
  de: {
    "nav-mission": "Mission",
    "nav-initiatives": "Initiativen",
    "nav-resources": "Ressourcen",
    "nav-events": "Veranstaltungen",
    "nav-contact": "Kontakt",
    "mission-title": "Unsere Mission",
    "mission-text": "Wir setzen uns für Gleichberechtigung ein und unterstützen Studentinnen am TUM Campus Garching durch Unterstützung, Bewusstsein und Gemeinschaft.",
    "initiatives-title": "Initiativen",
    "initiative-1": "Mentoring-Programme, die neue Studierende mit erfahrenen Mentorinnen verbinden.",
    "initiative-2": "Workshops zu Führung, Verhandlung und persönlicher Entwicklung.",
    "initiative-3": "Einsatz für inklusive Richtlinien in den Fakultäten.",
    "resources-title": "Ressourcen",
    "resources-text": "Finde Campus-Services, Unterstützungsnetzwerke und Informationsmaterialien, um an der TUM erfolgreich zu sein.",
    "resource-equal-opportunity": "TUM Gleichstellungs- & Diversity-Büro",
    "resource-frauenbeauftragte": "Kontakt der Frauenbeauftragten der Fachbereiche",
    "resource-counselling": "Beratungs- und psychologische Dienste",
    "resource-security": "Campus-Sicherheit (Garching)",
    "events-title": "Bevorstehende Veranstaltungen",
    "event-1": "10. Oktober: Networking-Lunch im MI-Gebäude, 12 Uhr.",
    "event-2": "5. November: Podiumsdiskussion über Frauen in MINT im MW-Auditorium, 16 Uhr.",
    "event-3": "8. Dezember: Selbstverteidigungskurs in der PH-Sporthalle, 18 Uhr.",
    "contact-title": "Mitmachen",
    "contact-text": "Tritt unserer Gemeinschaft bei oder sende uns eine Nachricht.",
    "form-name": "Name",
    "form-email": "E-Mail",
    "form-message": "Nachricht",
    "form-submit": "Senden",
    "footer": "\u00a9 {year} Studenteninitiative – keine offizielle TUM-Webseite.",
  },
};

let currentLang = 'en';

function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      if (key === 'footer') {
        const year = new Date().getFullYear();
        el.textContent = translation.replace('{year}', year);
      } else {
        el.textContent = translation;
      }
    }
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'de' : 'en';
  document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'DE' : 'EN';
  translate();
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('theme-toggle');
  icon.textContent = document.body.classList.contains('dark') ? '\u2600\ufe0f' : '\ud83c\udf19';
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name && email && message) {
    const resultEl = document.getElementById('form-result');
    resultEl.style.color = 'green';
    resultEl.textContent = currentLang === 'en' ? 'Thank you for your message!' : 'Danke für deine Nachricht!';
    document.getElementById('contact-form').reset();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  translate();
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
});
