/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let totalTime = 0;
    let n = tickets.length;
    let i = 0;
    while (tickets[k] != 0) {
        if (tickets[i % n] == 0) {
            //If someone needs no tickets we skip that person
            i++;
            continue;
        }

        tickets[i % n]--;
        i++;
        totalTime++;
    }
    return totalTime;
};
