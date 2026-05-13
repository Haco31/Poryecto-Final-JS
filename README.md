# 🏧 Cajero Automático Web

Proyecto final desarrollado con **HTML5, CSS3 y JavaScript**, simulando el funcionamiento básico de un cajero automático interactivo con autenticación de usuarios, consulta de saldo, depósitos y retiros.

---

## 📌 Descripción del Proyecto

Este proyecto consiste en una aplicación web que recrea la experiencia de un cajero automático (ATM) utilizando tecnologías frontend.  

El sistema permite:

- Iniciar sesión mediante selección de usuario y contraseña.
- Consultar saldo disponible.
- Realizar depósitos.
- Realizar retiros con validación de fondos.
- Cerrar sesión y reiniciar la interfaz.

Además, cuenta con una interfaz inspirada visualmente en la identidad corporativa de BBVA utilizando Bootstrap y CSS personalizado.

---

# 🚀 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Bootstrap 5

---

# 🎯 Funcionalidades

## 🔐 Inicio de Sesión
El usuario selecciona una cuenta y valida su contraseña para acceder al sistema.

### Usuarios disponibles:
| Usuario | DNI | Contraseña |
|---|---|---|
| Mali | 44788834 | 1234 |
| Gera | 10247439 | 5678 |
| Sabi | 98005362 | 9102 |

---

## 💰 Consulta de Saldo
Permite visualizar el saldo actual de la cuenta autenticada.

---

## ➕ Depósito de Dinero
El usuario puede ingresar un monto válido para aumentar su saldo.

### Validaciones:
- No permite números negativos.
- No permite valores vacíos o inválidos.

---

## ➖ Retiro de Dinero
Permite retirar dinero del saldo disponible.

### Validaciones:
- No permite retirar más dinero del disponible.
- No permite saldos negativos.
- No permite montos inválidos.

---

## 🚪 Cierre de Sesión
Restablece la interfaz y limpia los datos de acceso.

---

# 🧠 Lógica Implementada

El proyecto trabaja con:

- Arreglos de objetos.
- Manipulación del DOM.
- Eventos con JavaScript.
- Validaciones de formularios.
- Uso de funciones reutilizables.
- Manejo de estados mediante variables globales.

---

# 🎨 Diseño e Interfaz

La interfaz fue diseñada con:

- Bootstrap 5 para la estructura responsive.
- Variables CSS personalizadas.
- Estilo visual inspirado en cajeros automáticos modernos.
- Componentes visuales como tarjetas, alertas y botones interactivos.

---

# 📂 Estructura del Proyecto

```bash
📁 cajero-automatico/
│
├── index.html
├── style.css
├── main.js
└── README.md
