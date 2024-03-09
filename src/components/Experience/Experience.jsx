

const Experience = ({experience}) => {
  return (
    <div>
    {
      experience.map((element, index)=>{
        return(
            <div key={index}>
                <h2>{element.name}</h2>
                <p>{element.name}</p>
                <h3>{element.where}</h3>
                <p>{element.description}</p>
            </div>
        )

    })}
      
    </div>
  )
}

export default Experience
