<script>
import { usePiniaStore } from "@/stores/PiniaStore";

export default {
  setup() {
    const piniaStore = usePiniaStore();
    return {
      piniaStore,
    };
  },
  methods:{
    manejarHover(tarea, boolean){
      this.piniaStore.ocultar(tarea, boolean) 
    }
  }
};
</script>

<template>
  <main>
    <div class="barra">
      <h1>ToDoear</h1>
    </div>
    <div class="todo">
      <b-form class="B-form" @submit.prevent="this.piniaStore.agregar">
        <b-form-row>
          <b-col>
            <b-form-input v-model="this.piniaStore.nuevo" placeholder="¿Qué quieres hacer hoy?..." id="cosito"/>
          </b-col>
          <b-col>
            <b-button class="mx-a" variant="success" type="submit">+</b-button>
          </b-col>
        </b-form-row>
      </b-form>
      <ul>
        <li v-for="tarea in this.piniaStore.tarea" :key="tarea.id" @mouseleave="manejarHover(tarea, false)" @mouseover="manejarHover(tarea, true)">
          {{ tarea.texto }}
            <b-button class="mx-1" variant="primary" @click="this.piniaStore.moverTarea(tarea)" v-if="tarea.oculto">✓</b-button>
            <b-button class="mx-1" variant="danger" v-b-modal.modal v-if="tarea.oculto">X</b-button>
        <b-modal id="modal" title="Confirmacion" @ok="this.piniaStore.quitar(tarea)"> 
          <p> ¿Seguro qué quiere elimiar esta tarea?</p>
        </b-modal>
        </li>
      </ul>
      <b-button v-b-toggle.completados class="mx-1" variant="info">Completadas</b-button>
      <b-collapse id="completados"> 
        <ul>
        <li v-for="tarea in this.piniaStore.tareaLista" :key="tarea.id" @mouseleave="manejarHover(tarea, false)" @mouseover="manejarHover(tarea, true)">
          {{ tarea.texto }}
          <b-button class="mx-1" variant="primary" @click="this.piniaStore.devolverTarea(tarea)" v-if="tarea.oculto">↑</b-button>
          <b-button class="mx-1" variant="danger" v-b-modal.modal v-if="tarea.oculto">X</b-button>
        <b-modal id="modal" title="Confirmacion" @ok="this.piniaStore.quitarLista(tarea)"> 
          <p> ¿Seguro qué quiere elimiar esta tarea?</p>
        </b-modal>
        </li>
      </ul>
      </b-collapse>
    </div>
  </main>
</template>

<style>
h1 {
  background-color: aquamarine;
}

#botones{
  display:flex;
  align-content: center;

}
.B-form{
  width: 35%;
}
.todo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>