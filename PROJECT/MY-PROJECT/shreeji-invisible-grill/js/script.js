

let mainSlider =  [
{
  img : "./img/slider-img-1.jfif"
},
{
  img : "./img/slider-img-2.jfif"
},
{
  img : "./img/slider-img-3.jfif"
},
  ]



  let index = 0;

  let sliderprev = ()=>{
    if(index==0){
       index = mainSlider.length -1
    } else{

      index--
    }
       slider()
  }

    let slidernext = ()=>{
      if(index==mainSlider.length-1){
        index = 0
      }else{

        index++
      }
       slider()
  }



  let slider = ()=>{
      document.getElementById("m-slider-imgs").innerHTML = `<img class="slider-img" src="${mainSlider[index].img}"/>`
  }
  
  slider();

  
