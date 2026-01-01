/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #0A0A0B;
    --bg-secondary: rgba(255, 255, 255, 0.05);
    --bg-glass: rgba(255, 255, 255, 0.1);
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent-orange: #FF6B35;
    --accent-orange-dark: #E85A2B;
    --accent-gradient: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    --border-radius: 20px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
}

.header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.header__logo {
    flex-shrink: 0;
}

.header__title {
    font-size: 1.8rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
}

.header__subtitle {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Navigation */
.nav__list {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav__link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    padding: 0.5rem 0;
}

.nav__link:hover,
.nav__link--active {
    color: var(--text-primary);
}

.nav__link--active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-gradient);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition);
}

/* Cart Button */
.header__cart {
    position: relative;
}

.cart-button {
    background: var(--accent-gradient);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: var(--transition);
    position: relative;
}

.cart-button:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

.cart-button__count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #FF0000;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
}

/* Main Content */
.main {
    min-height: calc(100vh - 80px);
}

.view {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
    padding: 4rem 0;
}

.view--active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.view__title {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Hero Section */
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    overflow: hidden;
}

.hero__content {
    text-align: center;
    z-index: 2;
    max-width: 800px;
}

.hero__title {
    font-size: 4rem;
    margin-bottom: 1rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero__subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.hero__button {
    background: var(--accent-gradient);
    border: none;
    padding: 1rem 3rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero__button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.hero__pizza {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.pizza-float {
    font-size: 15rem;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    animation: float 6s ease-in-out infinite;
    opacity: 0.3;
}

@keyframes float {
    0%, 100% {
        transform: translateY(-50%) translateX(0);
    }
    50% {
        transform: translateY(-60%) translateX(20px);
    }
}

/* Menu Grid */
.menu-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

/* Menu Categories */
.menu-category {
    margin-bottom: 2rem;
}

.menu-category__title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
    text-align: center;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.menu-category__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    align-items: stretch;
}

.menu-card {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.menu-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 107, 53, 0.5);
}

.menu-card__image-wrapper {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
    background: var(--bg-secondary);
    flex-shrink: 0;
}

.menu-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.menu-card:hover .menu-card__image {
    transform: scale(1.1);
}

.menu-card__discount-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--accent-gradient);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 10;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.menu-card__content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.menu-card__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.menu-card__description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    flex-grow: 1;
}

.menu-card__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
    flex-shrink: 0;
}

.menu-card__price {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-shrink: 0;
}

.menu-card__old-price {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: var(--text-secondary);
    opacity: 0.6;
}

.menu-card__new-price {
    font-size: 2rem;
    font-weight: bold;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.menu-card__button {
    background: var(--accent-gradient);
    border: none;
    padding: 0.75rem;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    text-transform: uppercase;
    margin-top: auto;
}

.menu-card__button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

/* Promotions Grid */
.promotions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    align-items: stretch;
}

.promotion-card {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 107, 53, 0.3);
    border-radius: var(--border-radius);
    padding: 2rem;
    position: relative;
    transition: var(--transition);
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.promotion-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
}

.promotion-card__badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: var(--accent-gradient);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    flex-shrink: 0;
}

.promotion-card__title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    flex-shrink: 0;
}

.promotion-card__description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.promotion-card__price {
    margin-bottom: 1.5rem;
    flex-shrink: 0;
}

.promotion-card__old-price {
    text-decoration: line-through;
    color: var(--text-secondary);
    margin-right: 1rem;
}

.promotion-card__new-price {
    font-size: 2rem;
    font-weight: bold;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.promotion-card__button {
    background: var(--accent-gradient);
    border: none;
    padding: 1rem 2rem;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    width: 100%;
    margin-top: auto;
    text-transform: uppercase;
}

.promotion-card__button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

/* Delivery Section */
.delivery-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.delivery-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.delivery-info__item {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    padding: 2rem;
}

.delivery-info__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.delivery-info__text {
    color: var(--text-secondary);
}

.delivery-info__address {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-primary);
    font-weight: 500;
}

.delivery-map {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.map {
    width: 100%;
    height: 400px;
    background: var(--bg-secondary);
}

/* Contact Form */
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    padding: 3rem;
}

.contact-form__group {
    margin-bottom: 2rem;
}

.contact-form__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.contact-form__input,
.contact-form__textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
    transition: var(--transition);
}

.contact-form__input:focus,
.contact-form__textarea:focus {
    outline: none;
    border-color: var(--accent-orange);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.contact-form__textarea {
    resize: vertical;
}

.contact-form__error {
    display: block;
    color: #FF4444;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    min-height: 20px;
}

.contact-form__submit {
    width: 100%;
    background: var(--accent-gradient);
    border: none;
    padding: 1rem;
    color: white;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
}

.contact-form__submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

/* Footer */
.footer {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4rem 0 2rem;
    margin-top: 4rem;
}

.footer__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer__section {
    display: flex;
    flex-direction: column;
}

.footer__title {
    font-size: 1.8rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.footer__subtitle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
}

.footer__description {
    color: var(--text-secondary);
    line-height: 1.6;
}

.footer__heading {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.footer__contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer__contact-item {
    color: var(--text-secondary);
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.6;
}

.footer__icon {
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-top: 2px;
}

.footer__link {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
}

.footer__link:hover {
    color: var(--accent-orange);
}

.footer__schedule {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer__schedule-item {
    color: var(--text-secondary);
    line-height: 1.6;
}

.footer__nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.footer__nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
    width: fit-content;
}

.footer__nav-link:hover {
    color: var(--accent-orange);
    transform: translateX(5px);
}

.footer__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    text-align: center;
}

.footer__copyright {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Cart Sidebar */
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 998;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cart-overlay--active {
    display: block;
    opacity: 1;
}

.cart-sidebar {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    height: 100%;
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 999;
    display: flex;
    flex-direction: column;
    transition: right 0.3s ease;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.cart-sidebar--active {
    right: 0;
}

.cart-sidebar__header {
    padding: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-sidebar__title {
    font-size: 1.5rem;
}

.cart-sidebar__close {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--transition);
}

.cart-sidebar__close:hover {
    background: rgba(255, 255, 255, 0.1);
}

.cart-sidebar__content {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-bottom: 1rem;
}

.cart-item__image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
}

.cart-item__info {
    flex: 1;
}

.cart-item__name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.cart-item__discount {
    display: inline-block;
    background: var(--accent-gradient);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: bold;
}

.cart-item__price {
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cart-item__old-price {
    text-decoration: line-through;
    color: var(--text-secondary);
    opacity: 0.6;
    font-size: 0.85rem;
}

.cart-item__quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
}

.cart-item__qty-button {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--text-primary);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
}

.cart-item__qty-button:hover {
    background: var(--accent-orange);
}

.cart-item__qty-value {
    min-width: 30px;
    text-align: center;
}

.cart-item__total {
    margin-top: 0.5rem;
    font-weight: 600;
    color: var(--accent-orange);
    font-size: 0.95rem;
}

.cart-item__remove {
    background: transparent;
    border: none;
    color: #FF4444;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem;
    transition: var(--transition);
    align-self: flex-start;
}

.cart-item__remove:hover {
    transform: scale(1.2);
}

.cart-sidebar__footer {
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cart-sidebar__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.cart-sidebar__total-price {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cart-sidebar__checkout {
    width: 100%;
    background: var(--accent-gradient);
    border: none;
    padding: 1rem;
    color: white;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
}

.cart-sidebar__checkout:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.cart-empty {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary);
}

/* Toast Notifications */
.toast-container {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.toast {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    min-width: 300px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.toast--success {
    border-left: 4px solid #4CAF50;
}

.toast--error {
    border-left: 4px solid #FF4444;
}

@keyframes slideIn {
    from {
        transform: translateX(400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-glass);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav--active {
        display: block;
    }

    .nav__list {
        flex-direction: column;
        padding: 1rem;
        gap: 0;
    }

    .nav__link {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .menu-toggle {
        display: flex;
    }

    .hero__title {
        font-size: 2.5rem;
    }

    .hero__subtitle {
        font-size: 1.2rem;
    }

    .pizza-float {
        font-size: 8rem;
        right: 5%;
    }

    .view__title {
        font-size: 2rem;
    }

    .menu-category__grid,
    .promotions-grid {
        grid-template-columns: 1fr;
    }

    .menu-category__title {
        font-size:            });
        });

        // Мобильное меню
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('nav--active');
            });
        }

        // Кнопка "Заказать сейчас"
        const heroButton = document.querySelector('.hero__button');
        if (heroButton) {
            heroButton.addEventListener('click', () => {
                this.showView('menu');
                navLinks.forEach(l => {
                    l.classList.remove('nav__link--active');
                    if (l.getAttribute('data-view') === 'menu') {
                        l.classList.add('nav__link--active');
                    }
                });
            });
        }
    },

    // Навигация в footer
    setupFooterNavigation() {
        const footerNavLinks = document.querySelectorAll('.footer__nav-link');
        const navLinks = document.querySelectorAll('.nav__link');

        footerNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = link.getAttribute('data-view');
                this.showView(viewName);
                
                // Обновление активной ссылки в основной навигации
                navLinks.forEach(l => {
                    l.classList.remove('nav__link--active');
                    if (l.getAttribute('data-view') === viewName) {
                        l.classList.add('nav__link--active');
                    }
                });

                // Прокрутка вверх
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    },

    // Переключение views
    showView(viewName) {
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            view.classList.remove('view--active');
        });
        
        const targetView = document.getElementById(viewName);
        if (targetView) {
            targetView.classList.add('view--active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    // Данные меню с изображениями
    menuData: [
        {
            id: 1,
            name: 'Маргарита',
            price: 590,
            description: 'Томатный соус, моцарелла, базилик',
            calories: 250,
            proteins: 12,
            fats: 8,
            carbs: 35,
            image: 'images/pizza1.jpg'
        },
        {
            id: 2,
            name: 'Пепперони',
            price: 690,
            description: 'Томатный соус, моцарелла, пепперони',
            calories: 320,
            proteins: 15,
            fats: 14,
            carbs: 38,
            image: 'images/pizza2.jpg'
        },
        {
            id: 3,
            name: 'Четыре сыра',
            price: 790,
            description: 'Моцарелла, горгонзола, пармезан, чеддер',
            calories: 380,
            proteins: 20,
            fats: 22,
            carbs: 28,
            image: 'images/pizza3.jpg'
        },
        {
            id: 4,
            name: 'Гавайская',
            price: 720,
            description: 'Томатный соус, моцарелла, ветчина, ананасы',
            calories: 290,
            proteins: 14,
            fats: 10,
            carbs: 42,
            image: 'images/pizza4.jpg'
        },
        {
            id: 5,
            name: 'Барбекю',
            price: 850,
            description: 'Соус барбекю, моцарелла, курица, лук, перец',
            calories: 350,
            proteins: 18,
            fats: 12,
            carbs: 40,
            image: 'images/pizza5.jpg'
        },
        {
            id: 6,
            name: 'Мясная',
            price: 920,
            description: 'Томатный соус, моцарелла, ветчина, пепперони, бекон',
            calories: 420,
            proteins: 22,
            fats: 18,
            carbs: 36,
            image: 'images/pizza6.jpg'
        },
        {
            id: 7,
            name: 'Вегетарианская',
            price: 650,
            description: 'Томатный соус, моцарелла, грибы, перец, помидоры, оливки',
            calories: 240,
            proteins: 10,
            fats: 8,
            carbs: 38,
            image: 'images/pizza7.jpg'
        },
        {
            id: 8,
            name: 'Морская',
            price: 980,
            description: 'Соус бешамель, моцарелла, креветки, кальмары, мидии',
            calories: 310,
            proteins: 25,
            fats: 11,
            carbs: 28,
            image: 'images/pizza8.jpg'
        }
    ],

    // Настройка меню
    setupMenu() {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        menuGrid.innerHTML = this.menuData.map(item => `
            <div class="menu-card">
                <div class="menu-card__image-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="menu-card__image" 
                         onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop';">
                </div>
                <div class="menu-card__content">
                    <h3 class="menu-card__title">${item.name}</h3>
                    <p class="menu-card__description">${item.description}</p>
                    <div class="menu-card__info">
                        <span>${item.calories} ккал</span>
                        <span>Б: ${item.proteins}г Ж: ${item.fats}г У: ${item.carbs}г</span>
                    </div>
                    <div class="menu-card__price">${item.price}₽</div>
                    <button class="menu-card__button" data-id="${item.id}">В корзину</button>
                </div>
            </div>
        `).join('');

        // Обработчики кнопок "В корзину"
        menuGrid.querySelectorAll('.menu-card__button').forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.getAttribute('data-id'));
                this.addToCart(itemId);
            });
        });
    },

    // Настройка акций
    setupPromotions() {
        const promotionButtons = document.querySelectorAll('.promotion-card__button');
        
        promotionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Переход на страницу меню
                this.showView('menu');
                
                // Обновление активной ссылки навигации
                const navLinks = document.querySelectorAll('.nav__link');
                navLinks.forEach(l => l.classList.remove('nav__link--active'));
                const menuLink = document.querySelector('.nav__link[data-view="menu"]');
                if (menuLink) menuLink.classList.add('nav__link--active');

                // Прокрутка к началу меню
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);

                // Показываем уведомление в зависимости от акции
                if (index === 0) {
                    // Комбо на двоих - добавляем 2 популярные пиццы
                    this.showToast('Переход в меню для оформления комбо-набора', 'success');
                } else if (index === 1) {
                    // Пицца дня - добавляем случайную пиццу со скидкой
                    const randomPizzaId = Math.floor(Math.random() * this.menuData.length) + 1;
                    this.addToCart(randomPizzaId);
                    this.showToast('Пицца дня добавлена в корзину со скидкой!', 'success');
                } else if (index === 2) {
                    // Бесплатная доставка
                    this.showToast('При заказе от 1000₽ доставка бесплатно!', 'success');
                }
            });
        });
    },

    // Корзина
    cart: [],

    // Загрузка корзины из localStorage
    loadCart() {
        const savedCart = localStorage.getItem('sliceAndGoCart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    },

    // Сохранение корзины в localStorage
    saveCart() {
        localStorage.setItem('sliceAndGoCart', JSON.stringify(this.cart));
    },

    // Добавление в корзину
    addToCart(itemId) {
        const item = this.menuData.find(p => p.id === itemId);
        if (!item) return;

        const existingItem = this.cart.find(p => p.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...item, quantity: 1 });
        }

        this.saveCart();
        this.updateCartCount();
        this.showToast('Товар добавлен в корзину!', 'success');
    },

    // Удаление из корзины
    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
        this.showToast('Товар удален из корзины', 'success');
    },

    // Изменение количества
    updateQuantity(itemId, delta) {
        const item = this.cart.find(p => p.id === itemId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeFromCart(itemId);
        } else {
            this.saveCart();
            this.renderCart();
            this.updateCartCount();
        }
    },

    // Обновление счетчика корзины
    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    },

    // Настройка корзины
    setupCart() {
        const cartButton = document.getElementById('cartButton');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        const cartSidebar = document.getElementById('cartSidebar');
        const checkoutButton = document.getElementById('checkoutButton');

        if (cartButton) {
            cartButton.addEventListener('click', () => {
                this.openCart();
            });
        }

        if (cartClose) {
            cartClose.addEventListener('click', () => {
                this.closeCart();
            });
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => {
                this.closeCart();
            });
        }

        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                if (this.cart.length === 0) {
                    this.showToast('Корзина пуста', 'error');
                    return;
                }
                this.showToast('Заказ оформлен! Мы свяжемся с вами в ближайшее время.', 'success');
                this.cart = [];
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
                this.closeCart();
            });
        }
    },

    // Открытие корзины
    openCart() {
        this.renderCart();
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartSidebar) cartSidebar.classList.add('cart-sidebar--active');
        if (cartOverlay) cartOverlay.classList.add('cart-overlay--active');
        document.body.style.overflow = 'hidden';
    },

    // Закрытие корзины
    closeCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartSidebar) cartSidebar.classList.remove('cart-sidebar--active');
        if (cartOverlay) cartOverlay.classList.remove('cart-overlay--active');
        document.body.style.overflow = '';
    },

    // Рендеринг корзины
    renderCart() {
        const cartContent = document.getElementById('cartContent');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartContent) return;

        if (this.cart.length === 0) {
            cartContent.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
            if (cartTotal) cartTotal.textContent = '0₽';
            return;
        }

        cartContent.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item__image"
                     onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop';">
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">${item.price}₽</div>
                    <div class="cart-item__quantity">
                        <button class="cart-item__qty-button" data-id="${item.id}" data-delta="-1">-</button>
                        <span class="cart-item__qty-value">${item.quantity}</span>
                        <button class="cart-item__qty-button" data-id="${item.id}" data-delta="1">+</button>
                    </div>
                </div>
                <button class="cart-item__remove" data-id="${item.id}">×</button>
            </div>
        `).join('');

        // Подсчет общей суммы
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) cartTotal.textContent = `${total}₽`;

        // Обработчики кнопок
        cartContent.querySelectorAll('.cart-item__qty-button').forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.getAttribute('data-id'));
                const delta = parseInt(button.getAttribute('data-delta'));
                this.updateQuantity(itemId, delta);
            });
        });

        cartContent.querySelectorAll('.cart-item__remove').forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.getAttribute('data-id'));
                this.removeFromCart(itemId);
            });
        });
    },

    // Форма обратной связи
    setupForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        // Валидация email
        emailInput.addEventListener('blur', () => {
            this.validateEmail(emailInput);
        });

        // Валидация телефона
        phoneInput.addEventListener('input', () => {
            this.formatPhone(phoneInput);
        });

        // Отправка формы
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm(form)) {
                this.showToast('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
                form.reset();
                // Очистка ошибок
                form.querySelectorAll('.contact-form__error').forEach(error => {
                    error.textContent = '';
                });
            }
        });
    },

    // Валидация email
    validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorElement = input.parentElement.querySelector('.contact-form__error');
        
        if (!emailRegex.test(input.value.trim())) {
            errorElement.textContent = 'Введите корректный email адрес';
            input.style.borderColor = '#FF4444';
            return false;
        } else {
            errorElement.textContent = '';
            input.style.borderColor = '';
            return true;
        }
    },

    // Форматирование телефона
    formatPhone(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 1) {
                value = '+7 (' + value;
            } else if (value.length <= 4) {
                value = '+7 (' + value.substring(1);
            } else if (value.length <= 7) {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4);
            } else if (value.length <= 9) {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7);
            } else {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
            }
        }
        input.value = value;
    },

    // Валидация формы
    validateForm(form) {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        // Валидация имени
        if (!nameInput.value.trim()) {
            this.showFieldError(nameInput, 'Имя обязательно для заполнения');
            isValid = false;
        } else {
            this.clearFieldError(nameInput);
        }

        // Валидация email
        if (!this.validateEmail(emailInput)) {
            isValid = false;
        }

        // Валидация телефона
        const phoneValue = phoneInput.value.replace(/\D/g, '');
        if (phoneValue.length < 10) {
            this.showFieldError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        } else {
            this.clearFieldError(phoneInput);
        }

        // Валидация сообщения
        if (!messageInput.value.trim()) {
            this.showFieldError(messageInput, 'Сообщение обязательно для заполнения');
            isValid = false;
        } else {
            this.clearFieldError(messageInput);
        }

        return isValid;
    },

    // Показать ошибку поля
    showFieldError(input, message) {
        const errorElement = input.parentElement.querySelector('.contact-form__error');
        errorElement.textContent = message;
        input.style.borderColor = '#FF4444';
    },

    // Очистить ошибку поля
    clearFieldError(input) {
        const errorElement = input.parentElement.querySelector('.contact-form__error');
        errorElement.textContent = '';
        input.style.borderColor = '';
    },

    // Toast уведомления
    showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <span>${type === 'success' ? '✓' : '✕'}</span>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    },

    // Карта
    setupMap() {
        // Инициализация Яндекс.Карты
        if (typeof ymaps !== 'undefined') {
            ymaps.ready(() => {
                const mapContainer = document.getElementById('map');
                if (!mapContainer) return;

                // Координаты Братского переулка 44, Ростов-на-Дону
                const coordinates = [47.2357, 39.7013]; // Примерные координаты Братского переулка
                const address = 'г. Ростов-на-Дону, Братский переулок, д. 44';

                // Поиск точных координат адреса
                ymaps.geocode(address, {
                    results: 1
                }).then((res) => {
                    let firstGeoObject = res.geoObjects.get(0);
                    let coords = firstGeoObject.geometry.getCoordinates();
                    
                    const map = new ymaps.Map('map', {
                        center: coords,
                        zoom: 17,
                        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
                    });

                    // Добавление метки с адресом
                    const placemark = new ymaps.Placemark(coords, {
                        balloonContentHeader: 'SLICE & GO',
                        balloonContentBody: address,
                        balloonContentFooter: 'Премиальная Пиццерия',
                        hintContent: 'SLICE & GO'
                    }, {
                        preset: 'islands#redDotIcon',
                        iconColor: '#FF6B35'
                    });

                    map.geoObjects.add(placemark);
                    
                    // Открытие балуна при клике
                    placemark.events.add('click', function () {
                        placemark.balloon.open();
                    });
                }).catch(() => {
                    // Если геокодирование не удалось, используем примерные координаты
                    const map = new ymaps.Map('map', {
                        center: coordinates,
                        zoom: 17,
                        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
                    });

                    const placemark = new ymaps.Placemark(coordinates, {
                        balloonContentHeader: 'SLICE & GO',
                        balloonContentBody: address,
                        balloonContentFooter: 'Премиальная Пиццерия',
                        hintContent: 'SLICE & GO'
                    }, {
                        preset: 'islands#redDotIcon',
                        iconColor: '#FF6B35'
                    });

                    map.geoObjects.add(placemark);
                });
            });
        } else {
            // Fallback если карта не загрузилась
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
                mapContainer.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: rgba(255,255,255,0.5); flex-direction: column; gap: 1rem;">
                        <div>Карта загружается...</div>
                        <div style="font-size: 0.9rem; text-align: center; padding: 0 1rem;">
                            г. Ростов-на-Дону,<br>Братский переулок, д. 44
                        </div>
                    </div>
                `;
            }
        }
    }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    App.init();

});
