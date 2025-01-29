import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar/navbar';
import { register } from '../../services/admin';
import './Register.css';

export function Register() {
    // State hooks
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const onRegister = async () => {
        if (!firstName.trim()) {
            toast.error("Please Enter First Name");
        } else if (!lastName.trim()) {
            toast.error('Please Enter Last Name');
        } else if (!email.trim()) {
            toast.error('Please Enter Email');
        } else if (!password.trim()) {
            toast.error('Please Enter Password');
        } else if (!confirmPassword.trim()) {
            toast.error('Please Confirm the Password');
        } else if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else if (!role) {
            toast.error('Please Select the Role');
        } else {
            try {
                const result = await register(firstName, lastName, email, password, role);
                if(result['message'] == "Registered Successfully")    {
                    toast.success('Successfully Registered');
                    navigate('/');
                }else{
                    console.log(result['error'])
                }
                
            } catch (error) {
                console.error('Registration error:', error);
                toast.error('Failed to register. Please try again.');
            }
        }
    };

    return (
        <div className='container-fluid'>
            <Navbar />
            <div className='container_body'>
                <center>
                    <div className='registration-body'>
                        <div className='form'>
                            <h1 className='title'>Register here</h1>

                            <div className='input-box mb-3'>
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type='text'
                                    placeholder='First Name'
                                    value={firstName}
                                />
                            </div>

                            <div className='input-box mb-3'>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    type='text'
                                    placeholder='Last Name'
                                    value={lastName}
                                />
                            </div>

                            <div className='input-box mb-3'>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    placeholder='email@email.com'
                                    value={email}
                                />
                            </div>

                            <div className='input-box mb-3'>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                />
                            </div>

                            <div className='input-box mb-3'>
                                <input
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type='password'
                                    placeholder='Re-enter Password'
                                    value={confirmPassword}
                                />
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Role: </h6>
                                    </div>

                                    <div className="col">
                                        <input
                                            type="radio"
                                            id="seller"
                                            name="role"
                                            value="ROLE_SELLER"
                                            onChange={(e) => setRole(e.target.value)}
                                            checked={role === 'ROLE_SELLER'}
                                        />
                                        <label htmlFor="seller">User</label>
                                    </div>

                                    <div className="col">
                                        <input
                                            type="radio"
                                            id="buyer"
                                            name="role"
                                            value="ROLE_CUSTOMER"
                                            onChange={(e) => setRole(e.target.value)}
                                            checked={role === 'ROLE_CUSTOMER'}
                                        />
                                        <label htmlFor="buyer">Owner</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="autoSizingCheck"
                                />
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                    Remember me
                                </label>

                                <button onClick={onRegister} className="w-100 btn btn-primary mt-2">Register</button>
                                <center><div>Already have an account? <Link to={'/'}>Login here</Link></div></center>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Register;
