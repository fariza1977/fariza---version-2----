<?php
/*
Template Name: Plantilla Únete al Club
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Estilos Personalizados Integrados -->
    <style>
        :root {
            --primary-color: #8b5cf6; /* violet-500 */
            --primary-hover: #7c3aed; /* violet-600 */
            --text-dark: #5b21b6;     /* violet-800 - para títulos */
            --text-medium: #374151;   /* gray-700 */
            --bg-light: #fdf2f8;      /* pink-50 */
            --footer-bg: #eff6ff;     /* blue-50 */
            --shadow-light: rgba(139, 92, 246, 0.1);
            --shadow-medium: rgba(139, 92, 246, 0.2);
        }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-medium);
        }
        h1, h2, h3, h4 { color: var(--text-dark); }
        .bg-blue-600 { background-color: var(--primary-color) !important; }
        .bg-blue-600:hover { background-color: var(--primary-hover) !important; }
        .text-blue-600 { color: var(--primary-color) !important; }
        .border-blue-600 { border-color: var(--primary-color) !important; }
        #footer { background-color: var(--footer-bg); }
        footer h3 { color: var(--text-dark); }
        footer a { color: var(--primary-color); }
        footer a:hover { color: var(--primary-hover); }
        footer .social-links a { color: var(--text-medium); }
        footer .social-links a:hover { color: var(--primary-color); }
    </style>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

    <!-- Header (Similar al de las otras páginas para consistencia) -->
    <header class="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center space-x-2 text-2xl font-bold text-violet-800">
                    <i class="fas fa-paw text-violet-500"></i>
                    <span>CuidaMiHuella</span>
                </a>
                <nav class="hidden md:flex space-x-8">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-gray-600 font-medium">Inicio</a>
                    <!-- El enlace a "Únete al Club" ahora puede apuntar a esta misma página -->
                    <a href="<?php echo esc_url( get_permalink() ); ?>" class="text-violet-600 font-bold">Únete al Club</a>
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>#shelters" class="text-gray-600 font-medium">Para Protectoras</a>
                </nav>
                 <div class="flex items-center space-x-4">
                    <a href="#" class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition">Acceder / Mi Cuenta</a>
                    <button id="mobileMenuBtn" class="md:hidden text-2xl text-gray-700">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section para la página del Club -->
        <section class="relative bg-violet-200 py-20 md:py-32">
            <div class="absolute inset-0">
                <img src="https://placehold.co/1920x800/e9d5ff/8b5cf6?text=Comunidad+Feliz" alt="Persona feliz abrazando a su perro adoptado" class="w-full h-full object-cover opacity-30">
            </div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 class="text-4xl md:text-6xl font-extrabold text-violet-900 mb-4">Bienvenido al Club CuidaMiHuella</h1>
                <p class="max-w-3xl mx-auto text-lg md:text-xl text-violet-800">Más que una membresía, es una comunidad para los que aman de verdad a sus animales. Descubre todo lo que hemos preparado para ti y tu compañero.</p>
            </div>
        </section>

        <!-- Sección de Planes Detallada -->
        <section class="py-16 md:py-24" id="membership-details">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold">Elige tu camino para entrar</h2>
                    <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Tenemos un plan perfecto para ti, tanto si estás a punto de adoptar como si ya tienes un amigo peludo en casa.</p>
                </div>

                <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
                    
                    <!-- Tarjeta Socio Fundador -->
                    <div class="bg-white p-8 rounded-2xl shadow-2xl border-4 border-violet-500 flex flex-col">
                        <div class="text-center">
                            <i class="fas fa-star text-5xl text-amber-400 mb-4"></i>
                            <h3 class="text-3xl font-extrabold uppercase tracking-wider">Socio Fundador</h3>
                            <p class="text-gray-600 my-4 text-lg">Para los que inician su viaje adoptando con nosotros.</p>
                            <img src="https://placehold.co/600x400/f3e8ff/5b21b6?text=Inicia+tu+Viaje" alt="Una persona recibiendo a un cachorro con alegría" class="rounded-lg my-6">
                            <div class="text-6xl font-extrabold my-4">89 €</div>
                            <p class="text-gray-500 mb-6 text-sm">Pago único para iniciar tu 'Experiencia de Acogida'</p>
                        </div>
                        <ul class="space-y-4 text-left mb-8 flex-grow">
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span><strong>Acceso a la "Experiencia de Acogida":</strong> Convive 3 semanas con tu futuro compañero antes de decidir.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span><strong>Pack de Bienvenida Total:</strong> Incluye seguro de RC, accidentes y primera desparasitación.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span><strong>Acceso COMPLETO y VITALICIO</strong> al Club, sus descuentos y foros de expertos.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span>Estatus verificado en la <strong>"Cadena de Favores"</strong> desde el primer día.</span></li>
                        </ul>
                        <a href="#" class="w-full mt-auto text-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-xl shadow-lg">Comenzar mi Adopción</a>
                    </div>

                    <!-- Tarjeta Socio Amigo -->
                    <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 flex flex-col">
                         <div class="text-center">
                            <i class="fas fa-user-friends text-5xl text-violet-400 mb-4"></i>
                            <h3 class="text-3xl font-extrabold uppercase tracking-wider">Socio Amigo</h3>
                            <p class="text-gray-600 my-4 text-lg">Para los que ya tienen mascota y quieren darle lo mejor.</p>
                            <img src="https://placehold.co/600x400/f5f3ff/5b21b6?text=Dale+lo+Mejor" alt="Un gato y un perro jugando juntos en un sofá" class="rounded-lg my-6">
                            <div class="text-6xl font-extrabold my-4">39,90 €</div>
                            <p class="text-gray-500 mb-6 text-sm">Cuota de inscripción (renovación anual 29,90€)</p>
                        </div>
                        <ul class="space-y-4 text-left mb-8 flex-grow">
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span>Acceso a nuestra <strong>Red de Descuentos Exclusiva</strong> en clínicas, tiendas y educadores.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span>Participa en <strong>Foros privados con Veterinarios</strong> y expertos en comportamiento animal.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span>Forma parte de una <strong>comunidad activa</strong> que organiza quedadas y comparte consejos.</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i><span>Posibilidad de acceder a la <strong>"Cadena de Favores"</strong> tras verificación.</span></li>
                        </ul>
                        <a href="#" class="w-full mt-auto text-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-xl shadow-lg">Unirme como Socio Amigo</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer id="footer" class="text-gray-700">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div class="col-span-2 md:col-span-1">
                    <h3 class="text-xl font-bold mb-4">CuidaMiHuella</h3>
                    <p class="mb-4">Cuidamos de su huella.</p>
                    <div class="social-links flex space-x-4">
                        <a href="#" class="text-xl"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-xl"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-xl"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-xl"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 uppercase tracking-wider">Navegación</h3>
                    <ul class="space-y-2">
                        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Inicio</a></li>
                        <li><a href="#">Únete al Club</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>#shelters">Para Protectoras</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 uppercase tracking-wider">Legal</h3>
                    <ul class="space-y-2">
                        <li><a href="#">Aviso Legal</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Política de Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 uppercase tracking-wider">Ayuda</h3>
                    <ul class="space-y-2">
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-200 pt-6 text-center text-sm">
                <p>© 2025 CuidamiHuella. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    });
    </script>
    <?php wp_footer(); ?>
</body>
</html>
