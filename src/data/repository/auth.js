import axios from 'axios';

const auth = {
  signUp: async (signData) => {
    try {
      return await axios.post('http://127.0.0.1:5001/auth/signup', signData);
    } catch (err) {
      /** Test!!! */ console.log(`signUp : ${err}`);
      throw new Error('axios Error : signUp');
    }
  },
  signIn: async (signData) => {
    try {
      return await axios.post('http://127.0.0.1:5001/auth/signin', signData);
    } catch (err) {
      throw new Error('axios Error : signIn');
    }
  },
  autoSign: async (refreshToken) => {
    try {
      return await axios.get('http://127.0.0.1:5001/auth/signin', { headers: { refreshToken: refreshToken } });
    } catch (err) {
      /** Test!!! */ console.log(`autoSign : ${err}`);
      throw new Error('axios Error : autosign');
    }
  },
  authRequest: async (phone) => {
    try {
      return await axios.get(`http://127.0.0.1:5001/auth/${phone}`);
    } catch (err) {
      throw new Error('axios Error : authRequest');
    }
  },
  authConfirm: async (id, phone) => {
    try {
      return await axios.get(`http://127.0.0.1:5001/auth/${id}/${phone}`);
    } catch (err) {
      throw new Error(`axios Error : authConfirm : ${err}`);
    }
  },
  findId: async (findData) => {
    try {
      return await axios.post(`http://127.0.0.1:5001/findid`, findData);
    } catch (err) {
      throw new Error(`axios Error : findId : ${err} `);
    }
  },
};

export default auth;
//              /** Test!!! */ console.log(`${}`);
