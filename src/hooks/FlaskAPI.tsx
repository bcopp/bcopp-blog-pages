// Send a POST request using axios config
/*
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
*/
import axios from 'axios'
import { useState } from 'react';


//const iAxios = axios.create({
  //baseURL: 'https://localhost:3000',
  //timeout: 1000,
//});


const useGetHandler = () => {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [data, setData] = useState(null);

    const handleRequest = (requestConfig: any) => {
        setLoading(true);
        setError(false);

        return axios.request(requestConfig)
            .then((response) => {console.log(response.data); setData(response.data)})
            .catch((response) => {console.log(response); setError(response)})
            .finally(() => setLoading(false))
    };

    return {isLoading, hasError, data, handleRequest};
};

export default useGetHandler