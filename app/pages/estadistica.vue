<template>
  <div>
    <v-select
        v-model="categoria"
        :items="categories"
        label="Categoria"
        required
      ></v-select>
    <v-card elevation="2">
      <v-card-text>
        <estadistica :items="items" :categoria="categoria" class="mt-4 mx-auto"></estadistica>  <!--m es margin y t es top-->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import{mapActions,mapState} from 'vuex'
import Estadistica from '@/components/Estadistica'
export default{
    components: {Estadistica},
    data:()=>({
      categoria: ""
    }),
    computed:{
        ...mapState('modelo', ['items', 'categories'])
    },
    methods: {
      ...mapActions('modelo', ['initialize'])
    },
    async fetch(){
        await this.initialize()
    }
}
    
</script>