function binarySearch(data) {
    // data should be a SORTED array
    target = prompt("Search for: ");
    // target is what you are trying to find

    lo = 0;
    hi = data.length - 1;
    attempt = 0;

    while(lo <= hi) {
        mid = (lo + hi)/2;
        attempt += 1;

        if(target == data[mid]) {
            alert(target + " found on attempt " + attempt);
            // This is if the target is found
        } else if(hi == lo) {
            alert(target + " not found on attempt " + attempt);
            // This is if the target is not found
        } else if(target < data[mid]) {
            hi = mid - 1;
            // Puts target on the left side from mid and shortens to just the left side
        } else {
            lo = mid + 1;
            // Puts target on the right side from mid and shortens to just the right side
        }
    }
    
}

arr = [
    1,
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    23,
    29
];