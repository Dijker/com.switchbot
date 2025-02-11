'use strict';

const HubDriver = require('../hub_driver');

class sceneDriver extends HubDriver
{

    /**
     * onInit is called when the driver is initialized.
     */
    async onInit()
    {
        super.onInit();
        this.log('sceneDriver has been initialized');
    }

    /**
     * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
     * This should return an array with the data of devices that are available for pairing.
     */
     async onPairListDevices({ oAuth2Client })
     {
         return this.getScenes(oAuth2Client);
     }

 }

module.exports = sceneDriver;
