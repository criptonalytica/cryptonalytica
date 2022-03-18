<template>
    <div id="searchInput">
        <input type="text" v-model="search" placeholder="Digite aqui...">
        <div id="content">
            <sorted-table id="table" ascIcon="<span>▲</span>"  descIcon="<span>▼</span>" :values="values"> 
                    <thead>
                        <tr>
                            <th scope="col">
                                <sort-link name="name">Name</sort-link>
                            </th>
                            <th scope="col">
                                <sort-link name="last">Last</sort-link>
                            </th>
                            <th>
                                <sort-link name="start">Start</sort-link>
                            </th>
                            <th scope="col">
                                <sort-link name="percent">Percent</sort-link>
                            </th>

                        </tr>
                    </thead>
                    <template #body="sort">
                        <tbody>
                            <!-- pra pesquisa funcionar precisa substituis o value pela função  filteredClients -->
                            <tr v-for="client in sort.values" :key="client.name">
                                <td scope="row">{{ client.name | to-uppercase }}</td>
                                <td scope="row">{{ client.last | to-uppercase }}</td>
                                <td scope="row">{{ client.start | to-uppercase }}</td>
                                <td scope="row">{{ client.percent | to-uppercase }}</td>
                            </tr>
                        </tbody>
                    </template>
                    </sorted-table> 
        </div>
    </div>
</template>

<script>
import SortedTablePlugin from "vue-sorted-table";
import { SortedTable, SortLink } from "vue-sorted-table";


export default {
    components: {
        SortedTable,
        SortLink
    },
    data () {
        return {
            search:'',
            values:[
                {
                    name: "Beta Finance",
                    last: "5.3902",
                    start: "20/01",
                    percent: "11.32%",
                },
                {
                    name: "Anchor Protocol",
                    last: "0.902",
                    start: "07/01",
                    percent: "-2.32%",
                },
                {
                    name: "Ana Maria",
                    last: "23.02",
                    start: "27/02",
                    percent: "5.842%",
                }
            ],
        }
    },
    props: {
        client: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        filteredClients: function(){
            return this.values.filter((client) => {
                return client.name.match(this.search)
            });
        }
    }
}
</script>

<style scoped>
    #searchInput {
        text-align: center;
        /* justify-content: left; */
    }   

    input {
        margin-bottom: 10px;
        width: 600px;
        padding: 10px;

    }
    #content {
        display: flex;
        justify-content: center;
    }
    table, th, td{
        border: 1px solid #000;
    }
    #table {
        width: 600px;
        text-align: center;
        table-layout: fixed;
        border-collapse: collapse;
    }

    th{
        height: 35px;
    }

    a{
        text-decoration: none;
        color: black;
    }

     td {
        height: 40px;
        vertical-align: middle;
        text-align: center;
    }

</style>