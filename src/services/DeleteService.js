import axios from "../axios";

class DeleteService {

    deletePhone = async (data) => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+localStorage.getItem("token"),
            },
        }

        const promise = new Promise((resolve, reject) => {
            axios.delete('phone?id='+ data,config)   //10s
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
export default new DeleteService();












