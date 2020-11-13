const inject = (items, sections) => {
    const sortedSections = [...sections].sort((left, right) => left.index - right.index);
    const result = [...items];
    let sectionIndex = sortedSections.length - 1;
    for (let i = result.length - 1; i >= 0; i--) {
        if (sortedSections[sectionIndex].index === i) {
            result.splice(i, 0, sortedSections[sectionIndex].content);
            if (--sectionIndex < 0) {
                break;
            }
        }
    }
    return result;
}
export { inject };
