// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function toggleDescription(index) {
  var shortDescription = document.getElementById("shortDescription-" + index);
  var description = document.getElementById("description-" + index);
  shortDescription.style.display = shortDescription.style.display === "none" ? "block" : "none"; 
  description.style.display = description.style.display === "none" ? "block" : "none";
}