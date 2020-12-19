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
      { text: 'Col 1', value: 'f1' },
      { text: 'Col 2', value: 'f2' },
    ]
  })
}
</script>

<style scoped></style>
