import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar/navbar';
import { login } from '../../services/admin';
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";



export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onLogin = async () => {
        if(email.length==0){
            toast.error('Please Enter The Email');
        }else if(password.length==0){
            toast.error('Please Enter Password');
        }else{
            //call api

            const result = await login(email,password)
                
                //persist the token and uname in session
                if(result != null){
                    sessionStorage['name']=result['firstName']
                sessionStorage['token'] = result['jwt']
                sessionStorage['role'] = result['role']
                toast.success('Login Successful');
                navigate('/home');
                }else{
                    toast.error('Login Failed! Invalid Credentials');
                }
            

            
            
        }
    }

    return (
       <div className='container-fluid'> 
        <Navbar/>
        
        <div className='container-body'>
        <center>
        <div className='wrapper'>
         <center>
        <div className='form'>
            <div><h1 className='title'>Login</h1></div>
                <div className='input-box mb-3'>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                type='email'
                placeholder='abc@gmail.com' 
                /> <FaUser className='icon'/>
                </div>

            <div className='input-box mb-3'>
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                /><FaLock className='icon'/>
            </div>

            <div>
            <div className="row">
                
            
                </div>
            </div>

            <div className="mb-3">
            <input 
                className="form-check-input" 
                type="checkbox" id="autoSizingCheck"/>
                <label class="form-check-label" for="autoSizingCheck">
                     Remember me
            </label>
                <button 
                onClick={onLogin} 
                className="w-100 btn btn-primary mt-2">Login</button>
                <div>Don't have an account? <Link to={'/register'}> Register here</Link></div>
                <div><Link style={{margin:'10px'}} className='link-light' to={'/setpassword'}>Forget Password?</Link></div>

                
            </div>
        </div>
        </center>
           
        </div> 
        </center>
        </div>  
        </div>
        
        
    )
}

export default Login