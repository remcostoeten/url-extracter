import React, { CSSProperties } from 'react'

type FlexProps = {
    dir?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    alignContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'stretch'
    gap?: 1 | 2 | 3 | 4 | string
    className?: string
    style?: CSSProperties & {
        flex?: string
        gap?: string
    }
    children: React.ReactNode
}

const gapMapping = {
    1: '.25rem',
    2: '.5rem',
    3: '.75rem',
    4: '1rem',
}

export default function Flexer({
    dir,
    wrap,
    justify,
    alignItems,
    alignContent,
    gap,
    className,
    style,
    children,
}: FlexProps) {
    const flexStyle = {
        display: 'flex',
        flexDirection: dir === 'col' ? 'column' : dir, // translate 'col' to 'column'
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: alignItems,
        alignContent: alignContent,
        gap: gapMapping[gap],
        flex: '1 1 auto',
        ...style,
    }

    return (
        <div className={className} style={flexStyle as CSSProperties}>
            {children}
        </div>
    )
}
