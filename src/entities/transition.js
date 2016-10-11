import { guid } from '../utilities/utils';

export default class Transition   {
    constructor(name, sourceMediaStateId, eventId, targetMediaStateId) {
        this.id = guid();
        this.name = name;
        this.sourceMediaStateId = sourceMediaStateId;
        this.eventId = eventId;
        this.targetMediaStateId = targetMediaStateId;
    }
}
