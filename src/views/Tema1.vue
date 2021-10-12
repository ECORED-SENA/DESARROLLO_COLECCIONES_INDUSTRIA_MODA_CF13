<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Materiales textiles

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-lg-0.mb-5
        figure.offset-image.blue
          img(src="@/assets/curso/tema1-imagen1.jpg")
      .col-lg-6
        p.mb-0 Reconocer las materias primas para la fabricación de telas y, posteriormente la confección, es muy importante, pues cada fibra natural o artificial presenta propiedades y características distintivas que hacen la diferencia al momento de uso; además factores como el clima, el diseño, la suavidad o textura pueden garantizar el éxito de una colección de vestuario.

    Separador

    #t_1_1.titulo-segundo
      h2 1.1  Fibras e hilos

    p.mb-5 Para el ser humano desde el principio de los tiempos ha surgido la necesidad de vestirse y para ello ha utilizado todos los recursos que tiene a su disposición en la naturaleza, aprovechando todos los materiales que esta provee como las fibras de tipo vegetal, animal o mineral que al ser hiladas se pueden convertir en hilos o telas; además, con su habilidad creativa y transformadora del entorno ha implementado la producción y el uso de fibras sintéticas y artificiales. 

    .row.justify-content-center.mb-5
      .col-md-11
        .cajon.color-primario.p-4.mb-4
          .row.align-items-center
            .col-md-2.mb-md-0.mb-5
              figure
                img(src="@/assets/curso/tema1-imagen2.svg")
            .col-md-9
              .h5 Definición de fibra
              p.mb-0 Es el material susceptible con longitud y grosor específico de origen natural, artificial o sintético que puede ser retorcido o hilado para la formación de hilos o tejidos artesanales o industriales, presenta gran finura y flexibilidad.

    h3.titulo-tercero Clasificación de fibras naturales

    p.mb-5 Las fibras naturales son obtenidas de la naturaleza, y están dadas según su procedencia: animal, vegetal o mineral; algunas de estas fibras son más utilizadas en el plano textil y otras a nivel artesanal. 

    // TODO: Completar tab de fibras de origen vegetal
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Origen vegetal")
        .row.justify-content-center
          .col-lg-9
            h4.titulo-cuarto Origen vegetal
            p.mb-5 Se pueden encontrar en semillas, tallos o frutos, como se puede apreciar en la siguiente tabla:

            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th Semillas
                    th Tallo
                    th Hojas
                    th Frutos
                tbody
                  tr
                    td Algodón
                    td
                      p.mb-0 Lino
                      br
                      | Yute.
                      br
                      | Cáñamo.
                    td
                      p.mb-0 Maguey
                      br
                      | Sisal o henequén.
                    td Coco
                  tr
                    td Uso textil.
                    td Uso textil y artesanal.
                    td Uso artesanal e industrial.
                    td Uso artesanal.

            .row.align-items-center.cajon-extra.blue.mb-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen25.jpg")
              .col-lg-8
                p.mb-0
                  strong Algodón
                  br
                  br
                  | Es conocida como la fibra reina ya que se puede mezclar con facilidad con otras fibras, y presenta absorción y suavidad al tacto. Se usa en variedad de prendas: camisetas, camisas pantalones y chaquetas, entre otras.

            .row.align-items-center.cajon-extra.blue.mb-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen26.jpg")
              .col-lg-8
                p.mb-0
                  strong Fibra de lino
                  br
                  br
                  | Se obtiene del tallo con propiedades de absorción y tacto frio, es ideal para ser usada en climas cálidos. Se usa en variedad de prendas camisetas, camisas pantalones, chaquetas.

            .row.align-items-center.cajon-extra.blue.mb-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen27.jpg")
              .col-lg-8
                p.mb-0
                  strong Sisal o henequén 
                  br
                  br
                  | Se obtiene de esta hoja tras seguir el proceso de secado e hilado, se utiliza a nivel artesanal o industrial, para sombreros, canastos, bolsos, decoración, tapicería.

      .py-3.py-md-4(titulo="Origen animal")
        .row.justify-content-center
          .col-lg-9
            h4.titulo-cuarto Origen animal
            p.mb-5 Se pueden encontrar en diferentes animales donde se usa su pelaje, tiene base proteínica o filamento:

            .row.justify-content-center
              .col-lg-9
                .tabla-a.color-acento-botones.mb-5 
                  table
                    thead
                      tr
                        th Pelos/Lana (uso textil)
                        th Filamentos (uso textil)
                    tbody
                      tr
                        td Oveja, vicuña, mohair, alpaca, llama.
                        td Seda
            
            .row.align-items-center.cajon-extra.blue.mb-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen3.jpg")
              .col-lg-8
                p.mb-0
                  strong Lana
                  br
                  br
                  | Para la industria textil se obtiene principalmente de la oveja y el carnero, tiene propiedades higroscópicas y térmicas las cuales son aprovechadas para su uso en climas extremos. Se usa para abrigos, chaquetas, pantalones.


            .row.align-items-center.cajon-extra.blue.mb-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen4.jpg")
              .col-lg-8
                p.mb-0
                  strong Seda
                  br
                  br
                  | Antes de salir la mariposa se toman los capullos para obtener los filamentos y transformarlos en hilos y telas. Esta fibra tiene características de brillo y suavidad. Es usada para vestidos, camisas.
    
    h3.titulo-tercero Clasificación de fibras sintéticas

    p.mb-5 Este tipo de fibra de composición sintética se construye usando parte de material vegetal o animal y que mezclado con otro tipo de elementos químicos forman filamentos continuos, obteniendo así mayor durabilidad y resistencia, algunas de las fibras sintéticas más empleadas en confección son las siguientes: 

    .row.justify-content-center.mb-5 
      .col-lg-9
        .row.align-items-center.cajon-extra.pink.mb-5
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen5.jpg")
          .col-lg-8
            p.mb-0
              strong Rayón viscosa
              br
              br
              | La fibra corta de rayón de viscosa tiene tacto suave, tiñe bien, es muy absorbente y no acumula electricidad estática. La materia prima de la tela es rayón.


        .row.align-items-center.cajon-extra.pink
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen6.jpg")
          .col-lg-8
            p.mb-0
              strong Acetato
              br
              br
              | Utiliza proteína animal disolviendo sus componentes con sosa cáustica, permite dar mayor durabilidad y resistencia, posee filamentos más largos; busca asemejarse a la lana. La materia prima de la tela es acetato.
    
    h3.titulo-tercero Clasificación de fibras artificiales

    p.mb-5 Estas fibras sintéticas son creadas totalmente por el ser humano a partir de elementos químicos derivados del petróleo, las cuales tienen propiedades para brindar mayor durabilidad, resistencia, secado rápido con lo que se elimina el planchado. Entre las más utilizadas en confección están las siguientes: nailon o poliamida, poliéster, polipropileno y elastómeros.

    TabsA.color-primario.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Nailon o Poliamida")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen28.jpg")
          .col-lg-7
            p.mb-0
              strong Nailon o Poliamida
              br
              br
              | Es un polímero con propiedades de resistencia, transparencia, elasticidad. Tiene variedad de usos que van desde hilos muy delgados utilizados para confección o cuerdas para sujetar; telas, cremalleras, ropa interior y deportiva, pantimedias, cuerdas, tanques redes, paracaídas.
              br
              br
              | En la figura anterior se observan hilos de nailon que en conjunto dan forma a la tela con su principal materia prima.
      .tarjeta.color-acento-contenido.p-4(titulo="Poliester")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen29.jpg")
          .col-lg-7
            p.mb-0
              strong Poliéster
              br
              br
              | Es un polímero que tiene propiedades como bajo peso, solidez en el color; se mezcla con facilidad con otras fibras. Materia prima poliéster.
      .tarjeta.color-acento-contenido.p-4(titulo="Acrilán/acrílicos")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen24.jpg")
          .col-lg-7
            p.mb-0
              strong Acrilán/acrílicos
              br
              br
              | Es una fibra sintética resistente a las polillas, es de fácil planchado, menor peso, puede imitar a otras fibras como el algodón o la lana en apariencia. Se pueden confeccionar prendas como chaquetas, pantalones y ropa infantil.
      .tarjeta.color-acento-contenido.p-4(titulo="Elastómero")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen30.jpg")
          .col-lg-7
            p.mb-0
              strong Elastómero
              br
              br
              | Es un polímero conocido en el ámbito textil como lycra (marca comercial); el elastómero presenta muy buena capacidad de elongación sin deformarse, se usa en la confección de ropa interior y deportiva.

    h3.titulo-tercero Fibras inteligentes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-5
        figure.offset-image.pink
          img(src="@/assets/curso/tema1-imagen7.jpg")
      .col-lg-6
        p.mb-0 Se consideran fibras inteligentes a aquellas donde se logra alterar o modificar su naturaleza para obtener cambios físicos o químicos mejorando las condiciones del textil a confeccionar, pues puede tener características como menor peso, repelencia a líquidos, control de temperatura, antiflama, entre otros.

    h3.titulo-tercero Definición de hilos

    p.mb-5 El hilo es el resultado de someter las hebras a torsiones para obtener una longitud extensa y con resistencia para costura o la elaboración de telas, para los hilos se pueden usar fibras naturales, artificiales y sintéticas o también es posible combinarlas.
    
    .row.justify-content-center.mb-5
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/tema1-imagen8.svg")
            .col-8
              .h5 Los hilos se clasifican según
              ol.lista-ol.mb-0
                li.mb-0
                  span.text-bold a. 
                  | Sistema de hilatura (tejido punto /tejido plano).
                li.mb-0
                  span.text-bold b. 
                  | Uso final.
                li.mb-0
                  span.text-bold c. 
                  | Estructura física del hilo (calibre o acabados).
                li.mb-0
                  span.text-bold d. 
                  | Tipo de materia prima utilizada (fibras naturales, artificiales o sintéticas).
    
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Hilatura" :icono="require('@/assets/curso/tema1-imagen9.svg')")
        .row.justify-content-center
          .col-lg-9
            .row
              .col-6
                figure
                  img(src="@/assets/curso/tema1-imagen12.png")
              .col-6
                p.mb-0
                  strong Hilatura
                  br
                  br
                  | Materia prima para la construcción de telas: hilos para trama, urdimbre o tejido de punto.
      .py-4.py-md-5(titulo="Procesos de costura" :icono="require('@/assets/curso/tema1-imagen10.svg')")
        p.mb-5
          strong Procesos de costura
        .row.justify-content-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen32.jpg")
            p.mb-0
              strong Unir costuras:
              br
              | Se puede realizar en diferentes tipos de máquinas (maquina plana, sobrehiladora) juntando dos o más piezas.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen33.jpg")
            p.mb-0
              strong Pespuntar:
              br
              | Esta operación lo que pretende es decorar o fortalecer una operación anterior, por ejemplo cerrar cuello, pespuntar cuello, entre otras.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen34.jpg")
            p.mb-0
              strong Bordado:
              br
              | Los hilos para bordados presentan brillo.
      .py-4.py-md-5(titulo="Hilos industriales" :icono="require('@/assets/curso/tema1-imagen11.svg')")
        .row.justify-content-center
          .col-lg-9
            .row
              .col-6
                figure
                  img(src="@/assets/curso/tema1-imagen31.png")
              .col-6
                p.mb-0
                  strong Hilos industriales
                  br
                  br
                  | Tiene variedad de usos: calzado, tapicería, construcción, pesca; cáñamos cabuyas, nailon y lazos, entre otros.
      
    
    h3.titulo-tercero Características y usos de los hilos

    p.mb-5 Para que un hilo tenga condiciones de uso debe tener las siguientes características:

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-lg-0.mb-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Resistencia a la tracción.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Tenacidad.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Alargamiento o elasticidad.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Resistencia a la abrasión.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Torsión.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Ductilidad.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Solidez.

      .col-lg-4.offset-1
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen13.svg")
        p.mb-0 El conjunto de estas propiedades hace posible que se puedan tejer telas y unir piezas mediante los procesos de costura y estos hilos sean aptos para realizar los trabajos de costura y confección. 
    
    Separador

    #t_1_2.titulo-segundo
      h2 1.2    Tipos de tejidos

    p.mb-5 A continuación, se describen los diferentes tipos de tejidos.

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6.mb-lg-0.mb-5
        figure.offset-image.blue
          img(src="@/assets/curso/tema1-imagen14.jpg")
      .col-lg-6
        p.mb-0 Este tipo de tejido está constituido por hilos entrelazados longitudinalmente formando un ángulo de 90 grados, se conocen los hilos horizontales con trama, presenta mayor elongación que la urdimbre, que corresponde a los hilos verticales. Es un tejido rígido y resistente, usado para la confección de ropa exterior, ropa hogar y usos industriales. 
    
    h4.titulo-cuarto Tipos de ligamento en tejido plano

    p.mb-5 En este tipo de tejido se presentan diversos ligamentos que corresponden a diferentes formas en las que se entrelazan los hilos obteniendo así variedad en diseño; entre los básicos están tafetán o plano, sarga o diagonal, satín o raso.

    FlipCards(:items="flips1")

    h3.titulo-tercero Tejido de punto

    .row.justify-content-center.mb-3
      .col-lg-10
        .row.ps-4.align-items-center(style="background-color: #D8EFFB;")
          .col-lg-4.mb-lg-0.mb-5
            figure.mb-2(style="min-width: 100%; text-align: center;")
              img(src="@/assets/curso/tema1-imagen41.svg" style="max-height: 120px; object-fit: contain;")
            p.mb-0 Imagen de tejido de punto, donde se puede observar como el hilo se entrelaza en sí mismo.
          .col-lg-8
            img(src="@/assets/curso/tema1-imagen15.jpg")

    p.mb-5.text-center Máquina circular utilizada para el proceso de tejeduría para el tejido de punto. 

    p.mb-5 El tejido de punto está formado por mallas entrelazadas en sí mismas en las que se distinguen dos tipos de tejido: de punto por trama y de punto por urdimbre.

    h3.titulo-tercero Tejido de punto por trama

    p.mb-5 Se forma de manera horizontal y es usado en ropa interior y deportiva debido a sus propiedades de elongación y ajuste a la contextura física.

    h4.titulo-cuarto Ligamentos de tejido por trama

    p.mb-5 En este tipo de tejido la variedad de diseño le permiten al usuario diferentes opciones de tejido desde la construcción básica de la tela, los ligamentos más conocidos en tejido por trama son:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Jersey")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen42.png")
          .col-lg-7
            p.mb-0
              strong Jersey
              br
              br
              | Este tejido es un ligamento clásico a una sola cara, fácilmente se le distingue el derecho y el revés. Se pueden obtener variedad de texturas y pesos; se utiliza para la fabricación de camisetas, vestidos.
      .tarjeta.color-acento-contenido.p-4(titulo="Pique")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen43.png")
          .col-lg-7
            p.mb-0
              strong Pique
              br
              br
              | Su tejido en forma de panal, tiene diferente apariencia en el derecho y el revés, es de textura suave (pocas arrugas), fácil de cortar, con estabilidad dimensional y empleado, especialmente, en camisetas.
      .tarjeta.color-acento-contenido.p-4(titulo="Ribb o punto liso")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen44.png")
          .col-lg-7
            p.mb-0
              strong Ribb o punto liso
              br
              br
              | Este tipo de tejido de punto tiene mayor elongación y es usado especialmente para dar forma a cuellos, puños y fajones de diferentes prendas deportivas, pijamas y ropa infantil.
      .tarjeta.color-acento-contenido.p-4(titulo="<i>Interlock</i>")
        .row.justify-content-center.px-1.py-3
          .col-lg-4.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/tema1-imagen45.png")
          .col-lg-7
            p.mb-0
              strong Interlock
              br
              br
              | Este tejido también es muy utilizado en el área de confección, en este no se marca con claridad el derecho y revés, tiene buena estabilidad y menor elasticidad que el jersey; es empleado para la elaboración de camisetas, vestidos y pijamas.


    h3.titulo-tercero Tejido de punto por urdidumbre

    p.mb-5 Los hilos son entrelazados en la urdimbre formando mallas verticales difíciles de destejer, no presenta elongación y son empleados, usualmente, para la fabricación de cintas de encaje, blondas, tul, mallas, elásticos. 

    .row.justify-content-center
      .col-lg-4.mb-5.d-flex
        div.box-normal.pink
          figure
            img(src="@/assets/curso/tema1-imagen17.jpg")
          p.mb-0.p-5
            strong Tul
            br
            br
            | La elaboración de este tejido forma cavidades, puede tener apliques y encontrarse rígido o elástico, por lo cual puede ser empleado en ropa exterior o interior.
      .col-lg-4.mb-5.d-flex
        div.box-normal.pink
          figure
            img(src="@/assets/curso/tema1-imagen18.jpg")
          p.mb-0.p-5
            strong Encaje
            br
            br
            | Este tipo de tejido construye una tela rígida, con variedad de diseños y pesos, es utilizada para blusas, vestidos y pantalones femeninos.
    .row.justify-content-center
      .col-lg-4.mb-5.d-flex
        div.box-normal.pink
          figure
            img(src="@/assets/curso/tema1-imagen19.jpg")
          p.mb-0.p-5
            strong Elásticos
            br
            br
            | Este tipo de insumo es fabricado mediante tejido de punto por urdimbre. En el mercado se encuentran diferentes medidas y usos dependiendo de las necesidades del producto final.
      .col-lg-4.mb-5.d-flex
        div.box-normal.pink
          figure
            img(src="@/assets/curso/tema1-imagen20.jpg")
          p.mb-0.p-5
            strong Blonda
            br
            br
            | Esta tela puede encontrarse en diferentes anchos, en esta se emplea el tejido de punto por urdimbre, tiene aplicaciones en blusas y ropa interior.
    
    Separador

    #t_1_3.titulo-segundo
      h2 1.3    No tejidos

    p.mb-5 Mediante procesos mecánicos, térmicos o químicos y con el empleo de fibras cortas, naturales, artificiales o mezclas. se forman los no tejidos que tienen variedad de usos en la salud, aseo, industria agrícola, construcción, marroquinería, decoración y confección.

    .row.justify-content-center
      .col-lg-9
        .row.align-items-center
          .col-6
            figure
              img(src="@/assets/curso/tema1-imagen21.png")
          .col-6
            p.mb-0
              strong Este insumo es muy versátil, ya que se puede conseguir en diferentes calibres, colores y texturas.
              br
              br
              | Para el área de la industria del diseño y confección, se encuentran fusionables y no fusionables que permiten mejorar la apariencia de algunas piezas de las prendas confeccionadas como cuellos, puños, perillas y pretinas, entre otros.
    
    Separador

    #t_1_4.titulo-segundo
      h2 1.4    Calidad textil

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6.mb-lg-0.mb-5
        p.mb-0 El control de calidad textil tiene como objetivo reducir fallas en el proceso de construcción o tejeduría de la tela, y entre las condiciones de los insumos a garantizar se encuentran, el peso requerido, el diseño del tejido y el tipo de ligamento, entre otros; estos requerimientos son necesarios para asegurar el buen comportamiento del diseño final de la prenda.
          br
          br
          | Por ello, los requisitos de una tela para una camisa o un pantalón son diferentes, por lo que se deben seleccionar acertadamente el diseño y la materia prima para que la prenda de vestir logre satisfacer la necesidad del usuario.
      .col-lg-6
        figure.offset-image.pink.inverse
          img(src="@/assets/curso/tema1-imagen22.jpg")
        
    h3.titulo-tercero Características, usos y cuidados de las telas

    .row.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-5
        p.mb-0 En el mercado textil hay variedad de telas y estas reciben su nombre según el peso, tipo de tejido, clase de ligamento, texturas, colores, materias primas, o tendencia de moda, por lo cual, se debe seleccionar la materia prima para un diseño de manera acertada según los requerimientos del producto final. Desde la fabricación de la tela, esta se puede concebir para camisa, pantalón, ropa hogar, ropa interior o deportiva. 
      .col-lg-5
        p.mb-0
          strong Algunas de las telas más reconocidas son algodón, linos, índigos, driles, chalís, sedas, jersey, gabardinas, tules, encajes, blondas, elastómeros en algodón (lycra en algodón), telas impermeables y lonas. 

    figure.mb-5
      img(src="@/assets/curso/tema1-imagen23.svg")

    p.mb-0 Los cuidados de las telas pueden variar según la fibra con la que está fabricada. Como protección al consumidor y reglamentación para el productor, la Norma Técnica Colombiana (NTC) 1806:2014 reglamenta la simbología a utilizar y los cuidados específicos para los productos textiles.
  
</template>

<script>
import FlipCards from '../components/FlipCards'
export default {
  name: 'Tema1',
  components: {
    FlipCards,
  },
  data: () => ({
    // variables de vue
    flips1: [
      {
        title: 'Tafetán o plano',
        content:
          'Este tipo de tejido es el más antiguo, los ligamentos van uno a uno, un hilo de trama y urdimbre. Es utilizado en telas para camisas, pantalones y ropa de hogar.',
        img: require('@/assets/curso/tema1-imagen35.jpg'),
        imgExtra: require('@/assets/curso/tema1-imagen38.svg'),
        reverseBackgroundColor: '#BF397688',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#BF3976',
        frontTitleFontColor: '#FFFFFF',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Sarga o diagonal',
        content:
          'En la construcción de este tejido se observa una diagonal hacia la izquierda o a la derecha; puede formar relieve al combinarse diferentes calibres de hilos. ',
        img: require('@/assets/curso/tema1-imagen36.jpg'),
        imgExtra: require('@/assets/curso/tema1-imagen39.svg'),
        reverseBackgroundColor: '#BF397688',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#BF3976',
        frontTitleFontColor: '#FFFFFF',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Satín o raso',
        content:
          'Es un tejido liso, pastoso, lustroso donde la urdimbre es muy fina, es comúnmente utilizado para fabricación de la seda. Como producto final se usa en vestidos, camisas y blusas.',
        img: require('@/assets/curso/tema1-imagen37.jpg'),
        imgExtra: require('@/assets/curso/tema1-imagen40.svg'),
        reverseBackgroundColor: '#BF397688',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#BF3976',
        frontTitleFontColor: '#FFFFFF',
        indicadorTarjetaFlip: true,
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

<style lang="sass" scoped></style>
