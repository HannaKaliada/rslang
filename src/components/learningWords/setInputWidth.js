export default function setInputWidth(){
  document.querySelector('form input').addEventListener('input', ()=>{
    if (!document.querySelector(".input-top-layer").classList.contains("transparent")) {
      this.style.width = `${((this.value.length + 1) * 8) + 24}px`;
    }
  })
}
