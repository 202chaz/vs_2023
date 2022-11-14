// const ffmpeg = require('ffmpeg');
const { exec } = require("child_process");
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'videos');

const getFiles = () => {
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file, i) {
        // Stream each file to media server
        console.log(file); 
        const data = fs.readFileSync(`./videos/${file}`);
        try {
          var process = new ffmpeg(data);
          process.then(function (video) {
            video.addCommand('-re', '-stream_loop', '-1', '-i', 'file', '-c', 'copy', '-f', 'flv', `rtmp://localhost:1935/vision/${file}`)
            video
          })
        } catch (e) {
          console.log(e.code);
          console.log(e.msg);
        }


        // this (data) is your input file, that you pipe into ffmepg
        // const data = fs.readFileSync(`./videos/${file}`);
        // const videoPath = `./videos/${file}`
        // const ffmpeg = exec(`ffmpeg -re -stream_loop -1 -i ${data} -c copy -f flv rtmp://localhost:1935/vision/${i}`)

        // ffmpeg.on("error", (err) => {
        //   console.log("FFMEPG-ERROR", err)
        // });
        
        // ffmpeg.on("close", (code) => {
        //     console.log("ffmepg exited", code);
        // });
        
        // ffmpeg.stdin.on("error", (err) => {
        //     if (err.code === "EPIPE") {
        
        //         // ignore EPIPE error
        //         // throws sometimes a EPIPE error, ignore as long ffmpeg exit with code 0
        
        //     } else {
        //         console.log("ffmepg stdin error", err);
        //     }
        // });

        // ffmpeg.stdin.write(data);
    });
  });
}

getFiles()

