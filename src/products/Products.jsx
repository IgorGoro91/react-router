import { useEffect, useState } from "react"
import axios from "axios"

const Products = () =>{

    const [ products, setProducts ] = useState( [] )

    useEffect ( () =>{
        axios.get('http://localhost:4000/api/posts')
        .then(res => setProducts(res.data) )
    }, [] )

    return (

        <>
            <div className="container">
                <div className="row">

                    {

                        products.map( (elem) => {
                            return(
                                <div key={elem.id} className="col-4">
                                    <div class="card-tetle">  
                                        <div class="card-body">
                                            <h4 class="card-title">{elem.title} </h4>
                                            <p class="card-text">{elem.tags}</p>
                                        </div>
                                    </div>      
                                </div>
                            )
                        })
                    }

                </div>


            </div>
        </>
    )
}

export default Products