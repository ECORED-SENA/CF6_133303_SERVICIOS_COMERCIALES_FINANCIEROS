<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Identificar de forma analítica el comportamiento de la empresa, requiere una serie de técnicas y métodos para los cuales, la individualización del tipo de empresa y su ubicación funcional, dan el punto de partida para que se visualice su enfoque estratégico, lo que lleva a cambios permanentes que son alineados directamente con el plan de mejora continua y a la competitividad organizacional para estar a la vanguardia.

    p.mb-5 Dado lo anterior, la comprensión de las estadísticas y los modelos matemáticos, son las herramientas indispensables para la interpretación de los datos y las metas organizacionales; por lo que los conceptos de:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
