import axios from "../axios";

class GetService {

    fetchAllPhone = async () => {
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

        try {
            const response = await axios.get('phone/getAll', config);
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all phones:', error);
            throw error; // Propagate the error to the calling function
        }
    };


    getLastPhone = async () => {
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

        try {
            const response = await axios.get('phone/getLast', config);
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all phones:', error);
            throw error; // Propagate the error to the calling function
        }
    };

    getLastUser = async () => {


        try {
            const response = await axios.get('user/getLast');
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all phones:', error);
            throw error; // Propagate the error to the calling function
        }
    };

    getLastOrder = async () => {
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

        try {
            const response = await axios.get('order/getLast', config);
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all phones:', error);
            throw error; // Propagate the error to the calling function
        }
    };

    fetchAllOrders = async (data) => {
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
        const promise = new Promise((resolve, reject) => {
            axios.get('order/getAll?id='+ data,config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    fetchAllDrivers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchAllReservation = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Reservation/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchAllRent = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Rent/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    getAllUser = async () => {
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

        try {
            const response = await axios.get('user/getAll', config);
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all users:', error);
            throw error; // Propagate the error to the calling function
        }
    };

    getUserByName = async (name) => {
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

        try {
            const response = await axios.get('user/getByName?name='+name);
            return response.data;
        } catch (error) {
            // Handle the error appropriately (e.g., logging, error message, etc.)
            console.error('Error fetching all users:', error);
            throw error; // Propagate the error to the calling function
        }
    };

    getOnePhone = async (data) => {

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

        const promise = new Promise((resolve, reject) => {
            axios.get('phone/get?id='+ data,config)   //10s
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


    async fetchAlllOrders() {
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
        const promise = new Promise((resolve, reject) => {
            axios.get('order/getAll',config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}

export default new GetService();

