document.addEventListener("DOMContentLoaded", function() {

const resume = document.getElementById('resume');
const del = document.getElementById('delete');
let value = 200;

// Calculate
resume.addEventListener("click", calcAmount);

function calcAmount(){
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;
    let total = value * parseInt(quantity);

    switch (category) {
        case 'Estudiante':
            total -= total * 0.8;
            document.getElementById('amount').innerHTML = 'Total a pagar: $'+total;
            break;
        case 'Trainee':
            total -= total * 0.5;
            document.getElementById('amount').innerHTML = 'Total a pagar: $'+total;
            break;
        case 'Junior':
            total -= total * 0.15;
            document.getElementById('amount').innerHTML = 'Total a pagar: $'+total;
            break;
    }
}

// Delete All
del.addEventListener("click", deleteAll);
function deleteAll(){
    document.getElementById("quantity").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById('amount').innerHTML = 'Total a pagar: $0';
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
}
})