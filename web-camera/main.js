$(function () {
	var myStream;
	function startVideo() {
		// Get the user media
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then(function (stream) {
				var $video = $("#myVideo");
				$video.attr("src", URL.createObjectURL(stream));
				myStream = stream;
			})
			.catch(function (error) {
				console.log("カメラの映像を取得できませんでした：", error);
			});
	}

	function stopVideo() {
		if (!myStream) {
			return;
		}
		myStream.getVideoTracks().forEach(function (track) {
			track.stop();
		});
		myStream = null;
	}

	function snapShot() {
		if (!myStream) {
			return;
		}
		var $div = $(`
        <div class = "snapshot">
        <canvas/>
        <a class="btn btn-default">
        <span class="glyphicon glyphicon-download-alt"></span>
        </a>
        </div>
        `);
		$(".preview").append($div);
		var video = document.getElementById("myVideo");
		var canvas = $div.find("canvas")[0];
		var context = canvas.getContext("2d");
	}

	$("#startVideo").click(startVideo).click();
	$("#stopVideo").click(stopVideo);
	$("#snapshot").click(snapShot);
});
