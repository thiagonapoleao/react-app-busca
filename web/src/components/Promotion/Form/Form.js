import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/promotions/${id}`)
                .then((response) => {
                    setValeu(response.data);
                })
        }
    }, []);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValeu({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
            ? `http://localhost:5000/promotions/${id}`
            : 'http://localhost:5000/promotions';

        axios[method](url, values)
            .then((response) => {
                history.push('/');
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
