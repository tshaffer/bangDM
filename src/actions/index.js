// Actions
export const NEW_SIGN = 'NEW_SIGN';
export const NEW_ZONE = 'NEW_ZONE';

export const newSign = (name, mode) => ({
    type: NEW_SIGN,
    payload: {
        name: name,
        videoMode: mode
    }
});

export const newZone = (name, type, nonInteractive) => ({
    type: NEW_ZONE,
    payload: {
        name,
        type,
        nonInteractive
    }
});



