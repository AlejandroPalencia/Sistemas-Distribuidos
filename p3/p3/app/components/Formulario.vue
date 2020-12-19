<template>
  <v-form v-model="valid"> <!--si algun campo no cumple las rules, no saldrá valid-->
    <v-row>
      <v-text-field
        v-model.number="val"
        label="value"
        :rules="[required]" 
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        v-model="select"
        :items="items"
        :rules="[required]"
        label="Item"
        required
      ></v-select>
    </v-row>
    <v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-menu
        v-model="abierto"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="abierto = false"></v-date-picker>
      </v-menu>
    </v-row> <!--v-row es para compactar todo en la misma fila-->
    <v-row>
      <v-btn :disabled="!valid" color="success" @click="add"> Submit </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Formulario',
  data: () => ({
    abierto: false,
    valid: true,
    val: 0.0,
    select: '',
    date: '',
    checkbox: false,
    items: ['Comida', 'Luz', 'Agua', 'Gas', 'Alquiler', 'Ocio', 'Ropa'],
  }),
  methods: {
    required(v) {
      return !!v || 'required value' //poner !! es como convertir la cadena de texto en BOOLEANO, de forma que devuelva true o false
    },
    add() {
      this.$emit('input', { f1: this.val, f2: this.select })
    },
  },
}
</script>

<style scoped></style>
