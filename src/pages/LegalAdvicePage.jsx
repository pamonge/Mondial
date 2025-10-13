import React from 'react'
import legalAdvice from '../data/dataLegalAdvice'

export const LegalAdvicePage = () => {
  return (
    <div className='flex flex-col gap-3 text-justify p-5'>
      <h2>AVISO <strong>LEGAL</strong></h2>
      <p>
        Por favor, lea todos los apartados del presente Aviso Legal antes de utilizar este sitio web. Las siguientes condiciones son vinculantes para cualquier usuario del mismo. En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web. La razón de este texto es explicarle de manera detallada las funcionalidades de esta web y aportarle aquella información relacionada con el titular de la web y la finalidad de los contenidos incluidos en ella.
      </p>
      <h3>Datos de Identificación</h3>
      <p>
        {legalAdvice[0].datos}
      </p>
      <h3>Propiedad intelectual e industrial</h3>
      <p>
        El usuario reconoce y acepta que todos los derechos de propiedad industrial e intelectual sobre los contenidos y/o cualesquiera otros elementos insertados en el sitio web pertenecen a Mondial Inmobiliaria o la misma se encuentra debidamente autorizada para su difusión en el presente website. En el caso de que un usuario o un tercero consideren que se ha producido una violación de sus legítimos derechos de propiedad intelectual por la introducción de un determinado contenido en el website, deberá notificar dicha circunstancia a Mondial Inmobiliaria indicando: Datos personales del interesado titular de los derechos presuntamente infringidos, o indicar la representación con la que actúa en caso de que la reclamación la presente un tercero distinto del interesado. Señalar los contenidos protegidos por los derechos de propiedad intelectual y su ubicación en el Web, la acreditación de los derechos de propiedad intelectual señalados y declaración expresa en la que el interesado se responsabiliza de la veracidad de las informaciones facilitadas en la notificación.
      </p>
      <h3>Enlaces</h3>
      <p>
        El presente sitio web proporciona enlaces a otros sitios web propios y contenidos que son propiedad de terceros. El único objeto de los enlaces es proporcionar al usuario la posibilidad de acceder a dichos enlaces. Mondial Inmobiliaria no se responsabiliza en ningún caso de los resultados que puedan derivarse al usuario por el acceso a dichos enlaces. El usuario que se proponga establecer cualquier dispositivo técnico de enlace desde su sitio web al portal deberá obtener la autorización previa y escrita de Mondial Inmobiliaria. El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre Mondial Inmobiliaria y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte de Mondial Inmobiliaria de sus contenidos o servicios. El sitio web en el que se establezca el enlace no contendrá ninguna marca, denominación, logotipo, eslogan u otros signos distintivos pertenecientes a Mondial Inmobiliaria, salvo los expresamente autorizados. Modificación unilateral y duración Mondial Inmobiliaria se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración del sitio web así como el presente Aviso Legal.
      </p>
      <h3>Exclusión de garantías y responsabilidad</h3>
      <p>
        Mondial Inmobiliaria no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran acarrear a causa de: La falta disponibilidad, mantenimiento y efectivo funcionamiento del Web y/o de sus servicios o contenidos. La existencia de virus, programas maliciosos o lesivos en los contenidos. El uso ilícito, negligente, fraudulento, contrario a las presentes condiciones, a la buena fe, a los usos generalmente aceptados o al orden público, del sitio Web, sus servicios o contenidos, por parte de los usuarios.
      </p>
      <h3>Tratamiento de datos personales</h3>
      <p>
        Mondial Inmobiliaria tal y como recoge en su “POLÍTICA DE PRIVACIDAD” que puede consultar en este sitio web, ha adoptado los niveles de seguridad adecuados a los datos que trata y gestiona, incorporando todos los medios y medidas técnicas a su alcance para garantizar su confidencialidad, evitar su mal uso, pérdida, alteración, acceso no autorizado y robo. Legislación aplicable y jurisdicción Las presentes Condiciones se regirán por la legislación española, sometidas a los juzgados y tribunales de la ciudad de MURCIA (España) ante cualquier controversia derivada del acceso al sitio web.
      </p>
      <h3>Contacto</h3>
      <p>
        En caso de que cualquier usuario tuviese alguna duda acerca del presente aviso legal o cualquier comentario sobre el mismo puede dirigirse a info@abadgrupoinmobiliario.es o enviar una comunicación escrita a la dirección que consta en el encabezado.
      </p>
    </div>
  )
}
