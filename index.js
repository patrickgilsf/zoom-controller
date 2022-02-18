//node HID import
var HID = require('node-hid');

//Device in for for ymd09
var VENDOR_ID = 0x594D; //22861
var PRODUCT_ID = 0x4409; //17417
var USAGE_PAGE = 0xFF60; //65376
var USAGE = 0x61; //97
//var path = 'IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/XHC1@14/XHC1@14000000/HS03@14300000/USB2.0 Hub@14300000/AppleUSB20Hub@14300000/AppleUSB20HubPort@14310000/SW4 USB PLUS-2P HUB@14310000/AppleUSB20Hub@14310000/AppleUSB20HubPort@14312000/SW4 USB PLUS-4P HUB@14312000/AppleUSB20Hub@14312000/AppleUSB20HubPort@14312200/USB2.0 Hub@14312200/AppleUSB20Hub@14312200/AppleUSB20HubPort@14312240/YMD09@14312240/IOUSBHostInterface@1/AppleUserUSBHostHIDDevice';
var deviceList = HID.devices();
//console.log(deviceList);
var path = ''; 
deviceList.forEach(item => {
  if (item.usagePage == USAGE_PAGE) {
    path = item.path;
  }
});
var device = new HID.HID(path);

const muteMic = () => {
    device.write([0x00, 0x01, 0x01, 0x01, 0x01, 0x01])
};
const unmuteMic = () => {
    device.write([0x00, 0x02, 0x02, 0x02, 0x02, 0x02])
};
const muteVid = () => {
  device.write([0x00, 0x03, 0x03, 0x03, 0x03, 0x03])
};
const unmuteVid = () => {
  device.write([0x00, 0x04, 0x04, 0x04, 0x04, 0x04])
};


  muteMic()
  // unmuteMic()
  muteVid()
  // unmuteVid()





//Feedback not working
// device.on('error', (err) => {
//   console.log(err);
//   device.close();
// });

// device.on('data', (data) => {
//   if (data) {
//     console.log(data)
//   }
// })

//need feedback for this to work
// var micMute = false;
// var vidMute = false;
// const toggleMicMute = () => {
//   if (micMute) {
//     unmuteMic();
//   } else {
//     muteMic();
//   }
// };

// const toggleVidMute = () => {
//   if (vidMute) {
//     unmuteVid();
//   } else {
//     muteVid();
//   }
// }

// toggleMicMute();
// toggleVidMute();



