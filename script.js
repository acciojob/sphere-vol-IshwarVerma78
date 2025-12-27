function volume_sphere() {
    //Write your code here
	let form = document.querySelector("#MyForm");
         let radius = document.querySelector("#radius")
         let result = document.querySelector("#volume")


         form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let val = +radius.value;
            console.log(val);
            if( val!="number" && val<0){
                result.value = NaN;
            }else{
                let volume = (4/3)*(Math.PI)*(val**3)
                result.value = volume;
            }

         })
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
