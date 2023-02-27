import { useEffect } from 'react';
import Cookies from 'universal-cookie';

import useAuth from './useAuth';
import { connectorLocalStorageKey } from './WalletModal/config';

const useEagerConnect = () => {
    const { login } = useAuth();

    useEffect(() => {
        const cookies = new Cookies();
        const connectorId = cookies.get(connectorLocalStorageKey);
        console.log(connectorId);

        if (connectorId) {
            login(connectorId);
        }

    }, [login]);
}

export default useEagerConnect
