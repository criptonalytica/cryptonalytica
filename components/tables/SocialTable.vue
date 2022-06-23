<template>
    <div id="body" class="flex">
        <div id="tt" class="table"> 
            <div class="flex">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="twitter icon">
                <span> Twitter followers</span>
            </div>
            <table>
                <thead v-for="title in head" :key="title">
                    <tr>
                        <th>{{title.ranking}}</th>
                        <th>{{title.project}}</th>
                        <th>{{title.followers}}</th>
                        <th>{{title.growth}}</th>
                    </tr>
                </thead>
                <tbody v-for="item in data" :key="item">
                    <tr>
                        <td> {{ item.ranking }} </td>
                        <td> <img :src="item.icon"> </td>
                        <td> {{ item.name }} </td>
                        <td> {{ item.ticker }} </td>
                        <td> {{ item.follower }} </td>
                        <td v-if="item.growth<0" style="color: var(--color-red)"> {{ item.growth }} </td>
                        <td v-else-if="item.growth>=0" style="color: var(--color-green)"> {{ item.growth }} </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="gitHub" class="table"> 
            <div class="flex">
                <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="GitHub icon">
                <span> GitHub commits</span>
            </div>
            <table>
                <thead v-for="title in head" :key="title"> 
                    <tr>
                        <th>{{title.ranking}}</th>
                        <th>{{title.project}}</th>
                        <th>{{title.followers}}</th>
                        <th>{{title.growth}}</th>
                    </tr>
                </thead>
                <tbody v-for="item in data" :key="item">
                    <tr>
                        <td> {{ item.ranking }} </td>
                        <td> <img :src="item.icon"> </td>
                        <td> {{ item.name }} </td>
                        <td> {{ item.ticker }} </td>
                        <td> {{ item.follower }} </td>
                        <td v-if="item.growth<0" style="color: var(--color-red)"> {{ item.growth }} </td>
                        <td v-else-if="item.growth>=0" style="color: var(--color-green)"> {{ item.growth }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array
        },
        head: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
    #body {
        justify-content: space-between;
    }
    .table {
        width: 582px;
        height: 446px;
        background-color: var(--color-white);

    }
    img {
        border-radius: var(--border-radius-xs);
        max-width:28px;
        max-height:28px;
    }

</style>