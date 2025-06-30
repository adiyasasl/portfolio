document.addEventListener('DOMContentLoaded', () => {
    // --- Language Data ---
    const translations = {
        en: {
            headerTitle: "My Game Portfolio",
            navHome: "Home",
            navGames: "Games",
            navContact: "Contact",
            footerText: "&copy; 2025 My Game Portfolio. All rights reserved.",
            playNowButton: "Play Now",
            games: [
                {
                    name: "Space Explorer",
                    image: "image/slimyjump.jpg",
                    description: "A thrilling arcade game where you navigate a spaceship through asteroid fields and collect power-ups.",
                    link: "https://www.google.com"
                },
                {
                    name: "Mystery Mansion",
                    image: "https://via.placeholder.com/400x250/33C1FF/FFFFFF?text=Mystery+Mansion",
                    description: "An intriguing puzzle-adventure game set in a mysterious old mansion, full of secrets to uncover.",
                    link: "games/mystery-mansion.html"
                },
                {
                    name: "Zombie Survival",
                    image: "https://via.placeholder.com/400x250/7A33FF/FFFFFF?text=Zombie+Survival",
                    description: "A fast-paced action game where you fight hordes of zombies and try to survive the apocalypse.",
                    link: "games/zombie-survival.html"
                },
                {
                    name: "Fantasy Quest",
                    image: "https://via.placeholder.com/400x250/FF33CC/FFFFFF?text=Fantasy+Quest",
                    description: "Embark on an epic RPG adventure, explore mystical lands, and battle mythical creatures.",
                    link: "games/fantasy-quest.html"
                }
            ]
        },
        id: {
            headerTitle: "Portofolio Game Saya",
            navHome: "Beranda",
            navGames: "Game",
            navContact: "Kontak",
            footerText: "&copy; 2025 Portofolio Game Saya. Hak cipta dilindungi.",
            playNowButton: "Main Sekarang",
            games: [
                {
                    name: "Penjelajah Angkasa",
                    image: "https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Penjelajah+Angkasa",
                    description: "Game arkade mendebarkan di mana Anda mengemudikan pesawat ruang angkasa melalui ladang asteroid dan mengumpulkan peningkatan kekuatan.",
                    link: "https://www.google.com"
                },
                {
                    name: "Rumah Misteri",
                    image: "https://via.placeholder.com/400x250/33C1FF/FFFFFF?text=Rumah+Misteri",
                    description: "Game petualangan teka-teki yang menarik berlatar rumah tua misterius, penuh rahasia untuk diungkap.",
                    link: "games/mystery-mansion.html"
                },
                {
                    name: "Bertahan Hidup dari Zombi",
                    image: "https://via.placeholder.com/400x250/7A33FF/FFFFFF?text=Bertahan+Hidup+dari+Zombi",
                    description: "Game aksi cepat di mana Anda melawan gerombolan zombi dan mencoba bertahan dari kiamat.",
                    link: "games/zombie-survival.html"
                },
                {
                    name: "Petualangan Fantasi",
                    image: "https://via.placeholder.com/400x250/FF33CC/FFFFFF?text=Petualangan+Fantasi",
                    link: "games/fantasy-quest.html",
                    description: "Mulai petualangan RPG epik, jelajahi tanah mistis, dan lawan makhluk mitos."
                }
            ]
        }
    };

    let currentLang = 'en'; // Default language

    // --- DOM Elements ---
    const headerTitle = document.getElementById('header-title');
    const footerText = document.getElementById('footer-text');
    const gameCardsContainer = document.getElementById('game-cards-container');
    const langEnBtn = document.getElementById('lang-en');
    const langIdBtn = document.getElementById('lang-id');

    // Desktop/Mobile Navigation links (now one set)
    const navHome = document.getElementById('nav-home');
    const navGames = document.getElementById('nav-games');
    const navContact = document.getElementById('nav-contact');

    // Hamburger Menu Elements
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navElementsCollapse = document.getElementById('nav-elements-collapse'); // Renamed from navbarCollapse / mobileMenuOverlay


    // --- Functions ---
    function updateContent() {
        const langData = translations[currentLang];

        // Update static text elements
        headerTitle.textContent = langData.headerTitle;
        footerText.innerHTML = langData.footerText;

        // Update Navbar links (both desktop and mobile use these IDs)
        if (navHome) navHome.textContent = langData.navHome;
        if (navGames) navGames.textContent = langData.navGames;
        if (navContact) navContact.textContent = langData.navContact;

        // Clear existing cards
        gameCardsContainer.innerHTML = '';

        // Generate game cards based on current language data
        langData.games.forEach(game => {
            const card = document.createElement('div');
            card.classList.add('game-card');

            card.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h2>${game.name}</h2>
                <p>${game.description}</p>
                <div class="button-container">
                    <button onclick="window.open('${game.link}', '_blank')">${langData.playNowButton}</button>
                </div>
            `;
            gameCardsContainer.appendChild(card);
        });

        // Update active class on language buttons
        langEnBtn.classList.remove('active');
        langIdBtn.classList.remove('active');
        if (currentLang === 'en') {
            langEnBtn.classList.add('active');
        } else {
            langIdBtn.classList.add('active');
        }
    }

    // Function to close the mobile menu and reset hamburger icon
    function closeMobileMenu() {
        if (navElementsCollapse.classList.contains('active')) {
            navElementsCollapse.classList.remove('active');
            hamburgerMenu.querySelector('i').classList.remove('fa-times');
            hamburgerMenu.querySelector('i').classList.add('fa-bars');
        }
    }

    // --- Event Listeners ---
    langEnBtn.addEventListener('click', () => {
        if (currentLang !== 'en') {
            currentLang = 'en';
            updateContent();
            closeMobileMenu(); // Close menu after language switch
        }
    });

    langIdBtn.addEventListener('click', () => {
        if (currentLang !== 'id') {
            currentLang = 'id';
            updateContent();
            closeMobileMenu(); // Close menu after language switch
        }
    });

    // Toggle hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        navElementsCollapse.classList.toggle('active');
        hamburgerMenu.querySelector('i').classList.toggle('fa-bars');
        hamburgerMenu.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu(); // Close menu after a nav link is clicked
        });
    });

    // Initial content load
    updateContent();
});