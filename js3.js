function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

  function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  function testNotEqual(val) {
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  function testLogicalAnd(val) {
    if (val<=50 && val>=25) {
        return "Yes";
      }
    return "No";
  }
  testLogicalAnd(10);

  function testLogicalOr(val) {
    if (val>20 || val<10) {
      return "Outside";
    }
    return "Inside";
  }
  testLogicalOr(15);

  function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else  {
      result = "5 or Smaller";
    }
    return result;
  }
  testElse(4);

  function switchOfStuff(val) {
    let answer = "";
   switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
    return answer;
  }
  switchOfStuff(1);