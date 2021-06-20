import * as React from 'react';
import {Global, useTheme} from "@emotion/react";

declare module '@emotion/react' {
    export interface Theme {
        layout: {
            background: string;
        };
    }
}

export const MainHoC: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const theme = useTheme();

    return (
        <div>
            <Global
                styles={{
                    body: {
                        background: theme.layout.background,
                        fontFamily: "'Nunito', sans-serif",
                    },
                }}
            />
            {children}
        </div>
    )
}