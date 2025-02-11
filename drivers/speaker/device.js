/* jslint node: true */

'use strict';

const HubDevice = require('../hub_device');

class SpeakerHubDevice extends HubDevice
{

    /**
     * onInit is called when the device is initialized.
     */
    async onInit()
    {
        await super.onInit();

        this.registerCapabilityListener('power_on', this.onCapabilityCommand.bind(this, 'turnOn'));
        this.registerCapabilityListener('power_off', this.onCapabilityCommand.bind(this, 'turnOff'));
        this.registerCapabilityListener('volume_up', this.onCapabilityCommand.bind(this, 'volumeAdd'));
        this.registerCapabilityListener('volume_down', this.onCapabilityCommand.bind(this, 'volumeSub'));
        this.registerCapabilityListener('volume_mute', this.onCapabilityCommand.bind(this, 'setMute'));
        this.registerCapabilityListener('play', this.onCapabilityCommand.bind(this, 'Play'));
        this.registerCapabilityListener('pause', this.onCapabilityCommand.bind(this, 'Pause'));
        this.registerCapabilityListener('stop', this.onCapabilityCommand.bind(this, 'Stop'));
        this.registerCapabilityListener('prev', this.onCapabilityCommand.bind(this, 'Previous'));
        this.registerCapabilityListener('next', this.onCapabilityCommand.bind(this, 'Next'));
        this.registerCapabilityListener('rewind', this.onCapabilityCommand.bind(this, 'Rewind'));
        this.registerCapabilityListener('forward', this.onCapabilityCommand.bind(this, 'FastForward'));

        this.setCapabilityValue('volume_mute', false).catch(this.error);

        this.log('SpeakerHubDevice has been initialized');
    }

}

module.exports = SpeakerHubDevice;
