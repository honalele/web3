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
	}

	$("#startVideo").click(startVideo).click();
	$("#stopVideo").click(stopVideo);
	$("#snapshot").click(snapshot);
});
