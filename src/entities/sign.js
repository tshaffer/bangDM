import { guid } from '../utilities/utils';

export default class Sign {
    constructor(name = "", videoMode = "1920x1080x60p") {
        this.id = guid();
        this.name = name;
        this.videoMode = videoMode;
        this.zoneIds = [];
    }
}
