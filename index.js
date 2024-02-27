const shapes = document.querySelector("#Shapes")
        function addShape(objShape) {
            shapes.innerHTML += ` <span id="${objShape}" class="${objShape}"></span>  `
        }