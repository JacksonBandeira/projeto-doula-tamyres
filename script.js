// JavaScript para o site da Tamyres Lima - Doula

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicialização das funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    initAnimations();
    initTestimonialCarousel();
    
});

// Funcionalidade do menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Alterna o ícone do menu
            const icon = menuToggle.querySelector('i') || menuToggle;
            if (nav.classList.contains('active')) {
                icon.innerHTML = '✕';
            } else {
                icon.innerHTML = '☰';
            }
        });
        
        // Fecha o menu ao clicar em um link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i') || menuToggle;
                icon.innerHTML = '☰';
            });
        });
    }
}

// Scroll suave para âncoras
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Validação do formulário de contato
function initFormValidation() {
    const form = document.querySelector('#contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();
            
            // Validação básica
            if (!name || !email || !message) {
                showMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Simula envio do formulário
            showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            form.reset();
        });
    }
}

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para exibir mensagens
function showMessage(text, type) {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    
    // Estilos da mensagem
    message.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        ${type === 'success' ? 
            'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    // Adiciona a mensagem após o formulário
    const form = document.querySelector('#contact-form');
    form.parentNode.insertBefore(message, form.nextSibling);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Animações de entrada
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ter animação
    const animatedElements = document.querySelectorAll('.card, .sobre-content, .section-title');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Carrossel de depoimentos
function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    
    if (carousel) {
        const testimonials = carousel.querySelectorAll('.testimonial');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const indicators = carousel.querySelector('.carousel-indicators');
        
        let currentIndex = 0;
        
        // Cria indicadores
        if (indicators && testimonials.length > 1) {
            testimonials.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.className = 'carousel-indicator';
                indicator.setAttribute('data-index', index);
                if (index === 0) indicator.classList.add('active');
                indicators.appendChild(indicator);
                
                indicator.addEventListener('click', () => goToSlide(index));
            });
        }
        
        // Função para ir para um slide específico
        function goToSlide(index) {
            testimonials[currentIndex].classList.remove('active');
            
            const currentIndicator = indicators?.querySelector('.carousel-indicator.active');
            if (currentIndicator) currentIndicator.classList.remove('active');
            
            currentIndex = index;
            testimonials[currentIndex].classList.add('active');
            
            const newIndicator = indicators?.querySelector(`[data-index="${index}"]`);
            if (newIndicator) newIndicator.classList.add('active');
        }
        
        // Botão anterior
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
                goToSlide(prevIndex);
            });
        }
        
        // Botão próximo
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
                goToSlide(nextIndex);
            });
        }
        
        // Auto-play (opcional)
        if (testimonials.length > 1) {
            setInterval(() => {
                const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
                goToSlide(nextIndex);
            }, 5000); // Muda a cada 5 segundos
        }
    }
}

// Função para links do WhatsApp
function openWhatsApp(message = '') {
    const phoneNumber = '5579998087772'; // Substitua pelo número real
    const encodedMessage = encodeURIComponent(message || 'Olá! Gostaria de saber mais sobre os serviços de doula.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Função para scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona botão de voltar ao topo
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--azul-medio);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', scrollToTop);
    document.body.appendChild(button);
    
    // Mostra/esconde o botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// Inicializa o botão de voltar ao topo
addScrollToTopButton();

