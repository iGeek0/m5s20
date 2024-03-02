import { useState } from 'react';

// Custom Hook para manejar datos en el Local Storage
function useLocalStorage(key, initialValue) {
    // Obtener el valor almacenado en el Local Storage o el valor inicial proporcionado
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Estado para almacenar el valor actual
    const [value, setValue] = useState(initial);

    // Función para actualizar el valor y almacenarlo en el Local Storage
    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
}

export default useLocalStorage;
