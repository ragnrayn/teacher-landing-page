const phoneBtn = document.querySelectorAll(".phone-btn");
const phoneMain = "+38-096-579-56-72";
const oldText = "Звʼязатись"

phoneBtn.forEach(item => {
    item.href = "javascript:void(0)";
    item.addEventListener("click", () => {
        item.classList.toggle("expanded");
    
        item.classList.contains("expanded") ? item.textContent = phoneMain : item.textContent = oldText;
    });
})