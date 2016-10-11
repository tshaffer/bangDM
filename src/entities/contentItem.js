import { guid } from '../utilities/utils';

export default class ContentItem  {
    constructor(name, type, path) {
        this.id = guid();
        this.name = name;
        this.type = type;
        this.path = path;
    }
}
