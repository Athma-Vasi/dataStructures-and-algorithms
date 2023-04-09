import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function minAmountOfTimeToCollectGarbage(garbage: string[], travel: number[]) {
  // trucksSet is a set of all the trucks that are in the garbage array and lastTruckStopMap is a map of the last stop of each truck
  const [trucksSet, lastTruckStopMap]: [Set<string>, Map<string, number>] =
    garbage.reduce(
      (acc: [Set<string>, Map<string, number>], str: string, idx: number) => {
        str.split("").forEach((char) => {
          acc[0].add(char);
          acc[1].set(char, idx);
        });

        return acc;
      },
      [new Set(), new Map()]
    );

  const trucksArr = Array.from(trucksSet);

  // loop through the trucksArr and for each truck, loop through the garbage array and add the travel time and the time it takes to collect the garbage
  return trucksArr.reduce((totalTime: number, truck: string) => {
    const lastTruckStopIdx = lastTruckStopMap.get(truck) ?? 0;

    garbage.forEach((str: string, idx: number) => {
      // only add the travel time if the truck has not reached the last stop
      if (idx <= lastTruckStopIdx) {
        if (idx !== 0) {
          totalTime += travel[idx - 1];
        }
        // loop through the current string and add the time it takes to collect the garbage
        str.split("").forEach((char: string) => {
          char === truck ? (totalTime += 1) : totalTime;
        });
      }
    });

    return totalTime;
  }, 0);
}

export { minAmountOfTimeToCollectGarbage };

describe("minAmountOfTimeToCollectGarbage", () => {
  it("1. should return the min amount of time to collect all garbage", () => {
    const garbage = ["G", "P", "GP", "GG"];
    const travel = [2, 4, 3];
    const result = 21;
    assertEquals(minAmountOfTimeToCollectGarbage(garbage, travel), result);
  });

  it("2. should return the min amount of time to collect all garbage", () => {
    const garbage = ["MMM", "PGM", "GP"];
    const travel = [3, 10];
    const result = 37;
    assertEquals(minAmountOfTimeToCollectGarbage(garbage, travel), result);
  });
});

/**
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

Return the minimum number of minutes needed to pick up all the garbage.
 */
