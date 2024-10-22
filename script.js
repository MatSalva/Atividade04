// Initialize AOS
AOS.init();

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Fetch services from API
async function fetchServices() {
    try {
        const response = await fetch('https://api.example.com/services');
        const services = await response.json();
        displayServices(services);
    } catch (error) {
        displayErrorMessage('servicos-container', 'Erro ao carregar os serviços. Por favor, tente novamente mais tarde.');
        console.error('Error fetching services:', error);
    }
}

function displayServices(services) {
    const container = document.getElementById('servicos-container');
    services.forEach(service => {
        const serviceElement = createServiceElement(service);
        container.appendChild(serviceElement);
    });
}

function createServiceElement(service) {
    const serviceElement = document.createElement('div');
    serviceElement.className = 'service-card bg-white p-6 rounded-lg shadow-md';
    serviceElement.setAttribute('data-aos', 'fade-up');
    serviceElement.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${service.title}</h3>
        <p class="text-gray-600">${service.description}</p>
    `;
    return serviceElement;
}

// Fetch testimonials from API
async function fetchTestimonials() {
    try {
        const response = await fetch('https://api.example.com/testimonials');
        const testimonials = await response.json();
        displayTestimonials(testimonials);
    } catch (error) {
        displayErrorMessage('testemunhos-container', 'Erro ao carregar os testemunhos. Por favor, tente novamente mais tarde.');
        console.error('Error fetching testimonials:', error);
    }
}

function displayTestimonials(testimonials) {
    const container = document.getElementById('testemunhos-container');
    testimonials.forEach(testimonial => {
        const testimonialElement = createTestimonialElement(testimonial);
        container.appendChild(testimonialElement);
    });
}

function createTestimonialElement(testimonial) {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial-card bg-white p-6 rounded-lg shadow-md';
    testimonialElement.setAttribute('data-aos', 'fade-up');
    testimonialElement.innerHTML = `
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mb-4">
        <h3 class="text-lg font-bold mb-2">${testimonial.name}</h3>
        <p class="text-gray-600">${testimonial.text}</p>
    `;
    return testimonialElement;
}

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        sendEmail();
    }
});

function validateForm() {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
}
