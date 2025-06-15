const productsData = {
  tenis: [
    { id: 1, name: "Nike Air Max 270", price: "R$ 599,90", description: "Tênis esportivo com tecnologia Air Max", icon: "👟" },
    { id: 2, name: "Adidas Ultraboost 22", price: "R$ 749,90", description: "Máximo conforto para corridas", icon: "🏃" },
    { id: 3, name: "Puma RS-X", price: "R$ 449,90", description: "Estilo retrô com design moderno", icon: "⚡" },
    { id: 4, name: "Vans Old Skool", price: "R$ 329,90", description: "Clássico skateboard style", icon: "🛹" },
    { id: 5, name: "Converse All Star", price: "R$ 249,90", description: "Ícone atemporal da moda", icon: "⭐" },
    { id: 6, name: "New Balance 574", price: "R$ 459,90", description: "Conforto e estilo urbano", icon: "🏙️" },
    { id: 7, name: "Reebok Classic", price: "R$ 369,90", description: "Tradição em calçados esportivos", icon: "🏆" },
    { id: 8, name: "Fila Disruptor", price: "R$ 399,90", description: "Chunky sneaker em alta", icon: "🔥" },
    { id: 9, name: "Under Armour Charged", price: "R$ 529,90", description: "Performance para atletas", icon: "💪" },
    { id: 10, name: "Mizuno Wave", price: "R$ 479,90", description: "Tecnologia japonesa de corrida", icon: "🌊" },
    { id: 11, name: "Asics Gel Nimbus", price: "R$ 699,90", description: "Amortecimento superior", icon: "☁️" },
    { id: 12, name: "Nike React Infinity", price: "R$ 649,90", description: "Corrida sem lesões", icon: "♾️" },
    { id: 13, name: "Adidas Stan Smith", price: "R$ 399,90", description: "Minimalismo em verde", icon: "🌿" },
    { id: 14, name: "Jordan Air 1", price: "R$ 899,90", description: "Lenda do basquete", icon: "🏀" },
    { id: 15, name: "Puma Suede Classic", price: "R$ 349,90", description: "Camurça premium", icon: "✨" },
    { id: 16, name: "Vans Authentic", price: "R$ 299,90", description: "Original waffle sole", icon: "🧇" },
    { id: 17, name: "Nike Dunk Low", price: "R$ 549,90", description: "Street style icônico", icon: "🎨" },
    { id: 18, name: "Adidas Gazelle", price: "R$ 429,90", description: "Herança dos anos 60", icon: "📸" },
    { id: 19, name: "Converse Chuck Taylor", price: "R$ 279,90", description: "High top clássico", icon: "🎸" },
    { id: 20, name: "New Balance 990v5", price: "R$ 799,90", description: "Made in USA premium", icon: "🇺🇸" }
  ],
  calcados: [
    { id: 21, name: "Sapato Social Oxford", price: "R$ 299,90", description: "Elegância para ocasiões especiais", icon: "👔" },
    { id: 22, name: "Bota Coturno Masculina", price: "R$ 259,90", description: "Resistente e estilosa", icon: "🥾" },
    { id: 23, name: "Sandália Havaianas", price: "R$ 49,90", description: "Conforto para o verão", icon: "🏖️" },
    { id: 24, name: "Mocassim de Couro", price: "R$ 229,90", description: "Casual chique", icon: "🍃" },
    { id: 25, name: "Sapatênis Casual", price: "R$ 179,90", description: "Versatilidade urbana", icon: "🌆" },
    { id: 26, name: "Chinelo Slide", price: "R$ 79,90", description: "Praticidade no dia a dia", icon: "🏠" },
    { id: 27, name: "Bota Chelsea", price: "R$ 349,90", description: "Sofisticação britânica", icon: "🎩" },
    { id: 28, name: "Sapato Derby", price: "R$ 319,90", description: "Clássico atemporal", icon: "⌚" },
    { id: 29, name: "Sandália Slide Feminina", price: "R$ 129,90", description: "Conforto e estilo", icon: "💅" },
    { id: 30, name: "Alpargata Masculina", price: "R$ 89,90", description: "Leveza para os pés", icon: "🌴" },
    { id: 31, name: "Bota Montaria Feminina", price: "R$ 289,90", description: "Elegância country", icon: "🐎" },
    { id: 32, name: "Tamanco de Couro", price: "R$ 159,90", description: "Conforto retrô", icon: "🌻" },
    { id: 33, name: "Sapato Loafer", price: "R$ 269,90", description: "Sofisticação casual", icon: "🎭" },
    { id: 34, name: "Sandália Plataforma", price: "R$ 199,90", description: "Altura com elegância", icon: "👑" },
    { id: 35, name: "Bota Militar", price: "R$ 219,90", description: "Resistência e atitude", icon: "⚔️" },
    { id: 36, name: "Chinelo Ortopédico", price: "R$ 119,90", description: "Saúde para os pés", icon: "🏥" },
    { id: 37, name: "Sapato Monk", price: "R$ 379,90", description: "Fivela distintiva", icon: "🔗" },
    { id: 38, name: "Sandália Rasteira", price: "R$ 69,90", description: "Simplicidade charmosa", icon: "🦋" },
    { id: 39, name: "Bota Cano Alto", price: "R$ 329,90", description: "Proteção e estilo", icon: "🛡️" },
    { id: 40, name: "Papete Esportiva", price: "R$ 99,90", description: "Aventura nos pés", icon: "🏕️" }
  ],
  roupas: [
    { id: 41, name: "Camiseta Basic", price: "R$ 39,90", description: "Essencial do guarda-roupa", icon: "👕" },
    { id: 42, name: "Jeans Skinny", price: "R$ 129,90", description: "Ajuste perfeito", icon: "👖" },
    { id: 43, name: "Moletom com Capuz", price: "R$ 89,90", description: "Conforto e aquecimento", icon: "🧥" },
    { id: 44, name: "Camisa Social", price: "R$ 79,90", description: "Elegância profissional", icon: "👔" },
    { id: 45, name: "Shorts Jeans", price: "R$ 59,90", description: "Frescor no verão", icon: "🌞" },
    { id: 46, name: "Blusa de Tricô", price: "R$ 69,90", description: "Aconchego feminino", icon: "🧶" },
    { id: 47, name: "Calça Cargo", price: "R$ 99,90", description: "Utilitário e moderno", icon: "👖" },
    { id: 48, name: "Regata Fitness", price: "R$ 29,90", description: "Performance nos treinos", icon: "💪" },
    { id: 49, name: "Blazer Feminino", price: "R$ 149,90", description: "Poder e sofisticação", icon: "💼" },
    { id: 50, name: "Bermuda Tactel", price: "R$ 49,90", description: "Leveza esportiva", icon: "🏃" },
    { id: 51, name: "Suéter Masculino", price: "R$ 119,90", description: "Elegância no frio", icon: "❄️" },
    { id: 52, name: "Legging Fitness", price: "R$ 79,90", description: "Flexibilidade total", icon: "🤸" },
    { id: 53, name: "Polo Masculina", price: "R$ 69,90", description: "Casual elegante", icon: "🏌️" },
    { id: 54, name: "Saia Midi", price: "R$ 89,90", description: "Feminilidade moderna", icon: "💃" },
    { id: 55, name: "Jaqueta Jeans", price: "R$ 139,90", description: "Clássico atemporal", icon: "🎸" },
    { id: 56, name: "Top Cropped", price: "R$ 39,90", description: "Tendência jovem", icon: "✨" },
    { id: 57, name: "Calça Social", price: "R$ 109,90", description: "Formalidade confortável", icon: "🏢" },
    { id: 58, name: "Camiseta Estampada", price: "R$ 49,90", description: "Personalidade única", icon: "🎨" },
    { id: 59, name: "Short Fitness", price: "R$ 45,90", description: "Liberdade de movimento", icon: "🏋️" },
    { id: 60, name: "Cardigan Longo", price: "R$ 129,90", description: "Sobreposição chique", icon: "🌟" }
  ],
  vestidos: [
    { id: 61, name: "Vestido Midi Floral", price: "R$ 129,90", description: "Romantismo em flores", icon: "🌸" },
    { id: 62, name: "Vestido Longo Festa", price: "R$ 199,90", description: "Elegância para eventos", icon: "🥂" },
    { id: 63, name: "Vestido Curto Casual", price: "R$ 79,90", description: "Descontração charmosa", icon: "☀️" },
    { id: 64, name: "Vestido Tubinho", price: "R$ 109,90", description: "Clássico corporativo", icon: "💼" },
    { id: 65, name: "Vestido Boho", price: "R$ 149,90", description: "Espírito livre", icon: "🦋" },
    { id: 66, name: "Vestido Envelope", price: "R$ 89,90", description: "Feminilidade envolvente", icon: "💕" },
    { id: 67, name: "Vestido Linho", price: "R$ 119,90", description: "Frescor natural", icon: "🌿" },
    { id: 68, name: "Vestido Tricô", price: "R$ 99,90", description: "Aconchego elegante", icon: "🧶" },
    { id: 69, name: "Vestido Sereia", price: "R$ 249,90", description: "Glamour sofisticado", icon: "🧜" },
    { id: 70, name: "Vestido Chemise", price: "R$ 139,90", description: "Conforto refinado", icon: "🌙" },
    { id: 71, name: "Vestido Babado", price: "R$ 159,90", description: "Movimento e graça", icon: "💃" },
    { id: 72, name: "Vestido Listrado", price: "R$ 89,90", description: "Clássico naval", icon: "⚓" },
    { id: 73, name: "Vestido Godê", price: "R$ 169,90", description: "Amplitude vintage", icon: "🎭" },
    { id: 74, name: "Vestido Ombro a Ombro", price: "R$ 109,90", description: "Sensualidade sutil", icon: "👗" },
    { id: 75, name: "Vestido Assimétrico", price: "R$ 179,90", description: "Modernidade única", icon: "🔺" },
    { id: 76, name: "Vestido Plissado", price: "R$ 149,90", description: "Textura elegante", icon: "📐" },
    { id: 77, name: "Vestido Estampado", price: "R$ 119,90", description: "Personalidade vibrante", icon: "🎨" },
    { id: 78, name: "Vestido Slip Dress", price: "R$ 159,90", description: "Minimalismo sexy", icon: "✨" },
    { id: 79, name: "Vestido Vintage", price: "R$ 189,90", description: "Charme retrô", icon: "📻" },
    { id: 80, name: "Vestido Decote V", price: "R$ 129,90", description: "Elegância marcante", icon: "💎" }
  ],
  acessorios: [
    { id: 81, name: "Relógio Digital", price: "R$ 199,90", description: "Tecnologia no pulso", icon: "⌚" },
    { id: 82, name: "Óculos de Sol", price: "R$ 149,90", description: "Proteção com estilo", icon: "🕶️" },
    { id: 83, name: "Bolsa Transversal", price: "R$ 89,90", description: "Praticidade urbana", icon: "👜" },
    { id: 84, name: "Cinto de Couro", price: "R$ 79,90", description: "Acabamento perfeito", icon: "🔗" },
    { id: 85, name: "Carteira Masculina", price: "R$ 69,90", description: "Organização elegante", icon: "💳" },
    { id: 86, name: "Brincos Argola", price: "R$ 39,90", description: "Brilho feminino", icon: "💍" },
    { id: 87, name: "Chapéu Panamá", price: "R$ 129,90", description: "Sofisticação tropical", icon: "🎩" },
    { id: 88, name: "Pulseira Inteligente", price: "R$ 299,90", description: "Saúde conectada", icon: "📱" },
    { id: 89, name: "Mochila Urbana", price: "R$ 159,90", description: "Funcionalidade moderna", icon: "🎒" },
    { id: 90, name: "Colar Delicado", price: "R$ 59,90", description: "Charme sutil", icon: "✨" },
    { id: 91, name: "Boné Aba Reta", price: "R$ 49,90", description: "Atitude street", icon: "🧢" },
    { id: 92, name: "Lenço de Seda", price: "R$ 89,90", description: "Elegância atemporal", icon: "🦋" },
    { id: 93, name: "Anel Masculino", price: "R$ 119,90", description: "Personalidade marcante", icon: "💎" },
    { id: 94, name: "Bolsa de Mão", price: "R$ 179,90", description: "Sofisticação feminina", icon: "👝" },
    { id: 95, name: "Gravata Slim", price: "R$ 69,90", description: "Formalidade moderna", icon: "👔" },
    { id: 96, name: "Piercing Orelha", price: "R$ 29,90", description: "Expressão individual", icon: "✨" },
    { id: 97, name: "Luvas de Couro", price: "R$ 99,90", description: "Proteção elegante", icon: "🧤" },
    { id: 98, name: "Echarpe Inverno", price: "R$ 79,90", description: "Aquecimento chique", icon: "🧣" },
    { id: 99, name: "Tiara Fashion", price: "R$ 39,90", description: "Charme nos cabelos", icon: "👸" },
    { id: 100, name: "Suspensório Vintage", price: "R$ 89,90", description: "Retrô moderno", icon: "🎭" }
  ],
  bolsas: [
    { id: 101, name: "Bolsa Transversal", price: "R$ 89,90", description: "Praticidade urbana", icon: "👜" },
  ],
  chapeus: [
    { id: 103, name: "Chapéu Panamá", price: "R$ 129,90", description: "Sofisticação tropical", icon: "🎩" },
  ],
  joias: [
    { id: 105, name: "Brincos Argola", price: "R$ 39,90", description: "Brilho feminino", icon: "💍" },
  ]
};

let cart = [];

function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image">${product.icon}</div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="product-button" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
      </div>
    </div>
  `;
}

function loadProducts() {
  Object.keys(productsData).forEach(category => {
    const grid = document.getElementById(`${category}Grid`);
    if (grid) {
      grid.innerHTML = productsData[category].map(product => createProductCard(product)).join('');
    }
  });
}

function addToCart(productId) {
  let product = null;
  Object.values(productsData).forEach(category => {
    const found = category.find(p => p.id === productId);
    if (found) product = found;
  });
  if (product) {
    cart.push(product);
    showNotification(`${product.name} adicionado ao carrinho!`);
    updateCartCounter();
  }
}

function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (cartCounter) {
    cartCounter.textContent = cart.length;
    cartCounter.style.display = cart.length ? 'flex' : 'none';
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `<div class="notification-content"><i class="fas fa-check-circle"></i><span>${message}</span></div>`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(45deg, #4CAF50, #45a049);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.style.transform = 'translateX(0)', 100);
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 3000);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

function setupBackToTopButton() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  });
}

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  });
}

function setupEventListeners() {
  document.querySelectorAll('nav a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(link.dataset.section);
    });
  });

  document.querySelector('.cta-button')?.addEventListener('click', () => {
    scrollToSection('tenis');
  });

  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  });
}

function initializeCartIcon() {
  const cartIcon = document.createElement('div');
  cartIcon.id = 'cart-icon';
  cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i><span id="cart-counter" class="cart-counter">${cart.length}</span>`;
  document.querySelector('.nav-brand').appendChild(cartIcon);
  updateCartCounter();
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

function headerScrollEffect() {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
  });
}

function init() {
  window.scrollTo({ top: 0, behavior: 'auto' });

  loadProducts();
  setupMobileMenu();
  setupEventListeners();
  setupBackToTopButton();
  initializeCartIcon();
  headerScrollEffect();
  setTimeout(initAnimations, 100);
}

document.addEventListener('DOMContentLoaded', init);

window.StyleHubApp = {
  addToCart,
  cart,
  productsData,
  scrollToSection
};