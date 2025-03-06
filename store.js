const images = document.querySelectorAll('.product-image');
let currentIndex = 0;

// 初始化，顯示第一張圖片
images[currentIndex].classList.add('active');

function changeSlide(direction) {
    images[currentIndex].classList.remove('active'); // 隱藏當前圖片
    currentIndex += direction; // 更新索引

    // 確保索引在範圍內
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // 循環到最後一張
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // 循環到第一張
    }

    images[currentIndex].classList.add('active'); // 顯示新的圖片
}

// 自動切換圖片
setInterval(() => {
    changeSlide(1); // 每5秒切換到下一張
}, 5000); // 每5秒切換一次