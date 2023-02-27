 
<template>
    <div>

        <div class="container mt-3">
            <div class="row">
                <div class="col text-end">
                    <p>{{ today | formatDate }}</p>
                </div>
            </div>
            <div class="row py-3">
                <div class="col">
                    <h3>Dashboard</h3>
                </div>
                <div class="col">
                    <div class="btn-group btn-group-sm" role="group" aria-label="...">
                        <button type="button" @click="setData(0)" class="px-3 btn btn-danger"> A</button>
                        <button type="button" @click="setData(1)" class="px-3 btn btn-warning">B</button>
                        <button type="button" @click="setData(2)" class="px-3 btn btn-success">C</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                                aria-selected="false" @click="tomorrow()">Tomorrow</button>
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                aria-selected="true" @click="getParkingList()">Today</button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                                aria-selected="false" @click="yesterday()">Yesterday</button>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="tab-content" id="v-pills-tabContent">

                        <div class="row">
                            <div class="col">
                                <div class="card dashboard-content">

                                    <div class="parkings">
                                        <div class="row border-2">
                                            <div class="d-flex flex-column flex-wrap parking">
                                                <div v-for="li in park.data" :key="li._id" class="park"
                                                    :class="{ 'booked': li.booked, 'vacant': !li.booked }">
                                                    <p class="park_id"> {{ li.parking_space_title }}</p>
                                                    <!-- <p class="park_id">A{{ (li.id + 1).toString().padStart(2, '0') }}</p> -->
                                                    <!-- <i class="fal fa-plus add"></i> -->
                                                    <i v-if="!li.booked" type="button" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal" class="add"
                                                        @click="setNewParkData(park._id, li._id)">+</i>
                                                    <p class="vechicle-no flex-column m-0 px-2 text-center"
                                                        v-if="li.booked">
                                                        <span>
                                                            {{ li.booked?.name }}
                                                        </span>
                                                        <span>

                                                            {{
                                                                li.booked?.vechile_no }}
                                                        </span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Book parking</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input v-model="regParking.name" type="text" class="form-control form-control-sm"
                                    id="exampleFormControlInput1" placeholder="Name">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Vechile No. </label>
                                <input v-model="regParking.vechile_no" type="text" class="form-control form-control-sm"
                                    id="exampleFormControlInput1" placeholder="Vechile No. ">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Vechile No. </label>
                                <input v-model="regParking.booking_date_time" type="date"
                                    class="form-control form-control-sm" id="exampleFormControlInput1"
                                    placeholder="Vechile No. ">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-secondary" id="closeBtn"
                                data-bs-dismiss="modal">Close</button>
                            <button id="bookBtn" type="button" class="btn btn-sm btn-primary"
                                @click="bookParking()">Book</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="loader" v-if="loader">
            <span class="loader-text">
                Mindfire <br> Parking
            </span>
            <div class="loadingio-spinner-spinner-5du7ujqt08l">
                <div class="ldio-d46xli7mnvg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
</template>
<script>
import moment from 'moment';


export default {
    name: 'AppDashbaord',
    components: {

    },
    mixins: [],
    props: {
        heading: String
    },
    data() {
        return {
            item: 'test',
            list: Array.from(Array(30).keys()),
            parkingData: [],
            park: [],
            regParking: {
                booking_date_time: '27/02/2023'
            },
            today: new Date(),
            loader: false,
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {

        this.list = this.list.map((e, i) => {
            e = {};
            e['id'] = i
            e['booked'] = false;
            if (this.isPrime(i)) {
                e['booked'] = true;
            }
            return e;
        });
        this.getParkingList();


    },
    methods: {
        getParkingList: function (date = undefined) {
            this.loader = true
            const baseURI = 'http://localhost:3001/api/v1/space' + (date ? `?date=${date}` : '')
            this.$http.get(baseURI).
                then(res => res.data)
                .then((result) => {
                    this.parkingData = result.data;
                    this.park = this.parkingData[0];
                    this.loader = false
                })
        },
        tomorrow: function () {
            this.getParkingList(moment().add(1, 'days').format("MM-DD-YYYY"));
        },
        yesterday: function () {
            this.getParkingList(moment().add(-1, 'days').format("MM-DD-YYYY"));
        },
        setNewParkData: function (z, s) {
            this.regParking = {
                parking_zone_id: z,
                parking_space_id: s
            }
        },
        addItem: function () {
            if (this.item) this.list.unshift({ title: this.item, at: new Date(), id: Date.now() });
            this.item = "";

        },
        isPrime: function (num) {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) return false;
            }
            return num > 1;
        },
        setData: function (i) {
            this.park = this.parkingData[i]
        },
        bookParking: function () {
            console.log(this.regParking);
            this.$http.post('http://localhost:3001/api/v1/parking/add', this.regParking)
                .then((result) => result.data).then(res => {

                    console.log(res);
                    if (res.success) {

                        var myModalEl = document.getElementById('closeBtn');
                        this.getParkingList();

                        myModalEl.click();

                    }
                })
        }

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

.vechicle-no {
    display: flex;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
}

.brand-icon {
    height: 30px;
}

.dashboard-content {
    height: 700x;

}

.parkings {
    padding: 30px;
    background-color: #6b6b6b;
}

.parkings>.row {
    border: 3px solid #fff;
    padding: 50px;
}

.park {
    height: 50px;
    border: 3px solid rgb(255, 255, 255);
    width: 100px;
    border-right: 0px;
    border-top: 0px;
    transform: rotate(20deg);
    margin-top: 2px;
    position: relative;
}

/* .parking:first-child {
    border-top: 3px solid #fff;

} */

.booked {
    background-color: #ffffff45;
}

.vacant {
    /* background-color: #00ff0036; */
    background-color: #00ff0017;
}

.park_id {
    color: #fff;
    font-weight: 900;
    transform: rotate(270deg);
    top: 12px;
    position: absolute;
    left: -29px;
    font-size: 14px;
}

.parking {
    height: 263px;
}

.add {
    position: absolute;
    left: 42px;
    color: #fff;
    font-weight: bolder;
    transform: rotate(335deg);
    top: 14px;
    background: #71ff714a;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    z-index: 100;
}


.loader {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00000054;
}

@keyframes ldio-d46xli7mnvg {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.loader-text {
    position: absolute;
    color: #ffffff;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
}

.ldio-d46xli7mnvg div {
    left: 95.88px;
    top: 30.6px;
    position: absolute;
    animation: ldio-d46xli7mnvg linear 1s infinite;
    background: #df1317;
    width: 12.24px;
    height: 24.48px;
    border-radius: 6.12px / 7.344px;
    transform-origin: 6.12px 71.4px;
}

.ldio-d46xli7mnvg div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9285714285714286s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(2) {
    transform: rotate(25.714285714285715deg);
    animation-delay: -0.8571428571428571s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(3) {
    transform: rotate(51.42857142857143deg);
    animation-delay: -0.7857142857142857s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(4) {
    transform: rotate(77.14285714285714deg);
    animation-delay: -0.7142857142857143s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(5) {
    transform: rotate(102.85714285714286deg);
    animation-delay: -0.6428571428571429s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(6) {
    transform: rotate(128.57142857142858deg);
    animation-delay: -0.5714285714285714s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(7) {
    transform: rotate(154.28571428571428deg);
    animation-delay: -0.5s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(8) {
    transform: rotate(180deg);
    animation-delay: -0.42857142857142855s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(9) {
    transform: rotate(205.71428571428572deg);
    animation-delay: -0.35714285714285715s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(10) {
    transform: rotate(231.42857142857142deg);
    animation-delay: -0.2857142857142857s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(11) {
    transform: rotate(257.14285714285717deg);
    animation-delay: -0.21428571428571427s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(12) {
    transform: rotate(282.85714285714283deg);
    animation-delay: -0.14285714285714285s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(13) {
    transform: rotate(308.57142857142856deg);
    animation-delay: -0.07142857142857142s;
    background: #df1317;
}

.ldio-d46xli7mnvg div:nth-child(14) {
    transform: rotate(334.2857142857143deg);
    animation-delay: 0s;
    background: #df1317;
}

.loadingio-spinner-spinner-5du7ujqt08l {
    width: 204px;
    height: 204px;
    display: inline-block;
    overflow: hidden;
    background: #f1f2f300;
}

.ldio-d46xli7mnvg {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    position: relative;
    /* see note above */
}

.ldio-d46xli7mnvg div {
    box-sizing: content-box;
}</style>