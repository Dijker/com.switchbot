/*jslint node: true */
'use strict';

const Homey = require('homey');
const HubDriver = require('../hub_driver');

class HubAirConDriver extends HubDriver
{
    /**
     * onInit is called when the driver is initialized.
     */
    async onInit()
    {
        super.onInit();
        this.log('HubAirConDriver has been initialized');

        const operateAction = this.homey.flow.getActionCard('operate_aircon');
        operateAction
            .registerRunListener(async (args, state) =>
            {
                this.log("activate_instant_mode");
                return args.device.onCapabilityAll(args);
            });
    }

    /**
     * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
     * This should return an array with the data of devices that are available for pairing.
     */
    async onPairListDevices()
    {
        return this.getHUBDevices('Air Conditioner', true);
    }
}

module.exports = HubAirConDriver;