
const Education = ({education}) => {
  return (
    <div>
      {education.map((element, index)=>{
        return(
        <div key={index}>
            <h2> {element.name}</h2>
            <h3>{element.where}</h3>
            <p>{element.date}</p>
            
        </div>
        ) })
        }
    </div>
  )
}

export default Education
