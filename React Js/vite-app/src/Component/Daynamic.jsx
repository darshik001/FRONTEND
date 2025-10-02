import { useState } from "react"
import './coman.css'
function Daynamic() {
 let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>\/?]).{8,}$/;

  const initialStat = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    hobbies: [],
  }
  const [inputForm, setInputForm] = useState(initialStat)
  const [inputErr,setInputErr] = useState({})
 
    

  const handalSubmit = (e) => {
    e.preventDefault()
    
    if(handalError()){

      console.log(inputForm)
    }
  
  }

  const handalChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type == "checkbox") {
      setInputForm(prev => ({
        ...prev,
        hobbies: checked ? [...prev.hobbies, value] : prev.hobbies.filter(v => v != value)
      }))
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      })
    }
  }

  const handalError = ()=>{
    let errors = {}
    if(inputForm.fname == ""){
      errors.fnameErr = "First name is empty"
    }

    if(inputForm.lname==""){
      errors.lnameErr = "Last name is empty"
    }

    if(inputForm.email ==""){
      errors.emailErr = "Email is empty"
    }

     if(inputForm.password ==""){
      errors.passwordErr = "password is empty"
    } else if (!passwordReg.test(inputForm.password)) {
  errors.passwordErr = "Password must contain uppercase, lowercase, number, special char, and min 8 length";
}

 if(inputForm.gender ==""){
  errors.genderErr = 'Select Gender'
 }

 if(inputForm.hobbies ==""){
  errors.hobbiesErr = "Select hobbies"
 }
 if(inputForm.role == ""){
  errors.roleErr = "Select Your role"
 }
    setInputErr(errors)
    return Object.keys(errors).length === 0 
  }

  const handalblur = (e)=>{
    console.log(e.target.value)
  }

  const handaldownkey = (e)=>{
    console.log(e)
  }
  return (
    <div>
      <h1>Daynamic Component</h1>

      <form onSubmit={handalSubmit}>
        <label>Fist Name : </label>
        <input type="text" name="fname" value={inputForm.fname}style={{border:inputErr.fnameErr ? "1px solid red":""}} onChange={handalChange} onBlur={handalblur} onKeyDown={handaldownkey} />
        {inputErr.fnameErr ? <span>{inputErr.fnameErr}</span>:""}
        <br /><br />

        <label>Last Name : </label>
        <input type="text" name="lname" value={inputForm.lname} onChange={handalChange} />
        {inputErr.lnameErr ? <span>{inputErr.lnameErr}</span>:""}
        <br /><br />

        <label>Email : </label>
        <input type="email" name="email" value={inputForm.email} onChange={handalChange} />
        {inputErr.emailErr ? <span>{inputErr.emailErr}</span>:""}
        <br /><br />

        <label>password : </label>
        <input type="password" name="password" value={inputForm.password} autoComplete="off" onChange={handalChange} />
        {inputErr.passwordErr ? <span>{inputErr.passwordErr}</span>:""}

        <br /><br />

        <input type="radio" name="gender" value={"male"} onChange={handalChange} />male
        <input type="radio" name="gender" value={"female"} onChange={handalChange} /> female
        {inputErr.genderErr ? <span>{inputErr.genderErr}</span>:""}
        <br /><br />


        <label>Travel</label>
        <input type="checkbox" name="hobbies" value={"Travel"} onChange={handalChange} />
        <label>Music</label>
        <input type="checkbox" name="hobbies" value={"Music"} onChange={handalChange} />
        <label>Reding</label>
        <input type="checkbox" name="hobbies" value={"Reding"} onChange={handalChange} />
        {inputErr.hobbiesErr ? <span>{inputErr.hobbiesErr}</span>:""}

        <br /> <br />

        <select name="role" onChange={handalChange} >
          <option value="">Select</option>
          <option value="Addmin">Addmin</option>
          <option value="HR manager">HR manager</option>
          <option value="Devloper">Devloper</option>
          <option value="Tester">Tester</option>
        </select>
        {inputErr.roleErr ? <span>{inputErr.roleErr}</span>:""}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Daynamic
