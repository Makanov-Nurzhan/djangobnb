import {getAccessToken} from "@/app/lib/actions";

const apiServices = {
    get: async function (url: string): Promise<any> {
        console.log('get', url);
        const token = await getAccessToken()

        return new Promise((resolve, reject) => {
            fetch (`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log(json);

                    resolve(json);
                })
                .catch((error => {
                    reject(error);
                }))
        })
    },

    post: async function (url: string, data: any): Promise<any> {
        console.log('post', url, data);
        const token = await getAccessToken()

        const isFormData = data instanceof FormData

        return new Promise((resolve, reject) => {
            fetch (`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: isFormData ? data : JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    ...(isFormData ? {} : {'Content-Type': 'application/json'}),
                    'Authorization': `Bearer ${token}`
                }
        })
            .then(response => response.json())
            .then((json) => {
                console.log('Response', json);

                resolve(json);
            })
            .catch((error => {
                reject(error);
            }))
        })
    }
}


export default apiServices