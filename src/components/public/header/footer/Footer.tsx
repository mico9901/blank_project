"use client";

import * as styles from "./styles.css";

export type HeaderProps = {
    hidden?: boolean;
}

export default function Footer(props: HeaderProps)
{
    if (props.hidden)
    {
        return (<></>);
    }

    return (
        <div className={ styles.Wrapper }>
            <p>
                푸터
            </p>
        </div>
    );
}