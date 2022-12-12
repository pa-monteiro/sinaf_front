import api from './api';

export const get = async () => {
    try {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          }

        return await api.get('/assinante', config);  
    } catch (error) {
        return error;
    }
}

export const primeiroAcesso = async (cpf) => {
    try {
        return await api.post('/primeiro-acesso', {
             cpf
         });  
    } catch (error) {
        return error;
    }
}

export const login = async ({cpf, data_nascimento}) => {
    try {
        return await api.post('/login', {
             cpf,
             data_nascimento
         });  
    } catch (error) {
        return error;
    }
}