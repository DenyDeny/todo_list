export default {
    baseUrl: "http://localhost:3000",
    
    user: {
        findByEmail: {
            url: "/find_by_email",
            method: "post"
        },

        login: {
            url: "/login",
            method: "post"
        },

        logout: {
            url: "/logout",
            method: "post"
        },

        register: {
            url: "/register",
            method: "post"
        }
    },

    userActions: {
        updateInfo: {
            url: "/update_user_info",
            method: "post"
        },

        getInfo: {
            url: "/get_user_info",
            method: "get"
        },

        terminateSession: {
            url: "/terminate_user_session",
            method: "get"
        }
    },

    task: {
        list: {
            url: "/list",
            method: "get"
        },

        createTask: {
            url: "/create_task",
            method: "post"
        },

        updateTask: {
            url: "/update_task",
            method: "post"
        },

        deleteTask: {
            url: "delete_task",
            method: "delete"
        }
    }
}