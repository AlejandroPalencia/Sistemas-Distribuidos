<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario @input="add"></formulario>
      </v-card-text>
    </v-card>
    <tabla :items="items" class="mt-5"></tabla>  <!--m es margin y t es top-->
  </div>
</template>

<script>
import Formulario from '~/components/Formulario'
import Tabla from '@/components/Tabla'
export default {
  name: 'pruebaFormulario',
  components: { Formulario ,Tabla },
  data: () => ({
    items: []
  }),
  methods: { 
    add(v){  //cuando llamen al método add, añadir items
      this.items.push(v)
    },
    delete(v){
      this.items.delete(v)
    }
  }
}
</script>

<style scoped></style>
