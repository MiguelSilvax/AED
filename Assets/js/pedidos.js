class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

    }

    insertNode(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }

    findNode(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }


    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}



function cargar_sistemaOperativo() {
    let lista1 = ["IOS", "Android"];
    //QUICKSORT
    QuickSort(lista1, 0, lista1.length - 1);
    agregarOptions("sistemaOperativo", lista1);

}


function agregarOptions(domElement, array) {

    let select = document.getElementsByName(domElement)[0];

    for (valor in array) {
        let option = document.createElement("option");
        option.text = array[valor];
        option.value = array[valor].toLowerCase();
        select.add(option);
    }

}


function cargar_Modelo(sistemaOperativo) {

    let modelo = document.getElementById("marca").innerHTML = "";



    let android = ["Samsung", "Xiaomi", "Huawey", "Motorola", "Hero"];

    //Ordenar lista android
    QuickSort(android, 0, android.length - 1);


    let ios = ["iphone SE", "Iphone 11", "Iphone 12", "Iphone 13", "Iphone 13 Pro"];

    //Ordenar lista ios
    QuickSort(ios, 0, ios.length - 1);


    let arraySeleccionado = sistemaOperativo.selectedIndex;

    switch (arraySeleccionado) {
        case 1: agregarOptions("marca", android); break;
        case 2: agregarOptions("marca", ios); break;
    }
}

//MÉTODO DE ORDENACIÓN POR QUICKSORT
function QuickSort(a, menor, mayor) {
    let i = menor, j = mayor;
    let medio = Math.floor((menor + mayor) / 2);
    let valorMedio = a[medio];
    do {
        while (a[i] < valorMedio) { i++; };
        while (a[j] > valorMedio) { j--; };

        if (i <= j) {
            intercambiarValores(a, i, j);
            i++;
            j--;
        }
    } while (i <= j);

    if (i < mayor) { QuickSort(a, i, mayor); }

    if (j > menor) { QuickSort(a, menor, j) }

}


function intercambiarValores(a, i, j) {
    let aux = a[i];
    a[i] = a[j];
    a[j] = aux;
}

cargar_sistemaOperativo();



const linkedList = new LinkedList();

let parameters = []
function removeElement(event, position, string) {
    event.target.parentElement.remove()
    delete parameters[position]
    linkedList.deleteNode(string);
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}




(function load() {
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            <button class="delete" onclick="removeElement(event, ${position}, '${data[0]}')"></button>
            <strong>Pedido - </strong> ${data}
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if ($form.name.value != "" && $form.modelo.value != "") {
            let index = addJsonElement({
                marca: $form.marca.value,
                modelo: $form.modelo.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.marca.value} ${$form.modelo.value}`, index,)
            linkedList.insertNode($form.marca.value);
            $divElements.insertBefore($div, $divElements.firstChild)
            linkedList.print();
            $form.reset()
        } else {
            alert("Complete los campos")
        }
    })

    $btnSave.addEventListener("click", (event) => {
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $divElements.innerHTML = ""
        parameters = []
    })
})()