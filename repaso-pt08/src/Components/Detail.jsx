import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById, clearDetail } from '../Redux/actions';
import { useParams } from 'react-router-dom';

function Detail() {

    let params = useParams();   // como this.props.match.params de Comp. de clase
    let dispatch = useDispatch();   // con esto ya no necesito el connect; useDispatch reemplaza al mapDispatchToProps
    let detail = useSelector(state => state.productDetail); // useSelector reemplaza al mapStateToProps
    let loading = useSelector(state => state.loading);

    React.useEffect(() => {
        console.log('En useEffect()');
        dispatch(getProductById(params.id));
        dispatch(clearDetail());  // Se va a ejecutar antes que el getProductById que es async
    }, []); 

    return (
        <div>
            {loading ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='Cargando...'></img>
                : <div>
                    <h3>{detail.title}</h3>
                    <img src={detail.url} alt={detail.title} />
                </div>}
        </div>
    )
}

export default Detail