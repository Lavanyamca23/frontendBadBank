import { useContext,useState } from "react"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'
import axios from "axios";
function Create(){
    const[data,setData]=useState([])
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [details,setDetails] = useState({})
   
  function handleEmail(e){
    const emailVal = e.target.value;
    if(!name && emailVal !== ''){
      alert("Name is Required!")
    }
    setEmail(emailVal)
  }
    
  function handlePassword(e){
    const passwordVal = e.target.value;
    if(!name && passwordVal !== ''){
      alert("Fill the Name first!")
    }
    if(!email && passwordVal !== ''){
      alert("Fill the Email first!")
    }
    setPassword(passwordVal)
  }
    
   function handleSubmit(e){
    e.preventDefault();
    if(password.length<8){
      alert("Enter Atleast 8 Characters as Password!");
      return;
    }
    const newDetails = {name,email,password,amount:0};

    axios.post("https://server-tqam.onrender.com/create",newDetails).then(alert(" Account Created successfully...!"))
  
    // alert("Account Created Successfully....!") 
   }

   console.log(details)
   console.log(data)
 return(<>
    {/* <h1>Create</h1> */}
    <div className='create'>
    <Card className='card' border="success" style={{ width: '38rem',height:'28rem' }}>
        <Card.Header className='account'>Create an Account</Card.Header>
        <Card.Body>
        <form onSubmit={handleSubmit}>
        <input id='name' type='text' placeholder='Enter Your Full Name' value={name} onChange={(e)=>setName(e.target.value)} autoComplete='off'></input>
        <input id='email' type="email" placeholder='Enter E-mail ID' value={email} onChange={handleEmail} autoComplete='off'></input>
        <input id='password' type="Password" placeholder='Enter a password' value={password} onChange={handlePassword} autoComplete='off'></input>
     <button disabled={name === '' || email === '' || password === ''}>Create</button> 
        
    </form>
        </Card.Body>
      </Card>
      <br />
      </div>
</>)
}

export default Create;