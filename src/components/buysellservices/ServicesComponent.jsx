import appStyles from '../../styles/appStyles'

// Este componente es generico para compra, venta o alquiler
export const ServicesComponent = ({ title, text, satisfy, list }) => {
  return (
    <div className='flex flex-col gap-8 min-lg:p-10 p-1 '>
      <h2 className={appStyles.title}>{title}</h2>
      <p className='text-center' >{text}</p>
      <p className='text-center satisfy-regular text-3xl' >{satisfy}</p>

      <div className={list ? 'flex' : 'hidden'}  >
        {list}
      </div>
    </div>
  )
}
