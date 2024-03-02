import { useState, useCallback } from 'react';

function ListaDeNombres() {
    // Estado para almacenar la lista de nombres
    const [nombres, setNombres] = useState([]);

    // Estado para almacenar el nombre que se está ingresando en el input
    const [nuevoNombre, setNuevoNombre] = useState('');

    // Función para manejar el cambio en el input y actualizar el estado del nuevo nombre
    const handleInputChange = (event) => {
        setNuevoNombre(event.target.value);
    };

    // Función para agregar un nuevo nombre a la lista utilizando useCallback para evitar que se cree una nueva instancia en cada render
    const agregarNombre = useCallback(() => {
        if (nuevoNombre.trim() !== '') {
            setNombres([...nombres, nuevoNombre]);
            setNuevoNombre(''); // Limpiar el input después de agregar el nombre
        }
    }, [nombres, nuevoNombre]);

    return (
        <>
            <h2>Lista de Nombres</h2>
            <form className="row g-3">
                <div className="col">
                <input className='form-control'
                    type="text"
                    value={nuevoNombre}
                    onChange={handleInputChange}
                    placeholder="Ingrese un nombre"
                />
                </div>
                <div className="col">
                <button type='button' className='btn btn-primary' onClick={agregarNombre}>Agregar Nombre</button>
                </div>
            </form>
            <ul>
                {nombres.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
        </>
    );
}

export default ListaDeNombres;
