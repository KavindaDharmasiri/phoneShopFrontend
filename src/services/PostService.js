import axios from "../axios";
import {UPLOAD_IMAGE} from "./types";
import {Link} from "react-router-dom";

class PostService {
    createPostUser = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('save', data)   //10s
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

    createPostPhone = async ( data ) => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }

        const promise = new Promise((resolve, reject) => {
            axios.post('phone/save',data,config)   //10s
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

    createPostUserImage = async ( data ) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('user/img',data)   //10s
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

    createPostDriverImage = async ( data ) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('driver/img',data)   //10s
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


    createPostPayment = async ( data ) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('payment/save',data)   //10s
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


    createPostImage = async ( data ) => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }
        const promise = new Promise((resolve, reject) => {
            axios.post('phone/uploadImage',data,config)   //10s
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

    fetchPosts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('posts')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    getToken = async ( data ) => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const promise = new Promise((resolve, reject) => {
            axios.post('authenticate',data,config)   //10s
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


    async OrderMake(formData) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }

        const promise = new Promise((resolve, reject) => {
            axios.post('order/save',formData,config)   //10s
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
export default new PostService();
