// Funzione per generare il comando Minecraft per creare un blocco di terra
function generateCommand() {
    var size = prompt("Inserisci la dimensione del blocco di terra (1-64):");
    if (size && !isNaN(size) && size >= 1 && size <= 64) {
        var command = "/give @p minecraft:dirt " + size;
        document.getElementById("commandOutput").innerText = "Comando generato: " + command;
    } else {
        alert("Inserisci un numero valido tra 1 e 64.");
    }
}

// Associa la funzione al pulsante di generazione
document.getElementById("generateButton").addEventListener("click", generateCommand);
