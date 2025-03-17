document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact Button Handler
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const phone = '၀၉-၇၇၇၇၇၇၇၈၈';
        alert(`ကျေးဇူးပြု၍ ဖုန်းခေါ်ဆိုပါ: ${phone}`);
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ကျေးဇူးတင်ပါသည်! သင့်စာကို လက်ခံရရှိပါပြီ။');
    e.target.reset();
});

