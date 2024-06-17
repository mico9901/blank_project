"use client";

import * as styles from "./styles.css";

export type HeaderProps = {
    hidden?: boolean;
}

export default function Header(props: HeaderProps)
{
    if (props.hidden)
    {
        return (<></>);
    }

    return (
        <div className={ styles.Wrapper }>
            <h1 className={ styles.HeaderTitle }>
                헤더
            </h1>
        </div>
    );
}