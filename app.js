ale = alert('HOLA BIENVENIDO A Explora Galaxias')


console.log(ale)


   // JavaScript para hacer que el botón funcione
        const miBoton = document.getElementById('miBoton');

        // Agregar un evento de clic al botón
        miBoton.addEventListener('click', function() {
            alert('¡El botón ha sido clickeado!');
            alert('Gracia por su apoyo y tiempo')
            // Aquí puedes realizar otras acciones después de que se hace clic en el botón
            window.location.href = '01parte.html';
        });