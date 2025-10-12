import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast';
import { useChatStore } from './useChatStore';
import { io } from 'socket.io-client'

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : import.meta.env.VITE_API_URL; // your backend

export const useAuthStore = create((set,get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    onlineUsers: [],
    socket: null,


    isCheckingAuth: true,
    authUser: JSON.parse(localStorage.getItem("chat-user")) || null,
    
    checkAuth: async () => {
        try {
            const savedUser = JSON.parse(localStorage.getItem("chat-user"));
            if (savedUser) {
            set({ authUser: savedUser });
            get().connectSocket();
            }
        } catch (error) {
            console.log("Error in checkAuth", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },


    signup: async (data) => {
        const res = await axiosInstance.post("/auth/signup", data);
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        set({ authUser: res.data });
    },

    login: async (data) => {
        const res = await axiosInstance.post("/auth/login", data);
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        set({ authUser: res.data });
    },
    
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
        } catch (err) {
            console.log("Logout error (ignored if offline)");
        }
        localStorage.removeItem("chat-user");
        set({ authUser: null });
    },

    updateProfile: async(data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            localStorage.setItem("chat-user", JSON.stringify(res.data));
            toast.success("Profile updated successfully");
        
        } catch (error) {
            console.log("Error in update Profile");
            toast.error(error.response.data.message);
        
        }finally{
            set({ isUpdatingProfile: false })
        }
    },

    connectSocket: () => {
        const { authUser } = get()
        if(!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL,{
            query:{
                userId: authUser._id,
            }}
        );
        socket.connect();

        set({ socket: socket });

        socket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds})
        })
    },

    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect();
    }

}))

