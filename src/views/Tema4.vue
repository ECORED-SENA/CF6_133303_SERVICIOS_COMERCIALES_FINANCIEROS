<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Modelos matemáticos

    p.mb-5 Según la Real Academia Española (s.f.), un modelo matemático, es un esquema teórico, generalmente en forma matemática, de un sistema o de una realidad compleja, como la evolución económica de un país, que se elabora para facilitar su comprensión y el estudio de su comportamiento. 



    p.mb-5 Un ejemplo del modelo lo puede realizar cada aprendiz, registrando en una tabla la distancia que recorre un automóvil a velocidad constante en distintos tiempos determinados, cuando se lleva a una gráfica, se puede ver que existe una clara relación entre el tiempo transcurrido y la distancia que se va acumulando, la cual se ve expresada por la regla de correspondencia matemática, dado esto, al analizar la gráfica, se ve que el tiempo y la distancia tienen una relación proporcional, con esa información se calcula cuánta distancia se recorrerá en un tiempo determinado.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
