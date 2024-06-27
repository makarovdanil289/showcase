import { useState } from "react";

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    const [imgSrc, setImgSrc] = useState(full_background);

    const handleError = () => {
        setImgSrc(`https://via.placeholder.com/300x400?text=${name}`);
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={imgSrc} alt={name} onError={handleError}></img>
            </div>
            <span className="card-title">{name}</span>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
