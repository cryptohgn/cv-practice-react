
const Hero = ({hero}) => {
  return (
    <>
    <div>
      <img src={hero.image} alt={hero.name}/>
      <h1>{hero.name}</h1>
      <h2>{hero.profession}</h2>
      <h3>{hero.adress}</h3>
      <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          hansgn@gmail.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
    </div>
    {/* <div>
        {
            hero.aboutMe.map((element, index)=> {
                return(
            
            <li key={index}>{element.info}</li>
            
            )
           })
        }
    </div>  */}
    </>
  )
}

export default Hero
