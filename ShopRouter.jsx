import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopNavBar from './ShopNavBar'
import Home from '../components/Home'
import ElectronicsSection from '../components/electronics/ElectronicsSection'
import ClothingSection from '../components/clothing/ClothingSection'
import FurnitureSection from '../components/furniture/FurnitureSection'
import PageNotFound from '../components/PageNotFound'
import Men from '../components/clothing/Men';
import Women from '../components/clothing/Women';
import Kids from '../components/Kids';
import Wardrobe from '../components/furniture/Wardrobe'
import Bed from '../components/furniture/Bed'
import Sofa from '../components/furniture/Sofa'
import Mobile from '../components/electronics/Mobile'
import Laptop from '../components/electronics/Laptop'
import MobileList from '../components/electronics/mobiles/MobileList'
import MobileDetail from '../components/electronics/mobiles/MobileDetail'
import StateShare from '../components/state_sharing/StateShare'
const ShopRouter = () =>{
    // used to define routes
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShopNavBar/>}>
                    {/* child route definition*/ }
                    <Route index element={ <Home/> }  />
                    <Route  path='/electronics' element={ <ElectronicsSection/> }>
                        <Route path='mobile' element={<Mobile/>}>
                        <Route path='' element={<MobileList/>} />
                        <Route path='detail/:mid' element={<MobileDetail/>} />
                            </Route>
                        <Route path='laptop' element={<Laptop/>}/>
                        {/* <Route path='' element={<LaptopList/>}/> */}
                        {/* <Route path='detail/:mid' element={<Lapt}/> */}
                        </Route>
                    <Route path='/clothing' element={<ClothingSection/>}>
                        {/* clild route definitions of clothing route*/ }
                        <Route path='men' element={<Men/>}/>
                        <Route path='women' element={<Women/>}/>
                        <Route path='kids' element={<Kids/>}/>
                        </Route>
                    <Route path='/furniture' element={<FurnitureSection/> } >
                        {/* clild route definitions of furniture route*/ }
                        <Route path='sofa' element={<Sofa/>}/>

                        <Route path='wardrobe' element={<Wardrobe/>}/>
                        <Route path='bed' element={<Bed/>}/>
                        </Route>

                        <Route path='/state-share' element={<StateShare/>} />


                    <Route path='*' element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


}

export default ShopRouter;