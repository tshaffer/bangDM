import { guid } from '../utilities/utils';

export default class Zone   {
    constructor(name, type, nonInteractive) {
        this.id = guid();
        this.name = name;
        this.type = type;
        this.nonInteractive = nonInteractive;
        this.initialMediaStateId = null;
        this.mediaStateIds = [];
        this.mediaStatesById = {};
    }
}
