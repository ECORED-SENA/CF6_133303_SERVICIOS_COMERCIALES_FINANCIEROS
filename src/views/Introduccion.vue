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

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFEAD8; border-top-right-radius: 112px")
      img.col-xl-4.mb-4.mb-xl-0.ms-auto.mb-auto.mt-xl-5.mx-auto(src="@/assets/curso/temas/img-1.svg" data-aos="fade-right" style="max-width: 408px")
      .py-xl-4.mb-0.col-xl-7.p-4(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Muestra
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Población
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Tabulación
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Representación de los datos
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Indicadores, son el insumo necesario para que se identifique de forma prospectiva el cumplimiento y la propuesta de objetivos que conlleven al éxito organizacional.
      img.d-none.d-xl-flex.col-xl-1.mb-auto(src="@/assets/curso/temas/tema5/decorador.svg" style="max-width: 82px")
    p.mb-5 Por lo anterior, se invita a revisar el siguiente video que permite conocer de primera mano las temáticas que se van a trabajar de manera general y su importancia para su vida laboral:
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cLwIxDucqDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
