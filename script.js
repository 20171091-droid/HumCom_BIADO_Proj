// SHOW BUTTON WHEN SCROLLING
window.onscroll = function () {
  let btn = document.getElementById("topBtn");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// SCROLL TO TOP FUNCTION
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

const feedbackBtn = document.getElementById("feedbackBtn");
const modal = document.getElementById("feedbackModal");
const closeBtn = document.getElementById("closeFeedback");

feedbackBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

function submitFeedback() {
  const text = document.getElementById("feedbackText").value;
  const msg = document.getElementById("feedbackMsg");

  if (text.trim() === "") {
    msg.innerText = "Please write something first!";
    return;
  }

  // Save locally (browser only)
  let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.push(text);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  msg.innerText = "Thank you for your feedback! 💖";
  document.getElementById("feedbackText").value = "";
}