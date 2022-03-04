//we need a JavaScript module name youtube-dl

const fs = require('fs')
const youtubedl = require('youtube-dl')
 
const video = youtubedl('https://youtu.be/JrMiSQAGOS4',
  
)
// the download starts.
video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
  })
   
  video.pipe(fs.createWriteStream('myvideo.mp4'))