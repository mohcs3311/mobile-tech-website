const translations = {
    en: {
        top_marquee: "BEST SMARTPHONE RETAILER IN SOUTH ASIA — THINK TECH & THINK SMART",
        search_placeholder: "Search smartphones, accessories...",
        nav_about: "About Us",
        matara_branch: "Matara Branch",
        colombo_branch: "Colombo Branch",
        hero_title: "Shop the Latest Mobile Phones in Sri Lanka",
        hero_subtitle: "Authorized Dealer for Apple, Samsung, Xiaomi, and more with 1-Year Warranty.",
        categories_title: "Explore Categories",
        cat_phones: "Smartphones",
        cat_speakers: "Speakers",
        cat_earphones: "Earphones",
        cat_watches: "Smart Watches",
        about_text: "Sri Lanka's leading mobile phone store, offering a vast range of smartphones, accessories, and repair services. Enjoy a seamless shopping experience with high-quality devices to suit all budgets.",
        contact_us: "Contact & Support"
    },
    ta: {
        top_marquee: "தெற்காசியாவின் சிறந்த ஸ்மார்ட்போன் சில்லறை விற்பனையாளர் — மொபைல் டெக்",
        search_placeholder: "ஸ்மார்ட்போன்கள், பாகங்களைத் தேடுங்கள்...",
        nav_about: "எங்களைப் பற்றி",
        matara_branch: "மாத்தறை கிளை",
        colombo_branch: "கொழும்பு கிளை",
        hero_title: "இலங்கையில் சமீபத்திய மொபைல் போன்களை வாங்கவும்",
        hero_subtitle: "ஆப்பிள், சாம்சங், ஷோமி ஆகியவற்றின் அங்கீகரிக்கப்பட்ட விற்பனையாளர் (1 வருட உத்தரவாதத்துடன்).",
        categories_title: "வகைகளை ஆராயுங்கள்",
        cat_phones: "ஸ்மார்ட்போன்கள்",
        cat_speakers: "ஸ்பீக்கர்கள்",
        cat_earphones: "இயர்போன்கள்",
        cat_watches: "ஸ்மார்ட் கடிகாரங்கள்",
        about_text: "மொபைல் டெக் என்பது இலங்கையின் முன்னணி மொபைல் போன் கடைகளில் ஒன்றாகும். அனைத்து பட்ஜெட்டுகளுக்கும் ஏற்ற உயர்தர சாதனங்களை இங்கே பெறலாம்.",
        contact_us: "தொடர்பு & ஆதரவு"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ta').classList.toggle('active', lang === 'ta');

    localStorage.setItem('selected_lang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selected_lang') || 'en';
    switchLanguage(savedLang);
});