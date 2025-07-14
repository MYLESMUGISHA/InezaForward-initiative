let mobileMenuOpen = false;
        let selectedAmount = 0;
        let selectedFrequency = 'one-time';
        let selectedPaymentMethod = 'credit-card';

        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', function() {
            initializeWebsite();
        });

        function initializeWebsite() {
            setupEventListeners();
            setupMobileMenu();
            setupScrollEffects();
            setupAnimations();
            setupDonationForm();
        }

        // Event Listeners Setup
        function setupEventListeners() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    // Skip if it's just a hash symbol or empty
                    if (href === '#' || href.length <= 1) {
                        return; // Let the default behavior happen
                    }
                    
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        closeMobileMenu();
                    }
                });
            });

            // Form submissions
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', handleContactForm);
            }
            
            const newsletterForm = document.getElementById('newsletterForm');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', handleNewsletterForm);
            }
            
            const donationForm = document.getElementById('donationForm');
            if (donationForm) {
                donationForm.addEventListener('submit', handleDonationForm);
            }
        }

        // Mobile Menu Setup
        function setupMobileMenu() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileNav = document.getElementById('mobileNav');

            if (mobileMenuToggle && mobileNav) {
                mobileMenuToggle.addEventListener('click', function() {
                    toggleMobileMenu();
                });

                // Close mobile menu when clicking on navigation links
                document.querySelectorAll('.mobile-nav-link').forEach(link => {
                    link.addEventListener('click', function() {
                        closeMobileMenu();
                    });
                });
            }
        }

        function toggleMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            
            if (mobileMenuOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }

        function openMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            
            if (mobileNav && mobileMenuToggle) {
                mobileNav.classList.add('active');
                mobileMenuOpen = true;
                
                // Change hamburger to X
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        }

        function closeMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            
            if (mobileNav && mobileMenuToggle) {
                mobileNav.classList.remove('active');
                mobileMenuOpen = false;
                
                // Change X back to hamburger
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }

        // Scroll Effects
        function setupScrollEffects() {
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            });
        }

        // Animations
        function setupAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Donation Form Setup
        function setupDonationForm() {
            // Amount selection
            document.querySelectorAll('.amount-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedAmount = parseInt(this.dataset.amount);
                    document.getElementById('customAmount').value = '';
                    updateDonationSummary();
                });
            });

            // Custom amount
            document.getElementById('customAmount').addEventListener('input', function() {
                const customAmount = parseFloat(this.value) || 0;
                if (customAmount > 0) {
                    document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
                    selectedAmount = customAmount;
                    updateDonationSummary();
                }
            });

            // Frequency selection
            document.querySelectorAll('.frequency-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.frequency-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedFrequency = this.dataset.frequency;
                    updateDonationSummary();
                });
            });

            // Payment method selection
            document.querySelectorAll('.payment-method').forEach(method => {
                method.addEventListener('click', function() {
                    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedPaymentMethod = this.dataset.method;
                    showPaymentSection(selectedPaymentMethod);
                });
            });

            // Input formatting
            setupInputFormatting();
        }

        function setupInputFormatting() {
            // Credit card number formatting
            document.getElementById('cardNumber').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
                let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
                if (formattedValue.length <= 19) {
                    e.target.value = formattedValue;
                }
            });

            // Expiry date formatting
            document.getElementById('expiryDate').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });

            // CVV formatting
            document.getElementById('cvv').addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });

            // Phone formatting
            document.getElementById('phone').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 6) {
                    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                } else if (value.length >= 3) {
                    value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
                }
                e.target.value = value;
            });
        }

        function showPaymentSection(method) {
            // Hide all payment sections
            document.getElementById('creditCardSection').classList.add('hidden');
            document.getElementById('paypalSection').classList.add('hidden');
            document.getElementById('bankTransferSection').classList.add('hidden');

            // Show selected payment section
            if (method === 'credit-card') {
                document.getElementById('creditCardSection').classList.remove('hidden');
            } else if (method === 'paypal') {
                document.getElementById('paypalSection').classList.remove('hidden');
            } else if (method === 'bank-transfer') {
                document.getElementById('bankTransferSection').classList.remove('hidden');
            }
        }

        function updateDonationSummary() {
            const processingFee = calculateProcessingFee(selectedAmount);
            const total = selectedAmount + processingFee;

            document.getElementById('summaryAmount').textContent = `$${selectedAmount.toFixed(2)}`;
            document.getElementById('summaryFee').textContent = `$${processingFee.toFixed(2)}`;
            document.getElementById('summaryFrequency').textContent = 
                selectedFrequency === 'one-time' ? 'One Time' : 
                selectedFrequency === 'monthly' ? 'Monthly' : 'Yearly';
            document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;
        }

        function calculateProcessingFee(amount) {
            // Simulate processing fee calculation (2.9% + $0.30)
            return Math.round((amount * 0.029 + 0.30) * 100) / 100;
        }

        // Form Validation
        function validateDonationForm(formData) {
            const errors = [];
            
            // Required fields
            const requiredFields = ['firstName', 'lastName', 'email'];
            requiredFields.forEach(field => {
                if (!formData.get(field) || !formData.get(field).trim()) {
                    errors.push({ field, message: 'This field is required' });
                }
            });

            // Email validation
            const email = formData.get('email');
            if (email && !isValidEmail(email)) {
                errors.push({ field: 'email', message: 'Please enter a valid email address' });
            }

            // Amount validation
            if (selectedAmount <= 0) {
                errors.push({ field: 'amount', message: 'Please select a donation amount' });
            }

            // Credit card validation (if credit card is selected)
            if (selectedPaymentMethod === 'credit-card') {
                const cardNumber = formData.get('cardNumber');
                const cardName = formData.get('cardName');
                const expiryDate = formData.get('expiryDate');
                const cvv = formData.get('cvv');

                if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
                    errors.push({ field: 'cardNumber', message: 'Please enter a valid card number' });
                }

                if (!cardName || !cardName.trim()) {
                    errors.push({ field: 'cardName', message: 'Please enter the name on card' });
                }

                if (!expiryDate || !isValidExpiryDate(expiryDate)) {
                    errors.push({ field: 'expiryDate', message: 'Please enter a valid expiry date' });
                }

                if (!cvv || cvv.length < 3) {
                    errors.push({ field: 'cvv', message: 'Please enter a valid CVV' });
                }
            }

            // Terms agreement
            if (!formData.get('terms')) {
                errors.push({ field: 'terms', message: 'You must agree to the terms and conditions' });
            }

            return errors;
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidExpiryDate(date) {
            if (!/^\d{2}\/\d{2}$/.test(date)) return false;
            
            const [month, year] = date.split('/').map(num => parseInt(num));
            if (month < 1 || month > 12) return false;
            
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() % 100;
            const currentMonth = currentDate.getMonth() + 1;
            
            if (year < currentYear || (year === currentYear && month < currentMonth)) {
                return false;
            }
            
            return true;
        }

        function showFieldErrors(errors) {
            // Clear previous errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });

            // Show new errors
            errors.forEach(error => {
                const field = document.querySelector(`[name="${error.field}"]`);
                if (field) {
                    const formGroup = field.closest('.form-group');
                    if (formGroup) {
                        formGroup.classList.add('error');
                        const errorMessage = formGroup.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.textContent = error.message;
                        }
                    }
                }
            });
        }

        // Form Handlers
        function handleDonationForm(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            
            // Validate form
            const errors = validateDonationForm(formData);
            if (errors.length > 0) {
                showFieldErrors(errors);
                return;
            }

            // Clear any previous errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
            
            // Show loading state
            const originalText = submitText.textContent;
            submitBtn.disabled = true;
            submitText.innerHTML = '<div class="loading-spinner"></div>Processing...';
            
            // Simulate payment processing
            setTimeout(() => {
                // Reset button
                submitBtn.disabled = false;
                submitText.textContent = originalText;
                
                // Show success modal
                showSuccessModal();
                
                // Reset form
                form.reset();
                selectedAmount = 0;
                selectedFrequency = 'one-time';
                document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
                document.querySelectorAll('.frequency-option').forEach(opt => opt.classList.remove('selected'));
                document.querySelector('.frequency-option[data-frequency="one-time"]').classList.add('selected');
                updateDonationSummary();
            }, 3000);
        }

        function handleContactForm(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const successMessage = document.getElementById('contactSuccess');
            
            // Get form data
            const formData = new FormData(form);
            const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name.trim() || !email.trim() || !subject || !message.trim()) {
                showMessage('Please fill in all required fields.');
                return;
            }
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                successMessage.style.display = 'block';
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 2000);
        }

        function handleNewsletterForm(e) {
            e.preventDefault();
            
            const form = e.target;
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');
            const successMessage = document.getElementById('newsletterSuccess');
            
            if (!emailInput.value.trim()) {
                showMessage('Please enter a valid email address.');
                return;
            }
            
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate subscription
            setTimeout(() => {
                successMessage.style.display = 'block';
                form.reset();
                
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        }

        // Modal Functions
        function showSuccessModal() {
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeSuccessModal() {
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        function openTermsModal() {
            const modal = document.getElementById('termsModal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeTermsModal() {
            const modal = document.getElementById('termsModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        function openPrivacyModal() {
            const modal = document.getElementById('privacyModal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closePrivacyModal() {
            const modal = document.getElementById('privacyModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Utility Functions
        function showMessage(message) {
            alert(message);
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function scrollToDonate() {
            const donateSection = document.getElementById('donate');
            if (donateSection) {
                donateSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            closeMobileMenu();
        }

        function scrollToContact() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            closeMobileMenu();
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (mobileMenuOpen) {
                    closeMobileMenu();
                }
                
                // Close any open modals
                const activeModals = [
                    document.getElementById('successModal'),
                    document.getElementById('termsModal'),
                    document.getElementById('privacyModal')
                ];
                
                activeModals.forEach(modal => {
                    if (modal && modal.classList.contains('active')) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            
            if (mobileMenuOpen && 
                !mobileNav.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close modals when clicking on overlay
        document.addEventListener('DOMContentLoaded', function() {
            // Success Modal
            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeSuccessModal();
                    }
                });
            }

            // Terms Modal
            const termsModal = document.getElementById('termsModal');
            if (termsModal) {
                termsModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeTermsModal();
                    }
                });
            }

            // Privacy Modal
            const privacyModal = document.getElementById('privacyModal');
            if (privacyModal) {
                privacyModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closePrivacyModal();
                    }
                });
            }
        });