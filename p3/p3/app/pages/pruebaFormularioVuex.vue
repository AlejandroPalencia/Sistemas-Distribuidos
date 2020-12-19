<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <estadistica :items="items" class="mt-4 mx-auto"></estadistica>  <!--m es margin y t es top-->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import{mapActions,mapState} from 'vuex'
import Formulario from '@/components/Formulario'
import Tabla from '@/components/Tabla'
import Estadistica from '@/components/Estadistica'
export default{
    name: 'pruebaFormulario',
    components: {Estadistica},
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