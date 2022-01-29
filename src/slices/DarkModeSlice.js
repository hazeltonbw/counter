const initialState = {
    darkMode: true,
};

export const colorThemeToggle = () => {
    return { type: "darkMode/toggle" };
};

export const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "darkMode/toggle":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};
