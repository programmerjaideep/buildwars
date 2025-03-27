const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-eligibility': 'Eligibility',
        'nav-contact': 'Contact',
        'login': 'Login',
        'header-title': 'Government Schemes',
        'header-subtitle': 'At Your Service',
        'govInitiative': 'Government of India Initiative',
        'schemeName': 'National Empowerment Scheme',
        'schemeDesc': 'Empowering citizens through financial inclusion and skill development for a self-reliant India',
        'applyNow': 'Apply Now',
        'checkEligibility': 'Check Eligibility',
        'financialAssistance': 'Financial Assistance',
        'beneficiaries': 'Beneficiaries',
        'statesCovered': 'States Covered',
        'trainingCenters': 'Training Centers',
        'schemesTitle': 'Government Schemes',
        'schemesDesc': 'Major welfare schemes operated by the Government of India',
        'educationSchemes': 'Education Schemes',
        'healthSchemes': 'Health Schemes',
        'agricultureSchemes': 'Agriculture Schemes',
        'housingSchemes': 'Housing Schemes',
        'pmVidya': 'PM Vidya Lakshmi Program',
        'midDayMeal': 'Mid-Day Meal Scheme',
        'sarvaShiksha': 'Sarva Shiksha Abhiyan',
        'ayushmanBharat': 'Ayushman Bharat Scheme',
        'pmJanArogya': 'PM Jan Arogya Scheme',
        'nationalHealth': 'National Health Mission',
        'pmKisan': 'PM Kisan Samman Nidhi',
        'kisanCredit': 'Kisan Credit Card',
        'cropInsurance': 'Crop Insurance Scheme',
        'pmAwas': 'PM Awas Yojana',
        'smartCity': 'Smart City Mission',
        'amrut': 'AMRUT Mission',
        'learnMore': 'Learn More',
        'usefulLinks': 'Useful Links',
        'footer-title': 'Government Schemes',
        'footer-subtitle': 'At Your Service',
        'footer-desc': 'Your trusted platform for government scheme information and application process',
        'footer-quick-links': 'Quick Links',
        'footer-home': 'Home',
        'footer-about': 'About',
        'footer-eligibility': 'Eligibility',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2024 Government Schemes. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms & Conditions',
        'footer-sitemap': 'Sitemap'
    },
    hi: {
        'nav-home': 'होम',
        'nav-about': 'हमारे बारे में',
        'nav-eligibility': 'पात्रता',
        'nav-contact': 'संपर्क',
        'login': 'लॉगिन',
        'header-title': 'सरकारी योजनाएं',
        'header-subtitle': 'आपकी सहायता के लिए',
        'govInitiative': 'भारत सरकार की पहल',
        'schemeName': 'राष्ट्रीय सशक्तिकरण योजना',
        'schemeDesc': 'आत्मनिर्भर भारत के लिए वित्तीय समावेशन और कौशल विकास के माध्यम से नागरिकों को सशक्त बनाना',
        'applyNow': 'अभी आवेदन करें',
        'checkEligibility': 'पात्रता जांचें',
        'financialAssistance': 'वित्तीय सहायता',
        'beneficiaries': 'लाभार्थी',
        'statesCovered': 'राज्य कवर',
        'trainingCenters': 'प्रशिक्षण केंद्र',
        'schemesTitle': 'सरकारी योजनाएं',
        'schemesDesc': 'भारत सरकार द्वारा संचालित प्रमुख कल्याणकारी योजनाएं',
        'educationSchemes': 'शिक्षा योजनाएं',
        'healthSchemes': 'स्वास्थ्य योजनाएं',
        'agricultureSchemes': 'कृषि योजनाएं',
        'housingSchemes': 'आवास योजनाएं',
        'pmVidya': 'प्रधानमंत्री विद्या लक्ष्मी कार्यक्रम',
        'midDayMeal': 'मिड-डे मील योजना',
        'sarvaShiksha': 'सर्व शिक्षा अभियान',
        'ayushmanBharat': 'आयुष्मान भारत योजना',
        'pmJanArogya': 'प्रधानमंत्री जन आरोग्य योजना',
        'nationalHealth': 'राष्ट्रीय स्वास्थ्य मिशन',
        'pmKisan': 'प्रधानमंत्री किसान सम्मान निधि',
        'kisanCredit': 'किसान क्रेडिट कार्ड',
        'cropInsurance': 'फसल बीमा योजना',
        'pmAwas': 'प्रधानमंत्री आवास योजना',
        'smartCity': 'स्मार्ट सिटी मिशन',
        'amrut': 'अमृत मिशन',
        'learnMore': 'अधिक जानें',
        'usefulLinks': 'उपयोगी लिंक्स',
        'footer-title': 'सरकारी योजनाएं',
        'footer-subtitle': 'आपकी सहायता के लिए',
        'footer-desc': 'सरकारी योजनाओं की जानकारी और आवेदन प्रक्रिया के लिए आपका विश्वसनीय प्लेटफॉर्म',
        'footer-quick-links': 'त्वरित लिंक',
        'footer-home': 'होम',
        'footer-about': 'हमारे बारे में',
        'footer-eligibility': 'पात्रता',
        'footer-contact': 'संपर्क',
        'footer-copyright': '© 2024 सरकारी योजनाएं. सर्वाधिकार सुरक्षित.',
        'footer-privacy': 'गोपनीयता नीति',
        'footer-terms': 'नियम और शर्तें',
        'footer-sitemap': 'साइटमैप'
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    document.documentElement.lang = language;
    localStorage.setItem('selectedLanguage', language);
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'hi';
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);
    
    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    const applyButton = document.querySelector('.primary-btn');
    if (applyButton) {
        applyButton.addEventListener('click', () => {
            window.location.href = '#schemes';
        });
    }

    const eligibilityButton = document.querySelector('.secondary-btn');
    if (eligibilityButton) {
        eligibilityButton.addEventListener('click', () => {
            window.location.href = 'eligibility.html';
        });
    }

    const schemeCards = document.querySelectorAll('.scheme-card');
    schemeCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
        
        const schemeBtn = card.querySelector('.scheme-btn');
        if (schemeBtn) {
            schemeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const href = schemeBtn.getAttribute('href');
                window.location.href = href;
            });
        }
    });
    const stats = document.querySelectorAll('.stat-card h2');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                if (stat.textContent.includes('₹')) {
                    stat.textContent = `₹${Math.floor(current).toLocaleString()}`;
                } else if (stat.textContent.includes('M+')) {
                    stat.textContent = `${(current).toFixed(1)}M+`;
                } else if (stat.textContent.includes('+')) {
                    stat.textContent = `${Math.floor(current)}+`;
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 20);
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    const schemeImages = document.querySelectorAll('.scheme-image');
    schemeImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });
        
        image.addEventListener('mouseleave', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.2)';
        });
        
        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1)';
        });
    });
    const currentYear = new Date().getFullYear();
    const copyrightEl = document.querySelector('.footer-bottom p');
    if (copyrightEl) {
        copyrightEl.innerHTML = copyrightEl.innerHTML.replace('2023', currentYear);
    }

    // Learn More बटन के लिए इवेंट लिसनर
    const learnMoreButtons = document.querySelectorAll('.scheme-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
}); 