<template>
        <v-footer indigo color="#fcb69f" dark padless>
        <v-card flat tile class=" lighten-1 white--text text-center" color="#fcb69f">
            <v-card-text class="white--text pt-10">
                {{ history }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    props: {
        history: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.v-footer .v-card__text {
    max-height: fit-content;
}
</style>
