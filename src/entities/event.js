import { guid } from '../utilities/utils';

export default class Event   {
    constructor(name, type, data) {
        this.id = guid();
        this.name = name;
        this.type = type;
        this.data = data;
    }
}
