import React from 'react'
import ReactDOM from 'react-dom/client'
import Output from './components/Output'
import Input from './components/Input'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <Output></Output>
                </div>
                <div className="col-lg-4">
                    <Input/>
                </div>
            </div>
        </div>
    </div>
)
