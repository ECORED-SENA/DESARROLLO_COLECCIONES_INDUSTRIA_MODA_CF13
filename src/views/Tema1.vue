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
        .row
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


            .row.align-items-center.cajon-extra.blue
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

    .row.justify-content-center
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

    // TODO: Completar botones de clasificacion de fibras artificales
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nailon o Poliamida")
        h4 PASO 1: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Poliester")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Acrilán/acrílicos")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elastómero")

    h3.titulo-tercero Fibras inteligentes

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-lg-0.mb-5
        figure.offset-image.pink
          img(src="@/assets/curso/tema1-imagen7.jpg")
      .col-lg-6
        p.mb-0 Se consideran fibras inteligentes a aquellas donde se logra alterar o modificar su naturaleza para obtener cambios físicos o químicos mejorando las condiciones del textil a confeccionar, pues puede tener características como menor peso, repelencia a líquidos, control de temperatura, antiflama, entre otros.

    h3.titulo-tercero Definición de hilos

    p.mb-5 El hilo es el resultado de someter las hebras a torsiones para obtener una longitud extensa y con resistencia para costura o la elaboración de telas, para los hilos se pueden usar fibras naturales, artificiales y sintéticas o también es posible combinarlas.

    
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
