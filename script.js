// App Object - модульная структура
const App = {
    // Инициализация приложения
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

    // Навигация
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.querySelector('.nav');

        // Обработка кликов по навигации
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = link.getAttribute('data-view');
                this.showView(viewName);
                
                // Обновление активной ссылки
                navLinks.forEach(l => l.classList.remove('nav__link--active'));
                link.classList.add('nav__link--active');

                // Закрытие мобильного меню
                if (window.innerWidth <= 768) {
                    nav.classList.remove('nav--active');
                }
            });
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

    // Активные акции
    activePromotions: {
        combo: false, // Комбо на двоих - скидка 25%
        pizzaOfDay: false, // Пицца дня - скидка 30%
        freeDelivery: false // Бесплатная доставка при заказе от 1000₽
    },

    // Данные меню с изображениями
    menuData: [
        // ПИЦЦЫ
        {
            id: 1,
            name: 'Маргарита',
            price: 590,
            description: 'Томатный соус, моцарелла, базилик',
            calories: 250,
            proteins: 12,
            fats: 8,
            carbs: 35,
            image: 'images/pizza1.jpg',
            category: 'pizza'
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
            image: 'images/pizza2.jpg',
            category: 'pizza'
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
            image: 'images/pizza3.jpg',
            category: 'pizza'
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
            image: 'images/pizza4.jpg',
            category: 'pizza'
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
            image: 'images/pizza5.jpg',
            category: 'pizza'
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
            image: 'images/pizza6.jpg',
            category: 'pizza'
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
            image: 'images/pizza7.jpg',
            category: 'pizza'
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
            image: 'images/pizza8.jpg',
            category: 'pizza'
        },
        // НАПИТКИ
        {
            id: 9,
            name: 'Кола',
            price: 150,
            description: 'Кока-кола 0.5л',
            calories: 210,
            proteins: 0,
            fats: 0,
            carbs: 53,
            image: 'images/drink1.jpg',
            category: 'drink'
        },
        {
            id: 10,
            name: 'Спрайт',
            price: 150,
            description: 'Спрайт 0.5л',
            calories: 190,
            proteins: 0,
            fats: 0,
            carbs: 48,
            image: 'images/drink2.jpg',
            category: 'drink'
        },
        {
            id: 11,
            name: 'Фанта',
            price: 150,
            description: 'Фанта 0.5л',
            calories: 200,
            proteins: 0,
            fats: 0,
            carbs: 50,
            image: 'images/drink3.jpg',
            category: 'drink'
        },
        {
            id: 12,
            name: 'Сок апельсиновый',
            price: 180,
            description: 'Апельсиновый сок 0.5л',
            calories: 220,
            proteins: 2,
            fats: 0,
            carbs: 52,
            image: 'images/drink4.jpg',
            category: 'drink'
        },
        {
            id: 13,
            name: 'Сок яблочный',
            price: 180,
            description: 'Яблочный сок 0.5л',
            calories: 210,
            proteins: 0,
            fats: 0,
            carbs: 50,
            image: 'images/drink5.jpg',
            category: 'drink'
        },
        {
            id: 14,
            name: 'Вода минеральная',
            price: 120,
            description: 'Минеральная вода 0.5л',
            calories: 0,
            proteins: 0,
            fats: 0,
            carbs: 0,
            image: 'images/drink6.jpg',
            category: 'drink'
        },
        {
            id: 15,
            name: 'Энергетик',
            price: 200,
            description: 'Энергетический напиток 0.5л',
            calories: 240,
            proteins: 0,
            fats: 0,
            carbs: 60,
            image: 'images/drink7.jpg',
            category: 'drink'
        },
        {
            id: 16,
            name: 'Лимонад',
            price: 170,
            description: 'Домашний лимонад 0.5л',
            calories: 150,
            proteins: 0,
            fats: 0,
            carbs: 38,
            image: 'images/drink8.jpg',
            category: 'drink'
        }
    ],

    // Настройка меню
    setupMenu() {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        // Разделяем на категории
        const pizzas = this.menuData.filter(item => item.category === 'pizza');
        const drinks = this.menuData.filter(item => item.category === 'drink');

        let html = '';

        // Секция Пицца - 3 в строке
        if (pizzas.length > 0) {
            html += '<div class="menu-category">';
            html += '<h2 class="menu-category__title">🍕 Пицца</h2>';
            html += '<div class="menu-category__grid">';
            html += pizzas.map(item => this.createMenuItemHTML(item)).join('');
            html += '</div>';
            html += '</div>';
        }

        // Секция Напитки - 3 в строке
        if (drinks.length > 0) {
            html += '<div class="menu-category">';
            html += '<h2 class="menu-category__title">🥤 Напитки</h2>';
            html += '<div class="menu-category__grid">';
            html += drinks.map(item => this.createMenuItemHTML(item)).join('');
            html += '</div>';
            html += '</div>';
        }

        menuGrid.innerHTML = html;

        // Обработчики кнопок "В корзину"
        menuGrid.querySelectorAll('.menu-card__button').forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.getAttribute('data-id'));
                this.addToCart(itemId);
            });
        });
    },

    // Создание HTML карточки товара
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

    // Получить скидку на товар
    getItemDiscount(itemId) {
        // Пицца дня - скидка 30% на первую пиццу
        if (this.activePromotions.pizzaOfDay) {
            const item = this.menuData.find(i => i.id === itemId);
            if (item && item.category === 'pizza') {
                // Применяем скидку только к первой пицце в корзине
                const pizzaInCart = this.cart.find(i => i.category === 'pizza');
                if (!pizzaInCart || pizzaInCart.id === itemId) {
                    return 30;
                }
            }
        }
        // Комбо - скидка 25% на все товары
        if (this.activePromotions.combo) {
            return 25;
        }
        return 0;
    },

    // Настройка акций
    setupPromotions() {
        const promotionButtons = document.querySelectorAll('.promotion-card__button');
        
        promotionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (index === 0) {
                    // Комбо на двоих - активируем скидку 25%
                    this.activePromotions.combo = true;
                    this.activePromotions.pizzaOfDay = false;
                    
                    // Добавляем 2 популярные пиццы (Маргарита и Пепперони)
                    this.addToCart(1); // Маргарита
                    this.addToCart(2); // Пепперони
                    // Добавляем напиток
                    this.addToCart(9); // Кола
                    
                    this.showToast('Комбо-набор добавлен в корзину со скидкой 25%!', 'success');
                    this.setupMenu(); // Обновляем отображение скидок
                } else if (index === 1) {
                    // Пицца дня - активируем скидку 30%
                    this.activePromotions.pizzaOfDay = true;
                    this.activePromotions.combo = false;
                    
                    // Добавляем случайную пиццу
                    const randomPizzaId = Math.floor(Math.random() * 8) + 1;
                    this.addToCart(randomPizzaId);
                    
                    this.showToast('Пицца дня добавлена в корзину со скидкой 30%!', 'success');
                    this.setupMenu(); // Обновляем отображение скидок
                } else if (index === 2) {
                    // Бесплатная доставка - информационное сообщение
                    this.showToast('При заказе от 1000₽ доставка бесплатно!', 'success');
                }
                
                // Переход на страницу меню
                this.showView('menu');
                const navLinks = document.querySelectorAll('.nav__link');
                navLinks.forEach(l => l.classList.remove('nav__link--active'));
                const menuLink = document.querySelector('.nav__link[data-view="menu"]');
                if (menuLink) menuLink.classList.add('nav__link--active');
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

        const discount = this.getItemDiscount(itemId);
        const finalPrice = discount > 0 ? Math.round(item.price * (1 - discount / 100)) : item.price;

        const existingItem = this.cart.find(p => p.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
            // Обновляем цену, если применилась скидка
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
            if (discount > 0) {
                cartItem.price = finalPrice;
            }
            this.cart.push(cartItem);
        }

        this.saveCart();
        this.updateCartCount();
        this.renderCart();
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
                
                const total = this.getCartTotal();
                let message = `Заказ оформлен! Сумма: ${total}₽`;
                
                // Проверка на бесплатную доставку
                if (total >= 1000) {
                    message += ' Доставка бесплатно!';
                }
                
                this.showToast(message + ' Мы свяжемся с вами в ближайшее время.', 'success');
                this.cart = [];
                this.activePromotions.combo = false;
                this.activePromotions.pizzaOfDay = false;
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
                this.setupMenu(); // Обновляем меню после очистки корзины
                this.closeCart();
            });
        }
    },

    // Получить общую сумму корзины
    getCartTotal() {
        return this.cart.reduce((sum, item) => {
            const itemTotal = (item.price || item.originalPrice) * item.quantity;
            return sum + itemTotal;
        }, 0);
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

        cartContent.innerHTML = this.cart.map(item => {
            const itemPrice = item.price || item.originalPrice;
            const itemTotal = itemPrice * item.quantity;
            const discountBadge = item.discountApplied ? `<span class="cart-item__discount">-${item.discount}%</span>` : '';
            
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item__image"
                         onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop'">
                    <div class="cart-item__info">
                        <div class="cart-item__name">
                            ${item.name}
                            ${discountBadge}
                        </div>
                        <div class="cart-item__price">
                            ${item.discountApplied && item.originalPrice ? 
                                `<span class="cart-item__old-price">${item.originalPrice}₽</span> ` : ''}
                            <span>${itemPrice}₽</span>
                        </div>
                        <div class="cart-item__quantity">
                            <button class="cart-item__qty-button" data-id="${item.id}" data-delta="-1">-</button>
                            <span class="cart-item__qty-value">${item.quantity}</span>
                            <button class="cart-item__qty-button" data-id="${item.id}" data-delta="1">+</button>
                        </div>
                        <div class="cart-item__total">Итого: ${itemTotal}₽</div>
                    </div>
                    <button class="cart-item__remove" data-id="${item.id}">×</button>
                </div>
            `;
        }).join('');

        // Подсчет общей суммы
        const total = this.getCartTotal();
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
                const coordinates = [47.2357, 39.7013];
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
