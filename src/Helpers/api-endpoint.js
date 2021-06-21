import axios from "axios";

export default axios.create({
    baseURL: 'https://api-octatech.herokuapp.com',
    headers: {
        "Content-type": "application/json"
    }
})

// export default axios.create({
//     baseURL: 'http://localhost:8000',
//     headers: {
//         "Content-type": "application/json"
//     }
// })