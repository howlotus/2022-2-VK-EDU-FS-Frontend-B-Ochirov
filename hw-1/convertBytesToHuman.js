/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

//export default
function convertBytesToHuman(bytes) {
    if (typeof bytes != "number" || !Number.isInteger(bytes) || bytes < 0) {
        return false
    }

    const formats = [" B", " KB", " MB", " GB", " TB"]

    let count = 0
    while (Math.trunc(bytes / 1024)) {
        bytes = bytes / 1024
        count++
    }

    if (count > 4) {
        return false
    }
    else {
        if (Number.isInteger(bytes)) {
            return bytes + formats[count]
        }
        else {
            return bytes.toFixed(2) + formats[count]
        }
    }
}