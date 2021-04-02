import React from 'react';


function Card(props) {
    return(
        <>
        <div className="cards">
            <div className="cards_item">
                <img src={props.imgsrc} alt="Poster" className="card__image"/>
                <div className="card_content">
                    <span className="card_text">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
function ncard(val){
    return(
        <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
    );
}

export default Card;
export { ncard };