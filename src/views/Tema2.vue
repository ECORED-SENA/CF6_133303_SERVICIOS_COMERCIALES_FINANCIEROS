<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Estadística

    p.mb-5 #[b La estadística consiste en recoger datos para clasificarlos y presentarlos adecuadamente], para lo cual se requiere de una organización y análisis de la información, de tal modo que sirvan para la posterior toma de decisiones. Esta es utilizada científicamente, pero también de manera rutinaria por las personas, que en muchas ocasiones la utilizan desconociendo su interpretación, además, comúnmente es y ha sido aplicada a lo largo de la historia de la humanidad. 

    .container-img-edit-v2.col-xl-10.mx-auto.mb-5.align-items-center
      img(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 293px" data-aos="fade-right")
      .container-img-edit-v2-container.col-lg.d-flex.align-items-center(data-aos="fade-left" style="min-height: 295px")
        p.mb-0 Por otro lado, dada su naturaleza y su método, la estadística #[b es una ciencia exacta], ya que permite experimentar las #[b probabilidades] con argumentos que desarrollan o crean métodos los cuales permiten evaluar el comportamiento de las #[b tendencias], asumiendo como objetivo el estudio de conjuntos numerosos de personas, animales u objetos de cualquier clase o cualquier tipo de información que puedan ser recopiladas y analizadas para la orientación al planteamiento de necesidades.

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/interes.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-2 La estadística, su historia y evolución
              p.text-small Con el ánimo de que pueda comprender de manera integral la estadística, su historia y evolución, se sugiere revise el siguiente video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.youtube.com/watch?v=-NutZ7n-Exg" target="_blank")
                span Ver video

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Población
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mx-auto.mb-xl-0(src="@/assets/curso/temas/tema2/img-2.jpg")
      p.col-xl-7.ps-xl-4 En estadística el término de población se refiere a la integración de datos que requieren ser organizados, analizados e interpretados. Arias-Gómez, Villasís-Keever y Miranda-Novales (2016) exponen que #[b la población no se refiere exclusivamente a seres humanos, sino que también puede corresponder a animales, muestras biológicas, expedientes, hospitales, objetos, familias, organizaciones], etc.; para estos últimos, podría ser más adecuado utilizar un término análogo, como universo de estudio. 
        br
        br
        |Entonces en el objeto de estudio, el análisis de la información conlleva a estudiar datos identificados, estos se conocen como población; un ejemplo puede ser la cantidad de personas o de cosas, en un lugar específico para ser analizado.
    
    p.mb-5 Para definir una población se debe tener en cuenta las características que terminan siendo determinantes para el desarrollo de la investigación, y que se listan a continuación:

    .col-xl-8.d-flex.flex-wrap.mx-auto.mb-5
      .col-md-6.px-2.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false" style="aspect-ratio: 40/49; border-radius: 6px; background-color: #FED5B1")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center(style="color: black") El primer criterio para tener en cuenta es la #[b(style="color: black") selección correcta de la población a estudiar], porque según esto podrá hacer una delimitación objetiva, permitiendo organizar los datos requeridos para el estudio; es de tener en cuenta que hay poblaciones con datos infinitos o finitos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-3.jpg')})`}")
      .col-md-6.px-2.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario.d-flex.align-items-center(style="aspect-ratio: 40/49; border-radius: 6px; background-color: #FED5B1")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center(style="color: black") El segundo criterio que permitirá #[b(style="color: black") ubicar de manera correcta los datos a ser estudiados], es la ubicación cronológica, no es lo mismo estudiar una población determinada en diferentes momentos, por que entran a ponderar variables externas que influyen en los análisis estadísticos que se deseen adelantar. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-4.jpg')})`}")
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Muestra
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-7.pe-xl-4 La acción de realizar un muestreo de información se refiere a #[b la selección de una porción-parte-subconjunto de datos del universo o población], que haya sido seleccionada, delimitada y ubicada cronológicamente la cual es objeto de estudio en la investigación. 
        br
        br
        |El muestreo tiene por objetivo estudiar las relaciones existentes entre la distribución de una variable “y” en una población “z” y las distribuciones de esta variable en la muestra a estudio. Hernández et al. (2006), exponen que cuando se determina la muestra en una investigación se toman dos decisiones fundamentales, a saber: 
      img.col-xl-5.mb-4.mx-auto.mb-xl-0(src="@/assets/curso/temas/tema2/img-5.jpg")

    .d-flex.flex-wrap.align-items-center.col-xl-8.mx-auto
      .col-md-6.px-2
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="background-color: #C2E8B0;")
            p.mb-0.p-2.py-xl-3 La manera cómo van a seleccionar los casos (participantes, eventos, episodios, organizaciones, productos, etc).
      .col-md-6.px-2
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-7.svg')
          .tarjeta.tarjeta--azul(style="background-color: #C2E8B0;")
            p.mb-0.p-2.py-xl-3 El número de casos a incluir (tamaño de muestra) (Hernández et al., 2014).
    p.mb-5 Estos dos elementos permiten claramente unificar esfuerzos mediante la centralización de información, logrando que estos datos representen la integralidad de los resultados analizados y que favorezcan la toma de decisiones.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Determinación de la muestra

    p.mb-5 Buscando cómo llegar de manera correcta al tamaño de muestra, que busca encontrar esa porción-parte-subconjunto de datos del universo o población que haya sido seleccionada, se deben establecer mecanismos para la reducción de costos en diferentes recursos, como los son:

    .d-flex.flex-wrap.col-xl-9.mx-auto
      .tarjeta-imagen-texto.px-2.col-12.col-md-4.mb-5
        .content-img(style="background-color: #FDAB64")
          img(src='@/assets/curso/temas/tema2/img-8.svg')
        .content-text(style="background-color: #FED5B1")
          h4.px-2.mb-0 Económicos
      .tarjeta-imagen-texto.px-2.col-12.col-md-4.mb-5
        .content-img(style="background-color: #85D161")
          img(src='@/assets/curso/temas/tema2/img-9.svg')
        .content-text(style="background-color: #E1F3D7")
          h4.px-2.mb-0 Mano de obra
      .tarjeta-imagen-texto.px-2.col-12.col-md-4.mb-5
        .content-img(style="background-color: #FDE07E")
          img(src='@/assets/curso/temas/tema2/img-10.svg')
        .content-text(style="background-color: #FEEFBF")
          h4.px-2.mb-0 Materiales, entre otros

    .cajon.color-acento-contenido.p-4.mb-4.d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema2/contract.svg" style="max-width: 91px; width: 91px" data-aos="fade-right")
      p.mb-0.ps-md-3 Siendo el muestro un mecanismo que selecciona y delimita la recolección de los datos, ya que se puede realizar en menor tiempo y también permite el estudio poblaciones muy grandes.

    p.mb-5 Para hallar el tamaño de muestra estadísticamente se desarrollan métodos, por lo cual es importante identificar #[b el nivel de confianza], siendo este #[b grado de certeza o probabilidad expresado en porcentajes] con el que se pretende realizar la estimación de un parámetro a través de un estadístico muestral “fórmula”.
      br
      br
      |Por otro lado, una cosa muy importante es que #[b el nivel de confianza lo determina el investigador], este es el grado de certeza que se requiere en la investigación, ligado el margen de error, #[b que es la estimación máxima aceptada de equivocación] en el resultado analizado en una investigación.
      br
      br
      |Para aprender más sobre el tema, veremos el siguiente video.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5VK7hvyj760" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Parámetros estadísticos

    p.mb-5 Para la definición de este concepto es vital comprender que, mediante este mecanismo, se puede dar #[b lectura, interpretación y síntesis a los datos que sean objeto de estudio], por lo cual se distribuyen los parámetros en tres grandes componentes que, de acuerdo con las denominaciones estadísticas, se subdividen en los siguientes conceptos:
    
    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") I. Parámetros de centralización

    p.mb-5 Indican en torno a qué valor o criterio central se distribuyen los datos obtenidos, para lo cual se establecen tres criterios que se podrán conocer a continuación:

    SlyderD.mb-5(:datos="datosSlyder")

    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") II. Parámetros de posición

    p.mb-5 Consta de dividir los datos en grupos con el mismo número de datos recopilados. Para esto es necesario organizar la información de menor a mayor; para su interpretación se organiza en criterios conocidos como cuantiles que son variables de intervalos en los que estos se dividen. Para clarificar el tema se puede revisar el siguiente recurso:

    .d-flex.flex-wrap.mb-5
      .col-lg-3.px-md-2.mx-auto.mb-4
        .tarjeta.p-4.py-lg-5(style="background-color: #A4DC88")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/100.svg' style="max-width: 100px")
          h4.text-center.mb-4.mx-auto(style="background-color: white; border-radius: 20px") Percentiles
          p.text-center División de una serie de datos en 100 partes iguales.
      .col-lg-3.px-md-2.mx-auto.mb-4
        .tarjeta.p-4.py-lg-5(style="background-color: #FED5B1")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/10.svg' style="max-width: 100px")
          h4.text-center.mb-4.mx-auto(style="background-color: white; border-radius: 20px") Deciles
          p.text-center División de una serie de datos en 10 partes iguales.
      
      .col-lg-3.px-md-2.mx-auto.mb-4
        .tarjeta.p-4.py-lg-5(style="background-color: #FEEFBF")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/5.svg' style="max-width: 100px")
          h4.text-center.mb-4.mx-auto(style="background-color: white; border-radius: 20px") Quintiles
          p.text-center División de una serie de datos en cinco partes iguales.
      
      .col-lg-3.px-md-2.mx-auto.mb-4
        .tarjeta.p-4.py-lg-5(style="background-color: #F6FBD1")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/4.svg' style="max-width: 100px")
          h4.text-center.mb-4.mx-auto(style="background-color: white; border-radius: 20px") Cuartiles
          p.text-center División de una serie de datos en cuatro partes iguales.
    
    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") III. Parámetros de dispersión
    
    p.mb-5 Establecidos para interpretar cuánto se alejan de la parte central de los valores de distribución datos, por lo que en a continuación podrá ampliar el tema:

    .d-flex.flex-wrap.mb-5.col-xl-9.mx-auto
      .col-md-4.px-md-2.mb-5.pb-4
        .tarjeta.p-4.py-lg-5.h-100(style="background-color: #FEEFBF; border: 2px solid black;")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/math.svg' style="max-width: 83px; margin-top: -70px")
          h4.text-center.mb-4.mx-auto Rango o recorrido
          p.mb-0 Es la diferencia entre el dato mayor y el dato menor del total de datos de una distribución numérica.
      .col-md-4.px-md-2.mb-5.pb-4
        .tarjeta.p-4.py-lg-5.h-100(style="background-color: #A4DC88; border: 2px solid black;")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/math.svg' style="max-width: 83px; margin-top: -70px")
          h4.text-center.mb-4.mx-auto Desviación
          p.mb-0 La desviación media es la media aritmética de los valores absolutos de las desviaciones respecto a la misma media.
      .col-md-4.px-md-2.mb-5.pb-4
        .tarjeta.p-4.py-lg-5.h-100(style="background-color: #F6FBD1; border: 2px solid black;")
          img.mx-auto.mb-4(src='@/assets/curso/temas/tema2/math.svg' style="max-width: 83px; margin-top: -70px")
          h4.text-center.mb-4.mx-auto  Varianza
          p.mb-0 Es la desviación típica estándar es la raíz cuadrada positiva de la varianza. 
    
    p.mb-5 A modo de conclusión, en la siguiente figura se muestran todos los parámetros estadísticos mencionados con anterioridad para sintetizar la información de forma global:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Tipos de parámetros estadísticos
    img(src='@/assets/curso/temas/tema2/img-11.svg')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: 'Medida aritmética',
        texto:
          'La media, es <b>la suma de todos</b> los datos dividido por el <b>número de datos.</b>',
        imagen: require('@/assets/curso/temas/tema2/img-12.svg'),
      },
      {
        titulo: 'Mediana',
        texto:
          'Representa el valor de la variable de la posición central en un conjunto de datos ordenados.',
        imagen: require('@/assets/curso/temas/tema2/img-13.svg'),
      },
      {
        titulo: 'Moda',
        texto:
          'Es el valor de la variable con <b>mayor frecuencia absoluta.</b>',
        imagen: require('@/assets/curso/temas/tema2/img-14.svg'),
      },
    ],
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

<style lang="sass">
.slyder-d__content
  width: 100%
.tarjeta-imagen-texto
  .content-img
    display: flex
    justify-content: center
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    img
      margin-top: -2.6rem
      max-width: 144px
  .content-text
    text-align: center
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
    display: flex
    justify-content: center
    align-items: center
    min-height: 100px
</style>
