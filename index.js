var HID = require('node-hid');




var VENDOR_ID = 0x594D; //22861
var PRODUCT_ID = 0x4409; //17417
var USAGE_PAGE = 0xFF60; //65376
var USAGE = 0x61; //97
var path = 'IOService:/AppleARMPE/arm-io@10F00000/AppleT810xIO/usb-drd1@2280000/AppleT8103USBXHCI@01000000/usb-drd1-port-hs@01100000/YMD09@01100000/IOUSBHostInterface@1/AppleUserUSBHostHIDDevice';
var deviceList = HID.devices();
var device = new HID.HID(path);
    

//logs HID devices




// device.sendFeatureReport([0x01, 'c', 0, 0xff,0x33,0x00, 70,0, 0]);



muteMic = () => {
    device.write([0x00, 0x01, 0x01, 0x01, 0x01, 0x01])
}

unmuteMic = () => {
    device.write([0x00, 0x02, 0x02, 0x02, 0x02, 0x02])
}

//muteMic();
unmuteMic();



//console logs
//console.log(deviceList);
//console.log('devices:', HID.devices());
//console.log(device.getFeatureReport());
//console.log(device)
//console.log(VENDOR_ID,PRODUCT_ID,USAGE_PAGE,USAGE);
//console.log(process.argv);