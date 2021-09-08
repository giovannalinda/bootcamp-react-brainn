import { useState, useEffect } from 'react'
import { httpGet, httpPost, httpDelete } from './http';

function App() {

  const mockedCars = [{
    image: '202',
    brandModel: 'fiat',
    year: 2020,
    plate: 'ABC123',
    color: 'blue'
  }]

  const [cars, setCars] = useState(mockedCars)
  console.log('cars', cars)

  const url = 'http://localhost:3333/cars'
/*
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setCars)
  }, []) 
*/

  return (
    <main>
      <div>
        <form className="form" type="submit">
          <h1>Registro de Carros</h1>

          <div className="form-image">
            <label>Imagem (URL)</label>
            <input type="url" id="image" name="image"/>
          </div>

          <div className="form-model">
            <label>Modelo</label>
            <input type="text" id="brand-model" name="brand-model"/>
          </div>

          <div className="form-year">
            <label>Ano</label>
            <input type="number" id="year" name="year"/>
          </div >

          <div className="form-plate">
            <label>Placa</label>
            <input type="text" id="plate" name="plate" pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}"/>
          </div>

          <div className="form-color">
            <label>Cor</label>
            <input type="color" id="color" name="color"/>
          </div>

          <button type="submit">Cadastrar carro</button>
        </form>

        <table className="Table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.plate}>
                <td><img src={car.image} alt="carro"/></td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>{car.color}</td>
                <th>
                  <button>X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App;
