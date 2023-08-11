import { useState } from "react"

const UsersList = ({usersList, deleteUser, selectUser, showForm}) => {

    const [show, setShow] = useState(true)

    const showAlert = () => {
        setShow(!show)
    }

    return(
        <>  
        
            <ul className='list-container'>
                {
                    usersList?.map(users => (
                <li key={users.id}>
                    <h2>{users.first_name} {users.last_name}</h2>
                    <p>Correo <br /> <b>{users.email}</b></p>
                    <p>Cumpleaños <br /> {users.birthday}</p>
                    <p>Contraseña <br /> {users.password}</p>
                    <div className="div-buttons">
                    <button onClick={() => {
                        selectUser(users)
                        showForm(true)
                        }}className="edit"><i className='bx bx-edit-alt'></i></button>
                    <button onClick={() =>{ deleteUser(users.id)
                    showAlert(true)
                    }}className="delete"><i className='bx bx-trash'></i></button>
                    </div>
                    <div className={`${show === true ? 'card-delete-visible' : 'card-delete'}`}>
                    <h3>Usuario Eliminado</h3>
                    <p>El usuario fué eliminado satisfactoriamente</p>
                    <button onClick={showAlert}>Aceptar</button>
                </div> 
                </li>
                    ))
                    
                }
            </ul>

                

        </>
    )
}

export default UsersList