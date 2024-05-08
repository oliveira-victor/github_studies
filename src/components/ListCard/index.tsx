import './listcard.css'

type Props = {
    title: string
}

const ListCard = ({ title }: Props) => {
    return (
        <li>
            <div className="card">
                <div className="container">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <a href="#" className="card-button">
                        Entrar
                    </a>
                </div>
            </div>
        </li>
    )
}

export default ListCard
