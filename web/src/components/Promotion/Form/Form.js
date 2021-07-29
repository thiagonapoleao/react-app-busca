import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useApi from 'components/utils/useApi';
import "./Form.css";


const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}



const PromotionForm = ({ id }) => {
    const [values, setValeu] = useState(id ? null : initialValue);
    const history = useHistory();
    // eslint-disable-next-line
    const [load] = useApi({
        url: `/promotions/${id}`,
        method: 'get',
        onCompleted: (response) => {
            setValeu(response.data);
        }
    });

    const [save, saveInfo] = useApi({
        url: id ? `promotions/${id}` : 'promotions',
        method: id ? 'put' : 'post',        
        onCompleted: (response) => {
            if (!response.error) {
                history.push('/');
            }
        }
    })

    useEffect(() => {
        if (id) {
            load();
        }
        // eslint-disable-next-line
    }, [id]);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValeu({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();
        save({
            data: values,
        });
    }


    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção </h2>
            {!values
                ? (
                    <div>Carregando...</div>
                ) : (
                    <form onSubmit={onSubmit}>
                        {saveInfo.loading && <span>Salvando dados..</span>}
                        <div className="promotion-form__grup">
                            <label htmlFor="title" >Título</label>
                            <input id="title" name="title" type="text" onChange={onChange} value={values.title} />
                        </div>
                        <div className="promotion-form__grup">
                            <label htmlFor="url" >Link</label>
                            <input id="url" name="url" type="text" onChange={onChange} value={values.url} />
                        </div>
                        <div className="promotion-form__grup">
                            <label htmlFor="ImageUrl" >Imagem (url)</label>
                            <input id="ImageUrl" name="ImageUrl" type="text" onChange={onChange} value={values.imageUrl} />
                        </div>
                        <div className="promotion-form__grup">
                            <label htmlFor="price" >Preço</label>
                            <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
                        </div>
                        <div>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                )}
        </div>
    )
};

export default PromotionForm;
