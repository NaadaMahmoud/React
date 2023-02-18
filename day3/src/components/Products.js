import React, {useState} from 'react'
import Card from './Cart'

function Products() {

    let products=[{
        id: 1,
        name: "Laptop Samsung S3",
        price: 1000,
        imgURL: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        categoryId:"laptops"
    },
    {
        id: 2,
        name: "Laptop Dell E6540",
        price: 2000,
        imgURL: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        categoryId:"laptops"
    },
    {
        id: 3,
        name: "Chair",
        price: 3000,
        imgURL: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        categoryId:"Furniture"
    },
    {
        id: 4,
        name: "door",
        price: 5000,
        imgURL: "https://images.unsplash.com/photo-1537199322506-85bfd51c0601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categoryId:"Furniture"
    },
    {
        id: 5,
        name: "Skirt",
        price: 6000,
        imgURL: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        categoryId:"Cloths"
    },
    {
        id: 6,
        name: "dress",
        price: 8000,
        imgURL: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        categoryId:"Cloths"
    },
    {
        id: 7,
        name: "MacBook M1",
        price: 2500,
        imgURL: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        categoryId:"laptops"
    },
    {
        id: 8,
        name: "HP ProBook",
        price: 7060,
        imgURL: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        categoryId:"laptops"
    },
    {
        id: 9,
        name: "bed",
        price: 7860,
        imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        categoryId:"Furniture"
    },
    {
        id: 10,
        name: "T-Shirt",
        imgURL: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 4444, 
        categoryId:"Cloths"
    },

    ]

    let [arr,setArr]=useState(products);
    let[input,setInput]=useState('');

    function filter(type){
    if(type==='all'){
        setArr(products);
    }
    else{
        let newarr= products.filter((item)=>item.categoryId===type);
        setArr(newarr);
    }
}

    

    
    function save(e)
    {
    let newarr= products.filter((item)=>item.name===input);
        setArr(newarr);
    }

    function search(e){ 
        setInput(e.target.value)
    }

    return (
        <div className='row'>
            <div className='mt-2 ms-2'>
                <label className='fw-bold'>Search with product name</label>
                <input name='search' className='w-50 ms-2' onChange={search}></input>
                <button className='btn btn-dark ms-2' onClick={save}>Search</button>
            </div>

            <div className='row mt-3 ms-3'>
                <button className='btn btn-dark col-2 mx-2' onClick={()=>filter('all')}>All</button>
                <button className='btn btn-dark col-2 mx-2' onClick={()=>filter('laptops')}>Laptops</button>
                <button className='btn btn-dark col-2 mx-2' onClick={()=>filter('Furniture')}>Furniture</button>
                <button className='btn btn-dark col-2 mx-2' onClick={()=>filter('Cloths')}>Cloths</button>
            </div>
            
           
            {arr.map((item,index)=><Card key={index} product={item}/>)}
        </div>
    
  )
}

export default Products;
