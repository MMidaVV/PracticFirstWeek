import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            tasks: []
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1)
        }
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/tasks')
                commit('setTasks', response.data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
            }
        },
        async addTask({ commit }, task) {
            try {
                await axios.post('http://localhost:3000/tasks', task)
                commit('addTask', task)
            } catch (error) {
                console.error('Error adding task:', error)
            }
        },
        async deleteTask({ commit }, index) {
            try {
                await axios.delete(`http://localhost:3000/tasks/${index}`)
                commit('deleteTask', index)
            } catch (error) {
                console.error('Error deleting task:', error)
            }
        }
    }
})

loadFonts()

const app = createApp(App).use(router)
app.use(vuetify)
app.mount('#app')
app.use(router)
app.use(store)