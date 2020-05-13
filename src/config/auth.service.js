import axios from "axios";

class AuthService {


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user_name'));;
  }
}

export default new AuthService();