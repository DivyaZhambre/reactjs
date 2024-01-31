import apple from "../assets/images/apple.jpeg"
import samsung from "../assets/images/samsung.jpeg"
import motorola from "../assets/images/motorola.jpeg"
const mobiles=[
    {
        id:1,
        model: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 156000.00,
        specification:{
            camera:{
                primary: "48 MP + 12 MP + 12  MP Triple",
                front: "12  mp"
            },
            internalStorage: "256 GB Non Expandable",
            ram: "8 GB"
        },
        image: apple
    },
    {
        id:2,
        model: "Galaxy S23 Ultra 5G",
        brand: "Samsung",
        price: 104999.00,
        specification:{
            camera:{
                primary: "200 MP + 12 MP + 10  MP Quad",
                front: "12 MP"
            },
            internalStorage: "256 GB Non Expandable",
            ram: "12 GB"
        },
        image: samsung
    },
    {
        id:3,
        model: "moto g62 5G",
        brand: "Motorola",
        price: 18490.00,
        specification:{
            camera:{
                primary: "200 MP + 12 MP + 10  MP Quad",
                front: "12 MP"
            },
            internalStorage: "256 GB Non Expandable",
            ram: "12 GB"
        },
        image: motorola
    }
    
]
export default mobiles;