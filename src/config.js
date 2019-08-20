const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-9ovej89orv68"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://l14m87m572.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7ErI6YjUQ",
    APP_CLIENT_ID: "3rbemisnfn7napmk3jf2jll80s",
    IDENTITY_POOL_ID: "us-east-1:eb407224-7372-4fdc-a664-b96c32919ee2"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-32i52ajqqi8v"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://21lo8mwsy4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jzAQm3htO",
    APP_CLIENT_ID: "4t6obmllvrhaaj2rra5539cu7",
    IDENTITY_POOL_ID: "us-east-1:933ffd05-49d1-4403-8233-305491fd12bf"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
