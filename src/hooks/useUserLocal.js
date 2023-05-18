import React, { useEffect, useState} from 'react'

import { GetUserLocalUseCase } from '../../Domain/useCase/userLocal/GetUserLocal';
import { User } from '../Domain/entities/User';

export const useUserLocal = () => {
    
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getUserSession();
    }, []);
    
    const getUserSession = async() => {
        const user = await GetUserLocalUseCase();
        setUser(user);
        //console.log('Usuario sesion: ' + JSON.stringify(user));
    }

    return { user, getUserSession };
}