const BASE_URL = 'http://localhost:9000/users'

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
        throw new Error(`Cannot get user. Status: ${res.status} (${res.statusText})`)
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
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    console.log(res);
  }

  async updateUser(id, userData) {
    const endpoint = `${BASE_URL}/${id}`;
    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    console.log(await res.json());
  }

  async deleteUser(id) {
    const endpoint = `${BASE_URL}/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error(`User not deleted. Status: ${res.status} (${res.statusText})`);
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