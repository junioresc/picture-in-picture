const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream and pass it into the video element to play
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whoops, error here:', error);
    }
};

button.addEventListener('click', async () => {
    // Disables button when clicked
    button.disabled = true;
    // Start the picture in picture API
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})

selectMediaStream();