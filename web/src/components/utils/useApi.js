import { useState } from "react"
import axios from "axios";
import useDebouncePromise from "components/utils/useDebouncePromise";

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
};

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)
    const debounceAxios = useDebouncePromise(axios, config.debounceDepay);

    async function call(localConfig) {
        setRequestInfo({
            ...initialRequestInfo,
            loading: true,
        });
        let response = null;
        const finalConfig = {
            baseURL: 'http://localhost:5000',
            ...config,
            ...localConfig,
        };

        const fn = finalConfig.debounced ? debounceAxios : axios;
       
        try {
            // eslint-disable-next-line react-hooks/exhaustive-deps  
            response = await fn(finalConfig);
            setRequestInfo({
                ...initialRequestInfo,
                data: response.data,
            });
        } catch (error) {
            setRequestInfo({
                ...initialRequestInfo,
                error,
            });
        }

        if (config.onCompleted) {
            config.onCompleted(response);
        }
        return response;
    }



    return [
        call,
        requestInfo
    ]

}


