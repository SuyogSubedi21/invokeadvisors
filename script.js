const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const counters = document.querySelectorAll("[data-counter]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("#contactForm");

function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    header?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    header?.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
});

document.querySelectorAll(".nav-menu a, .footer a").forEach((link) => {
    link.addEventListener("click", closeNav);
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

revealItems.forEach((item) => revealObserver.observe(item));

function revealInitialItems() {
    revealItems.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add("is-visible");
            revealObserver.unobserve(item);
        }
    });
}

function animateCounter(counter) {
    if (counter.dataset.counted) return;
    counter.dataset.counted = "true";

    const target = Number(counter.dataset.target);
    const duration = 1100;
    const startTime = performance.now();

    function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.65 });

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("click", () => {
        const wasOpen = item.getAttribute("aria-expanded") === "true";
        document.querySelectorAll(".accordion-item").forEach((other) => other.setAttribute("aria-expanded", "false"));
        item.setAttribute("aria-expanded", String(!wasOpen));
    });
});

const testimonials = [
    {
        quote: "Invoke Advisors helped us bring discipline to monthly reporting and tax documentation. The work was clear, structured, and delivered on schedule.",
        name: "Managing Director",
        role: "Service Company"
    },
    {
        quote: "Their team understood the practical side of compliance. We received careful guidance without unnecessary complexity.",
        name: "Founder",
        role: "Growth-stage Business"
    },
    {
        quote: "The audit preparation support was thorough. Schedules, reconciliations, and records were organized in a way our management team could rely on.",
        name: "Finance Lead",
        role: "Manufacturing Client"
    }
];

const carousel = document.querySelector("[data-carousel]");
const testimonialText = document.querySelector("[data-testimonial-text]");
const testimonialName = document.querySelector("[data-testimonial-name]");
const testimonialRole = document.querySelector("[data-testimonial-role]");
let testimonialIndex = 0;

function renderTestimonial(index) {
    if (!carousel || !testimonialText || !testimonialName || !testimonialRole) return;
    carousel.classList.add("is-changing");
    window.setTimeout(() => {
        const testimonial = testimonials[index];
        testimonialText.textContent = testimonial.quote;
        testimonialName.textContent = testimonial.name;
        testimonialRole.textContent = testimonial.role;
        carousel.classList.remove("is-changing");
    }, 170);
}

document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial(testimonialIndex);
});

document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testimonialIndex);
});

if (carousel) {
    renderTestimonial(testimonialIndex);
    window.setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        renderTestimonial(testimonialIndex);
    }, 8500);
}

function setFieldError(field, message) {
    const row = field.closest(".form-row");
    row.classList.toggle("is-invalid", Boolean(message));
    row.querySelector("small").textContent = message;
}

function validateField(field) {
    const value = field.value.trim();
    let message = "";

    if (field.name === "name" && value.length < 2) message = "Please enter your name.";
    if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Please enter a valid email address.";
    if (field.name === "phone" && value.length < 6) message = "Please enter a contact number.";
    if (field.name === "service" && !value) message = "Please select a service.";
    if (field.name === "message" && value.length < 12) message = "Please include a short description of the matter.";

    setFieldError(field, message);
    return !message;
}

if (contactForm) {
    const fields = Array.from(contactForm.querySelectorAll("input, select, textarea"));
    fields.forEach((field) => field.addEventListener("blur", () => validateField(field)));

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = contactForm.querySelector(".form-status");
        const isValid = fields.every(validateField);

        if (!isValid) {
            status.textContent = "Please review the highlighted fields.";
            return;
        }

        status.textContent = "Thank you. Your inquiry is ready for review.";
        contactForm.reset();
    });
}

document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
});

revealInitialItems();
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
