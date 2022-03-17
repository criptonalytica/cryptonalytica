<template>
<div>
    <table>  <!--    <sorted-table>    ------    ascIcon="<span> ▲</span>"  descIcon="<span> ▼</span>"  ||   tem isso também :tableData="tableData" -->
              <thead>
                  <tr >
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
              <tbody>
                  <tr v-for="client in tableData" :key="client.name">
                      <th scope="row">{{ client.name }}</th>
                      <th scope="row">{{ client.last }}</th>
                      <th scope="row">{{ client.start }}</th>
                      <th scope="row">{{ client.percent }}</th>
                  </tr>
              </tbody>
          </table>  <!-- </sorted-table>  mas não funcionou-->
</div>
</template>

<script>
// import SortedTablePlugin from "vue-sorted-table";
// import { SortedTable, SortLink } from "vue-sorted-table";


export default {
    // components: {
    //     SortedTable,
    //     SortLink
    // },
    data () {
        return {
            tableData:[
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
            ],
        }
    },
    props: {
        client: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
    }
    table, th{
        border: 1px solid #000;
    }
    table {
        width: 600px;
        text-align: center;
        table-layout: fixed;
        border-collapse: collapse;
    }
     th {
        height: 35px;
        vertical-align: middle;
        text-align: center;
    }

</style>