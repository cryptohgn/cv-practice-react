

const Abaut = ({hero}) => {
    return (
      <div>
          
          {
          hero.aboutMe.map((element, index)=> {
              return(
          
          <li key={index}>{element.info}</li>
          
          )
         }) }
      
  </div> 
    )
  }
  
  export default Abaut
  