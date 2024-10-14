function calculateSum() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber;
        document.getElementById('result').textContent = sum;
    } else {
        document.getElementById('result').textContent = 'Input tidak valid';
    }
}

function resetForm() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('result').textContent = '0';
}