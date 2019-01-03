<template>
    <v-content>
        <v-layout justify-center align-center>
            <v-flex xs12 sm6 md6>
                <v-toolbar dark color="teal accent-4">
                    <v-toolbar-title>Produce Items</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card>
                   <v-container fluid grid-list-md>
                       <v-layout wrap>
                           <v-flex
                            d-flex
                            xs12 sm6 md3
                            v-for="i in 10"
                            :key="i">
                            <ProduceItem :produceName=i />                            
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
import ProduceItem from "@/components/Produce/ProduceItem.vue";

export default {
    name: "Produce",
    components: {
        ProduceItem
    }    
}
</script>
