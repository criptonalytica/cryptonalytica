<template>
<section class="flex wrap stretch gap-spacing-xs category-grid" :class="'col'+cols">
    <div class="category-item" v-for="(item, index) in indexCoinList" :key="item.name" v-if="checkMax(index)">
        <div class="category-name" >
            <span :style="{color:$categoryColor[$utils.stringfy(item.category)]}">
                {{item.category}}
            </span>
        </div>
        <div>
            <div class="flex top-spacing-xs middle gap-spacing-3-xs">
                <img class="icon" :src="item.icon" alt="Icon of the coin">
                <p> {{ item.name }} </p>
                <span class="littleSpan" style="color:var(--color-grey-4);"> {{item.ticker}} </span>
            </div>
            <div class="border top-spacing-s"></div>
            <div class="top-spacing-s ">
                <span class="littleSpan" style="color:var(--color-grey-5);">Price</span>
                <div class="flex middle gap-spacing-3-xs">
                    <p style="font-size:var(--text-h5-font-size);"> ${{item.price}}</p>
                    <span class="littleSpan" v-if="item.sevenDays<0" style="color: var(--color-red);" >{{item.sevenDays}}%</span>
                    <span class="littleSpan" v-if="item.sevenDays>0" style="color: var(--color-green);"> +{{item.sevenDays}}%</span>
                </div>
            </div>
        </div>
      </div>
</section>
</template>

<script>
export default {
    props: {
        indexCoinList: Array,
        cols: {
            type: Number,
            default: '4'
        },
        max: {
            type: Number,
            default: false,
        }
    },
    methods: {
        checkMax(index) {
            if(!this.max) return true
            if(index<this.max) return true
        }
    }

}
</script>

<style lang="scss" scoped>
section {
    margin-bottom: var(--spacing-l);
}

.border {
    border-top: 1px solid var(--color-grey-1);
}

.category-grid.col4 {
    .category-item {width: calc(25% - 12px);}
}

.category-grid.col5 {
    .category-item {width: calc(20% - 12.8px);}
}

.category-item {
    border: 1px solid var(--color-grey-1);
    border-radius: var(--spacing-4-xs);
    background-color: var(--color-white);       
    padding: 16px 24px 20px; 
    min-width: 180px;
    
    @media screen and (max-width: 1080px) {
        flex: 1;
        flex-grow: 1;
    }

    .category-name {
        font-weight: var(--text-weight-medium);
        font-size: var(--text-s12-font-size);
    }

    p {
        color: var(--color-text);
        font-weight: var(--text-weight-medium);
        line-height: var(--text-h-line-height);
    }
    .littleSpan{
        font-weight: var(--text-weight-regular);
        font-size: 12px;
    }

}

.icon {
    width:28px;
    height:28px;
    border-radius:50%;
}

</style>