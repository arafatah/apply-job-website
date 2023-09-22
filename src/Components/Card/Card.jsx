

const Card = ({ card }) => {
    const { id, logo, category_name, availability } = card;
    return (

        <div>
            <div className="bg-base-100 shadow-xl">
                <div className="py-10 pl-10">
                        <img className=" mb-6" src={logo} alt="" />
                        <h2 className="mb-1">{category_name}</h2>
                        <p>{availability}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;