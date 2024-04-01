// props

function Banner({title , description, numOfStudent}) {

  return (
    <>
    <hr />
    <h1>{title}</h1>
    <p>{description}</p>
    <span>{numOfStudent}</span>
    <hr />
    </>
  )
}

export default Banner
