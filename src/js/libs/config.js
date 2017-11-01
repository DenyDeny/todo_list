export default {
    baseUrl: "http://localhost:3000",
    
    user: {
        findByEmail: {
            url: "/api/user/find_by_email",
            method: "post"
        },

        login: {
            url: "/api/user/login",
            method: "post"
        },

        logout: {
            url: "/api/user/logout",
            method: "post"
        },

        register: {
            url: "/api/user/register",
            method: "post"
        }
    },

    userActions: {
        updateInfo: {
            url: "/api/userActions/update_user_info",
            method: "post"
        },

        getInfo: {
            url: "/api/userActions/get_user_info",
            method: "get"
        },

        terminateSession: {
            url: "/api/userActions/terminate_user_session",
            method: "get"
        }
    },

    task: {
        list: {
            url: "/task/list",
            method: "get"
        },

        createTask: {
            url: "/task/create_task",
            method: "post"
        },

        updateTask: {
            url: "/task/update_task",
            method: "post"
        },

        deleteTask: {
            url: "/task/delete_task",
            method: "delete"
        }
    }
}