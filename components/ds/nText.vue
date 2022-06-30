<template>
    <div :class="'typography ' + type + ' ' + weight">
        <h1 v-if="type=='h1'"><slot></slot></h1>
        <h2 v-if="type=='h2'"><slot></slot></h2>
        <h3 v-if="type=='h3'"><slot></slot></h3>
        <h4 v-if="type=='h4'"><slot></slot></h4>
        <h5 v-if="type=='h5'"><slot></slot></h5>
        <h6 v-if="type=='h6'"><slot></slot></h6>

        <p v-if="type=='p16'" class="p16"><slot></slot></p>
        <p v-if="type=='p14'" class="p14"><slot></slot></p>

        <span v-if="type=='s14'" class="s14"><slot></slot></span>
        <span v-if="type=='s12'" class="s12"><slot></slot></span>
        <span v-if="type=='s10'" class="s10"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: 'n-text',
    props: {
        type: { 
            default: 'p14',
            type: String,
        },
        weight: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .typography  {
        font-weight: var(--text-weight-regular);
    }

    // Header
    h1, h2, h3, h4, h5, h6 {
        line-height: var(--text-h-line-height);
        font-weight: var(--text-weight-medium);
        color: inherit;
        .regular & {font-weight: var(--text-weight-regular);}
        .medium & {font-weight: var(--text-weight-medium);}
        .bold & {font-weight: var(--text-weight-bold);}
    }

    .regular {font-weight: var(--text-weight-regular);}
    .medium {font-weight: var(--text-weight-medium);}
    .bold {font-weight: var(--text-weight-bold);}
    
    h1 {font-size: var(--text-h1-font-size);}
    h2 {font-size: var(--text-h2-font-size);}
    h3 {font-size: var(--text-h3-font-size);}
    h4 {font-size: var(--text-h4-font-size);}
    h5 {font-size: var(--text-h5-font-size);}
    h6 {font-size: var(--text-h6-font-size);}


    // Paragraph
    p {
        line-height: var(--text-p-line-height);
        // margin-bottom: var(--spacing-s);
    }

    .p16 {font-size: var(--text-p16-font-size);}
    .p14 {font-size: var(--text-p14-font-size);}


    // Small
    small {
        line-height: var(--text-s-line-height);
    }

    .s14 {font-size: var(--text-s14-font-size);}
    .s12 {font-size: var(--text-s12-font-size);}
    .s10 {font-size: var(--text-s10-font-size);}
</style>
