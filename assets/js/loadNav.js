document.addEventListener('DOMContentLoaded', function() {
  fetch('/dar123/nav.html')  // 直接使用倉庫名稱
    .then(response => {
      if (!response.ok) {
        throw new Error('Navigation not found');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('.site-nav').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
      useFallbackNavigation();
    });
});

function useFallbackNavigation() {
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.innerHTML = `
      <ul>
        <li><a href="/dar123/">首頁</a></li>
        <li><a href="/dar123/about/">關於</a></li>
        <li><a href="/dar123/posts/">文章</a></li>
      </ul>
    `;
  }
} 