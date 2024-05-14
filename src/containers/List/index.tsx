import { Link } from "react-router-dom"

import './list.css'

type Props = {
    title: string
    itemsList: string[]
}

const List = ({ title, itemsList }: Props) => {
    return (
        <main>
            <Link to="/">Voltar</Link>
            <h2 className="page-title">
                {title}
            </h2>
            <ul className="page-list">
                {itemsList.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default List
