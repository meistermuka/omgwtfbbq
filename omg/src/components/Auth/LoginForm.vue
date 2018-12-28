<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="teal accent-4">
                            <v-toolbar-title>Login</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field 
                                    prepend-icon="person"
                                    name="email"
                                    label="Email"
                                    type="text"
                                    placeholder="Email"
                                    required
                                    v-model="email"></v-text-field>
                                <v-text-field 
                                    prepend-icon="lock" 
                                    id="password" 
                                    name="password" 
                                    label="Password" 
                                    type="password" 
                                    placeholder="Password"
                                    v-model="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="teal accent-4" @click="login">Login</v-btn>
                        </v-card-actions>
                        <v-card-text>
                            No account yet? Sign up <router-link to="/signup">here</router-link>.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'LoginForm',
    data: () => ({
        email: '',
        password: '',
        response: ''
    }),
    methods: {
        login () {
            const { email, password } = this
            this.$store.dispatch("login", { email, password })
                .then(() => this.$router.push("/"))
                .catch(err => console.log(err))
        }
    }
}
</script>