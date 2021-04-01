const endpoint = 'http://localhost:9000/users'

class UserService {
  async getUsers() {
    const res = await fetch(endpoint);
    const users = await res.json();
    return users;
  }

  async getUserDetails(id) {
    const res = await fetch(endpoint + '/' + id);
    const user = await res.json();
    return user;
  }

  async createUser(userData) {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(res);
  }

  async editUser(id) {

  }

  async deleteUser(id) {
    const res = await fetch(endpoint + '/' + id, {
      method: 'DELETE'
    });
    console.log(res);
  }
}

export const userService = new UserService();