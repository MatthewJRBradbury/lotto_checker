export const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  let gasTotal = 0;
  let costTotal = 0;

  // get total gas/cost to calculate if even possible at all.
  for (let i = 0; i < gas.length; i++) {
    gasTotal += gas[i];
    costTotal += cost[i];
  }
  if (gasTotal < costTotal) {
    return -1;
  }

  // Initialize variables for tracking total gas and
  // starting index.
  let currentGas = 0;
  let startingIndex = -1;

  // Iterate over all gas stations in the list.
  for (let i = 0; i < gas.length; i++) {
    // Update current gas level by adding gas and
    // subtracting cost at current station.
    currentGas = currentGas + (gas[i] - cost[i]);
    // If the current gas level is negative, reset it to
    // zero and update the starting index.
    if (currentGas < 0) {
      currentGas = 0;
      startingIndex = i + 1;
    }
  }
  // Return starting index of gas station that allows
  // journey to be completed.
  return startingIndex;
};
