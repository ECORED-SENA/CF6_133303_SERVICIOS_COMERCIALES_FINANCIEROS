<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Las empresas del siglo XXI como parte de su transformación e innovación digital y en respuesta a la globalización del mercado deben hacer cambios en la organización de esta, lo que necesariamente lleva a crear un departamento de innovación que defina la gestión del cambio, qué se va a hacer, cómo, quiénes intervienen, las fases, etc. 
      br
      br
      |Para realizar este proceso se hace primordial diseñar un ambiente de investigación permanente como parte de la cultura institucional, que lleve a las personas a la continua búsqueda de información de alta calidad en su sector económico, a organizarla y a presentar estadísticas sobre las tendencias del mercado.
      br
      br
      |Lo anterior para tomar decisiones que impacten los resultados de desempeño en el mercado, a este proceso se le llama inteligencia de negocios y hace parte del quehacer diario de cualquier organización.
      br
      br
      |Sabiendo esto y con lo desarrollado en el componente formativo, se invita a ver el siguiente mapa que resume de manera conceptual dicha temática tratada.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
