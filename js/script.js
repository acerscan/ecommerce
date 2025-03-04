// script.js

// Fungsi untuk memuat konten HTML dari file eksternal
function loadComponent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => {
      document.getElementById(containerId).innerHTML =
        "<p>Error loading content. Please try again later.</p>";
      console.error("Error loading component:", error);
    });
}

// Fungsi untuk memuat halaman berdasarkan URL
function loadPageContent() {
  const path = window.location.pathname; // Mendapatkan path URL saat ini
  let pageContentUrl = "pages/home.html"; // Default ke home.html

  if (path.includes("about.html")) {
    pageContentUrl = "pages/about.html";
  } else if (path.includes("contact.html")) {
    pageContentUrl = "pages/contact.html";
  }

  // Memuat komponen header dan footer
  loadComponent("components/header.html", "header-container");
  loadComponent(pageContentUrl, "main-content-container");
  loadComponent("components/footer.html", "footer-container");
}

// Memuat komponen saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadPageContent);
