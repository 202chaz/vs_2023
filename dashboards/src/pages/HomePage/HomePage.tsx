import React, {useState, useEffect, useRef} from 'react';
import { Sidebar } from '../../components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flvjs from 'flv.js';

export default function HomePage() {
  const videoElement = useRef(null);
  let flvPlayer: any;
  const cams = [
    {camName: 'one', path: 'http://localhost:8000/vision/line2.flv'},
    {camName: 'two', path: 'http://localhost:8000/vision/line3.flv'},
    {camName: 'three', path: 'http://localhost:8000/vision/line4.flv'},
    {camName: 'four', path: 'http://localhost:8000/vision/line5.flv'}
  ];
  const [activeCam, setActiveCam] = useState(cams[0].path)

  useEffect(() => {
   if (flvjs.isSupported()) {
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
    let camera: any = cams.find(c => c.camName === cam)
    console.log('Setting path ', camera)
    setActiveCam(camera.path)
  }


  return (
    <Row>
      <Col xs={1} sm={2} md={3}>
        <Sidebar setCam={setCam} />
      </Col>
      <Col>
        <video 
          ref={videoElement}
          autoPlay={true}
          muted={true}
          preload={'none'}
          style={{
            width: '400px',
            height: '400px'
          }}
        ></video>
      </Col>
    </Row>
  )
};
