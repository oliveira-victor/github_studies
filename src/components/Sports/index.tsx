import List from '../../containers/List'

const Sports = () => {

    const itemsList = [
        "Futebol",
        "Volei",
        "Basquete"
    ]

    return (
        <div>
            <List title="Lista de esportes" itemsList={itemsList} />
        </div>
    )
}

export default Sports
