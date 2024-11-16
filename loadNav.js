document.addEventListener('DOMContentLoaded', function() {
    // 獲取當前頁面的路徑層級
    const pathParts = window.location.pathname.split('/');
    const prefix = pathParts.length > 2 ? '../' : '';

    fetch(prefix + 'nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data;
            
            // 根據當前頁面的層級調整路徑
            if (prefix) {
                const links = document.querySelectorAll('nav a');
                links.forEach(link => {
                    if (link.getAttribute('href') && link.getAttribute('href') !== '#') {
                        link.href = prefix + link.getAttribute('href');
                    }
                });
            }
        });
}); 