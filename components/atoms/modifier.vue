<template>
    <div :class="['modifier', { bonus: isBonus }]">
        <resource-item v-if="modifier.resource" :resource="{ name: modifier.resource }" />
        <span>
            <template v-if="isBonus">+</template><template v-else>-</template>
            {{ Math.abs(modifier.percent) }} %
        </span>
    </div>
</template>

<script>
import ResourceItem from '~/components/atoms/resource/item';

export default {
    name: 'modifier',

    props: ['modifier'],

    components: {
        ResourceItem
    },

    computed: {
        isBonus() {
            return this.modifier.percent > 0;
        }
    }
}
</script>

<style lang="less" scoped>
@import '~less/variables.less';

.modifier {
    display: flex;
    align-items: center;
    color: @checkRed;

    &.bonus {
        color: @checkGreen;
    }

    & > .resource-item {
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }
}
</style>