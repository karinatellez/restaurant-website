const logIn = document.getElementById('log-in')
const signUp = document.getElementById('sign-up')
const form = document.getElementById('form')

logIn.addEventListener('click',()=>{
    form.classList.remove('toggle')
})

signUp.addEventListener('click',()=>{
    form.classList.add('toggle')
})

document.addEventListener('DOMContentLoaded', () => {
    const btnIrAlMenu = document.getElementById('btn-ir-al-menu');
    const formContainer = document.querySelector('.form-container'); // Busca la clase
    const menuPantalla = document.getElementById('menu-pantalla'); // Busca el ID

    if (btnIrAlMenu) {
        btnIrAlMenu.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Verifica que los elementos existan antes de cambiarlos
            if (formContainer) {
                formContainer.style.display = 'none';
            }
            if (menuPantalla) {
                menuPantalla.style.display = 'block';
                console.log("Menú mostrado correctamente");
            } else {
                console.error("No se encontró el elemento #menu-pantalla");
            }
        });
    }
});
/*
document.querySelector('.btn-registrar').addEventListener('click', function(e) {
    window.location.href ='menu.html';
})*/

/*
const botonIrAlMenu = document.getElementById('btn-ir-al-menu');
    const contenedorFormularios = document.querySelector('.form-container');
    const pantallaMenu = document.getElementById('pantalla-menu');

    if (botonIrAlMenu) {
        botonIrAlMenu.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el formulario haga submit
            
            // Ocultar el contenedor de formularios
            if (contenedorFormularios) {
                contenedorFormularios.style.display = 'none';
            }
            
            // Mostrar la pantalla de menú
            if (pantallaMenu) {
                pantallaMenu.style.display = 'block'; 
            }
        });
    }


/*
const btnRegistrar=document.querySelector('.registrar button');
const containerForm =document.querySelector('.form-container');
const menuPantalla= document.getElementById('menu-pantalla');

btnRegistrar.addEventListener('click', function (e){
    e.preventDefault();
    containerForm.style.display = 'none';
    menuPantalla.style.display = 'block';
})
    */