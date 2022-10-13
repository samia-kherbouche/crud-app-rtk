import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { editUser } from './userSlice'

const EditUser = () => {
    const dispatch=useDispatch()
    const params =useParams()
    console.log(params.id,'id')
    const users=useSelector((store)=>store.users)
    const navigate=useNavigate()
    const existingUser = users.filter(user => user.id == params.id);
    console.log(existingUser,'existing')
    const { name, email } = existingUser[0];
    
    const [values, setValues] = useState({
      name,
      email
    });
   
    const handleEditUser=()=>{
        setValues({name:'',email:''})
        dispatch(editUser({
            id:params.id,
            name:values.name,
            email:values.email
        }))
        navigate('/')
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField
            label='Name'
            inputProps={{type:'text', placeholder:'Samia kherbouche'}}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <br/>
        <TextField
        label='Email'
        inputProps={{type:'email', placeholder:'Samia@gmail.com'}}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser