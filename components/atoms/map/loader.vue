<template>
    <div class="loader">
        <div :style="{ backgroundColor: factionColors['main'] }"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'map-loader',

    computed: {
        ...mapGetters({
            factionColors: 'user/factionColors'
        })
    }
}
</script>

<style lang="less" scoped>
    @color: #FFFFFF;

    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(50% - 1em / 2);
        left: calc(50% - 1em / 2);
        
        & > div {
            position: absolute;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            animation: ripple 0.7s linear infinite;
        }
    }

    @keyframes ripple {
        0% {
            box-shadow: 0 0 0 0 rgba(@color, 0.3),
                        0 0 0 1em rgba(@color, 0.3),
                        0 0 0 3em rgba(@color, 0.3),
                        0 0 0 5em rgba(@color, 0.3);
        }
        100% {
            box-shadow: 0 0 0 1em rgba(@color, 0.3),
                        0 0 0 3em rgba(@color, 0.3),
                        0 0 0 5em rgba(@color, 0.3),
                        0 0 0 8em rgba(@color, 0);
        }
    }
</style>
