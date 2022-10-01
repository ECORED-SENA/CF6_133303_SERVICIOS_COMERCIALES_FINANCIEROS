<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Tabulación y análisis de datos
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema5/img-1.jpg" style="max-width: 505px" data-aos="fade-right")
      p.col-xl-7.ps-xl-4 Una vez verificada la información recolectada, es necesario #[b ubicarla de acuerdo con las variables cuantitativas discretas o continuas, o las variables cualitativas nominales u ordinales;] a su vez teniendo en cuenta el tipo de investigación determinado y también los parámetros estadísticos definidos para comprender la información de los datos recolectados, es necesario #[b organizarlos y presentarlos en tablas y gráficos;] por ello, es importante seleccionar un conjunto de características, es decir las variables que determinan el instrumento que #[b deben ser objetivas, integrales y que soporten el análisis de información requerido.]
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Variables
    
    p.mb-5 Como se describió anteriormente, las variables están determinadas como variables cuantitativas que pueden ser discretas o continuas y las variables cualitativas, las que a su vez se subdividen en nominales u ordinales y que se pueden ver con claridad en la figura 3 con sus subdivisiones.
    .titulo-sexto.color-acento-contenido
      h5 Figura 3
      span Tipos de variables
    img(src="@/assets/curso/temas/tema5/img-2.svg" data-aos="fade-right")
    figcaption.mb-5(style="background-color:#E8E8E8;font-weight:500;") Nota. Tomada de Gómez, A (2018).

    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 En la sección de materiales complementarios, se presenta el video Tipos de variables estadísticas | Cuantitativas-Cualitativas para que pueda comprender de manera integral los tipos de variables.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Frecuencias

    p.mb-5 En la medición de los datos obtenidos, la organización y tabulación es primordial para la interpretación estadística, para lo que #[b la repetición de los datos se mide por frecuencias], y estas se deben organizar de acuerdo con #[b la cantidad de datos]; por ello, se exponen a continuación las características para la tabulación de los datos bajo el esquema de frecuencias, a saber: 

    SlyderF.mb-5d-flex.align-items-stretch.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #FED5B1")
        .p-4.w-100.mb-auto(style="background-color: #FDAB64; border-top-right-radius: 15px; border-top-left-radius: 15px;")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema5/sl-1.svg" style="max-width: 130px")
          h4.text-center.mb-2.mx-auto.py-2(style="background-color: white; border-radius: 20px") Datos
        .p-5.w-100(style="background-color: #FED5B1; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
          p Información recopilada que debe ser organizada en una variable.
      
      .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #DBF5CC")
        .p-4.w-100.mb-auto(style="background-color: #85D161; border-top-right-radius: 15px; border-top-left-radius: 15px;")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema5/sl-2.svg" style="max-width: 130px")
          h4.text-center.mb-2.mx-auto.py-2(style="background-color: white; border-radius: 20px") Frecuencia absoluta
        .p-5.w-100(style="background-color: #DBF5CC; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
          p Cantidad de veces que se repite el dato.
      
      .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #FED5B1")
        .p-4.w-100.mb-auto(style="background-color: #FDAB64; border-top-right-radius: 15px; border-top-left-radius: 15px;")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema5/sl-3.svg" style="max-width: 130px")
          h4.text-center.mb-2.mx-auto.py-2(style="background-color: white; border-radius: 20px") Frecuencia relativa
        .p-5.w-100(style="background-color: #FED5B1; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
          p Se obtiene de la división del número de la frecuencia absoluta de una variable y la cantidad total de los datos.
      
      .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #DBF5CC")
        .p-4.w-100.mb-auto(style="background-color: #85D161; border-top-right-radius: 15px; border-top-left-radius: 15px;")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema5/sl-4.svg" style="max-width: 130px")
          h4.text-center.mb-2.mx-auto.py-2(style="background-color: white; border-radius: 20px") Frecuencia absoluta acumulada
        .p-5.w-100(style="background-color: #DBF5CC; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
          p Se refiere a la acumulación de las variables de la frecuencia absoluta.
      
      .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #FED5B1")
        .p-4.w-100.mb-auto(style="background-color: #FDAB64; border-top-right-radius: 15px; border-top-left-radius: 15px;")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema5/sl-5.svg" style="max-width: 130px")
          h4.text-center.mb-2.mx-auto.py-2(style="background-color: white; border-radius: 20px") Porcentaje
        .p-5.w-100(style="background-color: #FED5B1; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
          p Se obtiene al multiplicar la frecuencia relativa de cada variable por 100 y el resultado total debe dar 100%.
        

    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Como parte de su aprendizaje, en la sección de materiales complementarios se presenta el video Tablas de frecuencia | Ejemplo 1 que le permitirá afianzar su conocimiento sobre el tema visto en el componente formativo.
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Gráficos estadísticos
    p.mb-5 La representación gráfica de la información juega un papel trascendental en el análisis e interpretación de los datos; por ende, #[b coadyuva al lector para la compresión de los resultados]. En el siguiente recurso podrá identificar los tipos de gráficas de acuerdo con su uso:

    AcordionA.mb-5.acordeon-a-edit(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.mx-auto(titulo="Histograma")
        .col-md-7.mb-4.mb-md-0
          p Corresponde a una agrupación de datos.
            br
            |Sirve para datos cualitativos y cuantitativos.
            br
            |Las barras siempre van unidas.
            br
            |Los histogramas ayudan a ver el centro, la extensión y la forma de un conjunto de datos.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-1.png')
      
      .row.col-xl-11.mx-auto(titulo="Polígono de frecuencias")
        .col-md-7.mb-4.mb-md-0
          p Gráfico que se crea a partir de un histograma de frecuencia.
            br
            |Estos histogramas emplean columnas verticales, para reflejar frecuencias: el polígono de frecuencia es realizado uniendo los puntos de mayor altura de estas columnas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-2.png')
      
      .row.col-xl-11.mx-auto(titulo="Diagrama de barras")
        .col-md-7.mb-4.mb-md-0
          p Un diagrama de barras es una representación en dos dimensiones de la frecuencia, ya sea absoluta o relativa, de una variable cuantitativa o cualitativa, pero siempre discreta y distribuida en filas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-3.png')
      
      .row.col-xl-11.mx-auto(titulo="Circular")
        .col-md-7.mb-4.mb-md-0
          p Se utiliza para representar la proporción de elementos de cada uno de los valores de la variable.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-4.png')
      
      .row.col-xl-11.mx-auto(titulo="Tallos y hojas")
        .col-md-7.mb-4.mb-md-0
          p Es un semigráfico el cual permite presentar la distribución de una variable cuantitativa.
            br
            |Consiste en separar cada dato en el último dígito (que se denomina hoja) y las cifras delanteras restantes (que forman el tallo).
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-5.png')
      
      .row.col-xl-11.mx-auto(titulo="Diagrama de cajas")
        .col-md-7.mb-4.mb-md-0
          p Un diagrama de cajas y bigotes es una manera conveniente de mostrar visualmente grupos de datos numéricos a través de sus cuartiles.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-6.png')
      
      .row.col-xl-11.mx-auto(titulo="Diagrama de dispersión")
        .col-md-7.mb-4.mb-md-0
          p Los diagramas de dispersión usan una colección de puntos colocados usando coordenadas cartesianas para mostrar valores de dos variables.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-7.png')
      
      .row.col-xl-11.mx-auto(titulo="Pictograma")
        .col-md-7.mb-4.mb-md-0
          p Los pictogramas son tipos de tablas y gráficos que utilizan íconos e imágenes para representar datos.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/a-8.png')
      
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Los gráficos estadísticos son importantes en la gestión de cualquier empresa; por ello, en la sección de materiales complementarios encuentra un video con el que podrá aclarar los conocimientos adquiridos en el componente sobre este tema.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_4 5.4 Indicadores

    .d-flex.flex-wrap.align-items-center.mb-5
      p.order-2.order-xl-1.col-xl-7.pe-xl-4 La necesidad de medición de resultados en las entidades o empresas es necesaria para estar a la vanguardia en el conocimiento sobre las necesidades o servicios que se desarrollan, las cuales son un mundo de oportunidades para cada organización.
        br
        br
        |Lo anterior debido a que su contexto es cambiante y, además, ponderar la productividad y el impacto es y debe ser su objetivo día a día; por ende, #[b el enfoque del aumento de los resultados siempre debe ser la prioridad]; así, los métodos de medición son comúnmente conocidos como indicadores, y su utilidad marca varios aspectos vitales en las organizaciones, entre los cuales se tienen: 
      img.col-xl-5.order-1.order-xl-2.mx-auto.mb-4.mb-xl-0(src="@/assets/curso/temas/tema5/img-4.jpg" style="max-width: 497px")

    .container-img-edit-v3.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema5/img-5.png" style="max-width: 231px" data-aos="fade-right")
      .container-img-edit-v3-container.col-lg(data-aos="fade-left")
        ul.lista-ul--color.mb-4(data-aos="fade-left")
          li.d-flex.mb-0
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Tomar decisiones en todos los niveles.
          li.d-flex.mb-0
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Medir el desempeño de procesos y de personas.
          li.d-flex.mb-0
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Comparar y hacer seguimiento de la gestión.
          li.d-flex.mb-0
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Medir la eficacia, la eficiencia y la efectividad de la entidad o la empresa.
        p Teniendo en cuenta la pertinencia e importancia de la medición, es necesario abordar los tipos de indicadores y las características que deben contener estos elementos de medición que se describen en la siguiente figura.


    .titulo-sexto.color-acento-contenido
      h5 Figura 4
      span Tipos y características de indicadores
    img.mb-1(src="@/assets/curso/temas/tema5/img-6.svg")
    p.mb-5.px-3.py-2(style="background-color: #E8E8E8") Nota. Tomada de tic.portal.
    p.mb-5 Como parte de su aprendizaje, se invita a revisar el video Interpretación de indicadores de gestión  que le ayudará a afianzar sus conocimientos. 

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nCUYv5oPwJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Ahora bien, comprendiendo el criterio general de los indicadores, surgen preguntas: ¿cómo se pueden crear este tipo de herramientas de medición?, ¿cuáles pasos se deben seguir?, etc. Para dar respuesta a esos interrogantes, en el siguiente recurso de aprendizaje se podrán encontrar algunos elementos que son vitales para crear los indicadores en una empresa, independientemente del sector al cual pertenezca.

    PasosA.pasos-edit.color-primario.mb-5.mb-5.col-xl-10.mx-auto(tipo="l")
      .row(data-aos="fade-left")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 1
          p.mb-0 Identifique el objetivo del proceso y la finalidad del objetivo.
      .row(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 2
          p.mb-0.ms-auto Identifique las variables a medir (cualitativas o cuantitativas).
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
      .row(data-aos="fade-left")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 3
          p.mb-0 Identifique las fuentes de las variables (cualitativas o cuantitativas).
      .row(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 4
          p.mb-0.ms-auto Defina la fórmula del indicador y realice ejercicios prácticos previamente (variable medida/variable esperada).
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
      .row(data-aos="fade-left")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 5
          p.mb-0 Clasifique el indicador según los siguientes factores:
            br
            br
            |#[b Eficacia:] mide los resultados alcanzados frente a los resultados esperados.
            br
            br
            |#[b Eficiencia:] mide los recursos utilizados frente a resultados obtenidos, o también miden la relación entre los resultados alcanzados frente a los recursos disponibles.
            br
            br
            |#[b Efectividad:] mide el impacto del indicador frente al cumplimiento del objetivo o también se puede ver como la combinación entre la eficiencia y la eficacia.
      .row(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 6
          p.mb-0.ms-auto Fije una meta – se puede dar espacios para medición de línea base.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
      .row(data-aos="fade-left")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 7
          p.mb-0 Determine la periodicidad de medición (semana, quincenal, mensual, semestral, o anual).
      .row(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 8
          p.mb-0.ms-auto Delimite los rangos de evaluación (Ejemplo: de 0 a 60 deficiente; de 60,1 a 75 aceptable; de 75,1 a 80 bueno; de 85,1 a 100; de 100,1 en adelante es sobresaliente). 
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
      .row(data-aos="fade-left")
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema5/img-7.svg' style="max-width: 106px")
        .col-md-8.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
          h3.w-100 Paso 9
          p.mb-0 Identifique y asigne responsables del indicador y de sus variables.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_5 5.5 Análisis de datos
    
    p.mb-5 Se debe tener en cuenta que para #[b evaluar el resultado] de cualquier desempeño, #[b la medición de indicadores o el comparativo de variables de representaciones gráficas o de las tablas] de datos obtenidas de una información gestionada, se puede dar aplicando los mecanismos y técnicas que conlleven a #[b la interpretación objetiva e integral de los resultados, debiéndose incluir en el análisis]:

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #E1F3D7; border-top-right-radius: 112px")
      img.d-none.d-xl-flex.col-xl-1.mt-auto(src="@/assets/curso/temas/tema5/decorador.svg" style="max-width: 82px")
      .py-xl-4.mb-0.col-xl-7.p-4(data-aos="fade-left")
        ul.lista-ul--color.mb-4(data-aos="fade-left")
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 La interpretación de las variables
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Sus proyecciones
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Tendencias
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Las propuestas
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 Las necesidades
          li.d-flex
            <svg style="max-width: 15px; margin-top: .3rem" xmlns="http://www.w3.org/2000/svg" width="16.372" height="16.373" viewBox="0 0 16.372 16.373">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M16.935,8.749A8.186,8.186,0,1,1,8.749.563,8.186,8.186,0,0,1,16.935,8.749ZM7.8,13.083,13.875,7.01a.528.528,0,0,0,0-.747l-.747-.747a.528.528,0,0,0-.747,0L7.428,10.469,5.116,8.156a.528.528,0,0,0-.747,0L3.622,8.9a.528.528,0,0,0,0,.747l3.433,3.433a.528.528,0,0,0,.747,0Z" transform="translate(-0.563 -0.563)" fill="#fc8116"/>
            </svg>
            p.mb-0.ps-3 La pertinencia, entre muchas otras.
        p Partiendo de los datos se elabora un concepto completo con la información los que, entre muchas características, deben estar fortalecidos por cada uno de los componentes de análisis mencionados con anterioridad y que le permitan a la empresa o al cliente tomar decisiones claras que transformen la organización. Se debe tener en cuenta para estos ejercicios, los elementos que se muestran a continuación y que permitirán potenciar su análisis.
      img.col-xl-4.mb-4.mb-xl-0.ms-auto.mb-auto(src="@/assets/curso/temas/tema5/img-8.svg" data-aos="fade-right" style="max-width: 408px")
    p.mb-5.fw-bold Elementos determinantes para el análisis  de datos - CAC

    .d-flex(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-9.svg')})`}" style="aspect-ratio: 123/55")
      .col-12.col-lg-6.ms-auto.my-auto
        SlyderA.slyler-t5.col-lg-11.me-auto.tarjeta.p-4.p-lg-5(tipo="b" style="background-color: #FFF5EC; border: 2px solid#FC8116")
          .row
            p #[b Calidad de la información]
              br
              |Para un correcto análisis de información es importante tener en cuenta las variables, ya que la ponderación de estas refleja su calidad, la cual parte de una planificación correcta en la elaboración del instrumento, que le permitirá obtener datos concretos, claros y medibles, por lo cual es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido.
          .row
            p #[b Aplicación de técnicas]
              br
              |Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos reflejando con el argumento escrito.
          .row
            p #[b Comunicación correcta de los resultados]
              br
              |En los análisis de resultados, el determinante es saber mostrar la información, para lo cual tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
</template>
.ms-auto
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

<style lang="sass">
.slyder-f
  .horizontal-scroll
    align-items: stretch !important
.slyler-t5
  .slyder-a__tipo-b
    .slyder-a__btn--atrs, .slyder-a__btn--sigt
      background-color: #FC8116
      color: white !important
    .slyder-a__bullets
      .slyder-a__bullets__item
        background-color: #FDD3AE
        border: none
      .slyder-a__bullets__item--active
        background-color: #FC8116
.container-img-edit-v3
  display: flex
  flex-wrap: wrap
  img
    margin-right: -160px
    position: relative
    margin-top: auto
    margin-bottom: auto
  .container-img-edit-v3-container
    background-color: #FFEAD8
    border-top-left-radius: 109px
    padding: 2rem
    padding-left: 200px
  @media (max-width: 991px)
    img
      margin-right: auto
      margin-left: auto
    .container-img-edit-v3-container
      padding-left: 2rem
</style>
