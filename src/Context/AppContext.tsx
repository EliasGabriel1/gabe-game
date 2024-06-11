import React, { useState, createContext, useContext } from "react";

interface State {
    user: string | null;
}

interface AppContextProps {
    state: State;
    userName: any;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
    login: (user: string) => void;
    logout: () => void;
}

export const AppContext = createContext<AppContextProps>({
    state: { user: null },
    userName: { user: null },
    login: (user: string) => { },
    setUser: () => { },
    logout: () => { },
});

const AuthContext = createContext<any | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

function AppProvider(props: any) {
    const [state, setState] = useState<State>({ user: null });
    const [userName, setUser] = useState<string | null>(null);

    const login = (user: string) => {
        setState((prevState) => ({ ...prevState, user }));
    };

    const logout = () => {
        setState((prevState) => ({ ...prevState, user: null }));
    };

    return (
        <AppContext.Provider value={{ state, login, logout, userName, setUser }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
