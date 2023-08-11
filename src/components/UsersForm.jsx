import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

const UsersForm = ({userCreate, userSelected, editUser, showForm}) => {

    const [show, setShow] = useState(true)
    const {register, handleSubmit, reset} = useForm()

    const showPass = () => {
        setShow(!show)
    }

    //? Limpieza de Inputs
    useEffect(() => {
    
        if(userSelected !== null) {
            reset(userSelected)
        } else {
            reset({
                first_name: "",
                last_name: "",
                email: "",
                birthday: "",
                password: ""
            })
        }
    }, [userSelected])

    //? Añadir o modificar usuarios
    const submit = data => {

        if(userSelected !== null) {
            editUser(data)
        } else {
            userCreate(data)
            reset({
                first_name: "",
                last_name: "",
                email: "",
                birthday: "",
                password: ""
            })
        }
    }

    return(
        <>
        <form className="user-form" onSubmit={handleSubmit(submit)}>
            <h1>Nuevo usuario</h1>   
            <div className="div-form">
                <label htmlFor="first_name">Nombre</label><br />
                <input type="text"
                id="first_name"
                {...register('first_name', {required: true})}
                placeholder=" Ingresa tu nombre"/>
            </div>
            <div className="div-form">
                <label htmlFor="last_name">Apellido</label><br />
                <input type="text"
                id="last_name"
                placeholder=" Ingresa tu apellido"
                {...register('last_name', {required: true})}/>
            </div>
            <div className="div-form">
                <label htmlFor="email">Correo</label><br />
                <input type="email"
                id="email"
                placeholder=" Ingresa un correo"
                {...register('email', {required: true})}/>
            </div>
            <div className="div-form">
                <label htmlFor="birthday">Fecha de Nacimiento</label><br />
                <input type="date"
                id="birthday"
                {...register('birthday', {required: true})}/>
            </div>
            <div>
            <div className="div-form ">
                <label htmlFor="password">Contraseña</label><br />
                <input 
                // type="text"
                type={`${show === true ? 'password' : 'text'}`}
                id="password"
                placeholder=" Ingresa una contraseña"
                {...register('password', {required: true})}/>
            </div>  
            </div>
            <button onClick={showForm} className="button-add-user">Añadir usuario</button>
        </form>

            <button onClick={showPass} className="show-pass"><i className='bx bx-show'></i></button>
        </>
    )
}

export default UsersForm