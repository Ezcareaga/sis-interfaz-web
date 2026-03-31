/* ═══════════════════════════════════════
   Century 21 Nova — Landing Page Scripts
   ═══════════════════════════════════════ */

// ─── Nav scroll effect ───
(function () {
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
})();

// ─── Scroll reveal ───
(function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.service-card, .stat-item, .join-benefits li').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });
})();

// ─── FAQ Widget ───
(function () {
    'use strict';

    /* ── FAQ DATA ── */
    var faqData = {
        empresa: {
            icon: '🏢',
            title: 'Sobre la empresa',
            questions: [
                {
                    q: '¿Que es Century 21 Nova?',
                    a: 'Somos una franquicia de Century 21, la red inmobiliaria mas grande del mundo, operando en Paraguay. Nuestra oficina esta a cargo de Alexandra Villamayor, con presencia en Asuncion y todo el departamento Central.'
                },
                {
                    q: '¿Donde estan ubicados?',
                    a: 'Nuestra oficina esta en Dr. Eusebio Lillo, Casa 1813, Asuncion, Paraguay.'
                },
                {
                    q: '¿En que zonas trabajan?',
                    a: 'Cubrimos Asuncion, Lambare, San Lorenzo, Luque, Fernando de la Mora, Capiata, Mariano Roque Alonso, y localidades del interior como Encarnacion, Ciudad del Este y Areguá, entre otras.'
                },
                {
                    q: '¿Tienen oficina fisica?',
                    a: 'Si, nuestra oficina esta en Dr. Eusebio Lillo, Casa 1813, Asuncion. Podes visitarnos de lunes a viernes de 8:00 a 18:00.'
                }
            ]
        },
        servicios: {
            icon: '🔧',
            title: 'Servicios',
            questions: [
                {
                    q: '¿Como funciona el bot de WhatsApp?',
                    a: 'Escribinos al +595 983 098 703 por WhatsApp. Nova, nuestro asistente virtual, te ayuda a buscar propiedades por zona, tipo y presupuesto, te muestra fotos y detalles, y te conecta con Alexandra si necesitas mas informacion.'
                },
                {
                    q: '¿Es gratis usar el servicio?',
                    a: 'Si, la consulta y busqueda de propiedades es completamente gratuita. Las comisiones aplican solo al concretarse una operacion de compra, venta o alquiler.'
                },
                {
                    q: '¿Trabajan con alquileres y ventas?',
                    a: 'Si, trabajamos con ambas operaciones: compra/venta y alquiler de propiedades residenciales y comerciales.'
                },
                {
                    q: '¿Que tipos de propiedades manejan?',
                    a: 'Casas, departamentos, duplex, terrenos, locales comerciales, oficinas, depositos, y departamentos en pozo. Tenemos mas de 18.000 propiedades activas en nuestra base de datos.'
                },
                {
                    q: '¿Cual es el horario de atencion?',
                    a: 'El bot de WhatsApp funciona las 24 horas, los 7 dias de la semana. La oficina y Alexandra atienden de lunes a viernes de 8:00 a 18:00 (hora Paraguay).'
                },
                {
                    q: '¿Como me contacto?',
                    a: 'Tenes varias opciones:\n• WhatsApp Bot: +595 983 098 703 (24/7)\n• Alexandra Villamayor: +595 986 255 242\n• Email: century21nova.tech@gmail.com\n• Oficina: Dr. Eusebio Lillo, Casa 1813, Asuncion'
                }
            ]
        },
        propiedades: {
            icon: '🏠',
            title: 'Propiedades',
            questions: [
                {
                    q: '¿Cuantas propiedades tienen disponibles?',
                    a: 'Actualmente tenemos mas de 18.000 propiedades activas en nuestra base de datos, provenientes de Century 21, InfoCasas y otros portales inmobiliarios verificados.'
                },
                {
                    q: '¿En que ciudades tienen propiedades?',
                    a: 'Principalmente en Asuncion y el area metropolitana: Lambare, San Lorenzo, Luque, Fernando de la Mora, Capiata, Mariano Roque Alonso. Tambien en ciudades del interior como Encarnacion, Ciudad del Este, Areguá, entre otras.'
                },
                {
                    q: '¿Tienen propiedades en pozo?',
                    a: 'Si, tenemos departamentos en pozo en varias zonas de Asuncion y alrededores. Podes buscarlos especificamente a traves de nuestro bot de WhatsApp.'
                },
                {
                    q: '¿Cual es el rango de precios?',
                    a: 'Nuestras propiedades van desde USD 8.000 (cocheras, depositos) hasta varios millones de dolares (residencias premium). La mayoria de casas y departamentos estan entre USD 50.000 y USD 300.000.'
                },
                {
                    q: '¿Aceptan guaranies y dolares?',
                    a: 'Si, manejamos precios en ambas monedas. Podes buscar propiedades indicando tu presupuesto en guaranies o dolares y nuestro sistema se adapta.'
                },
                {
                    q: '¿De donde son las propiedades?',
                    a: 'Nuestras propiedades provienen de multiples fuentes verificadas: Century 21 Paraguay, InfoCasas, y otros portales inmobiliarios del mercado paraguayo.'
                }
            ]
        },
        proceso: {
            icon: '📋',
            title: 'Proceso',
            questions: [
                {
                    q: '¿Como agendo una visita?',
                    a: 'A traves del bot de WhatsApp podes solicitar una visita para cualquier propiedad que te interese. Alexandra coordina directamente contigo para agendar dia y hora.'
                },
                {
                    q: '¿Puedo hablar con un asesor humano?',
                    a: 'Si, Alexandra Villamayor (duena de Century 21 Nova) atiende personalmente. Podes contactarla al +595 986 255 242 o pedirle al bot que te conecte con ella.'
                },
                {
                    q: '¿Necesito documentos para consultar?',
                    a: 'No, la consulta y busqueda de propiedades es libre y sin compromiso. Los documentos se requieren solo al avanzar con una operacion concreta.'
                },
                {
                    q: '¿Puedo ser asesor o vendedor?',
                    a: 'Si, estamos buscando asesores inmobiliarios para sumarse al equipo. Ofrecemos comisiones competitivas, capacitacion, y el respaldo de la marca Century 21.'
                }
            ]
        },
        confianza: {
            icon: '🔒',
            title: 'Confianza',
            questions: [
                {
                    q: '¿Las propiedades estan verificadas?',
                    a: 'Si, nuestras propiedades provienen de portales inmobiliarios verificados (Century 21, InfoCasas, entre otros) y son actualizadas diariamente. Las publicaciones directas pasan por un proceso de validacion.'
                },
                {
                    q: '¿Century 21 es una franquicia internacional?',
                    a: 'Si, Century 21 opera en 84 paises con mas de 14.000 oficinas. Es la red inmobiliaria mas grande y reconocida del mundo, fundada en 1971.'
                },
                {
                    q: '¿Quien es la duena de C21 Nova?',
                    a: 'Alexandra Villamayor es la titular y duena de Century 21 Nova Paraguay (COVIERTE E.A.S. UNIPERSONAL, RUC: 80159461-8). Atiende personalmente a los clientes.'
                },
                {
                    q: '¿Tienen garantia de transaccion?',
                    a: 'Todas las operaciones se realizan con el respaldo legal y los estandares de Century 21 Internacional. Te acompanamos con asesoramiento legal durante todo el proceso.'
                }
            ]
        }
    };

    /* ── Keyword Q&A data ── */
    var keywordResponses = [
        {
            keywords: ['horario', 'hora', 'atencion', 'abierto', 'abre', 'cierra'],
            q: '¿Cual es el horario de atencion?',
            a: 'El bot de WhatsApp funciona las 24 horas, los 7 dias. La oficina y Alexandra atienden de lunes a viernes de 8:00 a 18:00 (hora Paraguay).'
        },
        {
            keywords: ['ubicacion', 'donde', 'oficina', 'direccion', 'lugar', 'queda'],
            q: '¿Donde estan ubicados?',
            a: 'Nuestra oficina esta en Dr. Eusebio Lillo, Casa 1813, Asuncion, Paraguay. Podes visitarnos de lunes a viernes de 8:00 a 18:00.'
        },
        {
            keywords: ['precio', 'costo', 'cuanto', 'rango', 'valor', 'vale'],
            q: '¿Cual es el rango de precios?',
            a: 'Nuestras propiedades van desde USD 8.000 (cocheras, depositos) hasta varios millones de dolares. La mayoria de casas y departamentos estan entre USD 50.000 y USD 300.000. Aceptamos guaranies y dolares.'
        },
        {
            keywords: ['gratis', 'cobran', 'pagar', 'comision', 'cuesta', 'pago'],
            q: '¿Es gratis el servicio?',
            a: 'La consulta y busqueda de propiedades es completamente gratuita. Las comisiones aplican solo al concretarse una operacion de compra, venta o alquiler.'
        },
        {
            keywords: ['tipo', 'casa', 'departamento', 'terreno', 'local', 'propiedad', 'duplex'],
            q: '¿Que tipos de propiedades manejan?',
            a: 'Casas, departamentos, duplex, terrenos, locales comerciales, oficinas y departamentos en pozo. Tenemos mas de 18.000 propiedades activas.'
        },
        {
            keywords: ['visita', 'agendar', 'ver', 'recorrer', 'conocer', 'agenda'],
            q: '¿Como agendo una visita?',
            a: 'Escribinos por WhatsApp al +595 983 098 703. Alexandra coordina directamente dia y hora para la visita.'
        },
        {
            keywords: ['contacto', 'asesor', 'humano', 'alexandra', 'hablar', 'llamar', 'telefono', 'email'],
            q: '¿Como contacto a un asesor?',
            a: 'Alexandra Villamayor (dueña de C21 Nova): +595 986 255 242.\nEmail: century21nova.tech@gmail.com\nBot WhatsApp 24/7: +595 983 098 703'
        }
    ];

    function matchKeyword(input) {
        var text = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        var bestMatch = null;
        var bestScore = 0;
        for (var i = 0; i < keywordResponses.length; i++) {
            var score = 0;
            for (var j = 0; j < keywordResponses[i].keywords.length; j++) {
                if (text.indexOf(keywordResponses[i].keywords[j]) !== -1) {
                    score++;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = keywordResponses[i];
            }
        }
        return bestMatch;
    }

    function escapeForBubble(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
    }

    /* ── Widget controller ── */
    var faqWidget = {
        panel: null,
        body: null,
        toggleBtn: null,
        isOpen: false,
        chatMode: false,

        init: function () {
            this.panel = document.getElementById('faq-panel');
            this.body = document.getElementById('faq-body');
            this.toggleBtn = document.getElementById('faq-toggle-btn');

            var self = this;

            this.toggleBtn.addEventListener('click', function () {
                self.toggle();
            });

            document.getElementById('faq-close-btn').addEventListener('click', function () {
                self.close();
            });

            // Close on Escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && self.isOpen) {
                    self.close();
                }
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (
                    self.isOpen &&
                    !self.panel.contains(e.target) &&
                    !self.toggleBtn.contains(e.target)
                ) {
                    self.close();
                }
            });

            // Prevent clicks inside panel from reaching the document-level close handler
            // (fixes "click outside" firing before innerHTML update completes)
            self.panel.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            // Render home on first open
            this.showHome();

            // Footer "Inicio" button — always goes to home
            document.getElementById('faq-home-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                faqWidget.showHome();
            });

            // Text input handlers
            document.getElementById('faq-send').addEventListener('click', function (e) {
                e.stopPropagation();
                faqWidget.handleInput();
            });
            document.getElementById('faq-input').addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.stopPropagation();
                    faqWidget.handleInput();
                }
            });
            // Prevent input clicks from closing panel
            document.getElementById('faq-input').addEventListener('click', function (e) {
                e.stopPropagation();
            });
        },

        toggle: function () {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        open: function () {
            this.isOpen = true;
            this.panel.classList.add('faq-panel-visible');
            this.panel.setAttribute('aria-hidden', 'false');
            this.toggleBtn.classList.add('faq-open');
            this.toggleBtn.setAttribute('aria-expanded', 'true');
            this.toggleBtn.setAttribute('aria-label', 'Cerrar asistente de preguntas frecuentes');
        },

        close: function () {
            this.isOpen = false;
            this.panel.classList.remove('faq-panel-visible');
            this.panel.setAttribute('aria-hidden', 'true');
            this.toggleBtn.classList.remove('faq-open');
            this.toggleBtn.setAttribute('aria-expanded', 'false');
            this.toggleBtn.setAttribute('aria-label', 'Abrir asistente de preguntas frecuentes');
        },

        showHome: function () {
            this.chatMode = false;
            var self = this;
            var html = '<div class="faq-view">';
            html += '<p class="faq-greeting"><strong>Hola.</strong> ¿En que te puedo ayudar?</p>';

            var keys = ['empresa', 'servicios', 'propiedades', 'proceso', 'confianza'];
            keys.forEach(function (key) {
                var sec = faqData[key];
                html += '<button class="faq-section-btn" data-section="' + key + '" aria-label="Ver preguntas sobre ' + sec.title + '">';
                html += '<span class="faq-section-icon" aria-hidden="true">' + sec.icon + '</span>';
                html += '<span>' + sec.title + '</span>';
                html += '<svg class="faq-section-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>';
                html += '</button>';
            });

            html += '</div>';
            this.render(html);

            // Bind after render
            var buttons = this.body.querySelectorAll('.faq-section-btn');
            buttons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    self.showSection(btn.getAttribute('data-section'));
                });
            });
        },

        showSection: function (key) {
            var self = this;
            var sec = faqData[key];
            if (!sec) return;

            var html = '<div class="faq-view">';
            html += '<button class="faq-back" id="faq-back-home" aria-label="Volver al menu principal">';
            html += '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
            html += 'Volver</button>';
            html += '<div class="faq-section-heading">' + sec.icon + ' ' + sec.title + '</div>';

            sec.questions.forEach(function (item, idx) {
                html += '<button class="faq-question-btn" data-section="' + key + '" data-index="' + idx + '" aria-label="Ver respuesta: ' + item.q.replace(/"/g, '&quot;') + '">';
                html += item.q;
                html += '</button>';
            });

            html += '</div>';
            this.render(html);

            document.getElementById('faq-back-home').addEventListener('click', function () {
                self.showHome();
            });

            var buttons = this.body.querySelectorAll('.faq-question-btn');
            buttons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    self.showAnswer(
                        btn.getAttribute('data-section'),
                        parseInt(btn.getAttribute('data-index'), 10)
                    );
                });
            });
        },

        showAnswer: function (sectionKey, qIndex) {
            var self = this;
            var sec = faqData[sectionKey];
            if (!sec) return;
            var item = sec.questions[qIndex];
            if (!item) return;

            var html = '<div class="faq-view">';
            html += '<button class="faq-back" id="faq-back-section" aria-label="Volver a ' + sec.title + '">';
            html += '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
            html += 'Volver</button>';
            html += '<div class="faq-answer-title">' + item.q + '</div>';
            html += '<div class="faq-answer">' + this.escapeHtml(item.a) + '</div>';

            if (item.cta) {
                html += '<a class="faq-cta" href="' + item.cta.url + '" target="_blank" rel="noopener noreferrer">' + item.cta.text + '</a>';
            }

            html += '</div>';
            this.render(html);

            document.getElementById('faq-back-section').addEventListener('click', function () {
                self.showSection(sectionKey);
            });
        },

        showChat: function (userText, botResponse) {
            // Switch body to chat mode if not already
            if (!this.chatMode) {
                this.chatMode = true;
                this.body.innerHTML = '<div class="faq-chat-history" id="faq-chat-history"></div>';
                // Add initial bot greeting
                var history = document.getElementById('faq-chat-history');
                history.innerHTML = '<div class="faq-bubble faq-bubble-bot">Hola! Podes navegar por secciones con el boton <strong>Inicio</strong>, o escribime tu consulta aca abajo.</div>';
            }
            var history = document.getElementById('faq-chat-history');
            // Add user bubble
            history.innerHTML += '<div class="faq-bubble faq-bubble-user">' + escapeForBubble(userText) + '</div>';
            // Add bot bubble
            history.innerHTML += '<div class="faq-bubble faq-bubble-bot">' + escapeForBubble(botResponse) + '</div>';
            // Scroll to bottom
            this.body.scrollTop = this.body.scrollHeight;
        },

        handleInput: function () {
            var input = document.getElementById('faq-input');
            var text = input.value.trim();
            if (!text) return;
            input.value = '';

            var match = matchKeyword(text);
            if (match) {
                this.showChat(text, match.a);
            } else {
                this.showChat(text, 'No entendi tu consulta. Podes reformularla o usar el boton Inicio para navegar por las secciones de preguntas frecuentes.');
            }
        },

        render: function (html) {
            this.body.innerHTML = html;
            this.body.scrollTop = 0;
        },

        escapeHtml: function (str) {
            var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
            return str.replace(/[&<>"']/g, function (c) { return map[c]; });
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        faqWidget.init();
    });
})();
