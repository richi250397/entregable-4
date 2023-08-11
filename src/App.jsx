import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import UserDeleted from './components/UserDeleted'

function App() {

  const [isOn, setIsOn] = useState(true)
  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  //! Función para mostrar/ocultar formulario
  const showForm =() => {
    setIsOn(!isOn)
}

  //! Función para obtener Usuarios
    const getAllUsers = () => {
      axios.get("https://users-crud.academlo.tech/users/")
      .then(resp => setUsersList(resp.data))
      .catch(error => console.error(error))
    }

    useEffect(() => {

      getAllUsers()
    }, [])

  //! Función para Crear/Añadir nuevo usuario
    const addUser = newUser => {
      
      axios.post('https://users-crud.academlo.tech/users/', newUser)
      .then(() => {
        getAllUsers()
        setUserSelected(null)
      })
      .catch(error => console.error(error))
    }

    //! Función selectora del Usuario
    const selectUser = (user) => {
      setUserSelected(user)
    }
  
    //! Función para eliminar un usuario
    const deleteUser = (id) => {

      axios.delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => {
        getAllUsers()
      })
      .catch(error => console.error(error))
    }

    //! Función para Editar/Modificar un usuario
    const editUser = (user) => {

      axios.put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
      .then(() => {
        getAllUsers()
        setUserSelected(null)
      })
      .catch(error => console.error(error))
    }

  return (
    <>
    <section>
      <div className="div-create">
            <h1>Usuarios</h1>
            <button onClick={showForm}><i className='bx bx-user-plus'></i>Crear nuevo usuario</button>
            </div>
      <div className={`${isOn === false ? 'form-visible' : 'form'}`}>
          <div className='form-container'>
            <button onClick={showForm} className="close-form">X</button>
  
      <UsersForm 
      userCreate={addUser}
      userSelected={userSelected}
      editUser={editUser}
      showForm={showForm}
      />
      </div>
        </div>
      
      <main className='main-container'>
      
      <UsersList 
      usersList={usersList}
      deleteUser={deleteUser}
      selectUser={selectUser}
      showForm={showForm}
      />
      
      </main>
    </section>
      
    </>
  )
}

export default App
