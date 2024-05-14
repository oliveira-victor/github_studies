import { Link } from 'react-router-dom'
import './listcard.css'

type Props = {
    title: string
    link: string
}

const ListCard = ({ title, link }: Props) => {
    return (
        <li>
            <div className="card">
                <div className="container">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <Link to={link} className="card-button">
                        Entrar
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default ListCard
