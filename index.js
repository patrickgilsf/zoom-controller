var HID = require('node-hid');





var VENDOR_ID = 0x594D; //22861
var PRODUCT_ID = 0x4409; //17417
var USAGE_PAGE = 0xFF60; //65376
var usagePageNumber = 65376;
var USAGE = 0x61; //97
var deviceList = HID.devices();
var path = '';
deviceList.forEach(device => {
    if (device.usagePage == usagePageNumber) {
        path = device.path.toString();
    }
})
console.log({path: path});

 var device = new HID.HID(path);

muteMic = () => {
    device.write([0x00, 0x01, 0x01, 0x01, 0x01, 0x01])
}

unmuteMic = () => {
    device.write([0x00, 0x02, 0x02, 0x02, 0x02, 0x02])
}

// muteMic();
unmuteMic();



//console logs
//console.log(deviceList);
//console.log('devices:', HID.devices());
//console.log(device.getFeatureReport());
//console.log(device)
//console.log(VENDOR_ID,PRODUCT_ID,USAGE_PAGE,USAGE);
//console.log(process.argv);