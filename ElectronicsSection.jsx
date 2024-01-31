import { Link, Outlet } from "react-router-dom"

const ElectronicsSection = () =>{

    return (
        <div className="text-center">
            <h2 className="text-center text-olive">Electronic Items</h2>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="mobile">Mobile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="laptop">Laptop</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default ElectronicsSection