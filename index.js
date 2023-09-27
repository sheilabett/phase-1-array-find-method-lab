// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(entry => entry.result === "W");
    return winRecord ? winRecord.year : undefined;
  }

  const superBowlRecords = [
  ];

  console.log(superbowlWin(superBowlRecords));