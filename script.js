document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("myAudio");

  if (audio) {
    // Sự kiện mouseover để phát nhạc khi di chuột vào trang
    document.body.addEventListener("mouseover", function () {
      audio.play().catch(function (error) {
        console.error("Không thể phát nhạc:", error);
      });
    });

    // Dừng nhạc khi chuột ra khỏi trang
    document.body.addEventListener("mouseleave", function () {
      audio.pause();
      audio.currentTime = 0; // Đặt lại thời gian phát về 0
    });
  } else {
    console.error("Không tìm thấy phần tử audio");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const notificationModal = document.getElementById("notificationModal");
  const closeNotification = document.getElementById("closeNotification");

  // Show the modal when the page loads
  notificationModal.classList.add("show");

  // Close the modal when the "Close" button is clicked
  closeNotification.addEventListener("click", function () {
    notificationModal.classList.remove("show");
  });

  // Code for audio playback
  var audio = document.getElementById("myAudio");

  if (audio) {
    document.body.addEventListener("mouseover", function () {
      audio.play().catch(function (error) {
        console.error("Playback failed:", error);
      });
    });
  } else {
    console.error("Audio element not found");
  }
});
