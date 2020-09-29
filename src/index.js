exports.min = function min(array) {
    let result;
    if ((array) && (array.length > 0)) {
        result = Math.min.apply(null, array);
    } else {
        result = 0;
    }
    return result;
}

exports.max = function max(array) {
    let result;
    if ((array) && (array.length > 0)) {
        result = Math.max.apply(null, array);
    } else {
        result = 0;
    }
    return result;
}

exports.avg = function avg(array) {

    let result;
    if ((array) && (array.length > 0)) {
        let summary = 0;
        for (i = 0; i < array.length; i++) {
            summary = summary + array[i];
        }
        result = summary / array.length;
    } else {
        result = 0;
    }
    return result;
}
