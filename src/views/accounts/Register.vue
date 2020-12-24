<template>
    <v-container fluid>
        <v-container>
            <!-- <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h5 class="text-h4 grey--text">Register Here</h5>
                </v-col>
            </v-row> -->
            <v-row
                justify="center"
                v-if="!getAuthStatus"
            >
                <v-col
                    cols="12"
                    md="7"
                    lg="6"
                >
                    <v-card
                        flat
                        max-width="600px"
                    >
                        <v-row
                            wrap
                            justify="center"
                        >
                            <v-col
                                cols="12"
                                md="8"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    :rules="[rules.required, rules.counter, rules.check ]"
                                    v-model="username"
                                     autocomplete="off"
                                    aria-autocomplete="off"
                                    label="Your mobile number*"
                                    :counter="10"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                     autocomplete="off"
                                    aria-autocomplete="off"
                                    v-model="fullName"
                                    label="Your Full Name"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                     autocomplete="off"
                                    aria-autocomplete="off"
                                    v-model="email"
                                    label="Your Email"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    autocomplete="off"
                                    aria-autocomplete="off"
                                    type="password"
                                    v-model="password"
                                    label="Your Password"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-row justify="center">
                                    <v-btn
                                        large
                                        @click="sendOTP"
                                        color="primary"
                                        rounded
                                    >Register</v-btn>
                                </v-row>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="text-center"
                            >
                                <p class="caption">Not registered yet? <router-link :to="{name: 'Login'}">Login</router-link>
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            
            <v-row
                v-else
                justify="center"
            >
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <p class="subtitle-2">You are already logged in</p>
                </v-col>
                <v-btn
                    rounded
                    color="primary"
                    router
                    :to="{name: 'Profile'}"
                >Go to Profile</v-btn>
            </v-row>
            <v-bottom-sheet
      v-model="sendOtpSheetOpen"
      persistent
    >
      <v-sheet
        
        height="210px"
      >
        <v-btn
          style="color : black"
          text
          class="mt-1"
          color="error"
          @click="sendOtpSheetOpen = !sendOtpSheetOpen"
        >
      <v-icon size="40px">{{"mdi-close"}}</v-icon>
        </v-btn>
        <div class="py-3">
           <v-col
            class="text-center"
          cols="12"
      
        >
          <v-text-field
            label="OTP"
            placeholder="Enter OTP"
            outlined
          ></v-text-field>
        </v-col>
     <v-col
          cols="12"
          
          class="text-center"
        >
        <v-btn 
        @click="verifyOTP"
        depressed color="primary" class="mt-n12 text-center" style="color : white">
      Verify
    </v-btn>
     </v-col>
         
        </div>
      </v-sheet>
    </v-bottom-sheet>
            <v-snackbar
                v-model="snackbar"
                bottom
                right
                light
            >
                <p class="primary--text">{{ snack.text }}</p>

                <template v-slot:action="{ attrs }">
                    <v-btn
                        :color="snack.color"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            fullName: null,
            email: null,
            password: null,
            snackbar: false,
            sendOtpSheetOpen : false,
            rules: {
                required: (value) => !!value || "Required.",
                counter: (value) =>
                    value.length <= 10 || "Exactly 10 characters",
                username: (value) => {
                    const pattern = /^\d{10}$/;
                    return pattern.test(value) || "Invalid phone number.";
                },
                check: (value) => !isNaN(value) || "Should be only a number",
            },
            snack: {
                text: "All Fields should be entered.",
                color: "secondary",
            },
        };
    },
    methods: {
        sendOTP() {
             this.sendOtpSheetOpen = true;
             this.$store.dispatch("sendOtp");
             
        },
        verifyOTP() {
            this.$store.dispatch("verifyOtp").then(()=> {
                // some check if verfied
                this.snackbar = true;
                this.snack.text = "OTP Verified";
                this.snack.color = "success";
                if(this.username && this.email && this.fullName && this.password && this.username.length === 10) {
                    this.sendMessage();
                }
                else {
                    // error : not verified
                }
             
            })
        },
        sendMessage() {
            if (this.username && this.email && this.fullName && this.password) {
                if (this.username.length === 10) {
                    this.$store.dispatch("startLoading");
                    let data = {
                        user_id: this.username,
                        password: this.password,
                        full_name: this.fullName,
                        email: this.email,
                    };

                    this.$store
                        .dispatch("registerUser", data)
                        .then(() => {
                            this.snackbar = true;
                            this.snack.text = "Successfully Registered";
                            this.snack.color = "success";
                            let user = {
                                username: this.username,
                                password: this.password,
                            };
                            this.$store
                                .dispatch("loginUser", user)
                                .then(() => {
                                    this.snackbar = true;
                                    this.snack.text = "Successfully Logged In";
                                    this.snack.color = "success";

                                    this.$store.dispatch("stopLoading");
                                    this.$router.push({ name: "Home" });
                                })
                                .catch((err) => {
                                    this.snackbar = true;
                                    this.snack.text = err;
                                    console.log(err);
                                    this.$store.dispatch("stopLoading");
                                });
                        })
                        .catch((err) => {
                            this.snackbar = true;
                            this.snack.text = err;
                            console.log(err);
                            this.$store.dispatch("stopLoading");
                        });
                }
            } else {
                this.snackbar = true;
            }
        },
    },
    computed: {
        getAuthStatus() {
            return localStorage.getItem("status") || false;
        },
    },
};
</script>

<style scoped>
</style>