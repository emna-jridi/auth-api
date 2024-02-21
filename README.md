# Authentication API

This API allows users to authenticate and manage their user accounts.

## Endpoints

### 1. Authentication
## Auth Register

This endpoint is used to register a new user.


- **POST /auth/register** : Creates a new user account.
  - Body :
    ```
    {
      "email": "user@example.com",
      "password": "password123",
      "userType": "CEOChief Executive Officer"
    }
    ```
  - Response :
    ```
    {
      "message": "User was registered successfully!"
    }
    ```

- **POST /auth/login** : Authenticates an existing user.
  - Body :
    ```
    {
      "email": "user@example.com",
      "password": "password123",
      "userType": "Chief Executive Officer"
    }
    ```
  - Response :
    ```
    {
      "message": "User logged in successfully.",
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### 2. User Management

- **GET /auth/users** : Retrieves a list of all users.
  - Response :
    ```
    {
      "users": [
        {
          "email": "user1@example.com",
          "userType": "CEO",
          "createdAt": "2024-02-20T12:00:00Z",
          "updatedAt": "2024-02-20T12:00:00Z"
        },
        {
          "email": "user2@example.com",
          "userType": "HR",
          "createdAt": "2024-02-20T13:00:00Z",
          "updatedAt": "2024-02-20T13:00:00Z"
        }
      ]
    }
    ```

- **GET /auth/users/{email}** : Retrieves details of a specific user.
  - Query Parameters : `email` ( user@example.com)
  - Response :
    ```
    {
      "email": "user@example.com",
      "userType": "Chief Executive Officer",
      "createdAt": "2024-02-20T12:00:00Z",
      "updatedAt": "2024-02-20T12:00:00Z"
    }
    ```

- **PUT /auth/users/{email}** : Updates information of a specific user.
  - Query Parameters : `email` ( user@example.com)
  - Body :
    ```
    {
      "email": "newemail@example.com",
      "userType": "HR"
    }
    ```
  - Response :
    ```
    {
      "email": "newemail@example.com",
      "userType": "HR",
      "createdAt": "2024-02-20T12:00:00Z",
      "updatedAt": "2024-02-20T14:00:00Z"
    }
    ```

- **DELETE /auth/users/{email}** : Deletes a specific user.
  - Query Parameters : `email` ( user@example.com)
  - Response :
    ```
    {
      "message": "User was deleted successfully!"
    }
    ```

