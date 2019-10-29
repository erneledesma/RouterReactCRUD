import React, {useState} from 'react';

function AgregarProducto() {

    // creamos nuestro state que tiene tres partes, todos inicializan como 
    // strin vacios
    const [nombrePlato, guardarNombre ] = useState('');
    const [precioPlato, guardarPrecio ] = useState('');
    const [categoria, guardarCategoria ] = useState('');

     
    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Producto</h1>
       
            <h1 className="text-center">Agregar Nuevo Producto</h1>

            <form
                className="mt-5"
            >
                <div className="form-group">
                    <label>Nombre Plato</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre Plato"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Precio Plato</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="precio"
                        placeholder="Precio Plato"
                        onChange={e => guardarPrecio(e.target.value)}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="postre"
                    />
                    <label className="form-check-label">
                        Postre
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="bebida"
                    />
                    <label className="form-check-label">
                        Bebida
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="cortes"
                    />
                    <label className="form-check-label">
                        Cortes
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="ensalada"
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    )
}

export default AgregarProducto;