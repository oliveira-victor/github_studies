import ListCard from '../../components/ListCard'
import './listsboard.css'

const ListsBoard = () => {
    return (
        <main>
            <h2>Listas</h2>
            <ul className="main-list">
                <ListCard title="Animais" />
            </ul>
        </main>
    )
}

export default ListsBoard
