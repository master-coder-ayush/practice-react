import React from 'react'
import ReactDOM from 'react-dom/client'
import Output from './components/Output'
import Input from './components/Input'
import { useState } from 'react'

function App(){
    let emps = [
        {
            name:"Ayush",
            id:12,
            address:"Derbassi",
            url:"",
        },
        {
            name:"Sonu",
            id:123,
            address:"Banur",
            url:"",
        },
        {
            name:"Ashwini",
            id:1245,
            address:"Rajpura",
            url:"",
        },
    ]
    
    const [emp, setEmp] = useState(emps)

    function addContact(data){
        setEmp([...emp, data])
    }

    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    {
                        emp.map((object)=>{
                            return <Output name={object.name} id={object.id} address={object.address} url={""} />
                        })
                    }
                </div>
                <div className="col-lg-4">
                    <Input addContact={addContact} />
                </div>
            </div>
        </div>
    </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
