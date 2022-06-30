<template>
<section class="flex wrap w100 gap-spacing-2-xs">
    <div v-for="item in data" :key="item.value" class="flex middle flex-1 box h24 v24">
        <div class="icon flex middle center" :class="{'up' : item.value>0}">
            <img v-if="item.value>0" src="~/assets/img/icons/up.svg"></img>
            <img v-else src="~/assets/img/icons/down.svg"></img>
        </div>
        <div class="text">
            <h4>{{item.title}}</h4>
            <span :class="[{'up': item.value>0}, 'number']">{{item.value}}%</span>
        </div>
    </div>
</section>
</template>

<script>
export default {
props: {
    data: Array
}

}
</script>

<style lang="scss" scoped>
    .icon {
        position: relative;
        height: 44px; width: 44px;
        border-radius: 4px; overflow: hidden;
        margin-right: var(--spacing-xs);

        &:before {
            content: '';
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            background: var(--color-red);
            opacity: .08;
        }

        &.up:before {
            background: var(--color-green);
        }
    }

    .text {

        h4 {
            font-weight: var(--text-weight-regular);
            color: var(--color-text);
            margin-bottom: var(--spacing-4-xs);
        }

        .number {
            font-weight: var(--text-weight-medium);
            color: var(--color-red);
            &.up {
                color: var(--color-green);
                &:before {content: '+';}
            }
        }
    }

    @media screen and (max-width: 1180px) {
        .box {
            padding: var(--spacing-xs);
            min-width: 150px;
            .icon {height: 32px; width: 32px;}
        }
    }
</style>