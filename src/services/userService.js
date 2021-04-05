const BASE_URL = 'https://my-json-server.typicode.com/shljshlj/demo/users';

class UserService {
  async getUsers() {
    const res = await fetch(BASE_URL);
    const users = await res.json();
    return users;
  }

  async getUserDetails(id) {
    const endpoint = `${BASE_URL}/${id}`;

    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`Cannot get user. Status: ${res.statusText} (${res.status})`)
      }
      const user = await res.json();
      return {
        user,
        error: null
      };
    } catch ({ message }) {
      console.error(message);

      return {
        user: null,
        error: message
      }
    }
  }

  async createUser(userData) {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!res.ok) {
        throw new Error(`User not created. ${res.statusText} (${res.status})`)
      }
      const user = await res.json();

      return {
        error: null,
        user
      }

    } catch ({ message }) {
      console.error(message);
      return {
        error: message,
        user: null
      }
    }

  }

  async updateUser(id, userData) {
    const endpoint = `${BASE_URL}/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      console.log(res);

      if (!res.ok) {
        throw new Error(`User not updated. Status:  ${res.statusText} (${res.status})`)
      }

      const user = await res.json();
      return {
        error: null,
        user
      }
    } catch ({ message }) {
      console.error(message);
      return {
        error: message,
        user: null
      }
    }

  }

  async deleteUser(id) {
    const endpoint = `${BASE_URL}/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error(`User not deleted. Status:  ${res.statusText} (${res.status})`);
      }

      return {
        error: null
      }
    } catch ({ message }) {
      console.error(message);

      return {
        error: message
      }
    }
  }
}

export const userService = new UserService();