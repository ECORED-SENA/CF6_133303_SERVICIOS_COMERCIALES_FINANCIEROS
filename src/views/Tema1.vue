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

    .row.mb-5
      .col-md-6.col-lg-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-1.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4(style="background-color:#FDAB64;")
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Pública
            p.text-center Propiedad del Estado. 
            p.text-center El recurso económico proviene del Estado.
      .col-md-6.col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/temas/tema1/img-2.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4(style="background-color:#85D161;")
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Privada
            p.text-center Propiedad de particular o una sociedad privada.
            p.text-center El recurso económico proviene del capital privado.
      .col-md-6.col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/temas/tema1/img-3.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4(style="background-color:#E3F56C;")
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Mixta
            p.text-center Propiedad compartida.
            p.text-center El recurso proviene del capital público y privado.

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
    .tarjeta.tarjeta--azul.bg3.p-1.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        DialogoChat.color-secundario(:dialogo="dialogoChat")  
        DialogoChat.color-secundario(:dialogo="dialogoChat1")  
        DialogoChat.color-secundario(:dialogo="dialogoChat2")
        DialogoChat.color-secundario(:dialogo="dialogoChat3")
    
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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/t5Zolrhc0vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
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

    .d-flex.flex-wrap.mb-5.p-3(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg.svg')})`}" style="background-repeat: no-repeat")
      .col-11.col-xl-5.ms-auto.order-2.order-xl-1
        .tarjeta-hover
          <svg style="width: 76px; margin-left: -54px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectángulo_297912" data-name="Rectángulo 297912" width="38.039" height="38.035" fill="#12263f"/>
              </clipPath>
            </defs>
            <g id="Grupo_879797" data-name="Grupo 879797" transform="translate(-296 -4485)">
              <g id="Elipse_7532" data-name="Elipse 7532" transform="translate(296 4485)" fill="#ffead8" stroke="#fc8116" stroke-width="2">
                <circle cx="38" cy="38" r="38" stroke="none"/>
                <circle cx="38" cy="38" r="37" fill="none"/>
              </g>
              <g id="Grupo_878149" data-name="Grupo 878149" transform="translate(314.98 4500)">
                <g id="Grupo_878147" data-name="Grupo 878147" clip-path="url(#clip-path)">
                  <path id="Trazado_599982" data-name="Trazado 599982" d="M38.039,126.279a.814.814,0,0,1-.783.377q-18.236-.01-36.473-.006c-.074,0-.149,0-.223,0a.562.562,0,0,1-.555-.539.549.549,0,0,1,.559-.568c.431-.014.862,0,1.337,0v-.468q0-2.4,0-4.79a2.651,2.651,0,0,1,.018-.407.494.494,0,0,1,.507-.451.5.5,0,0,1,.561.431,2.013,2.013,0,0,1,.026.406q0,2.414,0,4.828v.427H8.974V125.1c0-1.312,0-2.624,0-3.936,0-.8.358-1.166,1.154-1.168q5.051-.008,10.1,0a1.028,1.028,0,0,1,1.152,1.18c0,1.435,0,2.869,0,4.33h5.928V112.2H3.017v.438q0,2.4,0,4.79a2.048,2.048,0,0,1-.031.443.5.5,0,0,1-.539.413.5.5,0,0,1-.521-.435,2.267,2.267,0,0,1-.022-.407q0-2.414,0-4.827v-.446c-.315,0-.6.006-.876,0A.975.975,0,0,1,0,111.135c-.006-.309,0-.619,0-.928a.984.984,0,0,1,1.087-1.078c1.671,0,3.343,0,5.014,0h.448v-.462q0-3.324,0-6.647a1.588,1.588,0,0,1,1.757-1.777c.371,0,.743-.009,1.114,0,.388.012.61.224.61.554s-.222.539-.612.552c-.408.013-.817,0-1.226.006-.326,0-.526.157-.526.489q0,3.6.009,7.2c0,.01.013.02.039.054h14.95v-.386q0-3.323,0-6.647c0-.621-.091-.714-.7-.714h-9.88a2.823,2.823,0,0,1-.481-.024.541.541,0,0,1-.027-1.058,1.779,1.779,0,0,1,.405-.03q5.014,0,10.028,0a1.577,1.577,0,0,1,1.773,1.788q0,3.324,0,6.647v.426H24.93l.763-7.706c-.11-.021-.2-.042-.3-.057a.874.874,0,0,1-.8-.872c-.014-.4-.014-.792,0-1.188a.87.87,0,0,1,.8-.874,3.064,3.064,0,0,1,.407-.021q3.881,0,7.763,0c.937,0,1.222.285,1.223,1.214q0,.26,0,.52c0,.9-.168,1.1-1.087,1.278.041.469.077.944.124,1.418q.59,5.983,1.184,11.966.338,3.416.676,6.832c.044.45-.119.707-.466.746s-.579-.164-.634-.608-.092-.908-.139-1.39H28.479v5.151h6.464c-.038-.448-.08-.876-.111-1.305s.138-.67.473-.708.584.186.633.617c.053.464.091.93.138,1.421.416,0,.8.017,1.18-.005a.775.775,0,0,1,.782.376Zm-11.222-24.9-.512,5.161h6.77l-.512-5.161ZM34.329,119.2l-.514-5.158H28.471V119.2Zm-.629-6.323-.514-5.2h-1.6c-1.683,0-3.367,0-5.05.007-.122,0-.339.079-.35.147-.068.418-.09.845-.129,1.3h.425c.916,0,1.832,0,2.748,0a.986.986,0,0,1,1.105,1.095c.005.309.009.619,0,.928a.965.965,0,0,1-1.034,1.014c-.279.006-.559,0-.822,0v.709Zm-32.574-1.85H29.2v-.754H1.127Zm8.978,14.489h4.5v-4.375h-4.5Zm10.148-4.376H15.768v4.389h4.486Zm5.465-20.923H33.65v-.684H25.718Z" transform="translate(0 -88.621)" fill="#12263f"/>
                  <path id="Trazado_599983" data-name="Trazado 599983" d="M252.885,0a.868.868,0,0,1,.361.8c-.014,1.014-.008,2.028,0,3.043a1.1,1.1,0,0,0,1.147,1.214,2.2,2.2,0,0,1,2.136,2.219c.005.4.007.792,0,1.187a.557.557,0,1,1-1.11.01c-.01-.383,0-.767,0-1.15a1.091,1.091,0,0,0-1.1-1.154,2.187,2.187,0,0,1-2.187-2.278c-.008-1.051.008-2.1-.007-3.154A.726.726,0,0,1,252.514,0Z" transform="translate(-227.104)" fill="#12263f"/>
                  <path id="Trazado_599984" data-name="Trazado 599984" d="M306.165,0a.831.831,0,0,1,.371.787c-.014,1.3-.005,2.594-.006,3.891a1.358,1.358,0,0,1-.013.3.525.525,0,0,1-.573.467.493.493,0,0,1-.52-.516c-.011-1.47-.017-2.94.012-4.409,0-.174.233-.343.358-.515Z" transform="translate(-275.11)" fill="#12263f"/>
                  <path id="Trazado_599985" data-name="Trazado 599985" d="M221.24,253.458c0-.5-.009-.99,0-1.485a.939.939,0,0,1,1.009-1.033q1.076-.028,2.154,0a.945.945,0,0,1,1.012,1.035q.017,1.485,0,2.971a.944.944,0,0,1-1.051,1.026q-1.04.01-2.08,0a.936.936,0,0,1-1.044-1.029c-.011-.495,0-.99,0-1.485m3.05-1.41h-1.249c-.687,0-.687,0-.687.682v2.1h1.936Z" transform="translate(-199.284 -226.027)" fill="#12263f"/>
                  <path id="Trazado_599986" data-name="Trazado 599986" d="M102,253.441c0-.47,0-.941,0-1.411a.963.963,0,0,1,1.039-1.086q1.058-.024,2.117,0a.935.935,0,0,1,1.021,1.021q.021,1.5,0,3.008a.926.926,0,0,1-1.03,1q-1.058.011-2.117,0A.948.948,0,0,1,102,254.964c0-.025,0-.05,0-.074v-1.448m3.037-1.354h-1.891v2.762h1.891Z" transform="translate(-91.874 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599987" data-name="Trazado 599987" d="M165.841,253.466c0,.507.006,1.015,0,1.523a.919.919,0,0,1-.969.987q-1.114.018-2.228,0a.916.916,0,0,1-.967-.988q-.011-1.522,0-3.045a.91.91,0,0,1,.932-.988c.767-.028,1.536-.028,2.3,0a.911.911,0,0,1,.931.989c.008.507,0,1.015,0,1.523m-1.126-1.365h-1.9v2.738h1.9Z" transform="translate(-145.628 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599988" data-name="Trazado 599988" d="M42.533,253.493c0-.52-.009-1.04,0-1.56a.884.884,0,0,1,.884-.952c.791-.034,1.585-.034,2.375,0a.9.9,0,0,1,.905.978q.015,1.522,0,3.045a.93.93,0,0,1-1,1q-1.1.015-2.191,0a.92.92,0,0,1-.974-.982c0-.025,0-.05,0-.074q0-.724,0-1.448Zm3.042-1.39h-1.9v2.757h1.9Z" transform="translate(-38.309 -226.055)" fill="#12263f"/>
                  <path id="Trazado_599989" data-name="Trazado 599989" d="M94.908,143.839a1.489,1.489,0,0,1-.445,1.106c-.615.625-1.23,1.251-1.861,1.86a1.559,1.559,0,0,1-2.2.022,1.54,1.54,0,0,1-.009-2.225q.913-.947,1.862-1.859a1.477,1.477,0,0,1,1.709-.324,1.5,1.5,0,0,1,.946,1.421m-1.768.88c.206-.218.383-.388.54-.576a.419.419,0,0,0-.011-.6.409.409,0,0,0-.6-.037c-.209.164-.407.341-.571.479l.639.734m-1.485.128a3.167,3.167,0,0,0-.5.6.664.664,0,0,0,.023.555.376.376,0,0,0,.584.053c.206-.164.384-.362.572-.542l-.677-.663" transform="translate(-80.998 -128.158)" fill="#12263f"/>
                  <path id="Trazado_599990" data-name="Trazado 599990" d="M311.851,22.642c0,.458.012.915,0,1.372a1.647,1.647,0,0,1-1.619,1.607c-.272.008-.544,0-.816,0-.509.005-.7.189-.7.687,0,.222.008.446,0,.668a.551.551,0,0,1-.581.584.537.537,0,0,1-.527-.592c-.008-.284-.008-.569,0-.853a1.654,1.654,0,0,1,1.588-1.6c.3-.014.594,0,.89-.006.459-.007.657-.2.661-.652.006-.878-.013-1.756.014-2.633A.866.866,0,0,1,311,20.65a.522.522,0,0,1,.844.434c.02.518,0,1.038,0,1.558" transform="translate(-277.07 -18.493)" fill="#12263f"/>
                  <path id="Trazado_599991" data-name="Trazado 599991" d="M158.011,148.111c.828,0,1.656,0,2.484,0,.44,0,.689.2.693.544s-.251.566-.679.567q-2.521.005-5.042,0c-.439,0-.684-.206-.688-.553s.235-.557.674-.558c.853,0,1.706,0,2.558,0" transform="translate(-139.42 -133.414)" fill="#12263f"/>
                  <path id="Trazado_599992" data-name="Trazado 599992" d="M158,175.764c.84,0,1.681,0,2.521,0,.43,0,.684.218.676.561s-.252.548-.66.55q-2.558.008-5.116,0c-.4,0-.639-.229-.633-.57s.233-.538.653-.54c.853,0,1.705,0,2.558,0" transform="translate(-139.426 -158.322)" fill="#12263f"/>
                  <path id="Trazado_599993" data-name="Trazado 599993" d="M276.123,18.374c0-.21-.008-.42,0-.63a.546.546,0,0,1,1.09-.051,10.775,10.775,0,0,1-.006,1.442.489.489,0,0,1-.567.463.5.5,0,0,1-.515-.521c-.012-.234,0-.469,0-.7" transform="translate(-248.721 -15.495)" fill="#12263f"/>
                </g>
              </g>
            </g>
          </svg>
          p.ps-4.mb-0.col #[b Microempresas]
            br
            |Son aquellas  en las que su número de funcionarios no supera los 10.
        .tarjeta-hover
          <svg style="width: 76px; margin-left: -54px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectángulo_297912" data-name="Rectángulo 297912" width="38.039" height="38.035" fill="#12263f"/>
              </clipPath>
            </defs>
            <g id="Grupo_879797" data-name="Grupo 879797" transform="translate(-296 -4485)">
              <g id="Elipse_7532" data-name="Elipse 7532" transform="translate(296 4485)" fill="#ffead8" stroke="#fc8116" stroke-width="2">
                <circle cx="38" cy="38" r="38" stroke="none"/>
                <circle cx="38" cy="38" r="37" fill="none"/>
              </g>
              <g id="Grupo_878149" data-name="Grupo 878149" transform="translate(314.98 4500)">
                <g id="Grupo_878147" data-name="Grupo 878147" clip-path="url(#clip-path)">
                  <path id="Trazado_599982" data-name="Trazado 599982" d="M38.039,126.279a.814.814,0,0,1-.783.377q-18.236-.01-36.473-.006c-.074,0-.149,0-.223,0a.562.562,0,0,1-.555-.539.549.549,0,0,1,.559-.568c.431-.014.862,0,1.337,0v-.468q0-2.4,0-4.79a2.651,2.651,0,0,1,.018-.407.494.494,0,0,1,.507-.451.5.5,0,0,1,.561.431,2.013,2.013,0,0,1,.026.406q0,2.414,0,4.828v.427H8.974V125.1c0-1.312,0-2.624,0-3.936,0-.8.358-1.166,1.154-1.168q5.051-.008,10.1,0a1.028,1.028,0,0,1,1.152,1.18c0,1.435,0,2.869,0,4.33h5.928V112.2H3.017v.438q0,2.4,0,4.79a2.048,2.048,0,0,1-.031.443.5.5,0,0,1-.539.413.5.5,0,0,1-.521-.435,2.267,2.267,0,0,1-.022-.407q0-2.414,0-4.827v-.446c-.315,0-.6.006-.876,0A.975.975,0,0,1,0,111.135c-.006-.309,0-.619,0-.928a.984.984,0,0,1,1.087-1.078c1.671,0,3.343,0,5.014,0h.448v-.462q0-3.324,0-6.647a1.588,1.588,0,0,1,1.757-1.777c.371,0,.743-.009,1.114,0,.388.012.61.224.61.554s-.222.539-.612.552c-.408.013-.817,0-1.226.006-.326,0-.526.157-.526.489q0,3.6.009,7.2c0,.01.013.02.039.054h14.95v-.386q0-3.323,0-6.647c0-.621-.091-.714-.7-.714h-9.88a2.823,2.823,0,0,1-.481-.024.541.541,0,0,1-.027-1.058,1.779,1.779,0,0,1,.405-.03q5.014,0,10.028,0a1.577,1.577,0,0,1,1.773,1.788q0,3.324,0,6.647v.426H24.93l.763-7.706c-.11-.021-.2-.042-.3-.057a.874.874,0,0,1-.8-.872c-.014-.4-.014-.792,0-1.188a.87.87,0,0,1,.8-.874,3.064,3.064,0,0,1,.407-.021q3.881,0,7.763,0c.937,0,1.222.285,1.223,1.214q0,.26,0,.52c0,.9-.168,1.1-1.087,1.278.041.469.077.944.124,1.418q.59,5.983,1.184,11.966.338,3.416.676,6.832c.044.45-.119.707-.466.746s-.579-.164-.634-.608-.092-.908-.139-1.39H28.479v5.151h6.464c-.038-.448-.08-.876-.111-1.305s.138-.67.473-.708.584.186.633.617c.053.464.091.93.138,1.421.416,0,.8.017,1.18-.005a.775.775,0,0,1,.782.376Zm-11.222-24.9-.512,5.161h6.77l-.512-5.161ZM34.329,119.2l-.514-5.158H28.471V119.2Zm-.629-6.323-.514-5.2h-1.6c-1.683,0-3.367,0-5.05.007-.122,0-.339.079-.35.147-.068.418-.09.845-.129,1.3h.425c.916,0,1.832,0,2.748,0a.986.986,0,0,1,1.105,1.095c.005.309.009.619,0,.928a.965.965,0,0,1-1.034,1.014c-.279.006-.559,0-.822,0v.709Zm-32.574-1.85H29.2v-.754H1.127Zm8.978,14.489h4.5v-4.375h-4.5Zm10.148-4.376H15.768v4.389h4.486Zm5.465-20.923H33.65v-.684H25.718Z" transform="translate(0 -88.621)" fill="#12263f"/>
                  <path id="Trazado_599983" data-name="Trazado 599983" d="M252.885,0a.868.868,0,0,1,.361.8c-.014,1.014-.008,2.028,0,3.043a1.1,1.1,0,0,0,1.147,1.214,2.2,2.2,0,0,1,2.136,2.219c.005.4.007.792,0,1.187a.557.557,0,1,1-1.11.01c-.01-.383,0-.767,0-1.15a1.091,1.091,0,0,0-1.1-1.154,2.187,2.187,0,0,1-2.187-2.278c-.008-1.051.008-2.1-.007-3.154A.726.726,0,0,1,252.514,0Z" transform="translate(-227.104)" fill="#12263f"/>
                  <path id="Trazado_599984" data-name="Trazado 599984" d="M306.165,0a.831.831,0,0,1,.371.787c-.014,1.3-.005,2.594-.006,3.891a1.358,1.358,0,0,1-.013.3.525.525,0,0,1-.573.467.493.493,0,0,1-.52-.516c-.011-1.47-.017-2.94.012-4.409,0-.174.233-.343.358-.515Z" transform="translate(-275.11)" fill="#12263f"/>
                  <path id="Trazado_599985" data-name="Trazado 599985" d="M221.24,253.458c0-.5-.009-.99,0-1.485a.939.939,0,0,1,1.009-1.033q1.076-.028,2.154,0a.945.945,0,0,1,1.012,1.035q.017,1.485,0,2.971a.944.944,0,0,1-1.051,1.026q-1.04.01-2.08,0a.936.936,0,0,1-1.044-1.029c-.011-.495,0-.99,0-1.485m3.05-1.41h-1.249c-.687,0-.687,0-.687.682v2.1h1.936Z" transform="translate(-199.284 -226.027)" fill="#12263f"/>
                  <path id="Trazado_599986" data-name="Trazado 599986" d="M102,253.441c0-.47,0-.941,0-1.411a.963.963,0,0,1,1.039-1.086q1.058-.024,2.117,0a.935.935,0,0,1,1.021,1.021q.021,1.5,0,3.008a.926.926,0,0,1-1.03,1q-1.058.011-2.117,0A.948.948,0,0,1,102,254.964c0-.025,0-.05,0-.074v-1.448m3.037-1.354h-1.891v2.762h1.891Z" transform="translate(-91.874 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599987" data-name="Trazado 599987" d="M165.841,253.466c0,.507.006,1.015,0,1.523a.919.919,0,0,1-.969.987q-1.114.018-2.228,0a.916.916,0,0,1-.967-.988q-.011-1.522,0-3.045a.91.91,0,0,1,.932-.988c.767-.028,1.536-.028,2.3,0a.911.911,0,0,1,.931.989c.008.507,0,1.015,0,1.523m-1.126-1.365h-1.9v2.738h1.9Z" transform="translate(-145.628 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599988" data-name="Trazado 599988" d="M42.533,253.493c0-.52-.009-1.04,0-1.56a.884.884,0,0,1,.884-.952c.791-.034,1.585-.034,2.375,0a.9.9,0,0,1,.905.978q.015,1.522,0,3.045a.93.93,0,0,1-1,1q-1.1.015-2.191,0a.92.92,0,0,1-.974-.982c0-.025,0-.05,0-.074q0-.724,0-1.448Zm3.042-1.39h-1.9v2.757h1.9Z" transform="translate(-38.309 -226.055)" fill="#12263f"/>
                  <path id="Trazado_599989" data-name="Trazado 599989" d="M94.908,143.839a1.489,1.489,0,0,1-.445,1.106c-.615.625-1.23,1.251-1.861,1.86a1.559,1.559,0,0,1-2.2.022,1.54,1.54,0,0,1-.009-2.225q.913-.947,1.862-1.859a1.477,1.477,0,0,1,1.709-.324,1.5,1.5,0,0,1,.946,1.421m-1.768.88c.206-.218.383-.388.54-.576a.419.419,0,0,0-.011-.6.409.409,0,0,0-.6-.037c-.209.164-.407.341-.571.479l.639.734m-1.485.128a3.167,3.167,0,0,0-.5.6.664.664,0,0,0,.023.555.376.376,0,0,0,.584.053c.206-.164.384-.362.572-.542l-.677-.663" transform="translate(-80.998 -128.158)" fill="#12263f"/>
                  <path id="Trazado_599990" data-name="Trazado 599990" d="M311.851,22.642c0,.458.012.915,0,1.372a1.647,1.647,0,0,1-1.619,1.607c-.272.008-.544,0-.816,0-.509.005-.7.189-.7.687,0,.222.008.446,0,.668a.551.551,0,0,1-.581.584.537.537,0,0,1-.527-.592c-.008-.284-.008-.569,0-.853a1.654,1.654,0,0,1,1.588-1.6c.3-.014.594,0,.89-.006.459-.007.657-.2.661-.652.006-.878-.013-1.756.014-2.633A.866.866,0,0,1,311,20.65a.522.522,0,0,1,.844.434c.02.518,0,1.038,0,1.558" transform="translate(-277.07 -18.493)" fill="#12263f"/>
                  <path id="Trazado_599991" data-name="Trazado 599991" d="M158.011,148.111c.828,0,1.656,0,2.484,0,.44,0,.689.2.693.544s-.251.566-.679.567q-2.521.005-5.042,0c-.439,0-.684-.206-.688-.553s.235-.557.674-.558c.853,0,1.706,0,2.558,0" transform="translate(-139.42 -133.414)" fill="#12263f"/>
                  <path id="Trazado_599992" data-name="Trazado 599992" d="M158,175.764c.84,0,1.681,0,2.521,0,.43,0,.684.218.676.561s-.252.548-.66.55q-2.558.008-5.116,0c-.4,0-.639-.229-.633-.57s.233-.538.653-.54c.853,0,1.705,0,2.558,0" transform="translate(-139.426 -158.322)" fill="#12263f"/>
                  <path id="Trazado_599993" data-name="Trazado 599993" d="M276.123,18.374c0-.21-.008-.42,0-.63a.546.546,0,0,1,1.09-.051,10.775,10.775,0,0,1-.006,1.442.489.489,0,0,1-.567.463.5.5,0,0,1-.515-.521c-.012-.234,0-.469,0-.7" transform="translate(-248.721 -15.495)" fill="#12263f"/>
                </g>
              </g>
            </g>
          </svg>
          p.ps-4.mb-0.col #[b Pequeña]
            br
            |Son aquellas en las que su número no supera los 50 funcionarios.
        .tarjeta-hover
          <svg style="width: 76px; margin-left: -54px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectángulo_297912" data-name="Rectángulo 297912" width="38.039" height="38.035" fill="#12263f"/>
              </clipPath>
            </defs>
            <g id="Grupo_879797" data-name="Grupo 879797" transform="translate(-296 -4485)">
              <g id="Elipse_7532" data-name="Elipse 7532" transform="translate(296 4485)" fill="#ffead8" stroke="#fc8116" stroke-width="2">
                <circle cx="38" cy="38" r="38" stroke="none"/>
                <circle cx="38" cy="38" r="37" fill="none"/>
              </g>
              <g id="Grupo_878149" data-name="Grupo 878149" transform="translate(314.98 4500)">
                <g id="Grupo_878147" data-name="Grupo 878147" clip-path="url(#clip-path)">
                  <path id="Trazado_599982" data-name="Trazado 599982" d="M38.039,126.279a.814.814,0,0,1-.783.377q-18.236-.01-36.473-.006c-.074,0-.149,0-.223,0a.562.562,0,0,1-.555-.539.549.549,0,0,1,.559-.568c.431-.014.862,0,1.337,0v-.468q0-2.4,0-4.79a2.651,2.651,0,0,1,.018-.407.494.494,0,0,1,.507-.451.5.5,0,0,1,.561.431,2.013,2.013,0,0,1,.026.406q0,2.414,0,4.828v.427H8.974V125.1c0-1.312,0-2.624,0-3.936,0-.8.358-1.166,1.154-1.168q5.051-.008,10.1,0a1.028,1.028,0,0,1,1.152,1.18c0,1.435,0,2.869,0,4.33h5.928V112.2H3.017v.438q0,2.4,0,4.79a2.048,2.048,0,0,1-.031.443.5.5,0,0,1-.539.413.5.5,0,0,1-.521-.435,2.267,2.267,0,0,1-.022-.407q0-2.414,0-4.827v-.446c-.315,0-.6.006-.876,0A.975.975,0,0,1,0,111.135c-.006-.309,0-.619,0-.928a.984.984,0,0,1,1.087-1.078c1.671,0,3.343,0,5.014,0h.448v-.462q0-3.324,0-6.647a1.588,1.588,0,0,1,1.757-1.777c.371,0,.743-.009,1.114,0,.388.012.61.224.61.554s-.222.539-.612.552c-.408.013-.817,0-1.226.006-.326,0-.526.157-.526.489q0,3.6.009,7.2c0,.01.013.02.039.054h14.95v-.386q0-3.323,0-6.647c0-.621-.091-.714-.7-.714h-9.88a2.823,2.823,0,0,1-.481-.024.541.541,0,0,1-.027-1.058,1.779,1.779,0,0,1,.405-.03q5.014,0,10.028,0a1.577,1.577,0,0,1,1.773,1.788q0,3.324,0,6.647v.426H24.93l.763-7.706c-.11-.021-.2-.042-.3-.057a.874.874,0,0,1-.8-.872c-.014-.4-.014-.792,0-1.188a.87.87,0,0,1,.8-.874,3.064,3.064,0,0,1,.407-.021q3.881,0,7.763,0c.937,0,1.222.285,1.223,1.214q0,.26,0,.52c0,.9-.168,1.1-1.087,1.278.041.469.077.944.124,1.418q.59,5.983,1.184,11.966.338,3.416.676,6.832c.044.45-.119.707-.466.746s-.579-.164-.634-.608-.092-.908-.139-1.39H28.479v5.151h6.464c-.038-.448-.08-.876-.111-1.305s.138-.67.473-.708.584.186.633.617c.053.464.091.93.138,1.421.416,0,.8.017,1.18-.005a.775.775,0,0,1,.782.376Zm-11.222-24.9-.512,5.161h6.77l-.512-5.161ZM34.329,119.2l-.514-5.158H28.471V119.2Zm-.629-6.323-.514-5.2h-1.6c-1.683,0-3.367,0-5.05.007-.122,0-.339.079-.35.147-.068.418-.09.845-.129,1.3h.425c.916,0,1.832,0,2.748,0a.986.986,0,0,1,1.105,1.095c.005.309.009.619,0,.928a.965.965,0,0,1-1.034,1.014c-.279.006-.559,0-.822,0v.709Zm-32.574-1.85H29.2v-.754H1.127Zm8.978,14.489h4.5v-4.375h-4.5Zm10.148-4.376H15.768v4.389h4.486Zm5.465-20.923H33.65v-.684H25.718Z" transform="translate(0 -88.621)" fill="#12263f"/>
                  <path id="Trazado_599983" data-name="Trazado 599983" d="M252.885,0a.868.868,0,0,1,.361.8c-.014,1.014-.008,2.028,0,3.043a1.1,1.1,0,0,0,1.147,1.214,2.2,2.2,0,0,1,2.136,2.219c.005.4.007.792,0,1.187a.557.557,0,1,1-1.11.01c-.01-.383,0-.767,0-1.15a1.091,1.091,0,0,0-1.1-1.154,2.187,2.187,0,0,1-2.187-2.278c-.008-1.051.008-2.1-.007-3.154A.726.726,0,0,1,252.514,0Z" transform="translate(-227.104)" fill="#12263f"/>
                  <path id="Trazado_599984" data-name="Trazado 599984" d="M306.165,0a.831.831,0,0,1,.371.787c-.014,1.3-.005,2.594-.006,3.891a1.358,1.358,0,0,1-.013.3.525.525,0,0,1-.573.467.493.493,0,0,1-.52-.516c-.011-1.47-.017-2.94.012-4.409,0-.174.233-.343.358-.515Z" transform="translate(-275.11)" fill="#12263f"/>
                  <path id="Trazado_599985" data-name="Trazado 599985" d="M221.24,253.458c0-.5-.009-.99,0-1.485a.939.939,0,0,1,1.009-1.033q1.076-.028,2.154,0a.945.945,0,0,1,1.012,1.035q.017,1.485,0,2.971a.944.944,0,0,1-1.051,1.026q-1.04.01-2.08,0a.936.936,0,0,1-1.044-1.029c-.011-.495,0-.99,0-1.485m3.05-1.41h-1.249c-.687,0-.687,0-.687.682v2.1h1.936Z" transform="translate(-199.284 -226.027)" fill="#12263f"/>
                  <path id="Trazado_599986" data-name="Trazado 599986" d="M102,253.441c0-.47,0-.941,0-1.411a.963.963,0,0,1,1.039-1.086q1.058-.024,2.117,0a.935.935,0,0,1,1.021,1.021q.021,1.5,0,3.008a.926.926,0,0,1-1.03,1q-1.058.011-2.117,0A.948.948,0,0,1,102,254.964c0-.025,0-.05,0-.074v-1.448m3.037-1.354h-1.891v2.762h1.891Z" transform="translate(-91.874 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599987" data-name="Trazado 599987" d="M165.841,253.466c0,.507.006,1.015,0,1.523a.919.919,0,0,1-.969.987q-1.114.018-2.228,0a.916.916,0,0,1-.967-.988q-.011-1.522,0-3.045a.91.91,0,0,1,.932-.988c.767-.028,1.536-.028,2.3,0a.911.911,0,0,1,.931.989c.008.507,0,1.015,0,1.523m-1.126-1.365h-1.9v2.738h1.9Z" transform="translate(-145.628 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599988" data-name="Trazado 599988" d="M42.533,253.493c0-.52-.009-1.04,0-1.56a.884.884,0,0,1,.884-.952c.791-.034,1.585-.034,2.375,0a.9.9,0,0,1,.905.978q.015,1.522,0,3.045a.93.93,0,0,1-1,1q-1.1.015-2.191,0a.92.92,0,0,1-.974-.982c0-.025,0-.05,0-.074q0-.724,0-1.448Zm3.042-1.39h-1.9v2.757h1.9Z" transform="translate(-38.309 -226.055)" fill="#12263f"/>
                  <path id="Trazado_599989" data-name="Trazado 599989" d="M94.908,143.839a1.489,1.489,0,0,1-.445,1.106c-.615.625-1.23,1.251-1.861,1.86a1.559,1.559,0,0,1-2.2.022,1.54,1.54,0,0,1-.009-2.225q.913-.947,1.862-1.859a1.477,1.477,0,0,1,1.709-.324,1.5,1.5,0,0,1,.946,1.421m-1.768.88c.206-.218.383-.388.54-.576a.419.419,0,0,0-.011-.6.409.409,0,0,0-.6-.037c-.209.164-.407.341-.571.479l.639.734m-1.485.128a3.167,3.167,0,0,0-.5.6.664.664,0,0,0,.023.555.376.376,0,0,0,.584.053c.206-.164.384-.362.572-.542l-.677-.663" transform="translate(-80.998 -128.158)" fill="#12263f"/>
                  <path id="Trazado_599990" data-name="Trazado 599990" d="M311.851,22.642c0,.458.012.915,0,1.372a1.647,1.647,0,0,1-1.619,1.607c-.272.008-.544,0-.816,0-.509.005-.7.189-.7.687,0,.222.008.446,0,.668a.551.551,0,0,1-.581.584.537.537,0,0,1-.527-.592c-.008-.284-.008-.569,0-.853a1.654,1.654,0,0,1,1.588-1.6c.3-.014.594,0,.89-.006.459-.007.657-.2.661-.652.006-.878-.013-1.756.014-2.633A.866.866,0,0,1,311,20.65a.522.522,0,0,1,.844.434c.02.518,0,1.038,0,1.558" transform="translate(-277.07 -18.493)" fill="#12263f"/>
                  <path id="Trazado_599991" data-name="Trazado 599991" d="M158.011,148.111c.828,0,1.656,0,2.484,0,.44,0,.689.2.693.544s-.251.566-.679.567q-2.521.005-5.042,0c-.439,0-.684-.206-.688-.553s.235-.557.674-.558c.853,0,1.706,0,2.558,0" transform="translate(-139.42 -133.414)" fill="#12263f"/>
                  <path id="Trazado_599992" data-name="Trazado 599992" d="M158,175.764c.84,0,1.681,0,2.521,0,.43,0,.684.218.676.561s-.252.548-.66.55q-2.558.008-5.116,0c-.4,0-.639-.229-.633-.57s.233-.538.653-.54c.853,0,1.705,0,2.558,0" transform="translate(-139.426 -158.322)" fill="#12263f"/>
                  <path id="Trazado_599993" data-name="Trazado 599993" d="M276.123,18.374c0-.21-.008-.42,0-.63a.546.546,0,0,1,1.09-.051,10.775,10.775,0,0,1-.006,1.442.489.489,0,0,1-.567.463.5.5,0,0,1-.515-.521c-.012-.234,0-.469,0-.7" transform="translate(-248.721 -15.495)" fill="#12263f"/>
                </g>
              </g>
            </g>
          </svg>
          p.ps-4.mb-0.col #[b Mediana]
            br
            |Son aquellas en las  que trabajan entre 51 a 250 funcionarios.
        .tarjeta-hover
          <svg style="width: 76px; margin-left: -54px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectángulo_297912" data-name="Rectángulo 297912" width="38.039" height="38.035" fill="#12263f"/>
              </clipPath>
            </defs>
            <g id="Grupo_879797" data-name="Grupo 879797" transform="translate(-296 -4485)">
              <g id="Elipse_7532" data-name="Elipse 7532" transform="translate(296 4485)" fill="#ffead8" stroke="#fc8116" stroke-width="2">
                <circle cx="38" cy="38" r="38" stroke="none"/>
                <circle cx="38" cy="38" r="37" fill="none"/>
              </g>
              <g id="Grupo_878149" data-name="Grupo 878149" transform="translate(314.98 4500)">
                <g id="Grupo_878147" data-name="Grupo 878147" clip-path="url(#clip-path)">
                  <path id="Trazado_599982" data-name="Trazado 599982" d="M38.039,126.279a.814.814,0,0,1-.783.377q-18.236-.01-36.473-.006c-.074,0-.149,0-.223,0a.562.562,0,0,1-.555-.539.549.549,0,0,1,.559-.568c.431-.014.862,0,1.337,0v-.468q0-2.4,0-4.79a2.651,2.651,0,0,1,.018-.407.494.494,0,0,1,.507-.451.5.5,0,0,1,.561.431,2.013,2.013,0,0,1,.026.406q0,2.414,0,4.828v.427H8.974V125.1c0-1.312,0-2.624,0-3.936,0-.8.358-1.166,1.154-1.168q5.051-.008,10.1,0a1.028,1.028,0,0,1,1.152,1.18c0,1.435,0,2.869,0,4.33h5.928V112.2H3.017v.438q0,2.4,0,4.79a2.048,2.048,0,0,1-.031.443.5.5,0,0,1-.539.413.5.5,0,0,1-.521-.435,2.267,2.267,0,0,1-.022-.407q0-2.414,0-4.827v-.446c-.315,0-.6.006-.876,0A.975.975,0,0,1,0,111.135c-.006-.309,0-.619,0-.928a.984.984,0,0,1,1.087-1.078c1.671,0,3.343,0,5.014,0h.448v-.462q0-3.324,0-6.647a1.588,1.588,0,0,1,1.757-1.777c.371,0,.743-.009,1.114,0,.388.012.61.224.61.554s-.222.539-.612.552c-.408.013-.817,0-1.226.006-.326,0-.526.157-.526.489q0,3.6.009,7.2c0,.01.013.02.039.054h14.95v-.386q0-3.323,0-6.647c0-.621-.091-.714-.7-.714h-9.88a2.823,2.823,0,0,1-.481-.024.541.541,0,0,1-.027-1.058,1.779,1.779,0,0,1,.405-.03q5.014,0,10.028,0a1.577,1.577,0,0,1,1.773,1.788q0,3.324,0,6.647v.426H24.93l.763-7.706c-.11-.021-.2-.042-.3-.057a.874.874,0,0,1-.8-.872c-.014-.4-.014-.792,0-1.188a.87.87,0,0,1,.8-.874,3.064,3.064,0,0,1,.407-.021q3.881,0,7.763,0c.937,0,1.222.285,1.223,1.214q0,.26,0,.52c0,.9-.168,1.1-1.087,1.278.041.469.077.944.124,1.418q.59,5.983,1.184,11.966.338,3.416.676,6.832c.044.45-.119.707-.466.746s-.579-.164-.634-.608-.092-.908-.139-1.39H28.479v5.151h6.464c-.038-.448-.08-.876-.111-1.305s.138-.67.473-.708.584.186.633.617c.053.464.091.93.138,1.421.416,0,.8.017,1.18-.005a.775.775,0,0,1,.782.376Zm-11.222-24.9-.512,5.161h6.77l-.512-5.161ZM34.329,119.2l-.514-5.158H28.471V119.2Zm-.629-6.323-.514-5.2h-1.6c-1.683,0-3.367,0-5.05.007-.122,0-.339.079-.35.147-.068.418-.09.845-.129,1.3h.425c.916,0,1.832,0,2.748,0a.986.986,0,0,1,1.105,1.095c.005.309.009.619,0,.928a.965.965,0,0,1-1.034,1.014c-.279.006-.559,0-.822,0v.709Zm-32.574-1.85H29.2v-.754H1.127Zm8.978,14.489h4.5v-4.375h-4.5Zm10.148-4.376H15.768v4.389h4.486Zm5.465-20.923H33.65v-.684H25.718Z" transform="translate(0 -88.621)" fill="#12263f"/>
                  <path id="Trazado_599983" data-name="Trazado 599983" d="M252.885,0a.868.868,0,0,1,.361.8c-.014,1.014-.008,2.028,0,3.043a1.1,1.1,0,0,0,1.147,1.214,2.2,2.2,0,0,1,2.136,2.219c.005.4.007.792,0,1.187a.557.557,0,1,1-1.11.01c-.01-.383,0-.767,0-1.15a1.091,1.091,0,0,0-1.1-1.154,2.187,2.187,0,0,1-2.187-2.278c-.008-1.051.008-2.1-.007-3.154A.726.726,0,0,1,252.514,0Z" transform="translate(-227.104)" fill="#12263f"/>
                  <path id="Trazado_599984" data-name="Trazado 599984" d="M306.165,0a.831.831,0,0,1,.371.787c-.014,1.3-.005,2.594-.006,3.891a1.358,1.358,0,0,1-.013.3.525.525,0,0,1-.573.467.493.493,0,0,1-.52-.516c-.011-1.47-.017-2.94.012-4.409,0-.174.233-.343.358-.515Z" transform="translate(-275.11)" fill="#12263f"/>
                  <path id="Trazado_599985" data-name="Trazado 599985" d="M221.24,253.458c0-.5-.009-.99,0-1.485a.939.939,0,0,1,1.009-1.033q1.076-.028,2.154,0a.945.945,0,0,1,1.012,1.035q.017,1.485,0,2.971a.944.944,0,0,1-1.051,1.026q-1.04.01-2.08,0a.936.936,0,0,1-1.044-1.029c-.011-.495,0-.99,0-1.485m3.05-1.41h-1.249c-.687,0-.687,0-.687.682v2.1h1.936Z" transform="translate(-199.284 -226.027)" fill="#12263f"/>
                  <path id="Trazado_599986" data-name="Trazado 599986" d="M102,253.441c0-.47,0-.941,0-1.411a.963.963,0,0,1,1.039-1.086q1.058-.024,2.117,0a.935.935,0,0,1,1.021,1.021q.021,1.5,0,3.008a.926.926,0,0,1-1.03,1q-1.058.011-2.117,0A.948.948,0,0,1,102,254.964c0-.025,0-.05,0-.074v-1.448m3.037-1.354h-1.891v2.762h1.891Z" transform="translate(-91.874 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599987" data-name="Trazado 599987" d="M165.841,253.466c0,.507.006,1.015,0,1.523a.919.919,0,0,1-.969.987q-1.114.018-2.228,0a.916.916,0,0,1-.967-.988q-.011-1.522,0-3.045a.91.91,0,0,1,.932-.988c.767-.028,1.536-.028,2.3,0a.911.911,0,0,1,.931.989c.008.507,0,1.015,0,1.523m-1.126-1.365h-1.9v2.738h1.9Z" transform="translate(-145.628 -226.033)" fill="#12263f"/>
                  <path id="Trazado_599988" data-name="Trazado 599988" d="M42.533,253.493c0-.52-.009-1.04,0-1.56a.884.884,0,0,1,.884-.952c.791-.034,1.585-.034,2.375,0a.9.9,0,0,1,.905.978q.015,1.522,0,3.045a.93.93,0,0,1-1,1q-1.1.015-2.191,0a.92.92,0,0,1-.974-.982c0-.025,0-.05,0-.074q0-.724,0-1.448Zm3.042-1.39h-1.9v2.757h1.9Z" transform="translate(-38.309 -226.055)" fill="#12263f"/>
                  <path id="Trazado_599989" data-name="Trazado 599989" d="M94.908,143.839a1.489,1.489,0,0,1-.445,1.106c-.615.625-1.23,1.251-1.861,1.86a1.559,1.559,0,0,1-2.2.022,1.54,1.54,0,0,1-.009-2.225q.913-.947,1.862-1.859a1.477,1.477,0,0,1,1.709-.324,1.5,1.5,0,0,1,.946,1.421m-1.768.88c.206-.218.383-.388.54-.576a.419.419,0,0,0-.011-.6.409.409,0,0,0-.6-.037c-.209.164-.407.341-.571.479l.639.734m-1.485.128a3.167,3.167,0,0,0-.5.6.664.664,0,0,0,.023.555.376.376,0,0,0,.584.053c.206-.164.384-.362.572-.542l-.677-.663" transform="translate(-80.998 -128.158)" fill="#12263f"/>
                  <path id="Trazado_599990" data-name="Trazado 599990" d="M311.851,22.642c0,.458.012.915,0,1.372a1.647,1.647,0,0,1-1.619,1.607c-.272.008-.544,0-.816,0-.509.005-.7.189-.7.687,0,.222.008.446,0,.668a.551.551,0,0,1-.581.584.537.537,0,0,1-.527-.592c-.008-.284-.008-.569,0-.853a1.654,1.654,0,0,1,1.588-1.6c.3-.014.594,0,.89-.006.459-.007.657-.2.661-.652.006-.878-.013-1.756.014-2.633A.866.866,0,0,1,311,20.65a.522.522,0,0,1,.844.434c.02.518,0,1.038,0,1.558" transform="translate(-277.07 -18.493)" fill="#12263f"/>
                  <path id="Trazado_599991" data-name="Trazado 599991" d="M158.011,148.111c.828,0,1.656,0,2.484,0,.44,0,.689.2.693.544s-.251.566-.679.567q-2.521.005-5.042,0c-.439,0-.684-.206-.688-.553s.235-.557.674-.558c.853,0,1.706,0,2.558,0" transform="translate(-139.42 -133.414)" fill="#12263f"/>
                  <path id="Trazado_599992" data-name="Trazado 599992" d="M158,175.764c.84,0,1.681,0,2.521,0,.43,0,.684.218.676.561s-.252.548-.66.55q-2.558.008-5.116,0c-.4,0-.639-.229-.633-.57s.233-.538.653-.54c.853,0,1.705,0,2.558,0" transform="translate(-139.426 -158.322)" fill="#12263f"/>
                  <path id="Trazado_599993" data-name="Trazado 599993" d="M276.123,18.374c0-.21-.008-.42,0-.63a.546.546,0,0,1,1.09-.051,10.775,10.775,0,0,1-.006,1.442.489.489,0,0,1-.567.463.5.5,0,0,1-.515-.521c-.012-.234,0-.469,0-.7" transform="translate(-248.721 -15.495)" fill="#12263f"/>
                </g>
              </g>
            </g>
          </svg>
          p.ps-4.mb-0.col #[b Grandes]
            br
            |Son aquellas en la que el número de trabajadores es mayor a 251.
      .col-xl-5.order-1.order-xl-2.mx-auto
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
              p Para conocer más sobre el Decreto 957 de 2019. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015. Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011.” Le invito a revisar el siguiente documento: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Reglas y políticas de negocio
    
    p.mb-5 Establecer las guías y directivas para el cumplimiento de objetivos de la organización es trascendental para su funcionamiento; para ello, encontramos diferentes #[b directrices institucionales que pueden ser permanentes o temporales, como lo son:]

    .d-flex.flex-wrap.align-items-center.mx-auto.mb-5(style="background-color: #FFEAD8; border-top-left-radius: 112px" data-aos="fade-left")
      img.col-xl-5.mb-4.mb-xl-0.mt-auto(src="@/assets/curso/temas/tema1/img-7.png" style="max-width: 505px")
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
            img(src='@/assets/curso/temas/tema1/a-1.png')
      .row.col-xl-11.mx-auto(titulo="Formar coaliciones")
        .col-md-7.mb-4.mb-md-0
          p Es importante conseguir el apoyo de gente poderosa dentro de la organización, hay que trabajar en equipo y con compromiso que toque todas las áreas del negocio.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-2.png')
      .row.col-xl-11.mx-auto(titulo="Crear una visión clara de cambios")
        .col-md-7.mb-4.mb-md-0
          p Es fundamental crear una visión clara y comprensible, orientada a los beneficios del cambio, resaltando que: #[b #[em “Para crear esa visión, hay que centrarse en los valores fundamentales que son necesarios para el cambio y cómo será el futuro de la empresa después del cambio”.]]
            br
            br
            |Por lo que, para lograrlo se debe crear una estrategia que sea fácil de explicar a otras audiencias y practicar esa presentación de manera constante.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-3.png')
      .row.col-xl-11.mx-auto(titulo="Comunicar la visión")
        .col-md-7.mb-4.mb-md-0
          p Para lograr la cultura organizacional es vital incluirla en todas las comunicaciones internas posibles, mostrando, cómo es ser parte del cambio, dando ejemplo a los demás y cómo se hace este en el día a día, motivando a otros de manera permanente… 
            br
            br
            |#[em #[b “…hasta formar un inconsciente colectivo, es decir una cultura organizacional de gestión del cambio”.]]
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-4.png')
      .row.col-xl-11.mx-auto(titulo="Eliminar los obstáculos")
        .col-md-7.mb-4.mb-md-0
          p Es importante trabajar en la resistencia de las personas que aún no están convencidas en la gestión del cambio, por ende, debemos agregar más gente a los equipos, y que de esta forma ayude a completar la transformación.
            br
            br
            |Otro método es reconocer y premiar a los que ya están haciendo el cambio o empezando a pensar en el estado futuro de la empresa.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-5.png')
      .row.col-xl-11.mx-auto(titulo="Asegurar triunfos a corto plazo")
        .col-md-7.mb-4.mb-md-0
          p Por otro lado, el éxito es un gran motivador, por lo que, mostrar resultados palpables de la implementación del cambio es vital.
            br
            br
            |Ayudar a contrastar las voces críticas  conlleva a que se vayan desincentivando bajo el peso de los resultados, para ello, las metas a corto plazo son victorias con éxito asegurado.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-6.png')
      .row.col-xl-11.mx-auto(titulo="Construir sobre el cambio")
        .col-md-7.mb-4.mb-md-0
          p También es indispensable no declarar la victoria, sólo se han ganado pequeñas batallas y no la guerra, se requiere seguir creciendo con proyectos de mayor envergadura y mayor valor para la organización, mejorando incansablemente el proceso, sí lo logramos ya no habrá vuelta atrás.
            br
            br
            |Integrar en el inconsciente colectivo el principio de gestión del cambio y transformar la cultura organizacional se ha logrado, pero,  debe continuar con el proceso de forma permanente principalmente porque el concepto de mejora continua es un comportamiento de aprendizaje social y se refuerza por medio de la educación y desarrollando un proceso cultural.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-7.png')
      .row.col-xl-11.mx-auto(titulo="Institucionalizar y anclar el cambio")
        .col-md-7.mb-4.mb-md-0
          p El cambio debe ser visible en el día a día, para ello, debemos seguir mencionando los éxitos y buscar a aquellos que lo apoyaron inicialmente, como los fundadores, ellos son los visionarios, orientado a seguir, manteniendo un equipo de trabajo que continúe con la implementación operativa.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/a-8.png')
            

    p.mb-5 Por otro lado, para aclarar la función del cambio empresarial se invita a ver la siguiente videoclase que explica cada uno de los elementos anteriores.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fmsSsN5NDNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'

export default {
  name: 'Tema1',
  components: {
    DialogoChat,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    dialogoChat: {
      personajes: [
        {
          nombre: 'Federico',
          img: require('@/assets/curso/temas/tema1/a1.png'),
        },
        {
          nombre: 'Teresa',
          img: require('@/assets/curso/temas/tema1/a2.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Federico',
          textoIng:
            'Caramba no encuentro la información que necesito entregar el próximo lunes voy a visitar a Teresa que vive cerca de mi casa, a ver si ella ha logrado conseguir algo…  Hola Teresa, qué pena molestarte en casa, pero,  además de visitarte quería consultarte algo del curso del SENA',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng:
            'Sí, Federico, no hay problema, para eso somos compañeros y vivimos cerca',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng:
            'Gracias, Teresa… es que no encontré información sobre los tipos de empresa',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng:
            'Listo… yo pude ingresar a la Biblioteca del SENA y allí fue fácil… te la recomiendo',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'Listo… voy a aprender a usarla… gracias',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng:
            'Bien…en relación con los tipos de empresas te puedo contar lo que',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
      ],
    },
    dialogoChat1: {
      personajes: [
        {
          nombre: 'Teresa',
          img: require('@/assets/curso/temas/tema1/a2.png'),
        },
        {
          nombre: 'Federico',
          img: require('@/assets/curso/temas/tema1/a1.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Teresa',
          textoIng:
            '… según su tipo de operación se pueden encontrar las siguientes...',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: '...',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng: 'Locales',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'Medellin, Cali y Bogotá',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng: 'Regionales',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'Antioquia, Santander, Cundinamarca, Amazonas',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
      ],
    },
    dialogoChat2: {
      personajes: [
        {
          nombre: 'Teresa',
          img: require('@/assets/curso/temas/tema1/a2.png'),
        },
        {
          nombre: 'Federico',
          img: require('@/assets/curso/temas/tema1/a1.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Teresa',
          textoIng: 'Nacionales',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'En cualquier parte de Colombia.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng: 'Multinacionales',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'Colombia, América, Asia, Europa, África, Oceanía',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
      ],
    },
    dialogoChat3: {
      personajes: [
        {
          nombre: 'Federico',
          img: require('@/assets/curso/temas/tema1/a1.png'),
        },
        {
          nombre: 'Teresa',
          img: require('@/assets/curso/temas/tema1/a2.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Federico',
          textoIng:
            'Ya, veo… son cuatro en total… voy a ir a la biblioteca distrital para buscar información',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng:
            'Si, claro. También te puedo enseñar a usar la biblioteca del SENA cuando quieras',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng:
            'Perfecto, voy a verificar si me sirven los códigos de acceso y hablamos…',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng: 'Listo… nos vemos…',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Federico',
          textoIng: 'Gracias… Teresa.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Teresa',
          textoIng: 'De nada…',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
      ],
    },
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
.tarjeta-hover
  display: flex
  align-items: center
  border: 2px solid #FC8116
  background-color: #FFF5EC
  border-radius: 20px
  padding: 1rem
  margin-bottom: 2rem
  &:hover
    #Elipse_7532
      fill: #FC8116
    #Grupo_878147
      path
        fill: white
.tarjetas-up
  overflow: hidden
  border-radius: 10px
  position: relative
  width: 400px
  margin-right: auto
  margin-left: auto
  &_card
    transition: bottom .3s ease-in-out
    position: absolute
    border-radius: 10px
    width: 100%
    height: 100%
    left: 0
    bottom: -80%
    i:last-child
      display: none
  &:hover
    .tarjetas-up_card
      bottom: -40%
    i:first-child
      display: none
    i:last-child
      display: block
</style>
