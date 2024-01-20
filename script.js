var videoURL = document.getElementById("urlVideo");
var animationLoading = document.getElementById("animationLoading");
var downloadBtn = document.getElementById("downloadBtn");
var videoWrapper = document.getElementById("videoWrapper");
var titleVideo = document.getElementById("titleVideo");
var btn2 = document.getElementById("btn2");
var notify = document.getElementById("notify");
function downloadVdo() {
  animationLoading.style.display = "block";
  downloadBtn.style.display = "none";
  console.log(videoURL.value);

  var toDownload = fetch(
    `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${videoURL.value}&filename=YT_Video`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
    }
  );
  toDownload
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      animationLoading.style.display = "none";
      videoWrapper.style.display = "block";
      if (data.success) {
        console.log(data.title);
        titleVideo.innerText = data.title;
        console.log("\n");
        console.log(data.links[0].link);
        videoWrapper.insertAdjacentHTML(
          "beforeend",
          `<video id="video" src="${data.links[0].link}"></video> <br> <a href="${data.links[0].link}"><button id="btn2" onclick="download()"><i class="ri-download-2-fill"></i></button></a>`
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function download() {
  notify.style.display = "block";
  setTimeout(() => {
    notify.style.display = "none";
  }, 1700);
}
