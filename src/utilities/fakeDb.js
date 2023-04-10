const addToDb = (id) =>{
    let applyJob ={};

    //1. get data from localStorage
    const storedJob = localStorage.getItem('apply-job');
    if(storedJob){
        applyJob = JSON.parse(storedJob);
    }

    
    applyJob[id] = 1;
   
    localStorage.setItem('apply-job',JSON.stringify(applyJob) );


}
const removeItems = (id) =>{
    const cartItems = localStorage.getItem('shopping-cart');
   if(cartItems){
    const shoppingCart = JSON.parse(cartItems);
    if(id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart) );
    }
   }
}

const getStoredJob = ()=>{
    const getJob = localStorage.getItem('apply-job');
    const getJobs = JSON.parse(getJob);
    return getJobs
}

const removeAllCartItem =()=> localStorage.removeItem('shopping-cart')

export  {addToDb,getStoredJob,removeItems,removeAllCartItem}