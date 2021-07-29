import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import './List.css';

const PromotionList = ({ loading, error, promotions }) => {
    if(error){
        return <div>Algo de errado não esta certo...</div>;
    }

    if (loading || promotions === null) {
        return <div>Carregando...</div>;
    }

    if (promotions.length === 0) {
        return <div>Nenhum resultado encontrado!</div>
    }

    return (
        <div className="promotion-list">
            {promotions.map((promotion) => (
                <PromotionCard promotion={promotion} />
            ))}
        </div>
    );
}

export default PromotionList;