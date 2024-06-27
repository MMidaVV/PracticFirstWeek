<template>
    <v-app>
        <v-container class="mt-10">
            <v-container class="text-center">
                <h1 class="font-weight-bold text-h4 mb-0">Ваш список дел</h1>
            </v-container>
            <v-list>
                <v-card elevation="2" class="mx-auto border-thin my-5" v-for="(task, index) in tasks" :key="index">
                    <v-card-title class="px-5">Задача №{{ index + 1 }}</v-card-title>
                    <v-text-field class="px-5 text-black border-b-0" placeholder="Введите задачу тут" outlined
                        v-model="task.description"></v-text-field>
                    <v-card-actions class="px-5">
                        <v-btn @click="deleteTask(index)">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-list>
            <v-container class="text-center">
                <v-btn elevation="2" @click="addTask">Добавить задачу</v-btn>
            </v-container>
        </v-container>
    </v-app>

</template>

<script>
export default {
    data() {
        return {
            newTask: { description: '' }
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    },
    methods: {
        addTask() {
            this.$store.commit('addTask', this.newTask)
            this.newTask = { description: '' }
        },
        deleteTask(index) {
            this.$store.commit('deleteTask', index)
        }
    },
    created() {
        this.$store.commit('setTasks', this.tasks)
    }
}
</script>

<style></style>
