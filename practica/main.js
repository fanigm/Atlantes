function rojo(){
    var element= document.GetElementById("navegador");
    element.classList.toggle("rojo");  
}
function toggle() {
    var element= document.getElementById("checkass");
    element.classList.toggle("show");
}
const theme = document.getElementById("toggle-stylesheets-link");
      
function toggleStylesheets() {
  theme.href = 
    theme.getAttribute("href") === "grid3.css"
      ? "grid4.css"
      : "grid3.css";
}
const theme = document.getElementById("protogridcheckbox");
      
function toggleStylesheets() {
  theme.href = 
    theme.getAttribute("href") === "protogrid.css"
      ? "protogrid2.css"
      : "protogrid.css";
}