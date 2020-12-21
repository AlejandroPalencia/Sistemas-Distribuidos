<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Tabla',
  props: {         
    items: {
      type: Array,
      value: () => []    //valor inicial del array
    }
  },
  data: () => ({
    headers: [
      { text: 'Euros', value: 'euros' },
      { text: 'Categoria', value: 'categoria' },
      { text: 'Fecha', value: 'fecha'}
    ]
  })
}
</script>

<style scoped></style>
