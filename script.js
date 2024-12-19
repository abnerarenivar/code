// Función para extraer el DUI del MRZ
function extractDUI(mrzCode) {
    const mrzRegex = /^IDSLV(\d{8})<<(\d).*$/; // Expresión regular
    const match = mrzCode.match(mrzRegex);

    if (match) {
        const dui = match[1]; // Captura el número de DUI
        const checkDigit = match[2]; // Captura el dígito de control
        return `${dui}-${checkDigit}`;
    }
    return "Formato inválido";
}

// Detecta cambios en el textarea y extrae automáticamente el DUI
document.getElementById("textareaMRZ").addEventListener("input", () => {
    const textareaMRZ = document.getElementById("textareaMRZ").value.trim();
    const inputDUI = document.getElementById("inputDUI");

    if (textareaMRZ) {
        const dui = extractDUI(textareaMRZ);
        inputDUI.value = dui !== "Formato inválido" ? dui : "";
    } else {
        inputDUI.value = ""; // Limpia el campo si no hay texto
    }
});
