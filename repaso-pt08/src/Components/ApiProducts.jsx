import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { getProducts, deleteProduct, getProductById } from '../Redux/actions';

function ApiProducts(props) {

    let [productId, setProductId] = React.useState('');

    let handleChange = (e) => {
        setProductId(e.target.value);
    }

    let handleClick = (e, id) => {
        props.deleteProduct(id);
    }

    return (
        <div>
            {props.loading ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='Cargando...'></img>
                : props.products?.map(el => (
                    <div>
                        <Product
                            key={el.id}
                            id={el.id}
                            name={el.title}
                            price={el.id}
                        />
                        <button onClick={(e) => handleClick(e, el.id)}>DELETE</button>
                    </div>
                )
                )}

            <br />
            <button onClick={() => props.getProducts()}>GET API</button>

            <br />
            <input type="text" id="productId" value={productId} onChange={handleChange} />
            <button onClick={(e) => {
                props.getProductById(productId);
                setProductId('');
            }}>GET BY ID</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        deleteProduct: id => dispatch(deleteProduct(id)),
        getProductById: id => dispatch(getProductById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiProducts)