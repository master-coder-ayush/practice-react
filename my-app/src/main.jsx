import React from 'react'
import ReactDOM from 'react-dom/client'
import Output from './components/Output'
import Input from './components/Input'

let emps = [
    {
        name:"Ayush",
        id:12,
        address:"Derbassi",
        url:""
    },
    {
        name:"Sonu",
        id:123,
        address:"Banur",
        url:""
    },
    {
        name:"Ashwini",
        id:1245,
        address:"Rajpura",
        url:""
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    {
                        emps.map((object)=>{
                            return <Output name={object.name} id={object.id} address={object.address} url={""} />
                        })
                    }
                </div>
                <div className="col-lg-4">
                    <Input/>
                </div>
            </div>
        </div>
    </div>
)
