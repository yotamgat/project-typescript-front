//--------------------------------
//This file is used to create an axios instance and export it as the default export.
//--------------------------------

import axios,{CanceledError} from "axios";

export {CanceledError} ;
const apiClient = axios.create({   
    baseURL: "http://localhost:3000", // set the base URL for the API requests
   
});

export default apiClient;