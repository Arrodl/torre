export const RETRIEVE_USER = 'retrieve-user';
export const RETRIEVE_OPPORTUNITIES = 'retrieve-opportunities';

export const retrieveUser = (username) => ({
    type: RETRIEVE_USER,
    payload: username,
});

export const retrieveOpportunities = ({ offset, size, aggregate }) => ({
    type: RETRIEVE_OPPORTUNITIES,
    payload: { offset, size, aggregate }
});