const translations = {
    en: {
        'header-title': 'Government Schemes',
        'header-subtitle': 'At Your Service',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-eligibility': 'Eligibility',
        'nav-contact': 'Contact',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'We are here to help you',
        'contact-info-title': 'Contact Information',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-hours-title': 'Working Hours',
        'department-title': 'Department Contacts',
        'dept-education': 'Education Department',
        'dept-health': 'Health Department',
        'dept-housing': 'Housing Department',
        'dept-agriculture': 'Agriculture Department',
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
        'footer-sitemap': 'Sitemap',
        'nationalEmpowerment': 'National Empowerment Scheme',
        'govtInitiative': 'Government of India Initiative',
        'usefulLinks': 'Useful Links',
        'govtPortals': 'Government Portals',
        'indiaGov': 'India Government Portal',
        'myGov': 'MyGov India',
        'digitalIndia': 'Digital India',
        'aadhar': 'Aadhaar',
        'makeInIndia': 'Make in India',
        'contactUs': 'Contact Us',
        'officeAddress': 'National Empowerment Scheme Office,',
        'officeLocation': 'Shram Shakti Bhawan, New Delhi - 110001',
        'tollFree': 'Toll Free:',
        'email': 'Email:',
        'terms': 'Terms & Conditions',
        'privacy': 'Privacy Policy',
        'sitemap': 'Sitemap',
        'language': 'हिंदी / English'
    },
    hi: {
        'header-title': 'सरकारी योजनाएं',
        'header-subtitle': 'आपकी सहायता के लिए',
        'nav-home': 'होम',
        'nav-about': 'हमारे बारे में',
        'nav-eligibility': 'पात्रता',
        'nav-contact': 'संपर्क',
        'contact-title': 'संपर्क करें',
        'contact-subtitle': 'हम आपकी मदद के लिए यहाँ हैं',
        'contact-info-title': 'संपर्क जानकारी',
        'contact-email-title': 'ईमेल',
        'contact-phone-title': 'फोन',
        'contact-hours-title': 'कार्य समय',
        'department-title': 'विभागीय संपर्क',
        'dept-education': 'शिक्षा विभाग',
        'dept-health': 'स्वास्थ्य विभाग',
        'dept-housing': 'आवास विभाग',
        'dept-agriculture': 'कृषि विभाग',
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
        'footer-sitemap': 'साइटमैप',
        'nationalEmpowerment': 'राष्ट्रीय सशक्तिकरण योजना',
        'govtInitiative': 'भारत सरकार की पहल',
        'usefulLinks': 'उपयोगी लिंक्स',
        'govtPortals': 'सरकारी पोर्टल्स',
        'indiaGov': 'भारत सरकार पोर्टल',
        'myGov': 'माई गव इंडिया',
        'digitalIndia': 'डिजिटल इंडिया',
        'aadhar': 'आधार',
        'makeInIndia': 'मेक इन इंडिया',
        'contactUs': 'संपर्क करें',
        'officeAddress': 'राष्ट्रीय सशक्तिकरण योजना कार्यालय,',
        'officeLocation': 'श्रम शक्ति भवन, नई दिल्ली - 110001',
        'tollFree': 'टोल फ्री:',
        'email': 'ईमेल:',
        'terms': 'नियम और शर्तें',
        'privacy': 'गोपनीयता नीति',
        'sitemap': 'साइटमैप',
        'language': 'हिंदी / English'
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const languageSelect = document.getElementById('languageSelect');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);

    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        changeLanguage(selectedLanguage);
    });

    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}); 