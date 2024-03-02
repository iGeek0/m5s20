import { useState, useMemo } from 'react';

const Calculadora = () => {
    // Estados para almacenar los dos números y la operación
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [operacion, setOperacion] = useState('+');

    // Funciones para manejar los cambios en los inputs de los números y la operación
    const handleNumero1Change = (event) => {
        setNumero1(Number(event.target.value));
    };

    const handleNumero2Change = (event) => {
        setNumero2(Number(event.target.value));
    };

    const handleOperacionChange = (event) => {
        setOperacion(event.target.value);
    };

    // Utiliza useMemo para realizar la operación matemática correspondiente cuando los números y la operación cambien
    const resultado = useMemo(() => {
        console.log('Calculando resultado');
        switch (operacion) {
            case '+':
                return numero1 + numero2;
            case '-':
                return numero1 - numero2;
            case '*':
                return numero1 * numero2;
            case '/':
                return numero2 !== 0 ? numero1 / numero2 : 'Error: división por cero';
            default:
                return 0;
        }
    }, [numero1, numero2, operacion]);

    return (
        <>
            <h2>Calculadora</h2>
            <div className='p-2'>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="number1">Número 1:</label>
                    </div>
                    <div className="col">
                        <input type="number" className='form-control' value={numero1} onChange={handleNumero1Change} id='number1' />
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="number2">Número 2:</label>
                    </div>
                    <div className="col">
                        <input type="number" className='form-control' value={numero2} onChange={handleNumero2Change} id='number2' />
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="select">Operación:</label>
                    </div>
                    <div className="col">
                        <select className='form-select' value={operacion} onChange={handleOperacionChange} id='select'>
                            <option value="+">Suma</option>
                            <option value="-">Resta</option>
                            <option value="*">Multiplicación</option>
                            <option value="/">División</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mt-5 text-success">
                <div className="col-md-12 text-center">
                    <h3>Resultado: {resultado}</h3>
                </div>
            </div>
        </>
    );
};

export default Calculadora;
