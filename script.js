// Restaurant Data
        const menuItems = [
            {
                id: 1,
                name: "French Onion Soup",
                category: "starters",
                price: 12,
                description: "Caramelized onions in rich beef broth with gruyère crouton",
                tags: ["Soup", "Vegetarian"],
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                name: "Escargots de Bourgogne",
                category: "starters",
                price: 18,
                description: "Snails baked in garlic-parsley butter with baguette",
                tags: ["French", "Signature"],
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                name: "Beef Wellington",
                category: "mains",
                price: 42,
                description: "Prime beef tenderloin with mushroom duxelles in puff pastry",
                tags: ["Beef", "Signature", "Premium"],
                image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                name: "Duck Confit",
                category: "mains",
                price: 36,
                description: "Crispy duck leg with potato gratin and orange reduction",
                tags: ["Duck", "French"],
                image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                name: "Sea Bass en Papillote",
                category: "mains",
                price: 38,
                description: "Chilean sea bass baked in parchment with herbs and vegetables",
                tags: ["Fish", "Healthy"],
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                name: "Crème Brûlée",
                category: "desserts",
                price: 14,
                description: "Classic vanilla bean custard with caramelized sugar top",
                tags: ["Classic", "Vegetarian"],
                image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 7,
                name: "Chocolate Soufflé",
                category: "desserts",
                price: 16,
                description: "Warm chocolate soufflé with vanilla bean ice cream",
                tags: ["Chocolate", "Signature"],
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                name: "French 75",
                category: "drinks",
                price: 16,
                description: "Gin, champagne, lemon juice, simple syrup",
                tags: ["Cocktail", "Classic"],
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 9,
                name: "Wine Flight",
                category: "drinks",
                price: 28,
                description: "Three 3oz pours of featured French wines",
                tags: ["Wine", "Tasting"],
                image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Gallery Images
        const galleryImages = [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ];

        // DOM Elements
        const header = document.getElementById('header');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const menuGrid = document.getElementById('menuGrid');
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const galleryModal = document.getElementById('galleryModal');
        const modalImg = document.getElementById('modalImg');
        const modalClose = document.getElementById('modalClose');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const bookingForm = document.getElementById('bookingForm');
        
        // Current states
        let currentSlide = 0;
        let currentImageIndex = 0;
        let slideInterval;

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Navigation
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Initialize Menu
        function renderMenuItems(category = 'all') {
            menuGrid.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.className = 'menu-item';
                menuItemElement.setAttribute('data-category', item.category);
                
                menuItemElement.innerHTML = `
                    <div class="menu-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3>${item.name}</h3>
                            <div class="menu-item-price">$${item.price}</div>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                        <div class="menu-item-tags">
                            ${item.tags.map(tag => `<span class="menu-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                menuGrid.appendChild(menuItemElement);
            });
        }

        // Menu Filtering
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Get category and render items
                const category = btn.getAttribute('data-category');
                renderMenuItems(category);
            });
        });

        // Testimonial Carousel
        function showSlide(index) {
            // Hide all slides
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            
            // Show current slide
            testimonialSlides[index].classList.add('active');
            testimonialDots[index].classList.add('active');
            currentSlide = index;
        }

        // Testimonial Dot Navigation
        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
                resetSlideInterval();
            });
        });

        // Auto-advance slides
        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }

        function startSlideInterval() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }

        // Gallery Lightbox
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                currentImageIndex = parseInt(item.getAttribute('data-index'));
                modalImg.src = galleryImages[currentImageIndex];
                galleryModal.style.display = 'flex';
            });
        });

        // Modal Navigation
        modalClose.addEventListener('click', () => {
            galleryModal.style.display = 'none';
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImg.src = galleryImages[currentImageIndex];
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImg.src = galleryImages[currentImageIndex];
        });

        // Close modal when clicking outside image
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                galleryModal.style.display = 'none';
            }
        });

        // Form Submission
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            // Basic validation
            if (!name || !email || !date || !time || !guests) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Format date for display
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Show confirmation
            alert(`Thank you, ${name}! Your table for ${guests} guests is reserved for ${formattedDate} at ${time}. A confirmation email has been sent to ${email}.`);
            
            // Reset form
            bookingForm.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Set minimum date to today
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;

        // Initialize the page
        function init() {
            // Render menu
            renderMenuItems();
            
            // Start testimonial carousel
            startSlideInterval();
            
            // Set active navigation based on scroll
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', () => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${current}`) {
                        item.classList.add('active');
                    }
                });
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);