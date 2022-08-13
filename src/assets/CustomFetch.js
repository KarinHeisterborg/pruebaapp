const CustomFetch = (productos) => {
  return  new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve(productos)
          },2000)
          },200)
      }

export default CustomFetch
