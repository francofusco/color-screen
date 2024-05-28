// Initialize Spectrum color picker
$(document).ready(function() {
    $('#color-picker-input').spectrum({
        color: "white",
        showInput: true,
        preferredFormat: "hsv",
        showPalette: true,
        showSelectionPalette: true,
        palette: [],
        localStorageKey: "spectrum.palette",
        chooseText: "Add",
        clickoutFiresChange: true,
        change: function(color) {
            saveFavoriteColor(color.toHexString());
        }
    });
});


// Function that adds a color to the palette
function saveFavoriteColor(color) {
    // Create a new favorite color div
    const favoriteDiv = document.createElement('div');
    favoriteDiv.className = 'favorite-color';
    favoriteDiv.style.backgroundColor = color;

    // Add double click event listener to switch to the color page
    favoriteDiv.addEventListener('dblclick', removeFavoriteColor);

    // Append the new favorite color div to the grid
    document.getElementById('favorites-grid').appendChild(favoriteDiv);
}


// Remove the clicked favorite color from the grid
function removeFavoriteColor(event) {
    event.target.remove();
}



// Redirect the user to colorPage.html (where the effects are played)
function switchToColorPage() {
    // Get the favorites-grid element
    const favoritesGrid = document.getElementById('favorites-grid');

    // Array to store the colors
    const colors = [];

    // Iterate over each child element
    for (let i = 0; i < favoritesGrid.children.length; i++) {
        // Get the background color of the current child
        const color = favoritesGrid.children[i].style.backgroundColor;

        // Add the color to the colors array
        colors.push(color);
    }

    // Redirect to the color page with the list of colors
    window.location.href = `colorPage.html?colors=${encodeURIComponent(JSON.stringify(colors))}`;
}


// Function to set up colors based on URL parameter
function setupColors() {
    // Parse the URL to get the list of colors to display
    const urlParams = new URLSearchParams(window.location.search);
    const colors = JSON.parse(urlParams.get('colors'));

    // If no color parameter was given, exit
    if(colors == null) {
      return;
    }

    // Populate the palette from the list of colors
    for(let i=0; i<colors.length; i++) {
        saveFavoriteColor(colors[i]);
    }
}


// Reset the palette by going back to the home page
function resetColors() {
    window.location.href = "index.html";
}


// Open the help dialog
function openModal() {
    document.getElementById("help-modal").style.display = "block";
}


// Close the help dialog
function closeModal() {
    document.getElementById("help-modal").style.display = "none";
}
