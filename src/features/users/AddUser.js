import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

const AddUser = () => {
    const navigate=useNavigate()
    const [values, setValues] = useState({
        name: '',
        email: ''
      });

    const handleAddUser=()=>{
        setValues({name:'',email:''})
        console.log(values)
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

        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser