document.getElementById("ticks-calculator").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const days = parseInt(document.getElementById("days").value);
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);
    const seconds = parseInt(document.getElementById("seconds").value);
  
    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    const ticks = totalSeconds * 20;
  
    document.getElementById("result").innerText = `Количество тиков: ${ticks}`;
  });