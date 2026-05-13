// Arreglo de cuentas proporcionado en el proyecto 
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234", dni: 44788834 },
    { nombre: "Gera", saldo: 150, password: "5678", dni: 10247439 },
    { nombre: "Sabi", saldo: 60, password: "9102", dni: 98005362 }
];

// Variable para rastrear quién inició sesión
let cuentaSeleccionada = null;

function validarLogin() {
    const dniIngresado = document.getElementById('select-user').value;
    const passIngresado = document.getElementById('password').value;

    // Buscamos la cuenta que coincida con el DNI seleccionado
    const cuenta = cuentas.find(c => c.dni == dniIngresado);

    if (cuenta && cuenta.password === passIngresado) {
        // Si es correcto 
        cuentaSeleccionada = cuenta;
        iniciarSesionUI();
    } else {
        // Si es incorrecto 
        alert("Contraseña incorrecta o usuario no seleccionado. Intente nuevamente.");
    }
}

function iniciarSesionUI() {
    // Intercambiamos pantallas
    document.getElementById('login-section').classList.add('d-none');
    document.getElementById('menu-section').classList.remove('d-none');
    
    // Mostramos el nombre del usuario logueado
    document.getElementById('user-name-display').innerText = cuentaSeleccionada.nombre;

    // Limpiar la pantalla del cajero al entrar
    document.getElementById('display-screen').innerHTML = '<p class="text-muted m-0">Seleccione una operación</p>';
}

function logout() {
    // Resetear app y volver al login
    cuentaSeleccionada = null;
    document.getElementById('password').value = "";
    document.getElementById('select-user').value = "";

    // Limpiar la pantalla del cajero al salir
    document.getElementById('display-screen').innerHTML = '<p class="text-muted m-0">Seleccione una operación</p>';

    // Volver al login
    document.getElementById('login-section').classList.remove('d-none');
    document.getElementById('menu-section').classList.add('d-none');
}

// 1. Consultar Saldo
function mostrarSaldo() {
    const pantalla = document.getElementById('display-screen');
    // Mostramos el saldo actual de la cuenta seleccionada [cite: 28]
    pantalla.innerHTML = `
        <div class="alert alert-info">
            <strong>Saldo Actual:</strong> $${cuentaSeleccionada.saldo}
        </div>`;
}

// 2. Ingresar Monto
function prepararDeposito() {
    const monto = parseFloat(prompt("Ingrese el monto a depositar:"));

    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    // Sumar al saldo actual
    cuentaSeleccionada.saldo += monto;

    // Mostrar el monto ingresado y el nuevo saldo total [cite: 30]
    const pantalla = document.getElementById('display-screen');
    pantalla.innerHTML = `
        <div class="alert alert-success">
            <p>Has depositado: $${monto}</p>
            <strong>Nuevo saldo total: $${cuentaSeleccionada.saldo}</strong>
        </div>`;
}

// 3. Retirar Monto
function prepararRetiro() {
    const monto = parseFloat(prompt("Ingrese el monto a retirar:"));

    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    // Validación de Regla de Negocio: No menos de $0 
    if (cuentaSeleccionada.saldo - monto < 0) {
        alert("Operación rechazada: Fondos insuficientes. El saldo no puede ser menor a $0.");
        return;
    }

    // Restar al saldo
    cuentaSeleccionada.saldo -= monto;

    // Mostrar el monto retirado y el nuevo saldo total [cite: 32]
    const pantalla = document.getElementById('display-screen');
    pantalla.innerHTML = `
        <div class="alert alert-warning">
            <p>Has retirado: $${monto}</p>
            <strong>Nuevo saldo total: $${cuentaSeleccionada.saldo}</strong>
        </div>`;
}
