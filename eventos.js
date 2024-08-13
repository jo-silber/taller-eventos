document.getElementById("divBoton").addEventListener("click", () => {
    alert("Hola! Soy el div");
});

document.getElementById("botonSaludar").addEventListener("click", (event) =>{
    event.stopPropagation();
    alert("Hola!");
})