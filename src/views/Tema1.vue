<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Organización
    
    p.mb-5 Una organización es un conjunto de personas que interactúa para conseguir unos objetivos y metas, dentro de las empresas se hace indispensable aplicar esta gestión para darle un orden a las actividades humanas y medios que se utilizan para conseguir los propósitos misionales y sus proyecciones de su visión. Entendiendo esto, se dice que una empresa es una organización que tiene unos objetivos, propósitos y metas que de forma ordenada y coordinada hace sus actividades para conseguirlas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Tipos de organización
    
    p.mb-5 Las empresas se clasifican y se diferencian por la procedencia de su capital, tamaño, lugar de operación y sector económico. A continuación, se explicará cada una de las agrupaciones.

    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") I. Según su procedencia de capital
    
    p.mb-5 De acuerdo con la procedencia de su capital, las empresas en Colombia se clasifican en tres categorías: públicas, privadas o mixtas. Como se puede ver, la procedencia del capital es vital para la constitución de una empresa, por lo que a continuación se presenta un recurso donde podrá clarificar el tema:

    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      .col-md-6.col-lg-4.px-2.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="aspect-ratio: 29/31; border-radius: 6px; background-color: #FDAB64")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center(style="color: black") Pública
              p.text-center(style="color: black") Propiedad del Estado.
                |El recurso económico proviene del Estado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}")
      .col-md-6.col-lg-4.px-2.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(style="aspect-ratio: 29/31; border-radius: 6px; background-color: #85D161")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center(style="color: black") Privada
              p.text-center(style="color: black") Propiedad de particular o una sociedad privada. El recurso económico proviene del capital privado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.jpg')})`}")
      .col-md-6.col-lg-4.px-2.mb-4
        .tarjeta.tarjeta-slide.arriba.color-primario(style="aspect-ratio: 29/31; border-radius: 6px; background-color: #E3F56C")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center(style="color: black") Mixta
              p.text-center(style="color: black") Propiedad compartida.
                |El recurso proviene del capital público y privado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-3.jpg')})`}")

    .cajon.color-acento-contenido.p-4.mb-4.d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px; width: 136px" data-aos="fade-right")
      p.mb-0.ps-md-3 #[b ¡Importante!]
        br
        |Se debe tener en cuenta que las empresas privadas buscan generar riqueza a través de actividades mercantilistas aumentando su capital; por otro lado, las que son del Estado manejan dos campos de acción, uno para obtener beneficios para el sostenimiento y el otro con el propósito de brindar un bien común para suplir las necesidades básicas de las personas a las que gobiernan.

    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") II. Según su lugar de operación
    
    p.mb-5 La clasificación de empresas de acuerdo con su lugar de operación refiere a la cobertura y ámbito de aplicación empresarial de sus actividades o servicios.
      br
      br
      |También es indispensable el lugar de operaciones para la clasificación de una empresa, por lo que es vital conocer algunos elementos que se deben tener en cuenta, los que se podrán conocer a través de la siguiente historia:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .cajon.color-primario.p-4.mb-4.d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px; width: 136px" data-aos="fade-right")
      p.mb-0.ps-md-3 #[b ¡Importante!]
        br
        | En la historia anterior se puede ver que las empresas a medida que van desarrollando sus actividades pueden ir creciendo no solo en su tamaño, sino que pueden expandirse abarcando el mercado y haciéndose más reconocidas y competitivas, es decir hoy podría ser una empresa local, pero en unos años una regional o nacional y, por qué no, una multinacional.

    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") III. Según su sector económico

    p.mb-5 Identificar la clasificación del sector económico al que pertenece una empresa, orienta a las responsabilidades, legislación y la oferta con el enfoque de servicios en el cual se desempeñen. Uno de los elementos para la clasificación de una empresa es el sector al cual pertenece, por eso es importante tener claro cuáles son los que existen en Colombia y estos se exponen en el siguiente video:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .cajon.color-acento-contenido.p-4.mb-4.d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px; width: 136px" data-aos="fade-right")
      p.mb-0.ps-md-3 #[b ¡Importante!]
        br
        |Se debe tener en cuenta que las organizaciones hacen una o varias actividades en su gestión mercantil, por lo tanto, cuando se dedican solo a una actividad se les denomina como monoproductora y cuando hace el ejercicio con diferentes actividades se les llama multiproductora.

    .d-flex
      h3.titulo-tercero.py-2.px-4(style="background-color: #FFC28D") IV. Según su tamaño

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-5.mx-auto
        img.mb-4.mb-xl-0(src="@/assets/curso/temas/tema1/img-5.jpg" data-aos="fade-right")
      .col-xl-7.ps-xl-4
        .cajon-b.color-primario.p-3.mb-2
          p.mb-0 De acuerdo con la cantidad de trabajadores, las empresas también se clasifican e identifican dentro de una agremiación, esto le permitirá obtener beneficios e identificar responsabilidades fiscales para su funcionamiento.
          br
          br
          |En el mundo, y de igual manera en Colombia, las empresas se pueden clasificar según su tamaño, estas dependen del número de personas que las conforman; en el siguiente recurso puede ampliar la información:

    img.mb-5(src="@/assets/curso/temas/tema1/img-6.svg" data-aos="fade-right")

    .cajon.color-primario.p-4.mb-4.d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px; width: 136px" data-aos="fade-right")
      p.mb-0.ps-md-3 #[b ¡Importante!]
        br
        |En Colombia se expidió el Decreto 957 de 2019, estableciendo una nueva clasificación del tamaño empresarial basada en el criterio único de ingresos por actividades ordinarias, ya que se debe tener en cuenta que el ingreso de las tecnologías de la información y comunicación ha hecho crecer las organizaciones y no necesariamente en capital humano.

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/interes.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Para conocer más sobre el Decreto 957 de 2019. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015. Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011.” Le invito a revisar el siguiente documento: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/COMPUESTO_133303.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Reglas y políticas de negocio
    
    p.mb-5 Establecer las guías y directivas para el cumplimiento de objetivos de la organización es trascendental para su funcionamiento; para ello, encontramos diferentes directrices institucionales que pueden ser permanentes o temporales, como lo son:

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFEAD8; border-top-left-radius: 112px" data-aos="fade-left")
      img.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema1/img-7.png" style="max-width: 505px")
      ol.px-xl-4.py-xl-5.mb-0.col-lg-6.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Las normas de operaciones.
        li 
          .lista-ol--cuadro__vineta
            span 2
          | El manual de políticas.
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Los diferentes protocolos de cumplimiento según el instituto internacional de análisis de negocios.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Las directivas que soportan un objetivo de negocio y que son orientadoras de la conducta organizacional, etc.
      img.col-xl-1.d-none.d-xl-flex.mt-auto(src="@/assets/curso/temas/tema1/decorador.svg" style="max-width: 85px")

    p.mb-5 Todas las anteriores directrices, y otras según el tipo de la organización, son los principios que una empresa se compromete a cubrir, con el fin de construir una cultura con la cual deben interactuar sus empleados, procesos y mecanismos para el cumplimiento de objetivos.
      br
      br
      |Las características de una política deben estar alineadas a las realidades para el cumplimiento de metas, con una particularidad para tener en cuenta: 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.mb-5(style="background-color: #BAE8A4")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-8.jpg')})`}"
        data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 …las políticas y reglas deben ser coherentes entre sí, ya que al interactuar constantemente emiten directrices y cualquier cambio afecta la gestión operacional; es decir, la implementación en los diferentes procesos y procedimientos; por estas situaciones, las reglas y políticas deben ser lógicas, flexibles, buscando proporcionar una guía para la toma de decisiones y la planeación de futuros lineamientos, también deben de proporcionar una orientación para la toma de decisiones, como también reflejar el entorno interno y externo de una organización.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Políticas de gestión del cambio
    
    p.mb-5 La gestión del cambio organizacional es la gestión de un proceso que se enfoca en la utilización de técnicas y herramientas con el fin generar un cambio cultural en el capital humano y que  a su vez esté alineado al cumplimiento de proyecciones y objetivos organizacionales. Una secuencia ya establecida para lograr implementar un cambio, son los ocho pasos de Kotter, los cuales se describen a continuación:

    AcordionA.mb-5.acordeon-a-edit(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.mx-auto(titulo="Establecer sentido de urgencia")
        .col-md-7.mb-4.mb-md-0
          p Se requiere despertar la sensación de necesidad de los cambios, por lo que es importante apoyarnos en datos confiables y fuentes fidedignas de cambios ya realizados, bien sea en la misma o en diferentes segmentos organizacionales.
            br
            br
            |Buscando siempre incentivar la expectativa, llevando  a hablar más y más sobre el cambio que se propone, mostrando las  oportunidades, los riesgos y las amenazas que pudieran comprometer a la organización.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-2.png')
      .row.col-xl-11.mx-auto(titulo="Formar coaliciones")
        .col-md-7.mb-4.mb-md-0
          p Es importante conseguir el apoyo de gente poderosa dentro de la organización, hay que trabajar en equipo y con compromiso que toque todas las áreas del negocio.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-3.png')
      .row.col-xl-11.mx-auto(titulo="Crear una visión clara de cambios")
        .col-md-7.mb-4.mb-md-0
          p Es fundamental crear una visión clara y comprensible, orientada a los beneficios del cambio, resaltando que: #[b #[em “Para crear esa visión, hay que centrarse en los valores fundamentales que son necesarios para el cambio y cómo será el futuro de la empresa después del cambio”.]]
            br
            br
            |Por lo que, para lograrlo se debe crear una estrategia que sea fácil de explicar a otras audiencias y practicar esa presentación de manera constante.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-4.png')
      .row.col-xl-11.mx-auto(titulo="Comunicar la visión")
        .col-md-7.mb-4.mb-md-0
          p Para lograr la cultura organizacional es vital incluirla en todas las comunicaciones internas posibles, mostrando, cómo es ser parte del cambio, dando ejemplo a los demás y cómo se hace este en el día a día, motivando a otros de manera permanente… 
            br
            br
            |#[em #[b “…hasta formar un inconsciente colectivo, es decir una cultura organizacional de gestión del cambio”.]]
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-5.png')
      .row.col-xl-11.mx-auto(titulo="Eliminar los obstáculos")
        .col-md-7.mb-4.mb-md-0
          p Es importante trabajar en la resistencia de las personas que aún no están convencidas en la gestión del cambio, por ende, debemos agregar más gente a los equipos, y que de esta forma ayude a completar la transformación.
            br
            br
            |Otro método es reconocer y premiar a los que ya están haciendo el cambio o empezando a pensar en el estado futuro de la empresa.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-6.png')
      .row.col-xl-11.mx-auto(titulo="Asegurar triunfos a corto plazo")
        .col-md-7.mb-4.mb-md-0
          p Por otro lado, el éxito es un gran motivador, por lo que, mostrar resultados palpables de la implementación del cambio es vital.
            br
            br
            |Ayudar a contrastar las voces críticas  conlleva a que se vayan desincentivando bajo el peso de los resultados, para ello, las metas a corto plazo son victorias con éxito asegurado.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-7.png')
      .row.col-xl-11.mx-auto(titulo="Construir sobre el cambio")
        .col-md-7.mb-4.mb-md-0
          p También es indispensable no declarar la victoria, sólo se han ganado pequeñas batallas y no la guerra, se requiere seguir creciendo con proyectos de mayor envergadura y mayor valor para la organización, mejorando incansablemente el proceso, sí lo logramos ya no habrá vuelta atrás.
            br
            br
            |Integrar en el inconsciente colectivo el principio de gestión del cambio y transformar la cultura organizacional se ha logrado, pero,  debe continuar con el proceso de forma permanente principalmente porque el concepto de mejora continua es un comportamiento de aprendizaje social y se refuerza por medio de la educación y desarrollando un proceso cultural.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-8.png')
      .row.col-xl-11.mx-auto(titulo="Institucionalizar y anclar el cambio")
        .col-md-7.mb-4.mb-md-0
          p El cambio debe ser visible en el día a día, para ello, debemos seguir mencionando los éxitos y buscar a aquellos que lo apoyaron inicialmente, como los fundadores, ellos son los visionarios, orientado a seguir, manteniendo un equipo de trabajo que continúe con la implementación operativa.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-1.png')
            

    p.mb-5 Por otro lado, para aclarar la función del cambio empresarial se invita a ver la siguiente videoclase que explica cada uno de los elementos anteriores.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
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
