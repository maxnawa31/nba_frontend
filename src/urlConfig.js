const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';

const baseUrls = {
  development: {
    base: 'http://localhost:5000',
  },
};

export const urlBuilder = (endpoint) => {
  const { base } = baseUrls[env];
  return `${base}/${endpoint}`;
};

export default baseUrls[env];
