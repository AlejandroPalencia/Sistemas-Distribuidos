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
import {mapActions, mapState} from 'vuex'
export default {
  components: { Formulario ,Tabla },
  data: () => ({
  }),
  computed:{
        ...mapState('modelo', ['items', 'categories'])
    },
  methods: {
      ...mapActions('modelo', ['add', 'remove', 'initialize'])
    },
  async fetch(){
        await this.initialize()
    }
}
</script>

<style scoped></style>
