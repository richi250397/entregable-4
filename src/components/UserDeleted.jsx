
const UserDeleted = ({showCart}) => {

    return(
        <>
        <div className={`${showCart === true ? 'card-delete' : 'card-delete-visible'}`}>

            <h3>Usuario Eliminado</h3>
            <p>El usuario fué eliminado satisfactoriamente</p>
            <button onClick={showCart}>Aceptar</button>
        </div>
        </>
    )
}

export default UserDeleted