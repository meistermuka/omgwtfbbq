<template>
    <v-card>
        <v-img 
            :src="require('../../assets/fruit.svg')">
        </v-img>
        <v-card-title><h4>Some item</h4></v-card-title>
        <v-divider></v-divider>
        <v-list dense>
            <v-list-tile>
                <v-list-tile-content>Type:</v-list-tile-content>
                <v-list-tile-content class="align-end">Produce</v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                    <v-list-tile-content>Price:</v-list-tile-content>
                    <v-list-tile-content class="align-end">$ 1.00</v-list-tile-content>
            </v-list-tile>
        
            <v-list-tile>
                    <v-list-tile-content>Produce #</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ produceName }}</v-list-tile-content>
            </v-list-tile>
        </v-list>

    </v-card>
</template>

<script>
export default {
    name: "ProduceItem",
    props: {
        produceName: {
            type: Number,
            required: true
        }
    },

}
</script>

<style>

</style>
