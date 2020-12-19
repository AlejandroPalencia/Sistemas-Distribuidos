<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario @input="add"></formulario>
      </v-card-text>
    </v-card>
    <estadistica :items="items" class="display-5 font-weight"></estadistica>  <!--m es margin y t es top-->
  </div>
</template>

<script>

import{mapActions,mapState} from 'vuex'
import Formulario from '@/components/Formulario'
import Tabla from '@/components/Tabla'
import Estadistica from '@/components/Estadistica'
export default{
    name: 'pruebaFormulario',
    components: {Formulario, Estadistica},
    data:()=>({
    }),
    computed:{
        ...mapState('modelo', ['items'])
    },
    methods: {
      ...mapActions('modelo', ['add', 'remove', 'initialize'])
    },
    async fetch(){
        await this.initialize()
    }
}
    
</script>