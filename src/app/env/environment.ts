// Define your environment-specific variables here
export const environment = {
    production: false,
    apiUrl: 'http://localhost:9000/api',
    auth: {
        signup: '/users/signup',
        login: '/users/login',
    },
    test:{
        test: '/test/hello',
    }

};
