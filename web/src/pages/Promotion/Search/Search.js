import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';

const promotion = {
    "id": 1,
    "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
    "price": 1799,
    "url": "",
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
    "comments": [
        {
            "id": 1,
            "comment": "TELA HD"
        }
    ]
};

const PagesPromotionSearch = () => {
    return (
        <div
            style={{
                maxWidth: 800,
                margin: '30px auto',
            }}
        >
            <PromotionCard promotion={promotion} />
        </div>
    );
};

export default PagesPromotionSearch;