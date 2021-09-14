import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import Button from './components/Button'
import { httpGet, httpPost, httpDelete } from './http';
import CreateGlobalStyled from './styles/global'

const url = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    httpGet(url).then((response) => {
      if (!response.error) {
        setCars(response)
      }
    })
  }, []) 

  function handleSubmit(event) {
    event.preventDefault()

    const { image, brandModel, year, plate, color } = event.target

    const car = {
      image: image.value,
      brandModel: brandModel.value,
      year: year.value,
      plate: plate.value,
      color: color.value
    }

    httpPost(url, car)
      .then((response) => {
        if (response.error) {
          return alert(response.message)
        } 

        alert('Carro cadastrado com sucesso!')
        setCars([...cars, car])
      })
  
    event.target.reset()

    image.focus()
  }

  function handleDelete(plate) {
    httpDelete(url, {plate})
      .then((response) => {
        if (response.error) {
          return alert(response.message)
        } 
        setCars(cars.filter(car => car.plate !== plate))
      }
    )
  }

  return (
    <Container>
      <CreateGlobalStyled />
      <Register>
        <Form onSubmit={handleSubmit} />
        <table className="table">
          <tbody>
            {cars?.map(car => (
              <tr key={car.plate}>
                <td>
                  <Thumbnail 
                    src={car.image}
                    alt="carro"
                  />
                </td>
                <Td>{car.brandModel}</Td>
                <Td>{car.year}</Td>
                <Td>{car.plate}</Td>
                <Td>{car.color}</Td>
                <td> 
                  <DeleteButton onClick={() => handleDelete(car.plate)}>
                    X
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Register>
    </Container>
  )
}

const Container = styled.main`
  align-items: center;
  justify-content: center;
  display: flex;
`

const Register = styled.div`
  width: 500px;
  height: 100%;
  background: #2F3249;
  padding: 40px;
  margin: 130px;
  border-radius: 4px;
`

const Table = styled.div`
  background: #36394F;
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`

const DeleteButton = styled(Button)`
  width: 40px;
  height: 40px;
  background: var(--pink);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

const Td = styled.td`
  padding: 10px;
`

export default App;
