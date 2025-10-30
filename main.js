/* ------------------ منع انتقال الصفحة عند الضغط على زر القائمة ------------------ */
document.querySelectorAll('.menu-button a, .sidebar li:first-child a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

/* ------------------ فتح / غلق السايدبار ------------------ */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.classList.add("show");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.classList.remove("show");
}

/* ------------------ المؤشر المخصص + صوت الكليك ------------------ */
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const clickSound = document.getElementById("clickSound");

// حركة الماوس
window.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  cursorOutline.animate(
    { left: `${x}px`, top: `${y}px` },
    { duration: 500, fill: "forwards" }
  );
});

// تغيير شكل المؤشر عند المرور على الروابط
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursorDot.classList.add("active");
    cursorOutline.classList.add("active");
  });
  link.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("active");
    cursorOutline.classList.remove("active");
  });
});

// تشغيل الصوت عند الكليك
window.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

/* ------------------ إخفاء لودر عند التحميل ------------------ */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.style.display = "none";
});

/* ------------------ سلايدر الشعارات (لو موجود) ------------------ */
const slide = document.querySelector(".logo-slide");
if (slide) {
  const duplicate = slide.cloneNode(true);
  document.querySelector(".logos").appendChild(duplicate);
}

/* ------------------ تغيير الخط لجميع عناصر H1 ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h1").forEach(h1 => {
    h1.style.fontFamily = "'Space Mono', monospace";
    h1.style.fontWeight = "700";
  });
});

/* ------------------ انيميشن عند السكروول (reveal) ------------------ */
const reveals = document.querySelectorAll(".card, .story, .skills, .logos, .footer-container");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
