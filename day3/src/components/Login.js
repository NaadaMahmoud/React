import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

function Login() {
  let [isFocus, setIsFocus] = useState(false);
  let [isBlur, setIsBlur] = useState(false);
  let [data,setData]=useState({})

  let formik=useFormik({
    initialValues:
        {
          fullName:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
          password:yup.string()
      }),
    onSubmit:(values)=>{
      setData(values)
        console.log(values);
        console.log(data);
    }
  })

  function focused(){
    setIsFocus(true)
    
  }

  return (
    <div className='container border border-dark'>
      <form className='my-5' onSubmit={formik.handleSubmit}>
      <div className="mb-3">
    <label htmlFor="fullName" className="form-label"> Name</label>
    <input type="text" className="form-control {isFocused}?:border-danger : " id="fullName" onClick={focused} onChange={formik.handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email </label>
    <input type="email" className="form-control" id="email" onChange={formik.handleChange}/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={formik.handleChange}/>
    <div className="form-text" style={{color:'red'}}>{formik.errors.password}</div>
  </div>

  <div className="mb-3">
  <label htmlFor="city" className='me-2'>Enter a city:</label>
  <select name="city" id="city">
    <option value="volvo">Port Said</option>
    <option value="saab">Cairo</option>
    <option value="opel">Aswan</option>
    <option value="audi">Alex</option>
  </select>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>

  {/* {data.map((item)=><p>{item.password}</p>)} */}
    
    
    </div>

  )
}

export default Login
