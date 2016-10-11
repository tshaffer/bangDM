// Actions
export const NEW_SIGN = 'NEW_SIGN';

export const newSign = (name, mode) => ({
    type: NEW_SIGN,
    payload: {
        name: name,
        videoMode: mode
    }
});


