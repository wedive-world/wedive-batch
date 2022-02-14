const { request, gql } = require('graphql-request');
const URL = 'https://api.wedives.com/graphql';

exports.handler = async (event) => {

    await main()

    return {
        statusCode: 200
    };
};

async function main() {
    await completeDiving()
}

async function completeDiving() {
    const mutation = gql`
        mutation CompleteDivingIfExist {
            completeDivingIfExist {
                success
                reason
            }   
        }
    `

    let result = await request(URL, mutation)
    console.log(JSON.stringify(result, undefined, 2))
}