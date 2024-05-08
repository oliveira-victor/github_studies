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
                    <a href={link} className="card-button">
                        Entrar
                    </a>
                </div>
            </div>
        </li>
    )
}

export default ListCard
