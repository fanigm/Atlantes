const theme = document.getElementById("protogridcheckbox");
      
function toggleStylesheets() {
  theme.href = 
    theme.getAttribute("href") === "protogrid.css"
      ? "protogrid2.css"
      : "protogrid.css";
}