function calculateSnap() {
    const desiredSnap = parseInt(document.getElementById("desired-snap").value);
    const baseSnap = parseInt(document.getElementById("base-snap").value.split('/')[1]);
    const bpm = parseFloat(document.getElementById("bpm").value);

    if (!isNaN(desiredSnap) && !isNaN(baseSnap) && !isNaN(bpm)) {
        const result = (bpm * desiredSnap) / baseSnap;
        document.getElementById("result").textContent = result.toFixed(2);
    } else {
        alert("Please enter valid values for all fields.");
    }
}
