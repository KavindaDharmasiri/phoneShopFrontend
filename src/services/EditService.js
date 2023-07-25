import axios from "../axios";

class EditService {
    createEditDriver = async (data) => {
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('driver/edit',data)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    createEditPhone = async (data) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('phone/edit',data,config)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    createEditPhonetwo = async (data) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('phone/editWithOrder',data,config)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    createEditOrder = async (data) => {
        const token = localStorage.getItem("token");
        if (!token) {
            // Handle the case when the token is missing
            return Promise.reject("No token found");
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        };
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('order/edit',data,config)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

}
export default new EditService();
