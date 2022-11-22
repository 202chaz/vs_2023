import React, {useState, useEffect, useRef} from 'react';
import { Sidebar } from '../../components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flvjs from 'flv.js';
import io from "socket.io-client";
const socket = io('http://localhost:1337');

export default function HomePage() {
  const videoElement = useRef(null);
  let flvPlayer: any;
  // const cams = [
  //   {camName: 'one', path: 'http://localhost:8000/vision/line2.flv'},
  //   {camName: 'two', path: 'http://localhost:8000/vision/line3.flv'},
  //   {camName: 'three', path: 'http://localhost:8000/vision/line4.flv'},
  //   {camName: 'four', path: 'http://localhost:8000/vision/line5.flv'}
  // ];
  const [activeCam, setActiveCam] = useState<string>()
  const [socketId, setSocketId] = useState(null)
  const [lines, setLines] = useState<string[]>([])
  const [lineData, setLineData] = useState(null)
  
  useEffect(() => {
    
    socket.on("connect", () => {
      console.log(socket.id)
    });

  socket.on(`new-cam`, (data) => {
    buildMenu(data)
    setLineData(data)
  })

  }, [socketId, lineData])

  const buildMenu = (data) => {
    if (!data) return
    let apps = Object.keys(data)
    for (let app of apps) {
      let stream = Object.keys(data[app])
      setLines(stream)
    }
  }

  useEffect(() => {
    if (flvjs.isSupported() && activeCam) {
      console.log('Loading Video')
      let video = videoElement.current!;
      flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: activeCam,
        isLive: true
      });
      flvPlayer.attachMediaElement(video);
      flvPlayer.load();
      setTimeout(() => {
        flvPlayer.play();
      }, 500)
     }
  }, [activeCam])

  
  const setCam = (cam: any) => {
    let videoURI = `http://localhost:8000/vision/${cam}.flv`;
    setActiveCam(videoURI)
  }

  return (
    <Row>
      <Col xs={1} sm={2} md={3}>
        <Sidebar setCam={setCam} lines={lines} />
      </Col>
      <Col md={5}>
        <video 
          ref={videoElement}
          autoPlay={true}
          muted={true}
          preload={'none'}
          style={{
            width: '100%',
            marginTop: '10px'
          }}
        ></video>
      </Col>
    </Row>
  )
};
