let count = 0;

function generateData() {
    const table = document.querySelector("#dataTable tbody");
    const newRow = table.insertRow();
    
    newRow.insertCell(0).textContent = ++count;
    newRow.insertCell(1).textContent = Math.floor(Math.random() * 100);
}

function startGeneration() {
    const interval = document.getElementById("interval").value;
    window.dataInterval = setInterval(generateData, interval);
}

function stopGeneration() {
    clearInterval(window.dataInterval);
}