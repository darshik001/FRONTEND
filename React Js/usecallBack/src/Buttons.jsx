import { memo } from 'react'
import { Button } from 'react-bootstrap'

const Buttons = memo(({name,HandalEvent})=>{
     console.log("incrimetn")
 console.log("decriment")
    return(
        <>
        <Button onClick={HandalEvent}>{name}</Button>
        </>
    )
})


export default Buttons