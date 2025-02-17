let currentPage = 1;
const totalPages = 6;

// Visa vald sida
function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById('page' + i).classList.remove('active');
    }
    document.getElementById('page' + page).classList.add('active');
}

// Gå till nästa sida
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Gå till föregående sida
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Initiera sidan
showPage(currentPage);