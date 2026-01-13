const App = {
    init() {
        this.setupNavigation();
        this.setupCart();
        this.setupMenu();
        this.setupPromotions();
        this.setupForm();
        this.setupMap();
        this.setupFooterNavigation();
        this.loadCart();
        this.updateCartCount();
    },

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.querySelector('.nav');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = link.getAttribute('data-view');
                this.showView(viewName);
                
                navLinks.forEach(l => l.classList.remove('nav__link--active'));
                link.classList.add('nav__link--active');

                if (window.innerWidth <= 768) {
                    nav.classList.remove('nav--active');
                }
            });
        });

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('nav--active');
            });
        }

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

    setupFooterNavigation() {
        const footerNavLinks = document.querySelectorAll('.footer__nav-link');
        const navLinks = document.querySelectorAll('.nav__link');

        footerNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = link.getAttribute('data-view');
                this.showView(viewName);
                
                navLinks.forEach(l => {
                    l.classList.remove('nav__link--active');
                    if (l.getAttribute('data-view') === viewName) {
                        l.classList.add('nav__link--active');
                    }
                });

                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    },

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

    activePromotions: {
        combo: false,
        pizzaOfDay: false,
        freeDelivery: false
    },

    menuData: [
        { id: 1, name: 'Маргарита', price: 590, description: 'Томатный соус, моцарелла, базилик', calories: 250, proteins: 12, fats: 8, carbs: 35, image: 'images/pizza1.jpg', category: 'pizza' },
        { id: 2, name: 'Пепперони', price: 690, description: 'Томатный соус, моцарелла, пепперони', calories: 320, proteins: 15, fats: 14, carbs: 38, image: 'images/pizza2.jpg', category: 'pizza' },
        { id: 3, name: 'Четыре сыра', price: 790, description: 'Моцарелла, горгонзола, пармезан, чеддер', calories: 380, proteins: 20, fats: 22, carbs: 28, image: 'images/pizza3.jpg', category: 'pizza' },
        { id: 4, name: 'Гавайская', price: 720, description: 'Томатный соус, моцарелла, ветчина, ананасы', calories: 290, proteins: 14, fats: 10, carbs: 42, image: 'images/pizza4.jpg', category: 'pizza' },
        { id: 5, name: 'Барбекю', price: 850, description: 'Соус барбекю, моцарелла, курица, лук, перец', calories: 350, proteins: 18, fats: 12, carbs: 40, image: 'images/pizza5.jpg', category: 'pizza' },
        { id: 6, name: 'Мясная', price: 920, description: 'Томатный соус, моцарелла, ветчина, пепперони, бекон', calories: 420, proteins: 22, fats: 18, carbs: 36, image: 'images/pizza6.jpg', category: 'pizza' },
        { id: 7, name: 'Вегетарианская', price: 650, description: 'Томатный соус, моцарелла, грибы, перец, помидоры, оливки', calories: 240, proteins: 10, fats: 8, carbs: 38, image: 'images/pizza7.jpg', category: 'pizza' },
        { id: 8, name: 'Морская', price: 980, description: 'Соус бешамель, моцарелла, креветки, кальмары, мидии', calories: 310, proteins: 25, fats: 11, carbs: 28, image: 'images/pizza8.jpg', category: 'pizza' },
        { id: 9, name: 'Кола', price: 150, description: 'Rich кола 0.5л', calories: 210, proteins: 0, fats: 0, carbs: 53, image: 'images/drink1.jpg', category: 'drink' },
        { id: 10, name: 'Спрайт', price: 150, description: 'Добрый лимон-лайм 0.5л', calories: 190, proteins: 0, fats: 0, carbs: 48, image: 'images/drink2.jpg', category: 'drink' },
        { id: 11, name: 'Фанта', price: 150, description: 'Добрый апельсин  0.5л', calories: 200, proteins: 0, fats: 0, carbs: 50, image: 'images/drink3.jpg', category: 'drink' },
        { id: 12, name: 'Сок апельсиновый', price: 180, description: 'Сок RICH апельсин 0.5л', calories: 220, proteins: 2, fats: 0, carbs: 52, image: 'images/drink4.jpg', category: 'drink' },
        { id: 13, name: 'Сок яблочный', price: 180, description: 'Сок RICH яблоко 0.5л', calories: 210, proteins: 0, fats: 0, carbs: 50, image: 'images/drink5.jpg', category: 'drink' },
        { id: 14, name: 'Вода минеральная', price: 120, description: 'Минеральная вода 0.5л', calories: 0, proteins: 0, fats: 0, carbs: 0, image: 'images/drink6.jpg', category: 'drink' },
        { id: 15, name: 'Энергетик', price: 200, description: 'Энергетический напиток 0.5л', calories: 240, proteins: 0, fats: 0, carbs: 60, image: 'images/drink7.jpg', category: 'drink' },
        { id: 16, name: 'Лимонад', price: 170, description: 'Домашний лимонад 0.5л', calories: 150, proteins: 0, fats: 0, carbs: 38, image: 'images/drink8.jpg', category: 'drink' }
    ],

    setupMenu() {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        const pizzas = this.menuData.filter(item => item.category === 'pizza');
        const drinks = this.menuData.filter(item => item.category === 'drink');

        let html = '';

        if (pizzas.length > 0) {
            html += '<div class="menu-category"><h2 class="menu-category__title">🍕 Пицца</h2><div class="menu-category__grid">' + 
                    pizzas.map(item => this.createMenuItemHTML(item)).join('') + '</div></div>';
        }

        if (drinks.length > 0) {
            html += '<div class="menu-category"><h2 class="menu-category__title">🥤 Напитки</h2><div class="menu-category__grid">' + 
                    drinks.map(item => this.createMenuItemHTML(item)).join('') + '</div></div>';
        }

        menuGrid.innerHTML = html;

        menuGrid.querySelectorAll('.menu-card__button').forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.getAttribute('data-id'));
                this.addToCart(itemId);
            });
        });
    },

    createMenuItemHTML(item) {
        const discount = this.getItemDiscount(item.id);
        const finalPrice = discount > 0 ? Math.round(item.price * (1 - discount / 100)) : item.price;
        
        return `
            <div class="menu-card">
                <div class="menu-card__image-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="menu-card__image" 
                         onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'">
                    ${discount > 0 ? `<div class="menu-card__discount-badge">-${discount}%</div>` : ''}
                </div>
                <div class="menu-card__content">
                    <h3 class="menu-card__title">${item.name}</h3>
                    <p class="menu-card__description">${item.description}</p>
                    <div class="menu-card__info">
                        <span>${item.calories} ккал</span>
                        <span>Б: ${item.proteins}г Ж: ${item.fats}г У: ${item.carbs}г</span>
                    </div>
                    <div class="menu-card__price">
                        ${discount > 0 ? `
                            <span class="menu-card__old-price">${item.price}₽</span>
                            <span class="menu-card__new-price">${finalPrice}₽</span>
                        ` : `
                            <span class="menu-card__new-price">${item.price}₽</span>
                        `}
                    </div>
                    <button class="menu-card__button" data-id="${item.id}">В корзину</button>
                </div>
            </div>
        `;
    },

    getItemDiscount(itemId) {
        if (this.activePromotions.pizzaOfDay) {
            const item = this.menuData.find(i => i.id === itemId);
            if (item && item.category === 'pizza') {
                const pizzaInCart = this.cart.find(i => i.category === 'pizza');
                if (!pizzaInCart || pizzaInCart.id === itemId) {
                    return 30;
                }
            }
        }
        if (this.activePromotions.combo) return 25;
        return 0;
    },

    setupPromotions() {
        const promotionButtons = document.querySelectorAll('.promotion-card__button');
        
        promotionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (index === 0) {
                    this.activePromotions.combo = true;
                    this.activePromotions.pizzaOfDay = false;
                    this.addToCart(1); 
                    this.addToCart(2); 
                    this.addToCart(9); 
                    this.showToast('Комбо-набор добавлен в корзину со скидкой 25%!', 'success');
                } else if (index === 1) {
                    this.activePromotions.pizzaOfDay = true;
                    this.activePromotions.combo = false;
                    const randomPizzaId = Math.floor(Math.random() * 8) + 1;
                    this.addToCart(randomPizzaId);
                    this.showToast('Пицца дня добавлена в корзину со скидкой 30%!', 'success');
                } else if (index === 2) {
                    this.showToast('При заказе от 1000₽ доставка бесплатно!', 'success');
                }
                
                this.setupMenu();
                this.showView('menu');
            });
        });
    },

    cart: [],

    loadCart() {
        const savedCart = localStorage.getItem('sliceAndGoCart');
        if (savedCart) this.cart = JSON.parse(savedCart);
    },

    saveCart() {
        localStorage.setItem('sliceAndGoCart', JSON.stringify(this.cart));
    },

    addToCart(itemId) {
        const item = this.menuData.find(p => p.id === itemId);
        if (!item) return;

        const discount = this.getItemDiscount(itemId);
        const finalPrice = discount > 0 ? Math.round(item.price * (1 - discount / 100)) : item.price;

        const existingItem = this.cart.find(p => p.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
            if (discount > 0 && !existingItem.discountApplied) {
                existingItem.originalPrice = existingItem.price;
                existingItem.price = finalPrice;
                existingItem.discountApplied = true;
                existingItem.discount = discount;
            }
        } else {
            const cartItem = { 
                ...item, 
                quantity: 1,
                originalPrice: item.price,
                discountApplied: discount > 0,
                discount: discount
            };
            if (discount > 0) cartItem.price = finalPrice;
            this.cart.push(cartItem);
        }

        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    },

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    },

    updateQuantity(itemId, delta) {
        const item = this.cart.find(p => p.id === itemId);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) this.removeFromCart(itemId);
        else {
            this.saveCart();
            this.renderCart();
            this.updateCartCount();
        }
    },

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    },

    setupCart() {
        const cartButton = document.getElementById('cartButton');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        const checkoutButton = document.getElementById('checkoutButton');

        if (cartButton) cartButton.addEventListener('click', () => this.openCart());
        if (cartClose) cartClose.addEventListener('click', () => this.closeCart());
        if (cartOverlay) cartOverlay.addEventListener('click', () => this.closeCart());

        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                if (this.cart.length === 0) return this.showToast('Корзина пуста', 'error');
                
                const total = this.getCartTotal();
                this.showToast(`Заказ оформлен! Сумма: ${total}₽. Доставка ${total >= 1000 ? 'бесплатно' : '150₽'}.`, 'success');
                this.cart = [];
                this.activePromotions.combo = false;
                this.activePromotions.pizzaOfDay = false;
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
                this.setupMenu();
                this.closeCart();
            });
        }
    },

    getCartTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price || item.originalPrice) * item.quantity, 0);
    },

    openCart() {
        this.renderCart();
        document.getElementById('cartSidebar')?.classList.add('cart-sidebar--active');
        document.getElementById('cartOverlay')?.classList.add('cart-overlay--active');
        document.body.style.overflow = 'hidden';
    },

    closeCart() {
        document.getElementById('cartSidebar')?.classList.remove('cart-sidebar--active');
        document.getElementById('cartOverlay')?.classList.remove('cart-overlay--active');
        document.body.style.overflow = '';
    },

    renderCart() {
        const cartContent = document.getElementById('cartContent');
        const cartTotal = document.getElementById('cartTotal');
        if (!cartContent) return;

        if (this.cart.length === 0) {
            cartContent.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
            if (cartTotal) cartTotal.textContent = '0₽';
            return;
        }

        cartContent.innerHTML = this.cart.map(item => {
            const itemPrice = item.price || item.originalPrice;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item__image" onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop'">
                    <div class="cart-item__info">
                        <div class="cart-item__name">${item.name} ${item.discountApplied ? `<span class="cart-item__discount">-${item.discount}%</span>` : ''}</div>
                        <div class="cart-item__price">
                            ${item.discountApplied ? `<span class="cart-item__old-price">${item.originalPrice}₽</span> ` : ''}
                            <span>${itemPrice}₽</span>
                        </div>
                        <div class="cart-item__quantity">
                            <button class="cart-item__qty-button" data-id="${item.id}" data-delta="-1">-</button>
                            <span class="cart-item__qty-value">${item.quantity}</span>
                            <button class="cart-item__qty-button" data-id="${item.id}" data-delta="1">+</button>
                        </div>
                    </div>
                    <button class="cart-item__remove" data-id="${item.id}">×</button>
                </div>`;
        }).join('');

        if (cartTotal) cartTotal.textContent = `${this.getCartTotal()}₽`;

        cartContent.querySelectorAll('.cart-item__qty-button').forEach(btn => {
            btn.addEventListener('click', () => this.updateQuantity(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
        });

        cartContent.querySelectorAll('.cart-item__remove').forEach(btn => {
            btn.addEventListener('click', () => this.removeFromCart(parseInt(btn.dataset.id)));
        });
    },

    setupForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        document.getElementById('phone')?.addEventListener('input', (e) => this.formatPhone(e.target));

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm(form)) {
                this.showToast('Сообщение отправлено!', 'success');
                form.reset();
            }
        });
    },

    formatPhone(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 1) value = '+7 (' + value;
            else if (value.length <= 4) value = '+7 (' + value.substring(1);
            else if (value.length <= 7) value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4);
            else if (value.length <= 9) value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7);
            else value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }
        input.value = value;
    },

    validateForm(form) {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        form.querySelectorAll('input, textarea').forEach(input => {
            const error = input.parentElement.querySelector('.contact-form__error');
            let message = '';

            if (!input.value.trim()) message = 'Обязательное поле';
            else if (input.id === 'email' && !emailRegex.test(input.value)) message = 'Некорректный email';
            else if (input.id === 'phone' && input.value.replace(/\D/g, '').length < 11) message = 'Некорректный телефон';

            if (message) {
                error.textContent = message;
                input.style.borderColor = '#FF4444';
                isValid = false;
            } else {
                error.textContent = '';
                input.style.borderColor = '';
            }
        });
        return isValid;
    },

    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    setupMap() {
        if (typeof ymaps === 'undefined') return;
        ymaps.ready(() => {
            const address = 'г. Ростов-на-Дону, Братский переулок, д. 44';
            ymaps.geocode(address).then(res => {
                const coords = res.geoObjects.get(0).geometry.getCoordinates();
                const map = new ymaps.Map('map', { center: coords, zoom: 17 });
                map.geoObjects.add(new ymaps.Placemark(coords, { hintContent: 'SLICE & GO' }, { iconColor: '#FF6B35' }));
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
