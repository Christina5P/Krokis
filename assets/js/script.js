let currentPage = 'page1';  // Börjar på sida 1
const totalPages = 9;  // Totalt antal sidor, justera om du har fler eller färre sidor

// Funktion för att visa en specifik sida
function showPage(pageId) {
    // Göm alla sidor
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });


// Funktion för att gå tillbaka till innehållsförteckningen
document.querySelector(".page-footer a").addEventListener("click", function(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om
    window.scrollTo({
        top: document.getElementById("toc").offsetTop, // Detta ser till att du scrollar till innehållsförteckningen
        behavior: "smooth" // Gör scrollningen mjuk
    });
});

    // Visa den valda sidan
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    // Uppdatera currentPage
    currentPage = pageId;
}

// Gå till nästa sida
function nextPage() {
    let nextPageId = `page${parseInt(currentPage.replace('page', '')) + 1}`;
    if (parseInt(currentPage.replace('page', '')) < totalPages) {
        showPage(nextPageId);
    }
}

// Gå till föregående sida
function prevPage() {
    let prevPageId = `page${parseInt(currentPage.replace('page', '')) - 1}`;
    if (parseInt(currentPage.replace('page', '')) > 1) {
        showPage(prevPageId);
    }
}

// Använd denna kod för att byta sidor genom länkar
document.querySelectorAll('a[href^="#page"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Förhindrar standardbeteende (hashändring i URL)
        showPage(link.getAttribute('href').substring(1));  // Byt sida baserat på href
    });
});


// Feedback
var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Tack för din feedback!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! Det blev ett problem att skicka "
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Det blev ett problem att skicka"
  });
}

form.addEventListener("submit", handleSubmit)
