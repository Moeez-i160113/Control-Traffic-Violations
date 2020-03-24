class Auth {
    constructor() {
      sessionStorage.getItem('auth');
    }
  
    login() {
      sessionStorage.setItem('auth', true);
      
    }
  
    logout() {
      sessionStorage.removeItem('auth');
    }
  
    isAuthenticated() {
      return sessionStorage.getItem('auth');
    }
  }
  
  export default new Auth();
  