const nums: ReadonlyArray<number> = [2, 3, 4, 5, 6, 7, 8];
const nums2 : Readonly<Array<number>> = [1, 100, 200, 300];
const nums3 : Readonly<number[]> = [190, 290, 390];

nums.filter((item) => item >= 5); //it allows just methods that don't mutate the original array and instead return new ones