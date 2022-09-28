// Ver amigos
const verAmigos = document.getElementById('boton');
verAmigos.addEventListener('click', () => {
    fetch('http://localhost:5000/amigos')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista');
            lista.innerHTML = '';   // vacía la lista
            data.forEach(amigo => {
                const item = document.createElement('ul');
                item.id = amigo.id;
                // item.innerText = `${amigo.id} - ${amigo.name} X`;
                item.innerHTML = `${amigo.id} - ${amigo.name} <button onClick="deleteFriend(${amigo.id})">X</button>`;
                lista.appendChild(item);
            });
        });
});

// Buscar amigo
const search = document.getElementById('search');
search.addEventListener('click', () => {
    const id = document.getElementById('input').value;
    document.getElementById('input').value = '';
    if (Number(id) === NaN) {
        alert('El id buscado no es correcto');
    } else {
        fetch(`http://localhost:5000/amigos/${id}`)
            .then(response => response.json())
            .then(data => document.getElementById('amigo').innerText = data.name)
            .catch(function (error) {
                console.log('Hubo un problema con json():' + error.message);
            });
    }
});

// Eliminar amigo
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteFriend);
const spanSuccess = document.getElementById('sucess');

function deleteFriend(idFriend) {
    if(typeof idFriend !==  'number') { // a este callback le llega el objeto del evento como primer parámetro
        idFriend = document.getElementById('inputDelete').value;
        document.getElementById('inputDelete').value = '';
    }
    fetch(`http://localhost:5000/amigos/${idFriend}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista');
            const amigoEliminado = document.getElementById(idFriend);
            lista.removeChild(amigoEliminado)
            spanSuccess.innerText = 'Amigo borrado exitosamente';
            // // Elimino items
            // while (lista.lastElementChild) {
            //     lista.removeChild(lista.lastElementChild);
            // }
            // data.forEach(amigo => {
            //     const item = document.createElement('ul');
            //     item.innerText = `${amigo.id} - ${amigo.name} X`;
            //     lista.appendChild(item);
            // });
        });
}

