import image from '../assets/error.jpeg'

const Item = ( {title,description,src,url}) => {
  return (
    <div className="card mb-3  d-inline-block my-3  mx-3 px-2  py-2 " style={{maxWidth:"340px"}}>
  <img src={src?src:image} style={{width:"320px", height:"200px"}} className="card-img-top" alt="imageNotFound"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5> 
    <p className="card-text">{description?description.slice(0,90):"News Error:Unusual Intruption Occured.."}</p>
    <a href={url} className="btn btn-primary">Read More...</a>
  </div>
</div>
  )
}

export default Item
