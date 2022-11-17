import './style.css'
import QRCode from 'qrcode'

const canvasQR = document.getElementById('qr-clock');

setInterval(() => {
  QRCode.toCanvas(canvasQR, `dev by MikixIT ${Date()}`)
}, 1000);