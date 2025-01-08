document.getElementById('toggle-contact-btn').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    contactInfo.classList.toggle('hidden');
    
    if (contactInfo.classList.contains('hidden')) {
        this.textContent = 'Show Contact Info';
    } else {
        this.textContent = 'Hide Contact Info';
    }
});
