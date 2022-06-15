import React from "react";

class ApiCheck extends React.Component{
    constructor(props){
        super(props)
        this.callApi()
    }
    callApi(){
        const url="https://api.github.com/users/ayush8010720467/repos"
        fetch(url).then((resp)=>{
            console.log(resp);
            return resp.json()
        }).then((resp)=>{console.log('responce', resp)}).catch((err)=>{
            console.log('err',err);
        })
    }
    render(){
        return(
            <>
                <h1>hello world</h1>
            </>
        )
    }
}

export default ApiCheck;