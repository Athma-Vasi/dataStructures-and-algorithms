import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function avgSalaryExclMinAndMaxSalary(salary: number[]) {
  const max = Math.max(...salary);
  const min = Math.min(...salary);
  const filteredArr = salary.filter((amt) => amt !== max && amt !== min);
  const len = filteredArr.length;
  const sum = filteredArr.reduce((total, amt) => (total += amt), 0);

  return sum / len;
}

export { avgSalaryExclMinAndMaxSalary };

const salary = [8000, 9000, 2000, 3000, 6000, 1000];
console.log(avgSalaryExclMinAndMaxSalary(salary));

describe("1491. Average Salary Excluding the Minimum and Maximum Salary", () => {
  it("1. should return the average salary excluding the minimum and maximum salary", () => {
    const salary = [4000, 3000, 1000, 2000];
    assertEquals(avgSalaryExclMinAndMaxSalary(salary), 2500);
  });

  it("2. should return the average salary excluding the minimum and maximum salary", () => {
    const salary = [1000, 2000, 3000];
    assertEquals(avgSalaryExclMinAndMaxSalary(salary), 2000);
  });

  it("3. should return the average salary excluding the minimum and maximum salary", () => {
    const salary = [6000, 5000, 4000, 3000, 2000, 1000];
    assertEquals(avgSalaryExclMinAndMaxSalary(salary), 3500);
  });

  it("4. should return the average salary excluding the minimum and maximum salary", () => {
    const salary = [8000, 9000, 2000, 3000, 6000, 1000];
    assertEquals(avgSalaryExclMinAndMaxSalary(salary), 4750);
  });
});
