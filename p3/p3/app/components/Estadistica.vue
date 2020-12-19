<template>
<componente @input= 'add'>
<v-card
    class="mt-4 mx-auto"
    max-width="600"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="blue"
      elevation="12"
      max-width="calc(100%)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight my-4">
        Estadisticas de "Categoría" por cada mes
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-calendar
      </v-icon>
      <label> Meses del año </label>
    </v-card-text>
  </v-card>
</template>


<script>
  export default {
    methods: {
      metodo(v){}
    },

    data: () => ({
      labels: [
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
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
        240,
        270,
        320,
        100
      ],
    }),
  }
</script>

<style>
  .v-sheet--offset {
    top: 0px;
    position: relative;
  }
</style>  