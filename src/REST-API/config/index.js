const config = {
    api: {
      baseUrl: process.env.REACT_APP_API_BASE_URL
        ? process.env.REACT_APP_API_BASE_URL
        : 'http://localhost:8005/api/v1'
    }
  };
  
  export default config;