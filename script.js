let currentPage = 1;

function turnPage() {
    const bookPages = document.querySelectorAll('.book-page');
    
    if (currentPage % 2 === 1) {
        // Flip to the next page (front to back)
        bookPages[currentPage - 1].style.transform = "rotateY(180deg)";
        bookPages[currentPage].style.transform = "rotateY(0deg)";
    } else {
        // Flip to the previous page (back to front)
        bookPages[currentPage - 1].style.transform = "rotateY(-180deg)";
        bookPages[currentPage].style.transform = "rotateY(0deg)";
    }
    
    // Update the page number for next flip
    currentPage++;
    if (currentPage > 3) {
        currentPage = 1; // Reset to the first page after the last page
    }
}
