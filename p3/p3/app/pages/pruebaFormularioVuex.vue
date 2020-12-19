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

import{mapActions,mapState} from 'vuex'
import Formulario from '@/components/Formulario'
import Tabla from '@/components/Tabla'
export default{
    name: 'pruebaFormulario',
    components: {Formulario, Tabla, Estadistica},
    data:()=>({
    }),
    computed:{
        ...mapState('modelo', ['items'])
    },
    methods: {
      add(v){  //cuando llamen al método add, añadir items
      this.items.push(v)
      },
      removeEventListener(v){  //cuando llamen al método add, añadir items
      this.items.removeEventListener(v)
      }
    },
    async fetch(){
        await this.initialize()
    }
}
    
</script>