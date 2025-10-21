
document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        "es": {
            // Navegación y Header
            "nav_home": "Inicio",
            "nav_join": "Únete al Club",
            "nav_shelters": "Para Protectoras",
            "nav_find": "Busca a tu Compañero",
            "nav_club": "El Club",
            "nav_about": "Sobre Nosotros",
            "account_btn": "Acceder / Mi Cuenta",
            // Hero
            "hero_title": "La Adopción ha Cambiado. Para Siempre.",
            "hero_subtitle": "Bienvenido a CuidamiHuella, el club que transforma el miedo a adoptar en la certeza de haber encontrado a tu compañero ideal. Descubre un proceso seguro, con seguro incluido, y una comunidad que te acompaña para toda la vida.",
            "hero_btn1": "Descubre el Club",
            "hero_btn2": "Busca a tu Compañero",
            // Propuesta de valor
            "value_title": "Un Club para Todos los que Aman a los Animales",
            "adopt_title": "¿Pensando en Adoptar?",
            "adopt_text": "Elimina el miedo con nuestra 'Experiencia de Acogida'. Convive con tu futuro compañero durante 3 semanas de forma segura y toma la decisión más importante de tu vida con el corazón y la cabeza.",
            "adopt_link": "Saber más sobre la Experiencia >",
            "pet_owner_title": "¿Ya Tienes Mascota?",
            "pet_owner_text": "Únete a la comunidad de dueños más comprometida de España. Accede a nuestra red de descuentos, foros con expertos, cadena de favores y mucho más. Dale a tu mascota los beneficios que se merece.",
            "pet_owner_link": "Hazte Socio Amigo >",
            // Proceso
            "process_title": "Tu Viaje hacia el Compañero Perfecto, en 3 Pasos Seguros",
            "step1_title": "Únete al Club y Activa tu Pack",
            "step1_text": "Por una cuota única de 89€ activas tu 'Pack de Bienvenida y Tranquilidad Total'. Incluye tu seguro, la desparasitación del animal y un donativo a la protectora.",
            "step2_title": "Vive la Experiencia de Acogida",
            "step2_text": "Elige un animal y disfrútalo en casa durante 3 semanas. Descubre su verdadero carácter y si sois el match perfecto, con el apoyo de nuestra comunidad.",
            "step3_title": "Celebra tu Éxito",
            "step3_text": "Formaliza una adopción basada en la realidad, no en una corazonada. La firma final con la protectora es solo un trámite para celebrar lo que ya sabes.",
            // Testimonios
            "testimonials_title": "Las Historias que nos Impulsan",
            "testimonial_1_text": "La 'Experiencia de Acogida' fue clave. Descubrimos que necesitábamos un perro tranquilo como Bruno. Sin este proceso, nos habríamos equivocado.",
            "testimonial_1_author": "— Laura y David, Socios Fundadores y familia de Bruno.",
            "testimonial_2_text": "Ser Socio Amigo nos ha ahorrado un montón en veterinarios y comida de calidad. La comunidad es increíble, siempre hay alguien dispuesto a ayudar.",
            "testimonial_2_author": "— Marcos G., Socio Amigo y padre de Lúa.",
            "testimonial_3_text": "Nunca pensé que adoptar sería tan fácil y seguro. El equipo de CuidaMiHuella nos guió en cada paso. ¡Estamos enamorados de nuestro nuevo gato, Nilo!",
            "testimonial_3_author": "— Sofía R., Socia Fundadora y mamá de Nilo.",
            // CTA Protectoras
            "shelters_title": "¿Eres una Protectora o Centro de Acogida?",
            "shelters_text": "Descubre cómo nuestra plataforma puede ahorrarte horas de trabajo, reducir las devoluciones y generarte una nueva vía de financiación. A coste cero.",
            "shelters_btn": "Colabora con Nosotros",
            // Membresía
            "membership_title": "El Club para los que Aman de Verdad a sus Animales",
            "membership_subtitle": "Tanto si buscas a tu nuevo compañero como si ya lo tienes, CuidamiHuella es el ecosistema de confianza, ahorro y apoyo que necesitas. Elige tu camino para entrar.",
            "founder_title": "SOCIO FUNDADOR",
            "founder_desc": "Para los que inician su viaje adoptando con nosotros.",
            "founder_price": "89 €",
            "founder_renewal": "29,90 €/año",
            "benefit1": "Acceso a la 'Experiencia de Acogida'",
            "benefit2": "Seguro de RC y Accidentes incluido en el Pack",
            "benefit3": "Acceso COMPLETO al Club (Descuentos, Expertos, Comunidad)",
            "benefit4": "Acceso EXCLUSIVO a la 'Cadena de Favores' con estatus verificado",
            "founder_btn": "Inicia tu Adopción",
            "friend_title": "SOCIO AMIGO",
            "friend_desc": "Para los que ya tienen mascota y quieren unirse al club.",
            "friend_price": "39,90 €",
            "friend_renewal": "29,90 €/año (¡Tu lealtad tiene premio!)",
            "benefit5": "Acceso COMPLETO a la Red de Descuentos",
            "benefit6": "Acceso COMPLETO a los Foros de Expertos y Comunidad",
            "benefit7": "Posibilidad de acceder a la 'Cadena de Favores' tras un proceso de verificación",
            "friend_btn": "Hazte Socio Amigo Ahora",
            // Footer
            "footer_slogan": "Cuidamos de su huella.",
            "footer_nav_title": "Navegación",
            "footer_legal_title": "Legal",
            "legal1": "Aviso Legal",
            "legal2": "Política de Privacidad",
            "legal3": "Política de Cookies",
            "legal4": "Términos y Condiciones",
            "footer_help_title": "Ayuda",
            "help1": "Contacto",
            "help2": "Preguntas Frecuentes (FAQ)",
            "copyright": "© 2025 CuidamiHuella. Todos los derechos reservados."
        },
        "en": {
            // Navigation & Header
            "nav_home": "Home",
            "nav_join": "Join the Club",
            "nav_shelters": "For Shelters",
            "nav_find": "Find your Companion",
            "nav_club": "The Club",
            "nav_about": "About Us",
            "account_btn": "Login / My Account",
            // Hero
            "hero_title": "Adoption Has Changed. Forever.",
            "hero_subtitle": "Welcome to CuidamiHuella, the club that transforms the fear of adopting into the certainty of having found your ideal companion. Discover a safe process, insurance included, and a community that accompanies you for life.",
            "hero_btn1": "Discover the Club",
            "hero_btn2": "Find Your Companion",
            // Value Proposition
            "value_title": "A Club for Everyone Who Loves Animals",
            "adopt_title": "Thinking of Adopting?",
            "adopt_text": "Eliminate fear with our 'Fostering Experience'. Live with your future companion for 3 weeks safely and make the most important decision of your life with your heart and your head.",
            "adopt_link": "Learn more about the Experience >",
            "pet_owner_title": "Already Have a Pet?",
            "pet_owner_text": "Join the most committed community of owners in Spain. Access our network of discounts, forums with experts, a chain of favors, and much more. Give your pet the benefits it deserves.",
            "pet_owner_link": "Become a Friend Member >",
            // Process
            "process_title": "Your Journey to the Perfect Companion, in 3 Secure Steps",
            "step1_title": "Join the Club and Activate Your Pack",
            "step1_text": "For a one-time fee of €89, you activate your 'Welcome and Total Peace of Mind Pack'. It includes your insurance, the animal's deworming, and a donation to the shelter.",
            "step2_title": "Live the Fostering Experience",
            "step2_text": "Choose an animal and enjoy it at home for 3 weeks. Discover its true character and if you are the perfect match, with the support of our community.",
            "step3_title": "Celebrate Your Success",
            "step3_text": "Formalize an adoption based on reality, not a hunch. The final signing with the shelter is just a formality to celebrate what you already know.",
            // Testimonials
            "testimonials_title": "The Stories That Drive Us",
            "testimonial_1_text": "The 'Fostering Experience' was key. We discovered we needed a calm dog like Bruno. Without this process, we would have made a mistake.",
            "testimonial_1_author": "— Laura & David, Founding Members and Bruno's family.",
            "testimonial_2_text": "Being a Friend Member has saved us a lot on vets and quality food. The community is incredible, there's always someone willing to help.",
            "testimonial_2_author": "— Marcos G., Friend Member and Lúa's dad.",
            "testimonial_3_text": "I never thought adopting would be so easy and safe. The CuidaMiHuella team guided us every step of the way. We are in love with our new cat, Nilo!",
            "testimonial_3_author": "— Sofía R., Founding Member and Nilo's mom.",
            // Shelters CTA
            "shelters_title": "Are You a Shelter or Rescue Center?",
            "shelters_text": "Discover how our platform can save you hours of work, reduce returns, and generate a new source of funding. At zero cost.",
            "shelters_btn": "Collaborate with Us",
            // Membership
            "membership_title": "The Club for Those Who Truly Love Their Animals",
            "membership_subtitle": "Whether you are looking for your new companion or already have one, CuidamiHuella is the ecosystem of trust, savings, and support you need. Choose your way to join.",
            "founder_title": "FOUNDING MEMBER",
            "founder_desc": "For those who start their journey by adopting with us.",
            "founder_price": "€89",
            "founder_renewal": "€29.90/year",
            "benefit1": "Access to the 'Fostering Experience'",
            "benefit2": "Liability and Accident Insurance included in the Pack",
            "benefit3": "FULL Access to the Club (Discounts, Experts, Community)",
            "benefit4": "EXCLUSIVE Access to the 'Chain of Favors' with verified status",
            "founder_btn": "Start Your Adoption",
            "friend_title": "FRIEND MEMBER",
            "friend_desc": "For those who already have a pet and want to join the club.",
            "friend_price": "€39.90",
            "friend_renewal": "€29.90/year (Your loyalty is rewarded!)",
            "benefit5": "FULL Access to the Discount Network",
            "benefit6": "FULL Access to Expert and Community Forums",
            "benefit7": "Opportunity to access the 'Chain of Favors' after a verification process",
            "friend_btn": "Become a Friend Member Now",
            // Footer
            "footer_slogan": "We take care of their pawprint.",
            "footer_nav_title": "Navigation",
            "footer_legal_title": "Legal",
            "legal1": "Legal Notice",
            "legal2": "Privacy Policy",
            "legal3": "Cookies Policy",
            "legal4": "Terms and Conditions",
            "footer_help_title": "Help",
            "help1": "Contact",
            "help2": "Frequently Asked Questions (FAQ)",
            "copyright": "© 2025 CuidamiHuella. All rights reserved."
        },
        "eu": {
            "nav_home": "[eu] Hasiera",
            "nav_join": "[eu] Klubera Bat Egin",
            "account_btn": "[eu] Sartu / Nire Kontua",
            "hero_title": "[eu] Adopzioa Aldatu Da. Betirako.",
            // ... Rellenar el resto de traducciones para Euskera
        },
        "ca": {
            "nav_home": "[ca] Inici",
            "nav_join": "[ca] Uneix-te al Club",
            "account_btn": "[ca] Accedir / El Meu Compte",
            "hero_title": "[ca] L'Adopció ha Canviat. Per Sempre.",
            // ... Rellenar el resto de traducciones para Catalán
        },
        "fr": {
            "nav_home": "[fr] Accueil",
            "nav_join": "[fr] Rejoindre le Club",
            "account_btn": "[fr] Connexion / Mon Compte",
            "hero_title": "[fr] L'adoption a Changé. Pour Toujours.",
            // ... Rellenar el resto de traducciones para Francés
        },
        "de": {
            "nav_home": "[de] Startseite",
            "nav_join": "[de] Tritt dem Club bei",
            "account_btn": "[de] Anmelden / Mein Konto",
            "hero_title": "[de] Die Adoption hat sich verändert. Für immer.",
            // ... Rellenar el resto de traducciones para Alemán
        }
    };

    const languageSelect = document.getElementById('languageSelect');
    const translatableElements = document.querySelectorAll('[data-key]');

    const changeLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language "${lang}" not found.`);
            return;
        }

        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Guardar el idioma seleccionado
        localStorage.setItem('selectedLanguage', lang);
    };

    // Evento para cambiar de idioma
    languageSelect.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });

    // Cargar el idioma guardado o usar el del navegador o el por defecto 'es'
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language.split('-')[0];

    if (savedLang && translations[savedLang]) {
        languageSelect.value = savedLang;
        changeLanguage(savedLang);
    } else if (translations[browserLang]) {
        languageSelect.value = browserLang;
        changeLanguage(browserLang);
    } else {
        // Establecer español por defecto si no hay coincidencias
        languageSelect.value = 'es';
        changeLanguage('es');
    }
});
