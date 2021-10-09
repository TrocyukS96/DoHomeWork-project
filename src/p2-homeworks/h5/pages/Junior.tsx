import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";

export const st ={
    fontSize:'20px',
    color:'white',
    height:'100vh',
    backgroundImage:' url(https://instapik.ru/wp-content/uploads/2020/08/dark-background.jpg)'
}
function Junior() {
    return (
        <div style={st}>
           <HW7/>
            <HW8/>
            <HW9/>

        </div>
    )
}

export default Junior
