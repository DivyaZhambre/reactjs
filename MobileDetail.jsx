import {useParams,useNavigate} from 'react-router-dom'
import mobiles from '../../../database/mobile_data';
const MobileDetail=()=>{
    const {mid} = useParams()
    const navigate = useNavigate()

    const mobileObj = mobiles.find(mbl=>mbl.id==mid)
    const handleClick=()=>{
        navigate()
    }
    return (
        <div>
            <h2>{mobileObj.brand} {mobileObj.model} </h2>
            <img src={mobileObj.image} alt={mobileObj.model} />
            <h4>Price: &#8377; {mobileObj.price} </h4>
            <table className='table table-striped table-primary' >
                <thead>
                    <tr>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Primary Camera</th>
                        <td>{mobileObj.specification.camera.primary}</td>
                    </tr>
                    <tr>
                        <th>Front Camera</th>
                        <td>{mobileObj.specification.camera.front}</td>
                    </tr>
                    <tr>
                        <th>Internal Storage</th>
                        <td>{mobileObj.specification.internalStorage}</td>
                    </tr>
                    <tr>
                        <th>Ram</th>
                        <td>{mobileObj.specification.ram}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success m-1' onClick={handleClick}>Back to List</button>
        </div>
    )
}

export default MobileDetail;