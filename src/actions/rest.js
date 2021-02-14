export const RETRIEVE_USER = 'retrieve-user';

export const retrieveUser = (username) => ({
    type: RETRIEVE_USER,
    payload: username,
});