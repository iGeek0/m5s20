import './App.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaDeNombres from './components/ListaDeNombres'
import Calculadora from './components/Calculadora'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <h1>Componente Lista de Nombres</h1>
          <ListaDeNombres />
        </div>
        <div className="col-md-6">
          <h1>Componente calculadora</h1>
          <Calculadora />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Fetch Hook</h2>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data &&
            <div className="table-responsive">
              <div className="table">
                <table className="table table-striped table-bordered">
                  <thead className='table-dark'>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pb-4">
          <h2>Local Storage Hook</h2>
          <p>Nombre: {name}</p>
          <input
            type="text"
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
