function cycle(a_list, total) {
    if (total <= a_list.length) {
        return a_list[total]
    } else {
        let index = parseInt(total % a_list.length)
        return a_list[index]
    }
}