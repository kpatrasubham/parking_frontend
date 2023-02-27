
<template>
    <div class="container">
        <h3>To-Do</h3>
        {{ heading }}
        <div class="d-flex align-items-center">

            <input @keyup.enter="addItem" type="text" v-model="item">
            <button class="btn btn-sm btn-outline-primary m-2" @click="addItem">Add</button>
        </div>


        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card d-flex my-2 p-1 flex-row align-items-center justify-content-between"
                        v-for="(itm, ke) in list" :key="itm.id">
                        <span>
                            {{ ke + 1 }}. {{ itm.title }}
                        </span>
                        <div>
                            <span style="font-size:x-small;">

                                {{ formatting(itm.at) }}
                            </span>
                            <i @click="removeData(i)" class="fas fa-trash ml-auto text-danger"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import { format } from 'timeago.js';
export default {
    name: 'TodoList',
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
            if (this.item) this.list.unshift({ title: this.item, at: new Date(),id: Date.now() });
            this.item = "";
            this.storeData();
        },
        removeData: function (i) {
            this.list.splice(i, 1);
        },
        formatting:function(d){
            return format(d)
        },
        storeData:function (){
            localStorage.setItem('myTo',JSON.stringify(this.list))
        }
    }
};
</script>
<style lang='' scoped>
</style>