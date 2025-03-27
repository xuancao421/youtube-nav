// 搜索功能
document.querySelector('.search-box input').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    document.querySelectorAll('.list-group-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});
