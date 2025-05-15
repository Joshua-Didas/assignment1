
function greetUser() {
    const hour = new Date().getHours();
    let greeting = "Hello!";
  
    if (hour < 12) greeting = "Good Morning, Joshua!";
    else if (hour < 18) greeting = "Good Afternoon, Joshua!";
    else greeting = "Good Evening, Joshua!";
  
    const greetBox = document.createElement('div');
    greetBox.textContent = greeting;
    Object.assign(greetBox.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#00d4ff',
      color: '#0b0e1c',
      padding: '10px 20px',
      borderRadius: '20px',
      fontWeight: 'bold',
      boxShadow: '0 4px 12px rgba(0,212,255,0.3)',
      zIndex: '999',
      fontFamily: 'Urbanist, sans-serif'
    });
    document.body.appendChild(greetBox);
    setTimeout(() => greetBox.remove(), 4000);
  }
  
  window.onload = greetUser;
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
  
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        const phonePattern = /^[0-9]{9,14}$/;
  
        if (!name || !email || !phone || !message) {
          alert("Please fill out all fields.");
          return;
        }
  
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        if (!phonePattern.test(phone)) {
          alert("Phone number must be between 9 and 14 digits.");
          return;
        }
  
        alert("Thank you for your message, Joshua!");
        form.reset();
      });
    }
  

    const canvas = document.getElementById("skillsChart");
    if (canvas) {
      renderRadarChart(canvas);
    }
  });
  
  
  function renderRadarChart(canvas) {
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'UI Design', 'Responsiveness', 'Animation'],
        datasets: [{
          label: 'Skill Level',
          data: [90, 85, 80, 75, 95, 88],
          backgroundColor: 'rgba(0, 212, 255, 0.3)',
          borderColor: '#00d4ff',
          pointBackgroundColor: '#00d4ff'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: { display: false },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              color: "#aaa",
              backdropColor: "transparent"
            },
            pointLabels: {
              color: "#fff",
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: { color: "#fff" }
          }
        }
      }
    });
  }
  