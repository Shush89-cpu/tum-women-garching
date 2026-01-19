// Language translations
const translations = {
  en: {
    "nav-mission": "Mission",
    "nav-initiatives": "Initiatives",
    "nav-resources": "Resources",
    "nav-events": "Events",
    "nav-contact": "Contact",
    "nav-network": "Network",
    "network-title": "Women in Chemistry Network @ TUM",
    "network-lead": "Founded by Dr. Sara Gutkin (October 2025)",
    "network-description": "We create a supportive community where young female scientists can connect, learn and grow together through guest talks, mentorship, career development and workshops.",
    "network-cta": "Explore Now",
    "stats-title": "Diversity Landscape",
    "stat-undergraduates": "44% of undergraduate students in chemistry are women.",
    "stat-phd": "39% of PhD students are women.",
    "stat-staff": "29% of non‑professorial staff are women.",
    "stat-professors": "Only 9% of professors are women.",
    "stats-note": "Source: Diversity landscape of the chemical sciences (Royal Society of Chemistry)",
    "prof-title": "Professorship Gender Distribution at TUM",
    "prof-female": "24% Female professors @ TUM",
    "prof-male": "76% Male professors @ TUM",
    "prof-note": "According to Frauen an der TUM",
    "about-title": "About Dr. Sara Gutkin",
    "about-text": "Dr. Sara Gutkin received her PhD from Tel Aviv University and is a postdoctoral researcher in Chemistry at TUM, exploring innovative approaches towards the discovery of novel antibiotics. She has received several prestigious fellowship awards and is dedicated to advancing her leadership skills. With an open mind toward diverse career paths, she strives to make a meaningful contribution to society through science and community building.",
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
    "events-coming-soon": "Coming soon — stay in touch.",
    // Updated details for second meetup on 29 January 2026
    "event-meetup-title": "Women in Chemistry Network: Second Meetup",
    "event-meetup-date": "Event Date: 29th of January (29/01/26) at 17:00",
    "event-meetup-location": "Event Location: Center for Functional Protein Assemblies (CPA), Seminar room 006.",
    "event-meetup-register": "Register here",
    "contact-title": "Get Involved",
    "contact-text": "Join our community or send us a message.",
    "form-name": "Name",
    "form-email": "Email",
    "form-message": "Message",
    "form-submit": "Send",
    "footer": "© {year} Student initiative – not an official TUM website.",
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
    "events-coming-soon": "Bald verfügbar – bleib dran.",
        // Updated details for second meetup on 29 January 2026 (German)
        "event-meetup-title": "Women in Chemistry Network: Zweites Treffen",
    "event-meetup-date": "Veranstaltungsdatum: 29. Januar (29/01/26) um 17:00",
    "event-meetup-location": "Veranstaltungsort: Center for Functional Protein Assemblies (CPA), Seminarraum 006.",
    "event-meetup-register": "Hier registrieren",
    "contact-title": "Mitmachen",
    "contact-text": "Tritt unserer Gemeinschaft bei oder sende uns eine Nachricht.",
    "form-name": "Name",
    "form-email": "E-Mail",
    "form-message": "Nachricht",
    "form-submit": "Senden",
    "footer": "© {year} Studenteninitiative – keine offizielle TUM-Webseite.",
    "nav-network": "Netzwerk",
    "network-title": "Women in Chemistry Network @ TUM",
    "network-lead": "Gegründet von Dr. Sara Gutkin (Oktober 2025)",
    "network-description": "Wir schaffen eine unterstützende Gemeinschaft, in der junge Wissenschaftlerinnen sich verbinden, lernen und gemeinsam wachsen können – durch Gastvorträge, Mentoring, Karriereentwicklung und Workshops.",
    "network-cta": "Jetzt entdecken",
    "stats-title": "Vielfaltslandschaft",
    "stat-undergraduates": "44 % der Chemiestudierenden im Grundstudium sind Frauen.",
    "stat-phd": "39 % der Promovierenden sind Frauen.",
    "stat-staff": "29 % des nicht-professoralen Personals sind Frauen.",
    "stat-professors": "Nur 9 % der Professoren sind Frauen.",
    "stats-note": "Quelle: Diversity landscape of the chemical sciences (Royal Society of Chemistry)",
    "prof-title": "Geschlechterverteilung der Professuren an der TUM",
    "prof-female": "24 % Professorinnen an der TUM",
    "prof-male": "76 % Professoren an der TUM",
    "prof-note": "Laut Frauen an der TUM",
    "about-title": "Über Dr. Sara Gutkin",
    "about-text": "Dr. Sara Gutkin hat ihren PhD an der Universität Tel Aviv erworben und ist Postdoktorandin in Chemie an der TUM, wo sie innovative Ansätze zur Entdeckung neuer Antibiotika erforscht. Sie hat mehrere prestigeträchtige Stipendien erhalten und setzt sich für die Weiterentwicklung ihrer Führungskompetenzen ein. Mit einem offenen Blick für verschiedene Karrierewege strebt sie danach, durch Wissenschaft und Gemeinschaft einen bedeutenden Beitrag zur Gesellschaft zu leisten.",
  },
};

let currentLang = 'en';

function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      if (key === 'footer') {
        // replace {year} placeholder
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
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function handleFormSubmit(event) {
  // Prevent default form submission so we can submit via fetch
  event.preventDefault();
  const form = event.target;
  const resultEl = document.getElementById('form-result');
  // Build FormData from the form fields
  const formData = new FormData(form);
  // Send the form data to Formsubmit to trigger an email
  fetch('https://formsubmit.co/sara.gutkin@tum.de', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        // Display a localized success message
        resultEl.style.color = 'green';
        resultEl.textContent = currentLang === 'en' ?
          'Thank you for your message!' :
          'Danke für deine Nachricht!';
        form.reset();
      } else {
        // Display a localized error message if submission fails
        resultEl.style.color = 'red';
        resultEl.textContent = currentLang === 'en'
          ? 'There was an error sending your message. Please try again later.'
          : 'Beim Senden deiner Nachricht ist ein Fehler aufgetreten. Bitte versuche es erneut.';
      }
    })
    .catch(error => {
      // Display a localized error message for network errors
      resultEl.style.color = 'red';
      resultEl.textContent = currentLang === 'en'
        ? 'There was an error sending your message. Please try again later.'
        : 'Beim Senden deiner Nachricht ist ein Fehler aufgetreten. Bitte versuche es erneut.';
    });
}

// Initialize translations on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer if not translated yet
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  translate();
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
});
