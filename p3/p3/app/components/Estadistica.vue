<template>
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
        Estadisticas de Gastos
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
    data: () => ({
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
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