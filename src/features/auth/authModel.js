// authModel.js

class AuthModel {
  constructor(user = null, token = null) {
    this.user = user;
    this.token = token;
  }

  isLoggedIn() {
    return !!this.token;
  }

  updateUser(user) {
    this.user = user;
  }

  updateToken(token) {
    this.token = token;
  }

  clear() {
    this.user = null;
    this.token = null;
  }

  // Ví dụ validate email/password (business logic)
  static validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

export default AuthModel;