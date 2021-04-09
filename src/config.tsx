export default {
  // s3: {
  //     REGION: 'YOUR_S3_UPLOADS_BUCKET_REGION',
  //     BUCKET: 'YOUR_S3_UPLOADS_BUCKET_NAME'
  // },
  // apiGateway: {
  //     REGION: 'YOUR_API_GATEWAY_REGION',
  //     URL: 'YOUR_API_GATEWAY_URL'
  // },
  appsync: {
    graphqlEndpoint:
      'https://nxprlc2knvhufjg4ddpjmowdmu.appsync-api.eu-west-1.amazonaws.com/graphql',
    region: 'eu-west-1',
    authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  },
  cognito: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_VXS8uuaaC',
    webClientId: 'q6eldg1o81uufnr85lhqih7cg',
    identityPoolId: 'eu-west-1:d498e3bd-3058-4781-bad6-444e49ad8deb',
    authenticationFlowType: 'CUSTOM_AUTH',
  },
};
