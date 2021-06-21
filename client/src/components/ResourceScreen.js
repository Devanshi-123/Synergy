import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ResourceCard from './Resource'



const ResourceScreen = ({history,match}) => {
    const [sources,setSources] = useState({}) 
useEffect(async() => {
  console.log("Inside home effect")
  const { data } = await axios.get('/api/resources/')
  console.log(data)
  setSources(data)
}, [5])

const ans = typeof sources
console.log(ans)
const len = sources.length
console.log(len)
const cat = match.params.category
console.log(cat)
const subcat = match.params.subcategory
console.log(subcat)
const arraysources = [];


{/*//to convert object to array
    const arraysources = [];
Object.keys(sources).forEach(key => arraysources.push({
   index: key,
   rating: sources[key]
}));
console.log(arraysources)
const ans2 = typeof arraysources
console.log(ans2)*/}

 {/*   var newsources = sources.filter( (el) =>
{
  return el.category ===match.params.category &&
         el.subcategory === match.params.subcategory ;
}
);
console.log(newsources);*/}
return (
    <div>
   {Object.values(sources).map(source => {
       return source.category === cat ? source.subcategory === subcat ? (
       <ResourceCard  key={source._id} topic ={source.topic}
       description={source.description}
       address={source.URL}/>):" ":" "
  })}
    </div>
)
}

export default ResourceScreen
