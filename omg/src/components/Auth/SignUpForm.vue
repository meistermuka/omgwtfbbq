<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="teal accent-4">
                            <v-toolbar-title>Sign Up</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    prepend-icon="person"
                                    name="username"
                                    label="User name"
                                    type="text"
                                    placeholder="Username"
                                    prefix="@"
                                    v-model="username"
                                    required></v-text-field>
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
                                    :append-icon="show ? 'visibility' : 'visibility_off'"
                                    :type="show ? 'text' : 'password'" 
                                    @click:append="show = !show"
                                    placeholder="Password"
                                    v-model="password"></v-text-field>
                                <v-text-field 
                                    prepend-icon="lock" 
                                    id="confirmpassword" 
                                    name="confirmpassword" 
                                    label="Confirm Password" 
                                    :append-icon="show ? 'visibility' : 'visibility_off'"
                                    :type="show ? 'text' : 'password'" 
                                    @click:append="show = !show"
                                    placeholder="Confirm Password"
                                    v-model="confirmpassword"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="teal accent-4" @click="singup">signup</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            username: '',
            email: '',
            password: '',
            confirmpassword: '',


        }
    },
    methods: {
        singup () {
            const { username, email, password } = this;
            let data = {
                username,
                email,
                password
            };
            this.$store.dispatch("signup", data)
                .then(() => this.$router.push("/"))
                .catch(err => console.log(err));

        }
    }

}
</script>

<style>

</style>
