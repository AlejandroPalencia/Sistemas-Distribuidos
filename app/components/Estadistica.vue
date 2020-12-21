<template>
  <v-card class="mt-4 mx-auto" max-width="600">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="blue"
      elevation="12"
      max-width="calc(100%)"
    >
      <v-sparkline
        :labels="meses"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight my-4">
        Estadisticas de {{ categoria }} por cada mes
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small> mdi-calendar </v-icon>
      <label> Meses del año </label>
    </v-card-text>
  </v-card>
</template>


<script>
  export default {
    name:'Estadistica',
    props: {         
      items: {
        type: Array,
          value: () => []    //valor inicial del array
    },
    categoria: {
      type: String,
      value: ""
    }
  },
    data: () => ({
      meses: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ],
    }),
    computed: {
      value(){
        return this.meses.map(x=>this.totalmes(x))
      },
      filtrados(){
        return this.items.filter(x=>x.categoria==this.categoria)
      }
    },
    methods:{
      totalmes(mes){
        const datos=this.filtrados.filter(x=>x.fecha.substring(5,7)===mes)
        return datos.map(x=>x.euros).reduce((a,b)=>a+b, 0)
      }
    }
  }
</script>

<style>
.v-sheet--offset {
  top: 0px;
  position: relative;
}
</style>  