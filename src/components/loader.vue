 

<template>
    <div class="loader" v-if="true">
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
</template>
  
<script>
export default {
    name: 'AppLoader',
    props: {
        isLoader: Boolean
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loader{
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

.loader-text{
    position: absolute;
    color: #ffbd00;
    text-align: center;
    font-weight: 900;
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
}
</style>
  