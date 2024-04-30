import React from 'react'

interface GridProps {
    gap: string
    cols?: string
    rows?: string
    alignItems?: string
    justifyItems?: string
    alignContent?: string
    justifyContent?: string
    children: React.ReactNode
}

export default function Grid({
    gap,
    cols,
    rows,
    alignItems,
    justifyItems,
    alignContent,
    justifyContent,
    children,
}: GridProps) {
    const gridClass = `grid gap-${gap}
                       ${cols ? `grid-cols-${cols}` : ''}
                       ${rows ? `grid-rows-${rows}` : ''}
                       ${alignItems ? `items-${alignItems}` : ''}
                       ${justifyItems ? `justify-items-${justifyItems}` : ''}
                       ${alignContent ? `align-content-${alignContent}` : ''}
                       ${justifyContent ? `justify-content-${justifyContent}` : ''}`

    return <div className={gridClass.trim()}>{children}</div>
}

/**
 * Props:
 * - `gap`: Defines the gap between grid items.
 * - `cols`: Optional. Defines the number of columns in the grid.
 * - `rows`: Optional. Defines the number of rows in the grid.
 * - `alignItems`: Optional. Controls the alignment of items along the block (column) axis.
 * - `justifyItems`: Optional. Controls the alignment of items along the inline (row) axis.
 * - `alignContent`: Optional. Controls the alignment of the grid along the block (column) axis.
 * - `justifyContent`: Optional. Controls the alignment of the grid along the inline (row) axis.
 * - `children`: The elements to be displayed as grid items.
 *
 * Usage:
 *
 * 1. Basic usage with gap and columns:
 *
 * ```tsx
 * <Grid gap="3" cols="2">
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 * </Grid>
 * ```
 *
 * 2. With rows, alignment and justification:
 *
 * ```tsx
 * <Grid gap="3" cols="2" rows="2" alignItems="center" justifyItems="start">
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *     <div>Item 4</div>
 * </Grid>
 * ```
 *
 * 3. With content alignment and justification:
 *
 * ```tsx
 * <Grid gap="3" cols="2" rows="2" alignContent="center" justifyContent="space-between">
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *     <div>Item 4</div>
 * </Grid>
 * ```
 *
 */
