export const getMajorName = (majorsList, majorId) => {
    const major = majorsList?.find(m => m.id == majorId);
    return major ? major.name : "";
}