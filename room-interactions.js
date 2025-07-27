// Interactive Room Functions

// Open specific modals
function openSpotifyModal() {
  console.log("Opening Spotify modal"); // Debug log
  const modal = document.getElementById("spotifyModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  } else {
    console.error("Spotify modal not found!");
  }
}

function openBeanbagModal() {
  console.log("Opening Beanbag modal"); // Debug log
  const modal = document.getElementById("beanbagModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    console.error("Beanbag modal not found!");
  }
}

function openBookshelfModal() {
  console.log("Opening Bookshelf modal"); // Debug log
  const modal = document.getElementById("bookshelfModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    console.error("Bookshelf modal not found!");
  }
}

function openJournalModal() {
  console.log("Opening Journal modal"); // Debug log
  const modal = document.getElementById("journalModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    console.error("Journal modal not found!");
  }
}

// Close modal function
function closeModal(modalId) {
  console.log("Closing modal:", modalId); // Debug log
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  } else {
    console.error("Modal not found:", modalId);
  }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modals = [
    "spotifyModal",
    "beanbagModal",
    "bookshelfModal",
    "journalModal",
  ];

  modals.forEach((modalId) => {
    const modal = document.getElementById(modalId);
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modals = [
      "spotifyModal",
      "beanbagModal",
      "bookshelfModal",
      "journalModal",
    ];
    modals.forEach((modalId) => {
      const modal = document.getElementById(modalId);
      if (modal.style.display === "block") {
        closeModal(modalId);
      }
    });
  }
});

// Add some interactive animations and debugging
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded - Setting up button interactions");

  // Check if all modals exist
  const modalIds = [
    "spotifyModal",
    "beanbagModal",
    "bookshelfModal",
    "journalModal",
  ];
  modalIds.forEach((id) => {
    const modal = document.getElementById(id);
    if (modal) {
      console.log(`✅ Modal found: ${id}`);
    } else {
      console.error(`❌ Modal missing: ${id}`);
    }
  });

  // Add hover effects to interactive buttons
  const buttons = document.querySelectorAll(".interactive-btn");
  console.log(`Found ${buttons.length} interactive buttons`);

  buttons.forEach((button, index) => {
    console.log(`Button ${index}: ${button.className}`);

    button.addEventListener("mouseenter", function () {
      console.log(`Hovering over button: ${this.className}`);
    });

    // Add click logging
    button.addEventListener("click", function () {
      console.log(`Clicked button: ${this.className}`);
    });
  });

  console.log("✅ Button interaction setup complete");
});

// End of file
