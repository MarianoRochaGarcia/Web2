const API_URL = '/usuarios';

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const userTable = document.getElementById('user-table');

    // Listar usuarios
    const listarUsuarios = async () => {
        const response = await fetch(API_URL);
        const usuarios = await response.json();
        userTable.innerHTML = usuarios.map((user) => `
            <tr>
                <td>${user.id}</td>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.correo}</td>
                <td>${user.telefono}</td>
                <td>${user.direccion}</td>
                <td>${user.ciudad}</td>
                <td>${user.estado}</td>
                <td>${user.pais}</td>
                <td>
                    <button onclick="editarUsuario(${user.id})">Editar</button>
                    <button onclick="eliminarUsuario(${user.id})">Eliminar</button>
                </td>
            </tr>
        `).join('');
    };

    // Agregar usuario
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(userForm);
        const data = Object.fromEntries(formData.entries());
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        userForm.reset();
        listarUsuarios();
    });

    // Eliminar usuario
    window.eliminarUsuario = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        listarUsuarios();
    };

    // Inicializar
    listarUsuarios();
});

