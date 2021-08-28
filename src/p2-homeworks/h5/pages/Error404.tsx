import React from 'react'

const errorSt:any = {
   errorBlock:{
       height:'100vh',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center'
   },
    errorTxt:{
       fontSize:'50px',
        textDecoration:'uppercase',
        fontWeight:'700',
        color:'white',
        transform:'translateY(-60px)'
    },
    errorSpan:{
       display:'block'
    }

}

function Error404() {
    return (
        <div style={errorSt.errorBlock}>
            <div style={errorSt.errorTxt}>404
                <span style={errorSt.errorSpan}>Page not found!</span>
            </div>
        </div>
    )
}

export default Error404
