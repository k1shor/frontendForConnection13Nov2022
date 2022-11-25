import { API } from "../../config"

export const getAllCategories = () => {
    return fetch(`${API}/getallcategories`
    ,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        }
    }
    )
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const add_category = (token, Category_name) => {
    return fetch(`${API}/addCategory`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({Category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const categoryDetails = (id) => {
    return fetch(`${API}/findcategory/${id}`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updateCategory = (token, id, Category_name) => {
    return fetch(`${API}/updatecategory/${id}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`   
        },
        body: JSON.stringify({Category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 