const AGGREGATE_OPPORTUNITIES = 'aggregate_opportunities';

export const agregateOpportunities = ({ loading, error, data }) => ({
    type: AGGREGATE_OPPORTUNITIES,
    payload: { loading, error, data }
});

export default {
    AGGREGATE_OPPORTUNITIES
};