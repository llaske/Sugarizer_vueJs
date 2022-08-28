// Rebase require directory
requirejs.config({
	baseUrl: "lib",
	paths: {
		activity: "../js"
	}
});

// Vue main app
const app = Vue.createApp({
    components: {
        "icon": Icon,
        "btn": Btn
    },
    data() {
        return {
            message: "Sugarizer in Vue",
            icon: null,
        }
    },
    methods: {
        changeText() {
            this.$refs.btn.idData="1";
            this.$refs.btn.textData="two";
        },
    },
});

app.mount('#app');