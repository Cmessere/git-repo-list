const UtilityFunctions = require("../Utilities/UtilityFunctions.ts");

test("Capitalize works correctly", () => {
    expect(UtilityFunctions.capitalizeString("test")).toBe("Test");
});


test("Create random indexes returns the correct number of elements", () => {
    expect(UtilityFunctions.createRandomIndexes(5)).toHaveLength(5);
    expect(UtilityFunctions.createRandomIndexes(15)).toHaveLength(15);
    expect(UtilityFunctions.createRandomIndexes(25)).toHaveLength(25);
    expect(UtilityFunctions.createRandomIndexes(0)).toHaveLength(0);
    expect(UtilityFunctions.createRandomIndexes(-1)).toHaveLength(0);
    expect(UtilityFunctions.createRandomIndexes(100)).toHaveLength(100);
});


test("cleanInputFromSymbols correctly removes leading and ending spaces", () => {
    expect(UtilityFunctions.cleanInputFromSymbols("   Test")).toStrictEqual(["Test"]);
    expect(UtilityFunctions.cleanInputFromSymbols("Test   ")).toStrictEqual(["Test"]);
    expect(UtilityFunctions.cleanInputFromSymbols("   Test   ")).toStrictEqual(["Test"]);
    expect(UtilityFunctions.cleanInputFromSymbols("   Foo   Bar")).toStrictEqual(["Foo", "Bar"]);
    expect(UtilityFunctions.cleanInputFromSymbols("   Foo   Bar  Fizz ")).toStrictEqual(["Foo", "Bar", "Fizz"]);
    expect(UtilityFunctions.cleanInputFromSymbols("   Foo   Bar  Fizz Buzz ")).toStrictEqual(["Foo", "Bar", "Fizz", "Buzz"]);
});


test("cleanSearchValue returns input in the 'Owner'/'Repo' form", () => {
    expect(UtilityFunctions.cleanSearchValue("Owner/Repo")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner Repo")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("   Owner Repo   ")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner    Repo")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner / Repo ")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner /// Repo")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner  ///   Repo")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner/Repo/Ignored")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner/Repo Ignored")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner/Repo/ Ignored")).toBe("Owner/Repo");
    expect(UtilityFunctions.cleanSearchValue("Owner/Repo  Ignored")).toBe("Owner/Repo");

});
