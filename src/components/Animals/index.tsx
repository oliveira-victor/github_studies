import List from '../../containers/List'

const Animals = () => {

  const itemList = [
    "Gato",
    "Cachorro",
    "Coelho"
  ]

  return (
    <div>
      <List title="Lista de animais" itemsList={itemList} />
    </div>
  )
}

export default Animals
