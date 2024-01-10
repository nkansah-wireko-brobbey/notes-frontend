// Define your environment-specific variables here
export const environment = {
    production: false,
    apiUrl: 'https://notes-server.azurewebsites.net/api',
    auth: {
        signup: '/users/signup',
        login: '/users/login',
    },
    test:{
        test: '/test/hello',
    }

};
