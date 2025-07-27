// 🧠 Modal Logic
function closeModal() {
  document.getElementById("introModal").style.display = "none";
}

window.onload = function () {
  document.getElementById("introModal").style.display = "flex";
};
 //Character Selection
    document.addEventListener('DOMContentLoaded', function () {
      const characters = document.querySelectorAll('.character');

      characters.forEach(char => {
        char.addEventListener('click', function () {
          const room = this.getAttribute('data-room');

          // Redirect to the room page if defined
          if (room) {
            window.location.href = room;
          }
        });
      });
    });
  