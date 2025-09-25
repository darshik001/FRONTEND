import { useRef } from "react"

const Uncontrolled = ()=> {
  const nameref = useRef("")
  const emailref = useRef("")
  const passwordref = useRef("")

  const handalSubmit = (e)=>{
    e.preventDefault()
    console.log(nameref.current.value)
    console.log(emailref.current.value)
    console.log(passwordref.current.value)
  }
  return (
    <>
           <h1>UnControlled Coponent</h1>

      <form onSubmit={handalSubmit}>
        <label>Name:</label>
        <input type="text"ref={nameref}  />
        <br /><br />

        <label>Email:</label>
        <input type="email" ref={emailref}/>
        <br /><br />

        <label>Password:</label>
        <input type="password" ref={passwordref}/>

<br /><br />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Uncontrolled
