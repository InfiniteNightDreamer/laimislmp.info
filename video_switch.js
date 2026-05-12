var current_version = 0;

function videoSwitch(video_ver) {
	current_version = video_ver;
	console.log(video_ver);
	var videoPlayer = document.getElementById("video_container_2");
	var container_source = document.getElementById("container_source");
	const srcMap = {
		0: "VideoWorks/teaser.mp4",
		1: "VideoWorks/teaser_var2.mp4"
	};
	container_source.src = `${srcMap[video_ver]}`;
	videoPlayer.load();
	videoPlayer.play();
}
