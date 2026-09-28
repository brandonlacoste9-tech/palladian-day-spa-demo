/* EN-only i18n for The Palladian Day Spa demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(325) 450-6005",
    "hero.kicker": "San Angelo, Texas · Day spa · Text is best",
    "hero.title": "Leave the stress<br>at the door.",
    "hero.sub": "Rated 4.4 out of 5 from 89 reviews: massage, Hydra facials, peels and body treatments — San Angelo's spot to unwind and glow.",
    "hero.cta1": "Call (325) 450-6005",
    "hero.cta2": "See services",
    "trust.t1t": "Full-service spa",
    "trust.t1d": "Massage, skin &amp; body",
    "trust.t2t": "Text to book",
    "trust.t2d": "(325) 450-6005 — text is best",
    "trust.t3t": "Skilled therapists",
    "trust.t3d": "Care tailored to you",
    "stats.s1n": "4.4\u2605",
    "stats.s1l": "from 89 reviews",
    "stats.s2n": "San Angelo",
    "stats.s2l": "&amp; West Texas",
    "stats.s3n": "Massage &amp; facials",
    "stats.s3l": "head-to-toe care",
    "stats.s4n": "Text booking",
    "stats.s4l": "easy appointments",
    "services.kicker": "What we do",
    "services.title": "Relax &amp; renew — head to toe",
    "services.s1t": "Massage therapy",
    "services.s1d": "Therapeutic massage to melt tension and ease sore muscles.",
    "services.s2t": "Hydra facial",
    "services.s2d": "Deep-cleaning, hydrating facials for an instant glow.",
    "services.s3t": "Chemical peels",
    "services.s3d": "Peels that smooth, brighten and renew tired skin.",
    "services.s4t": "Microneedling",
    "services.s4d": "Collagen-boosting treatment for firmer, smoother skin.",
    "services.s5t": "Body wraps &amp; scrubs",
    "services.s5d": "Exfoliating scrubs and wraps that leave skin silky.",
    "services.s6t": "Waxing &amp; sugaring",
    "services.s6d": "Clean, gentle hair removal for smooth skin.",
    "why.kicker": "Why choose us",
    "why.title": "San Angelo's day-spa escape",
    "why.intro": "The Palladian Day Spa is San Angelo's go-to for massage, facials and body treatments — professional care in a calm, welcoming space. Texting is the fastest way to book.",
    "why.l1t": "Text-first booking",
    "why.l1d": "Text (325) 450-6005 — text is best — and we will get you in.",
    "why.l2t": "Massage &amp; skin experts",
    "why.l2d": "From deep-tissue work to advanced skin treatments, all under one roof.",
    "why.l3t": "Calm, clean space",
    "why.l3d": "A peaceful setting designed for unwinding from the first step in.",
    "why.l4t": "Personalized treatments",
    "why.l4d": "Every service is tailored to what your body and skin need that day.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Relaxation done right",
    "gallery.c2": "Skincare that glows",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.4 out of 5 by San Angelo customers",
    "reviews.more": "See what clients say about us — 4.4 stars from 89 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How do I book?",
    "faq.a1": "Text (325) 450-6005 — text is best — or call to book your visit.",
    "faq.q2": "What services do you offer?",
    "faq.a2": "Massage therapy, facials, peels, microneedling, body wraps, waxing and more.",
    "faq.q3": "Do you do microblading?",
    "faq.a3": "Yes — microblading and ombre shading for brows that stay put.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday through Saturday, 9 AM to 6 PM — closed Sundays.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Saturday<br>9:00 AM – 6:00 PM<br><br>Sunday<br>Closed",
    "contact.cta": "Call now",
    "footer.tag": "Day spa · San Angelo, Texas"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
