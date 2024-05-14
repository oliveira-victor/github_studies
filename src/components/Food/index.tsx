import List from '../../containers/List'

const Food = () => {

    const itemList = [
        "Lasanha",
        "Pão",
        "Arroz"
    ]

    return (
        <div>
            <List title="Lista de comidas" itemsList={itemList} />
        </div>
    )
}

export default Food
