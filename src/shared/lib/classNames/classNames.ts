type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([classNames]) => classNames),
    ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: true }, [
    'pdg',
]);
