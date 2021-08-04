import React, { useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import UIModal from 'components/UI/Modal/Modal';
import './List.css';

const PromotionList = ({ loading, error, promotions }) => {
    const [promotionid, setPromotionId] = useState(null);

    if (error) {
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
                <PromotionCard
                    promotion={promotion}
                    onClickComments={() => setPromotionId(promotion.id)}
                />
            ))}
            <UIModal isOpen={Boolean(promotionid)} onClickClose={() => setPromotionId(null)}>
                <h1>Comentários</h1>
            </UIModal>
        </div>
    );
}

export default PromotionList;