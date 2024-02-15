import { useState } from "react"

export default function Input(props){
    let sampleData={
        name:"",
        id:"",
        address:"",
        url:""
    }

    const [data, setData] = useState(sampleData)

    function saveName(event){
        setData({...data, name:event.target.value})
    }

    function saveID(event){
        setData({...data, id:event.target.value})
    }

    function saveURL(event){
        setData({...data, url:event.target.value})
    }

    function saveAddress(event){
        setData({...data, address:event.target.value})
    }

    return (
        <>
            <div className="d-flex flex-column">
                <input type="text" placeholder="Name" onChange={saveName}/>
                <input type="text" placeholder="ID"  onChange={saveID}/>
                <input type="text" placeholder="URL"  onChange={saveURL}/>
                <input type="text" placeholder="address" onChange={saveAddress}/>
                <button className="btn btn-primary" onClick={()=>props.addContact(data)} >Add Contact</button>
            </div>
        </>
    )
}