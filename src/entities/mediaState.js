import { guid } from '../utilities/utils';

export default class MediaState  {
    constructor(name, contentItemId) {
        this.id = guid();
        this.name = name;
        this.contentItemId = contentItemId;
        this.transitionInIds = [];
        this.transitionOutIds = [];
    }
}
