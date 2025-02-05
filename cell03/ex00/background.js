
function changeBackground() {
    // สร้างค่าสีแบบสุ่ม (RGB)
    let randomColor = "rgb(" + 
        Math.floor(Math.random() * 256) + "," + 
        Math.floor(Math.random() * 256) + "," + 
        Math.floor(Math.random() * 256) + ")";
    
    // เปลี่ยนสีพื้นหลังของหน้าเว็บ
    document.body.style.backgroundColor = randomColor;
}
