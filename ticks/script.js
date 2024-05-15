document.getElementById("ticks-calculator").addEventListener("submit", function(event) {
    event.preventDefault();
    const seconds = parseInt(document.getElementById("seconds").value);
    const ticks = seconds * 20; // Каждая секунда в Minecraft равна 20 тикам
    document.getElementById("result").innerText = `Количество тиков: ${ticks}`;
});