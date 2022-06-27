import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('usePinia', {
  state: () => {
    return {
      nuevo: '',
      id: 3,
      tarea: [
        { id: 1, texto: 'Comprar Pan', oculto: false },
        { id: 2, texto: 'Cocinar', oculto:false},
        { id: 3, texto: 'Limpiar', oculto:false }
      ],

      tareaLista: [ ],
    }
  },
  actions: {
    agregar() {
      this.tarea.push({ id: this.id++, texto: this.nuevo, oculto:false })
      this.nuevo = ''
    },
    quitar(tareas) {
        this.tarea = this.tarea.filter((t) => t !== tareas)
    },
    quitarLista(tarea){
      this.tareaLista = this.tareaLista.filter((t) => t !== tarea)
    },
    moverTarea(tarea){
      this.tarea = this.tarea.filter((t) => t !== tarea)
      this.tareaLista.push(tarea)
    },
    devolverTarea(tarea){
      this.tareaLista = this.tareaLista.filter((t) => t !== tarea)
      this.tarea.push(tarea)
    },
    ocultar(tarea, boolean){
      if(this.tarea.indexOf(tarea) != -1){
        this.tarea [this.tarea.indexOf(tarea)].oculto = boolean
      }
      else{
        this.tareaLista [this.tareaLista.indexOf(tarea)].oculto = boolean
      }
    }

  },
 
});
