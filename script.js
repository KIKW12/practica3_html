document.addEventListener('DOMContentLoaded', () => {
    const carImage = document.getElementById('car-image');
    const toggleButton = document.getElementById('toggle-button');
    const changesList = document.getElementById('changes-list');

    let showingYear = 2021;

    const carImages = {
        2021: 'assets/ferrari-sf21-1.jpg',
        2022: 'assets/f1_2022.jpg'
    };

    const changes = {
        2021: [
            {
                title: "Alerón trasero más simple",
                description: "Diseño simplificado para reducir la turbulencia del aire y mejorar el seguimiento entre coches."
            },
            {
                title: "Fondo plano del coche",
                description: "Se mantiene un fondo mayormente plano para limitar la generación de carga aerodinámica."
            },
            {
                title: "Difusor trasero más pequeño",
                description: "Reducción en tamaño y complejidad para disminuir la sensibilidad al aire sucio."
            },
            {
                title: "Neumáticos de 13 pulgadas",
                description: "Se mantienen los neumáticos de 13 pulgadas con compuestos mejorados para 2021."
            },
            {
                title: "Límite de presupuesto",
                description: "Introducción de un límite de presupuesto de $145 millones por equipo para nivelar la competencia."
            }
        ],
        2022: [
            {
                title: "Nuevo diseño aerodinámico",
                description: "Cambio radical en la filosofía aerodinámica para permitir seguimientos más cercanos y facilitar los adelantamientos."
            },
            {
                title: "Regreso del efecto suelo",
                description: "Reintroducción del efecto suelo para generar carga aerodinámica desde la parte inferior del coche, reduciendo la dependencia de los alerones."
            },
            {
                title: "Alerones simplificados",
                description: "Diseños más simples tanto en el alerón delantero como en el trasero para reducir la sensibilidad a las turbulencias."
            },
            {
                title: "Neumáticos de 18 pulgadas",
                description: "Cambio a neumáticos de 18 pulgadas con perfil más bajo, mejorando la estética y el rendimiento."
            },
            {
                title: "Carenado de las ruedas delanteras",
                description: "Introducción de tapas en las ruedas delanteras para reducir la turbulencia generada por las ruedas giratorias."
            },
            {
                title: "Combustible E10",
                description: "Uso obligatorio de combustible E10 con 10% de etanol, un paso hacia la sostenibilidad."
            },
            {
                title: "Reducción de peso del motor",
                description: "Congelación del desarrollo de motores y reducción de peso para prepararse para futuros cambios en las regulaciones de poder."
            }
        ]
    };

    function updateChanges(year) {
        changesList.innerHTML = '';
        changes[year].forEach(change => {
            const li = document.createElement('li');
            const title = document.createElement('strong');
            title.textContent = change.title + ": ";
            li.appendChild(title);
            li.appendChild(document.createTextNode(change.description));
            changesList.appendChild(li);
        });

        // Actualizar la imagen del auto
        carImage.src = carImages[year];
        carImage.alt = `Auto F1 ${year}`;
    }

    toggleButton.addEventListener('click', () => {
        showingYear = showingYear === 2021 ? 2022 : 2021;
        toggleButton.textContent = `Cambiar a ${showingYear === 2021 ? 2022 : 2021}`;
        updateChanges(showingYear);
    });

    // Inicializar con los cambios de 2021
    updateChanges(2021);
});