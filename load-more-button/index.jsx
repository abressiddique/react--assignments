import { useEffect, useState } from 'react';
import './styles.css';

export default function Loadmorebutton() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProduct() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();
            if(result && result.products && result.products.length) {
                setProducts(prevProducts => [...prevProducts, ...result.products]);
                setLoading(false);
            }
            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products]);

    if (loading) {
        return <div>Loading data, please wait...</div>
    }

    return (
        <div className='load-more'>
            <div className="product-container">
                {products && products.length ? 
                    products.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load more products</button>
                {disableButton ? <p>You have reached 100 products</p> : null}
            </div>
        </div>
    );
}
  