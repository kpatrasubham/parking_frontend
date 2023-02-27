
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand mx-2" href="#">
                <img class="brand-icon" src="../assets/brand-icon.jpeg" alt="">
                Mindfire Parking</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                    <a class="nav-link" href="#">History</a>
                    <a class="nav-link" href="#">About</a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'AppHeader',
    components: {

    },
    mixins: [],
    props: {
        heading: String
    },
    data() {
        return {
            item: 'test',
            list: [],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        this.list = JSON.parse(localStorage.getItem('myTo'));

    },
    methods: {
        addItem: function () {
            if (this.item) this.list.unshift({ title: this.item, at: new Date(), id: Date.now() });
            this.item = "";

        },


    }
};
</script>
<style lang='css' scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.navbar-brand {
    font-family: 'Fredoka One', cursive;
    color: #cf8d00;
    letter-spacing: 2px;
    word-spacing: 5px;
}

.brand-icon {
    height: 30px;
}
</style>