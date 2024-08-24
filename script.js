document.getElementById('category').addEventListener('change', function() {
    var category = this.value;
    var categoryImage = document.getElementById('category-image');
    var categoryDescription = document.getElementById('category-description');
    
    if (category === "laptops") {
        categoryImage.src = "images/acer_aspire.jpg";  // Replace with your actual laptop image file
        categoryImage.style.display = "block";
        categoryDescription.innerHTML = "<strong>Acer Aspire:</strong> Known for its reliability and performance.";  // Add bold text
    } else if (category === "mobiles") {
        categoryImage.src = "images/iphone_12.jpg";  // Replace with your actual mobile image file
        categoryImage.style.display = "block";
        categoryDescription.innerHTML = "<strong>iPhone 12:</strong> Offers a new design and advanced features.";  // Add bold text
    } else if (category === "tv") {
        categoryImage.src = "images/samsung_tv.jpg";  // Replace with your actual TV image file
        categoryImage.style.display = "block";
        categoryDescription.innerHTML = "<strong>Samsung TV:</strong> Provides an immersive viewing experience.";  // Add bold text
    } else {
        categoryImage.style.display = "none";  // Hide image if no category is selected
        categoryDescription.textContent = "";  // Clear description
    }
});
