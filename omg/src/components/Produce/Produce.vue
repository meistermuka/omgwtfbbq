<template>
    <v-content>
        <v-layout justify-center>
            <v-flex xs12 sm6 md4>
                <v-toolbar dark color="teal accent-4">
                    <v-toolbar-title>Produce Items</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card>
                   <v-container fluid grid-list-md>
                       <v-layout row wrap>
                           <v-flex
                            v-for="i in 10"
                            :key="i">
                            <v-card>
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <v-img src="./fruit.svg"></v-img>
                                            <v-card-text>text: {{ i }}</v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                           </v-flex>
                       </v-layout>
                   </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-content>
    <!--
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        -->
</template>

<script>
export default {

}
</script>

<style>

</style>
