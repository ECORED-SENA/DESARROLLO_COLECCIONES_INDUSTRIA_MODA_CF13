<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Acabados textiles

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-5
        figure.offset-image.blue
          img(src="@/assets/curso/tema1-imagen1.jpg")
      .col-lg-6
        p.mb-0 Estos brindan estabilidad, suavidad y durabilidad a las telas, de tal forma que sean más confortables al momento del uso, el garantizar el acabado textil permite un mejor comportamiento y manipulación de las telas en la cadena productiva e implica los procesos de diseño, trazo, corte, confección y comercialización, pues al cliente solo logrará llegar un producto que satisfaga sus necesidades. 
          br
          br
          | Los acabados textiles se pueden aplicar a la fibra, a la tela o a la prenda confeccionada, confiriéndole propiedades especiales al tacto, presentación o funcionalidad; estos acabados pueden ser químicos o físicos/mecánicos.
    
    .row.mb-5
      .col-lg-4.d-flex
        .box-alternative.pink.p-5
          figure.mb-4
            img(src="@/assets/curso/tema2-imagen2.svg")
          p.mb-0
            strong Acabados generales
            br
            | Se usan para preparar la tela para un acabado textil, estos pueden ser la limpieza o desengome, el cepillado o secado y el teñido.
      .col-lg-4.d-flex
        .box-alternative.pink.p-5
          figure.mb-4
            img(src="@/assets/curso/tema2-imagen3.svg")
          p.mb-0
            strong Acabados físicos o mecánicos
            br
            | Tienen que ver con los acabados apreciables al tacto, dentro de estos se encuentran el crepé, el craquelado, el batanado y el mercerizado.
      .col-lg-4.d-flex
        .box-alternative.pink.p-5
          figure.mb-4
            img(src="@/assets/curso/tema2-imagen4.svg")
          p.mb-0
            strong Acabados químicos
            br
            | No se pueden percibir a simple vista y se realizan para mejorar la estabilidad, durabilidad y el tacto de la tela con lo que se beneficia la durabilidad del diseño final. Algunas opciones pueden ser antimoho, antiácaros, impermeable, antiflama y el vitaminado.

    Separador

    #t_2_1.titulo-segundo
      h2 2.1  Tipos de estampación

    p.mb-5 La estampación es una técnica que consiste en la aplicación de color a la tela o prenda mediante algunos de los siguientes métodos: 

    figure.mb-5
      img(src="@/assets/curso/tema2-imagen5.jpg")

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Estampación por cilindros")
        p.mb-0
          strong Estampación por cilindros
          br
          br
          | Este procedimiento se realiza a los rollos de la tela usando cilindros con diseños definidos y un máximo de 12 colores, la tela en crudo o color base se desliza por bandas aplicando el color a la vez que se fija mediante calor.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Estampación por shablones")
        p.mb-0
          strong Estampación por shablones
          br
          br
          | Estos marcos con diseño revelado y clasificado por color realizada en una micromalla, donde se sobrepone el diseño sobre la tela o prenda para aplicar el color capa por capa.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Estampación por sublimación")
        p.mb-0
          strong Estampación por sublimación
          br
          br
          | El diseño previamente realizado en papel es transferido a la tela mediante calor.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Estampación digital")
        p.mb-0
          strong Estampación digital
          br
          br
          | Las nuevas tecnologías han permitido variedad en los diseños textiles y agilidad en su aplicación, en esta técnica el diseño se imprime sobre la tela empleando tintes aptos para el material seleccionado.

    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Bordados

    p.mb-5 Esta ornamentación o adornos se realizan en la tela o en el producto usando hilos textiles de diversas variedades; según el diseño, se pueden encontrar de tres tipos de bordados: 

    .row.justify-content-center.mb-5
      .col-lg-4.d-flex
        .box-alternative.blue.px-5.py-3
          p.mb-0
            strong Lisos
            br
            br
            | No sobresalen de la tela.
      .col-lg-4.d-flex
        .box-alternative.blue.px-5.py-3
          p.mb-0
            strong Relieve
            br
            br
            | Utilizan materiales que resaltan el bordado en puntos específicos, ofreciendo un efecto de volumen en el diseño bordado.
      .col-lg-4.d-flex
        .box-alternative.blue.px-5.py-3
          p.mb-0
            strong Aplicaciones
            br
            br
            | En este tipo de técnica se usan diseños previos, se realiza marcando puntos de diseño y evitando que se deshilen.

      Separador

      #t_2_3.titulo-segundo
        h2 2.3  Lavandería

      .row.align-items-center.mb-5
        .col-lg-6
          p.mb-0 Es un servicio especializado y adicional que se encuentra en la cadena del valor de algunas prendas, y los procedimientos que se suelen ofrecer son: suavizado, desengomado o fijación del color.
            br
            br
            | Para los empresarios del diseño y confección del denim, contar con el servicio de lavandería proporciona un valor agregado indispensable, ya que el consumidor desea variedad en los acabados de las prendas de este tipo; los procesos más utilizados son los siguientes: 
        .col-lg-6
          figure.offset-image.pink.inverse
            img(src="@/assets/curso/tema2-imagen6.jpg")

      .row.justify-content-center
        .col-lg-10
          ol.lista-ol.lista-ol--separador
            li 
              p.mb-0
                strong Fijado
                br
                | Procedimiento que logra mantener el color índigo por más tiempo.
            li 
              p.mb-0
                strong Desengome
                br
                | Proceso donde se retira la goma utilizada para la fabricación de la tela y facilita los procesos manuales siguientes, además, mejora la textura de la prenda.
            li 
              p.mb-0
                strong Desengome oxidativo
                br
                | Se aplica mayor temperatura y se adquieren tonos azules medios en composiciones con mayor proporción de algodón.
            li 
              p.mb-0
                strong <i>Ston</i>
                br
                | Efecto envejecido o desgaste (<i>vintage</i>) sobre la prenda utilizando enzimas de celulosa y requiere un proceso a bajas temperaturas.
            li 
              p.mb-0
                strong <i>Bleach</i> con hipoclorito de sodio
                br
                | Para obtener los azules medios o claros de este proceso, primero se realizan los procesos de lavandería. No es recomendable en denim que contengan proporciones altas de elastómeros y poliéster; es recomendado para 100% algodón.
            li 
              p.mb-0
                strong <i>Bleach</i> con permanganato
                br
                | Usado para mezclas en poliéster y elastómeros, ya que no deteriora las fibras y se trabaja a temperaturas bajas para no afectar las fibras elastómeras, este acabado permite obtener tonos grises.
            li 
              p.mb-0
                strong <i>Dyrty</i>
                br
                | Son procesos de teñido sobre la prenda dando un efecto envejecido.
            li 
              p.mb-0
                strong Acabados manuales
                br
                | Se usa la lija, <i>motortull</i>, esponja, esmeril, plastiflechas, pintura, salpicados y amarres.

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped></style>
