function Avatar(props){

  const{src,name,rounded}=props

  const styles={
    marginTop:"10px",
    borderRadius:"16px"
  }

  if(rounded){
 styles.borderRadius="50%"
}

  return(
    <div>

      <img
      src={src}
      alt="avatar-icon"
      width="300px"
      style={styles}
      />

      <h1>{name}</h1>
      </div>
  )
}

export default Avatar;