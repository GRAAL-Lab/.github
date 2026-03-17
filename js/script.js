// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// sonar interaction
const sonar = document.querySelector(".sonar");

if (sonar) {
  sonar.addEventListener("mousemove", (e) => {
    const rect = sonar.getBoundingClientRect();
    const ping = document.createElement("div");
    ping.className = "ping active";

    ping.style.left = (e.clientX - rect.left) + "px";
    ping.style.top = (e.clientY - rect.top) + "px";

    sonar.appendChild(ping);

    setTimeout(() => {
      ping.remove();
    }, 1200);
  });
}
