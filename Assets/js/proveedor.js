let btnAgregar = document.getElementById("btnAgregar");
let btnGuardar = document.getElementById("btnGuardar");
let btnLimpiar = document.getElementById("btnLimpiar");
let lista = document.getElementById("lista");
let form = document.getElementById("frmPro");
let name = document.getElementById('nombre')
let modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let btnActualizar = document.getElementById("tbnActualizar");
let data = [];
let cant = 0;
let auxPos = 0;

btnGuardar.addEventListener("click", save);

function save() {

}

//NODO PILAS
let nodo = function () {
    let dato;
    let siguiente = null;
}
//PILAS
let pila = function () {
    this.cima = null;


    this.push = function (elemento) {
        if (this.cima == null) {
            this.cima = new nodo();
            this.cima.dato = elemento;
        } else {
            let temp = new nodo();
            temp.dato = elemento;
            temp.siguiente = this.cima;
            this.cima = temp;
        }
    }

    this.pop = function () {
        let dato = this.cima.dato;
        this.cima = this.cima.siguiente;
        return dato;
    }

    this.print = function () {

        var node = this.cima;
        let div = document.getElementById("alert");
        var contenido;
        let aux;
        while (node != null) {
            node = node.dato;
            aux = node;
            node = node.siguiente;
        }
        let res = document.createElement("p");
        res.setAttribute("class", "alert alert-danger");
        res.innerHTML = "<button class='deleteBTN' onclick='retornarTabla(" + aux.id + ");'>x</button>";
        contenido = document.createTextNode(aux.nombre + " " + aux.apellido + " " + aux.dni);
        res.appendChild(contenido);
        div.appendChild(res);


    }

    this.consola = function () {
        let nodo = this.cima;
        while (nodo != null) {
            console.log(nodo.dato);
            nodo = nodo.siguiente;
        }
    }
}

let pilas = new pila();

btnAgregar.addEventListener('click', agregar);

function agregar() {
    const start = Date.now();
    var name = document.getElementById('nombre').value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let mail = document.getElementById("mail").value;
    let direccion = document.getElementById("direccion").value;


    if (name.value != '' && apellido.value != '' && dni.value != '' && mail.value != '' && direccion.value != '') {
        data.push({
            'id': cant,
            'dni': dni,
            'nombre': name,
            'apellido': apellido,
            'mail': mail,
            'direccion': direccion
        });
        let id_row = 'row' + cant;
        let fila = '<tr id = ' + id_row + '><td>' + dni + '</td> <td>' + name + '</td> <td>' + apellido + '</td> <td>' + mail + '</td> <td>' + direccion + '</td> <td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ');">Eliminar</a><a href="#" class="btn btn-warning" onclick="edit(' + cant + ');">Editar</a></td></tr>';

        //Agregando a la tabla
        $("#lista").append(fila);
        $("#nombre").val("");
        $("#apellido").val("");
        $("#dni").val("");
        $("#mail").val("");
        $("#direccion").val("");

        $("#nombre").focus();
        cant++;

        btnAgregar.innerHTML = "Agregar";

        let millis = Date.now() - start;
        console.log("milisegundos " + millis);
    }
}

function sort() {
    const start = Date.now();

    var rows, switching, i, x, y, shouldSwitch;

    switching = true;

    while (switching) {
        switching = false;
        rows = lista.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    let millis = Date.now() - start;
    console.log("milisegundos " + millis);
}

const retornarTabla = (id) => {
    const start = Date.now();

    let aux = pilas.pop();
    let num = id;
    let id_row = 'row' + num;
    let fila = '<tr id = ' + id_row + '><td>' + aux.dni + '</td> <td>' + aux.nombre + '</td> <td>' + aux.apellido + '</td> <td>' + aux.mail + '</td> <td>' + aux.direccion + '</td> <td><a href="#" class="btn btn-danger" onclick="eliminar(' + id + ');">Eliminar</a><a href="#" class="btn btn-warning" onclick="edit(' + num + ');">Editar</a></td></tr>';
    $("#lista").append(fila);
    data.push(aux);
    cant++;
    let millis = Date.now() - start;
    console.log("milisegundos " + millis);
}

let edit = (fila) => {
    modal.style.display = "block";

    $("#nombreAc").val(data[fila].nombre);
    $("#apellidoAc").val(data[fila].apellido);
    $("#dniAc").val(data[fila].dni);
    $("#mailAc").val(data[fila].mail);
    $("#DireccionAc").val(data[fila].direccion);
    $("#row" + fila).remove();

    auxPos = fila;
}

btnActualizar.addEventListener("click", function () {
    actualizar();
});

let actualizar = () => {
    let name = document.getElementById('nombreAc').value;
    let apellido = document.getElementById("apellidoAc").value;
    let dni = document.getElementById("dniAc").value;
    let mail = document.getElementById("mailAc").value;
    let direccion = document.getElementById("DireccionAc").value;

    let id_row = 'row' + auxPos;
    let fila = '<tr id = ' + id_row + '><td>' + dni + '</td> <td>' + name + '</td> <td>' + apellido + '</td> <td>' + mail + '</td> <td>' + direccion + '</td> <td><a href="#" class="btn btn-danger" onclick="eliminar(' + auxPos + ');">Eliminar</a><a href="#" class="btn btn-warning" onclick="edit(' + auxPos + ');">Editar</a></td></tr>';

    //Agregando a la tabla
    $("#lista").append(fila);
    $("#nombreAc").val("");
    $("#apellidoAc").val("");
    $("#dniAc").val("");
    $("#mailAc").val("");
    $("#DireccionAc").val("");
    data.splice(auxPos, 1, {
        'id': auxPos,
        'dni': dni,
        'nombre': name,
        'apellido': apellido,
        'mail': mail,
        'direccion': direccion
    });
    modal.style.display = "none";

}

let eliminar = (x) => {
    const start = Date.now();

    $("#row" + x).remove();
    let pos = 0, i = 0;
    pilas.push(data[x]);
    for (a of data) {
        if (a.id === x) {
            pos = i;
        }
        i++;
    }
    data.splice(pos, 1);
    pilas.print();
    cant--;
    let millis = Date.now() - start;
    console.log("milisegundos " + millis);
}

/*----------------------------------------------------------*/
span.onclick = function () {
    modal.style.display = "none";
}



/* ----- BUSQUEDA BINARIA ------- */
let encontrado = false;
let element = document.getElementById("inputBuscar");
let btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener('click',function(){
    console.time("medicion");
    let nom = [];
    for (let i = 0; i < data.length; i++) {
        nom.push(data[i].nombre);
    }
    nom.sort();
    busBin(nom, element.value, 0, nom.length - 1);
    if (encontrado == true) {
        alert("Se encontró el elemento");
    }
    else if (element.value=='') {
        alert("No hay elemento a buscar");
    }
 
});


let busBin = (a, clave, menor, mayor) => {
    const start = Date.now();

    if (menor > mayor) {
        return -1;
    } else {
        let central = Math.floor((mayor + menor) / 2);
        let valorMedio = a[central];
        if (a[central] == clave) {
            encontrado = true ; 
            
        } else if (valorMedio < clave) {
            return busBin(a, clave, central + 1, mayor);
        } else {
            return busBin(a, clave, menor, central);
        }
    }
    let millis = Date.now() - start;
    console.log("milisegundos " + millis);
}

