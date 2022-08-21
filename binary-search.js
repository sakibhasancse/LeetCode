const binarySearch = (nums, search) => {
  const numberSize = nums.length - 1
  let high = numberSize, low = 0;
  let mid = (low + high) / 2;
  console.log({ mid, high, low })
  while (low <= high) {
    if (nums[mid] === search) {
      console.log("Item found")
      break;
    } else if (nums[mid] < search) {
      console.log("Greater then mid", mid, high, low)
      low = mid + 1
    } else {
      console.log("Less then the mid", mid, high, low)
      high = mid - 1
      mid = low + high / 2
    }
  }
  console.log("Item not found")
  return "sdsds"
}