import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            thead:[]
        }
    }
    componentDidMount(){
        let api = fetch("https://jsonplaceholder.typicode.com/users")
        console.log(api);
        api.then(x=>x.json()).then((y)=>{
            this.setState({users:y})
            this.setState({thead:Object.keys(y[0]).slice(0,4)})
        }
    ) 
    }
    render(){
        return(
            <>
            <table border={1} className="user-table">
            <thead>
                <tr>
                {this.state.thead.map((z,index)=> <th key={index}>{z}</th>)}
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((x)=>{
                   return(
                    <>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td> 
                            <td>{x.username}</td> <td>{x.email}</td> 
                        </tr>   
                    </>
                   )
                })}
            </tbody>
            </table> 
            </>
        )
    }
} 