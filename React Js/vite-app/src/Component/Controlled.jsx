import { useState } from "react"

function Controlled() {
 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

  const handalSubmit = (e)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(password)
  }
  return (
    <>
      <h1>Controlled Coponent</h1>

      <form onSubmit={handalSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br /><br />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br /><br />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />

        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Controlled
