import "./Card.css"

const Card = ({name, image}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="dog-image" />
        </div>
    )
}

export {Card}