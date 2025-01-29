import CountryState from "../components/countrystate"
import Navbar from "../components/Navbar/navbar"
import React from 'react'

export default function Profile() {
  return (
    <div>
    <Navbar/>
    <h1 className='title'>Your Profile</h1>
    <div className="form">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div style={{height:'200px', width:'200px', border:'1px solid', alignItems:'center', marginLeft:'100px'}}>
                    Upload image and add preview button also
                </div>
            </div>
            <div className="col"></div>
            
        </div>
        <div className="row">
        <div className="col">
            <div className="row">
            <div className="col"><div className="mb-3">
            <lable className=''>User Id</lable>
            <input type='text' className="form-control" disabled/>
            </div>
            </div>
            <div className="col" style={{alignItems:'center'}}>
            <label>
                        Prefix:
                        <div className="mt-1" style={{border:'1px'}}>
                        <select value=''>
                            <option value="">Select Prefix</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Dr.">Dr.</option>
                        </select>
                        </div>
            </label>
            </div>
            </div>
            
        </div>

        <div className="col">
            <div className="mb-3">
            <h6>First Name</h6>
            <input type='text' className="form-control" required/>
            </div>
        </div>

        <div className="col">
            <div className="mb-3">
            <h6>Last Name</h6>
            <input type='text' className="form-control" required/>
            </div>
        </div>

        </div>

        <div className="row">
            <div className="col">
                <div className="mb-3">
                <h6>Email Id</h6>
                <input type='email' className="form-control" required/>
                </div>
            </div>

            <div className="col">
                <div className="mb-3" required>
                <h6>Contact Number</h6>
                <input type='number' className="form-control"/>
                </div>
            </div>

            <div className="col">
                <div className="mb-3" required>
                <h6>Date of Birth</h6>
                <input type='date' className="form-control"/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <div className="mb-3" required>
                <h6>Address Line1</h6>
                <input type='text' className="form-control" required/>
                </div>
            </div>

            <div className="col">
                <div className="mb-3" required>
                <h6>Address Line2</h6>
                <input type='text' className="form-control"/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col">
            <div className="mb-3" required>
                <h6>Landmark</h6>
                <input type='text' className="form-control"/>
                </div>
            </div>

            <div className="col">
            <div className="mb-3" required>
                <h6>Pin Code</h6>
                <input type='number' className="form-control"/>
                </div>
            </div>

            <div className="col">
            <div className="mb-3" required style={{alignContent:'center'}}>
                <div className="row">
                <h6>Gender</h6>
                    <div className="col">
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Male</label>
                    </div>
                    
                    <div className="col">
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Female</label>
                    </div>

                    <div className="col">
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Other</label>
                    </div>
                </div>
                
                
                
                
            </div>
            </div>
        </div>

        <div className="row">
            <CountryState/>
        </div>

        
    </div>
    </div>
  )
}




