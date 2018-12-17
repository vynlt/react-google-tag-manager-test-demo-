import Utils from '../utils/utils';
const utils = new Utils();

const ProfileService = {

  save(email, data, cb){
    utils.addUser(email, data);
    setTimeout(cb, 100); // fake async
  },
  
  getUser(email){
    return utils.getUserProfile(email);
  },

};

export default ProfileService;